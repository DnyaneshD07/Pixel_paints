// @ts-nocheck
export default function Page() {
  return (
    <main>

{/* Hero Section / Title */}
<section className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
<div className="max-w-2xl">
<span className="font-label text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Our Collections</span>
<h1 className="font-headline text-6xl md:text-7xl text-primary leading-none tracking-tight">Pigments for the <br/><i className="italic">Modern Interior</i>.</h1>
</div>
<p className="font-body text-on-surface-variant max-w-sm text-lg leading-relaxed mb-2">
                Curated finishes that respond to light. Each batch is hand-mixed to ensure architectural depth and tactile quality.
            </p>
</section>
{/* Category Filter Tabs */}
<section className="mb-16 border-b border-outline-variant/20">
<div className="flex flex-wrap gap-12 pb-6">
<button className="font-headline text-2xl text-primary editorial-underline cursor-pointer">Interior</button>
<button className="font-headline text-2xl text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Exterior</button>
<button className="font-headline text-2xl text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Industrial</button>
<button className="font-headline text-2xl text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Wood Coatings</button>
</div>
</section>
<div className="flex flex-col lg:flex-row gap-20">
{/* Sidebar Filter */}
<aside className="w-full lg:w-64 space-y-12 shrink-0">
<div>
<h3 className="font-label text-xs font-bold tracking-widest uppercase text-primary mb-6">Finishes</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded-none border-outline text-secondary focus:ring-secondary" type="checkbox"/>
<span className="text-sm font-body text-on-surface-variant group-hover:text-primary transition-colors">Matte Velvet</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded-none border-outline text-secondary focus:ring-secondary" type="checkbox"/>
<span className="text-sm font-body text-on-surface-variant group-hover:text-primary transition-colors">Soft Satin</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded-none border-outline text-secondary focus:ring-secondary" type="checkbox"/>
<span className="text-sm font-body text-on-surface-variant group-hover:text-primary transition-colors">High Gloss Luxury</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded-none border-outline text-secondary focus:ring-secondary" type="checkbox"/>
<span className="text-sm font-body text-on-surface-variant group-hover:text-primary transition-colors">Chalk Mineral</span>
</label>
</div>
</div>
<div>
<h3 className="font-label text-xs font-bold tracking-widest uppercase text-primary mb-6">Tone Range</h3>
<div className="grid grid-cols-4 gap-2">
<div className="h-10 w-full bg-[#f4f4ef] hover:scale-110 transition-transform cursor-pointer shadow-sm"></div>
<div className="h-10 w-full bg-[#e3e3de] hover:scale-110 transition-transform cursor-pointer shadow-sm"></div>
<div className="h-10 w-full bg-[#d7e2ff] hover:scale-110 transition-transform cursor-pointer shadow-sm"></div>
<div className="h-10 w-full bg-[#bbc6e2] hover:scale-110 transition-transform cursor-pointer shadow-sm"></div>
<div className="h-10 w-full bg-[#944925] hover:scale-110 transition-transform cursor-pointer shadow-sm"></div>
<div className="h-10 w-full bg-[#3c475d] hover:scale-110 transition-transform cursor-pointer shadow-sm"></div>
<div className="h-10 w-full bg-[#1b263b] hover:scale-110 transition-transform cursor-pointer shadow-sm"></div>
<div className="h-10 w-full bg-[#051125] hover:scale-110 transition-transform cursor-pointer shadow-sm"></div>
</div>
</div>
<div className="p-8 bg-surface-container-low">
<h4 className="font-headline text-xl text-primary mb-4 italic">Bespoke Color Matching</h4>
<p className="text-sm text-on-surface-variant leading-relaxed mb-6">Can't find the exact shade? Our laboratory offers custom pigment synthesis for large-scale projects.</p>
<button className="text-xs font-bold tracking-widest uppercase text-primary border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-all">Enquire Now</button>
</div>
</aside>
{/* Product Grid */}
<div className="flex-1">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
{/* Product Card 1 */}
<article className="group">
<div className="relative overflow-hidden aspect-[4/5] bg-surface-container mb-8">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close up of a luxury designer paint can with terracotta pigment drips on a clean architectural white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFsPst6OrUCZkOWgJFY_X-P7Il3Qa_1pZ9jAT-6ELrHm9uqAZoYdgpZu8UYb6pH01FwwkP7Vkc5mSFeqxC2g99bDbomoNJAk2YAb0fqPaPEg7w94D3xHgYWwNzkeJAVDguSFvMcBp6Mfc9W1rGTC7T8mnXKVb6agBjuNl2juNXDAghJuizzYww6uNzS7dBy5Oh1-1LvTxiClb7ziIQalRf8abbZfmpsHiVcSYOwIXxyxNaPH80g9-7ueUMm93Ms26WQKgD-pVMNw"/>
<div className="absolute top-6 left-6">
<span className="bg-primary/90 backdrop-blur-md text-[#fafaf5] px-4 py-1 text-[10px] font-bold tracking-widest uppercase">Signature Collection</span>
</div>
</div>
<div className="space-y-6">
<div className="flex justify-between items-start">
<div>
<h3 className="font-headline text-3xl text-primary mb-1">Canyon Clay 04</h3>
<p className="font-body text-on-surface-variant">Deep earth pigment with velvet matte finish</p>
</div>
<span className="font-headline text-2xl text-secondary">$124.00</span>
</div>
<div className="grid grid-cols-3 gap-4 py-6 border-y border-outline-variant/10">
<div className="space-y-1">
<span className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Coverage</span>
<span className="block text-sm font-medium">12-14 m²/L</span>
</div>
<div className="space-y-1">
<span className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Finish</span>
<span className="block text-sm font-medium">Dead Matte</span>
</div>
<div className="space-y-1">
<span className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Washability</span>
<span className="block text-sm font-medium">Class 1</span>
</div>
</div>
<div className="flex gap-4 pt-2">
<button className="flex-1 bg-primary text-on-primary py-4 font-bold tracking-widest uppercase text-xs hover:bg-primary-container transition-colors active:scale-[0.98]">View Details</button>
<button className="p-4 border border-outline/20 hover:bg-surface-container-high transition-colors group/btn">
<span className="material-symbols-outlined text-primary group-hover/btn:scale-110 transition-transform">download</span>
</button>
</div>
</div>
</article>
{/* Product Card 2 */}
<article className="group">
<div className="relative overflow-hidden aspect-[4/5] bg-surface-container mb-8">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Interior architectural scene with soft morning light hitting a sage green painted wall with subtle texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuOWfkoIW8nR1gACj3wJSTBwmYIIWKdku5-ooEkiN6mpVd8LA029noEPh3SKqFGntJFl5qPQjiR8WoVQrm4YIp5bEYc0P80jMeUq1D5fYSU4Tz3nkjetoA55zBibxvxNHGac46hteXeA9NBZpwIsjkpxRQWu3ttm2z5nJ4QGg9svbp2wvGCOQwPKSOnAN2QLR0_Nhg7C0jyp1IRgxCryiAxHwORS7kCXH5EfIIJSVOpdmj6hLzFNq9limp4U0MhwK4vMB7o-OFeQ"/>
<div className="absolute top-6 left-6">
<span className="bg-primary/90 backdrop-blur-md text-[#fafaf5] px-4 py-1 text-[10px] font-bold tracking-widest uppercase">Sustainably Sourced</span>
</div>
</div>
<div className="space-y-6">
<div className="flex justify-between items-start">
<div>
<h3 className="font-headline text-3xl text-primary mb-1">Morning Mist 11</h3>
<p className="font-body text-on-surface-variant">Cool ethereal sage with satin reflection</p>
</div>
<span className="font-headline text-2xl text-secondary">$118.00</span>
</div>
<div className="grid grid-cols-3 gap-4 py-6 border-y border-outline-variant/10">
<div className="space-y-1">
<span className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Coverage</span>
<span className="block text-sm font-medium">10-12 m²/L</span>
</div>
<div className="space-y-1">
<span className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Finish</span>
<span className="block text-sm font-medium">Eggshell</span>
</div>
<div className="space-y-1">
<span className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Washability</span>
<span className="block text-sm font-medium">Class 2</span>
</div>
</div>
<div className="flex gap-4 pt-2">
<button className="flex-1 bg-primary text-on-primary py-4 font-bold tracking-widest uppercase text-xs hover:bg-primary-container transition-colors active:scale-[0.98]">View Details</button>
<button className="p-4 border border-outline/20 hover:bg-surface-container-high transition-colors group/btn">
<span className="material-symbols-outlined text-primary group-hover/btn:scale-110 transition-transform">download</span>
</button>
</div>
</div>
</article>
{/* Product Card 3 */}
<article className="group">
<div className="relative overflow-hidden aspect-[4/5] bg-surface-container mb-8">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Abstract art detail of deep navy thick paint texture showing brush strokes and light highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRAJJaHtecWSJs4z7Pju7H6ct1nCTKlh-gceEkH69HUAU9Txuosy-J0Q7kAKroM6VsOsR4wwhqUaWzYwwEJcVuEeKXnd_GaG9Q3DEv_2rqqyaYTspQJWNMBJk8jIdz_EwBVxBcOmQwKp36g9nUfnpttMqJJ3pzZoerB2wmFwr8xzZ-6rj_Ruex-hOhoBjlXLWd-CEDBB13pymlZvKsuRhxL5P3-F2AmacSELeTLpI3xlqOuUQH9wc6WYLv4_ZwXQ-8pkcAZtJNTA"/>
</div>
<div className="space-y-6">
<div className="flex justify-between items-start">
<div>
<h3 className="font-headline text-3xl text-primary mb-1">Midnight Noir</h3>
<p className="font-body text-on-surface-variant">Deepest navy pigment, nearly black in low light</p>
</div>
<span className="font-headline text-2xl text-secondary">$132.00</span>
</div>
<div className="grid grid-cols-3 gap-4 py-6 border-y border-outline-variant/10">
<div className="space-y-1">
<span className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Coverage</span>
<span className="block text-sm font-medium">14-16 m²/L</span>
</div>
<div className="space-y-1">
<span className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Finish</span>
<span className="block text-sm font-medium">Matte Luxe</span>
</div>
<div className="space-y-1">
<span className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Washability</span>
<span className="block text-sm font-medium">Class 1</span>
</div>
</div>
<div className="flex gap-4 pt-2">
<button className="flex-1 bg-primary text-on-primary py-4 font-bold tracking-widest uppercase text-xs hover:bg-primary-container transition-colors active:scale-[0.98]">View Details</button>
<button className="p-4 border border-outline/20 hover:bg-surface-container-high transition-colors group/btn">
<span className="material-symbols-outlined text-primary group-hover/btn:scale-110 transition-transform">download</span>
</button>
</div>
</div>
</article>
{/* Product Card 4 */}
<article className="group">
<div className="relative overflow-hidden aspect-[4/5] bg-surface-container mb-8">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Modernist room with large window casting shadows over a minimalist white wall painted with high-quality pigment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLOwyh7rrTB7BqMDFtA_7f6hvtc6uKXY6bqcHPKWCJ1X64C8dgou08ECaNL5gPClVX7-Y9w0dwLUoLzQRTfswc6sOkJGCn-eJUSgCBpwIMqqObhya1BSCMGTK8AJLMQqpdOc70zHl-6ZY1c51VUY0WrpT7uHjXcuuXAqRtmmDHdH0_vFmeaP5e_Iu8nqrAJ_Zp609l1OUoL8r_bIoM3iZwgzCRFfggFhKM3p-P47oe5vyAO4aW5WxsZ8MMHWnXhvrtjZYd4GjNhg"/>
</div>
<div className="space-y-6">
<div className="flex justify-between items-start">
<div>
<h3 className="font-headline text-3xl text-primary mb-1">Gallery White 01</h3>
<p className="font-body text-on-surface-variant">The purest white, optimized for natural light</p>
</div>
<span className="font-headline text-2xl text-secondary">$98.00</span>
</div>
<div className="grid grid-cols-3 gap-4 py-6 border-y border-outline-variant/10">
<div className="space-y-1">
<span className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Coverage</span>
<span className="block text-sm font-medium">15-18 m²/L</span>
</div>
<div className="space-y-1">
<span className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Finish</span>
<span className="block text-sm font-medium">Silk Matte</span>
</div>
<div className="space-y-1">
<span className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Washability</span>
<span className="block text-sm font-medium">Class 1</span>
</div>
</div>
<div className="flex gap-4 pt-2">
<button className="flex-1 bg-primary text-on-primary py-4 font-bold tracking-widest uppercase text-xs hover:bg-primary-container transition-colors active:scale-[0.98]">View Details</button>
<button className="p-4 border border-outline/20 hover:bg-surface-container-high transition-colors group/btn">
<span className="material-symbols-outlined text-primary group-hover/btn:scale-110 transition-transform">download</span>
</button>
</div>
</div>
</article>
</div>
{/* Pagination */}
<div className="mt-32 flex justify-center items-center gap-8 border-t border-outline-variant/10 pt-16">
<button className="text-on-surface-variant opacity-40 cursor-not-allowed">
<span className="material-symbols-outlined">west</span>
</button>
<div className="flex gap-10">
<span className="font-headline text-xl text-primary underline underline-offset-8 decoration-secondary decoration-2">01</span>
<span className="font-headline text-xl text-on-surface-variant hover:text-primary transition-colors cursor-pointer">02</span>
<span className="font-headline text-xl text-on-surface-variant hover:text-primary transition-colors cursor-pointer">03</span>
<span className="font-headline text-xl text-on-surface-variant">...</span>
<span className="font-headline text-xl text-on-surface-variant hover:text-primary transition-colors cursor-pointer">12</span>
</div>
<button className="text-primary hover:text-secondary transition-colors cursor-pointer">
<span className="material-symbols-outlined">east</span>
</button>
</div>
</div>
</div>

    </main>
  );
}
