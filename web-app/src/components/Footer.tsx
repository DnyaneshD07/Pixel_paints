"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-surface">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 px-12 py-24 w-full max-w-screen-2xl mx-auto">
            <div className="md:col-span-1">
                <span className="font-headline font-extrabold uppercase tracking-widest text-2xl text-surface mb-6 block">Atelier Pigments</span>
                <p className="text-surface/60 text-sm leading-relaxed mb-8 font-light">The Minimalist Atelier for those who view boundaries in stark contrast.</p>
                <div className="flex gap-6">
                    <a className="text-surface/40 hover:text-surface transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
                    <a className="text-surface/40 hover:text-surface transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                    <a className="text-surface/40 hover:text-surface transition-colors" href="#"><span className="material-symbols-outlined">photo_camera</span></a>
                </div>
            </div>
            <div>
                <h6 className="font-label text-xs tracking-[0.2em] uppercase font-bold mb-8 text-surface/40">Explore</h6>
                <ul className="space-y-6 font-label text-xs tracking-widest uppercase">
                    <li><Link className="text-surface/80 hover:text-surface hover:translate-x-1 transition-all duration-300 block w-max" href="/products">Collections</Link></li>
                    <li><Link className="text-surface/80 hover:text-surface hover:translate-x-1 transition-all duration-300 block w-max" href="#">Sustainability</Link></li>
                    <li><Link className="text-surface/80 hover:text-surface hover:translate-x-1 transition-all duration-300 block w-max" href="/dealers">Stockists</Link></li>
                    <li><Link className="text-surface/80 hover:text-surface hover:translate-x-1 transition-all duration-300 block w-max" href="#">Press</Link></li>
                </ul>
            </div>
            <div>
                <h6 className="font-label text-xs tracking-[0.2em] uppercase font-bold mb-8 text-surface/40">Resources</h6>
                <ul className="space-y-6 font-label text-xs tracking-widest uppercase">
                    <li><Link className="text-surface/80 hover:text-surface hover:translate-x-1 transition-all duration-300 block w-max" href="#">Safety Data</Link></li>
                    <li><Link className="text-surface/80 hover:text-surface hover:translate-x-1 transition-all duration-300 block w-max" href="#">Application Guides</Link></li>
                    <li><Link className="text-surface/80 hover:text-surface hover:translate-x-1 transition-all duration-300 block w-max" href="#">Trade Program</Link></li>
                    <li><Link className="text-surface/80 hover:text-surface hover:translate-x-1 transition-all duration-300 block w-max" href="#">Privacy Policy</Link></li>
                </ul>
            </div>
            <div>
                <h6 className="font-label text-xs tracking-[0.2em] uppercase font-bold mb-8 text-surface/40">Newsletter</h6>
                <div className="flex border-b border-surface/20 pb-4 focus-within:border-surface transition-colors group">
                    <input className="bg-transparent border-none p-0 text-sm w-full focus:outline-none focus:ring-0 placeholder:text-surface/30 text-surface leading-tight" placeholder="EMAIL ADDRESS" type="email"/>
                    <button className="material-symbols-outlined text-surface/40 group-focus-within:text-surface hover:text-surface transition-colors">east</button>
                </div>
            </div>
        </div>
        <div className="px-12 py-8 border-t border-surface/10 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[10px] font-label tracking-[0.2em] uppercase text-surface/40">© 2026 Atelier Pigments. Minimal Collection.</span>
            <div className="flex gap-8 text-[10px] font-label tracking-[0.2em] uppercase text-surface/40">
                <Link className="hover:text-surface transition-colors" href="#">Terms</Link>
                <Link className="hover:text-surface transition-colors" href="#">Privacy</Link>
                <Link className="hover:text-surface transition-colors" href="#">Cookies</Link>
            </div>
        </div>
    </footer>
  );
}
