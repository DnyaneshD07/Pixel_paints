const fs = require('fs');
const path = require('path');

const FRONTEND_DIR = path.join(__dirname, 'Frontend');
const NEXT_APP_DIR = path.join(__dirname, 'web-app');
const APP_DIR = path.join(NEXT_APP_DIR, 'src', 'app');
const COMPONENTS_DIR = path.join(NEXT_APP_DIR, 'src', 'components');

if (!fs.existsSync(COMPONENTS_DIR)) {
    fs.mkdirSync(COMPONENTS_DIR, { recursive: true });
}

function toReactHTML(htmlStr) {
    return htmlStr
        .replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}')
        .replace(/class="/g, 'className="')
        .replace(/for="/g, 'htmlFor="')
        // Close empty tags like img, input, br, hr
        .replace(/<img(.*?)(\/?)>/g, (match, p1) => `<img${p1}/>`)
        .replace(/<input(.*?)(\/?)>/g, (match, p1) => `<input${p1}/>`)
        .replace(/<br(.*?)(\/?)>/g, (match, p1) => `<br${p1}/>`)
        .replace(/<hr(.*?)(\/?)>/g, (match, p1) => `<hr${p1}/>`)
        // Fix weird />/> caused by already closed tags being closed again
        .replace(/\/\>\/\>/g, '/>')
        .replace(/style="(.*?)"/g, (match, styles) => {
            const reactStyle = styles.split(';')
                .filter(s => s.trim())
                .reduce((acc, curr) => {
                    const [key, value] = curr.split(':');
                    if(key && value) {
                        const camelKey = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                        acc[camelKey] = value.trim();
                    }
                    return acc;
                }, {});
            return `style={${JSON.stringify(reactStyle)}}`;
        });
}

function extractSection(html, tagStart, tagEnd) {
    let startIdx = html.indexOf(tagStart);
    if (startIdx === -1 && tagStart === '<nav') {
        startIdx = html.indexOf('<header');
        tagEnd = '</header>';
    }
    if (startIdx === -1) return null;
    let temp = html.slice(startIdx);
    let endIdx = temp.indexOf(tagEnd);
    if (endIdx === -1) return null;
    return temp.slice(0, endIdx + tagEnd.length);
}

function extractMain(html) {
    let startTag = '<main';
    let endTag = '</main>';
    let startIdx = html.indexOf(startTag);
    if (startIdx === -1) return null;
    let partial = html.slice(startIdx);
    
    // Find the end of the opening tag
    let openingEnd = partial.indexOf('>');
    let temp = partial.slice(openingEnd + 1);
    
    let endIdx = temp.indexOf(endTag);
    return temp.slice(0, endIdx);
}

const map = {
    'home_atelier_pigment': 'page.tsx',
    'about_atelier_pigment': 'about/page.tsx',
    'contact_atelier_pigment': 'contact/page.tsx',
    'products_atelier_pigment': 'products/page.tsx',
    'product_detail_atelier_pigment': 'products/[slug]/page.tsx',
    'dealers_atelier_pigment': 'dealers/page.tsx'
};

let navExtracted = false;
let footerExtracted = false;
let cssExtracted = false;

// We process files
const folders = fs.readdirSync(FRONTEND_DIR);

for (const folder of folders) {
    if (!map[folder]) continue;
    
    const filePath = path.join(FRONTEND_DIR, folder, 'code.html');
    if (!fs.existsSync(filePath)) continue;

    const html = fs.readFileSync(filePath, 'utf-8');
    
    // Extract Global Nav & Footer
    if (!navExtracted) {
        let nav = extractSection(html, '<nav', '</nav>');
        if (nav) {
            nav = toReactHTML(nav);
            nav = nav.replace(/<a /g, '<Link ')
                     .replace(/<\/a>/g, '</Link>')
                     .replace(/href="#"/g, 'href="/"');
            fs.writeFileSync(path.join(COMPONENTS_DIR, 'GlobalNav.tsx'), 
                `// @ts-nocheck\nimport Link from 'next/link';\n\nexport default function GlobalNav() {\n  return (\n    ${nav}\n  );\n}\n`);
            navExtracted = true;
        }
    }
    
    if (!footerExtracted) {
        let footer = extractSection(html, '<footer', '</footer>');
        if (footer) {
            footer = toReactHTML(footer);
            fs.writeFileSync(path.join(COMPONENTS_DIR, 'Footer.tsx'), 
                `// @ts-nocheck\nimport Link from 'next/link';\n\nexport default function Footer() {\n  return (\n    ${footer}\n  );\n}\n`);
            footerExtracted = true;
        }
    }

    if (!cssExtracted) {
        const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
        if (styleMatch) {
            fs.appendFileSync(path.join(APP_DIR, 'globals.css'), "\n" + styleMatch[1]);
            cssExtracted = true;
        }
    }

    let mainContent = extractMain(html);
    if (!mainContent) {
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
        if (bodyMatch) {
            mainContent = bodyMatch[1]
                .replace(extractSection(html, '<nav', '</nav>') || '', '')
                .replace(extractSection(html, '<footer', '</footer>') || '', '');
        }
    }
    
    if (mainContent) {
        let componentHTML = toReactHTML(mainContent);
        const routePath = map[folder];
        
        const compString = `// @ts-nocheck\nexport default function Page() {\n  return (\n    <main>\n${componentHTML}\n    </main>\n  );\n}\n`;
        
        const fullDestPath = path.join(APP_DIR, routePath);
        fs.mkdirSync(path.dirname(fullDestPath), { recursive: true });
        fs.writeFileSync(fullDestPath, compString);
    }
}

// Modify Layout to include Nav and Footer
const layoutPath = path.join(APP_DIR, 'layout.tsx');
if (fs.existsSync(layoutPath)) {
    let layout = fs.readFileSync(layoutPath, 'utf-8');
    layout = layout.replace('export default function RootLayout', 
`import GlobalNav from '@/components/GlobalNav';
import Footer from '@/components/Footer';

export default function RootLayout`);
    layout = layout.replace('{children}', `<GlobalNav />\n        {children}\n        <Footer />`);
    // Add fonts class
    layout = layout.replace('className={`', 'className={`bg-[#fafaf5] text-[#1a1c19] ');
    
    // Try to load google fonts
    layout = `import { Newsreader, Manrope } from 'next/font/google';\n` + layout;
    layout = layout.replace('const geistSans', 'const newsreader = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-newsreader" });\nconst manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });\nconst geistSans');
    
    fs.writeFileSync(layoutPath, layout);
}

// Write a custom tailwind config based on the html contents
const twConfigContent = `import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-fixed": "#ffdbcd",
        "inverse-surface": "#2f312e",
        "on-tertiary-fixed": "#161e00",
        "on-surface": "#1a1c19",
        "on-primary-fixed-variant": "#3c475d",
        "on-secondary-fixed": "#360f00",
        "surface-container-low": "#f4f4ef",
        "on-tertiary": "#ffffff",
        "primary-container": "#1b263b",
        "error": "#ba1a1a",
        "on-secondary": "#ffffff",
        "tertiary-fixed-dim": "#bbcf7c",
        "inverse-on-surface": "#f1f1ec",
        "surface-container": "#eeeee9",
        "inverse-primary": "#bbc6e2",
        "secondary-container": "#fe9e72",
        "error-container": "#ffdad6",
        "surface-dim": "#dadad5",
        "surface-bright": "#fafaf5",
        "outline": "#75777d",
        "on-tertiary-container": "#829549",
        "primary-fixed": "#d7e2ff",
        "tertiary": "#0e1400",
        "surface": "#fafaf5",
        "on-error-container": "#93000a",
        "outline-variant": "#c5c6cd",
        "surface-tint": "#545e76",
        "tertiary-container": "#202a00",
        "on-secondary-fixed-variant": "#76320f",
        "primary": "#051125",
        "on-background": "#1a1c19",
        "surface-container-high": "#e8e8e3",
        "on-error": "#ffffff",
        "on-secondary-container": "#773310",
        "primary-fixed-dim": "#bbc6e2",
        "secondary-fixed-dim": "#ffb596",
        "tertiary-fixed": "#d7ec95",
        "surface-container-highest": "#e3e3de",
        "on-tertiary-fixed-variant": "#3d4c05",
        "secondary": "#944925",
        "background": "#fafaf5",
        "on-primary-container": "#828da7",
        "on-primary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "on-surface-variant": "#45474d",
        "surface-variant": "#e3e3de",
        "on-primary-fixed": "#101b30"
      },
      fontFamily: {
        headline: ['var(--font-newsreader)', 'serif'],
        body: ['var(--font-manrope)', 'sans-serif'],
        label: ['var(--font-manrope)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
`;

fs.writeFileSync(path.join(NEXT_APP_DIR, 'tailwind.config.ts'), twConfigContent);

console.log("Migration complete!");
