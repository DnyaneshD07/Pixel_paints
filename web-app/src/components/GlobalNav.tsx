"use client";

import Link from 'next/link';

export default function GlobalNav() {
  return (
    <nav className="bg-transparent w-full top-0 absolute z-50 transition-all duration-300">
      <div className="flex justify-between items-center w-full px-12 py-8 max-w-screen-2xl mx-auto border-b border-on-surface/10">
          <Link href="/" className="text-2xl font-headline font-extrabold tracking-widest uppercase text-on-surface">
            Atelier Pigments
          </Link>
          <div className="hidden md:flex items-center space-x-12 font-label text-sm font-bold uppercase tracking-widest text-on-surface">
              <Link className="opacity-60 hover:opacity-100 hover:text-on-surface-variant transition-colors duration-300" href="/products">Products</Link>
              <Link className="opacity-60 hover:opacity-100 hover:text-on-surface-variant transition-colors duration-300" href="/about">About</Link>
              <Link className="opacity-60 hover:opacity-100 hover:text-on-surface-variant transition-colors duration-300" href="/dealers">Dealers</Link>
              <Link className="opacity-60 hover:opacity-100 hover:text-on-surface-variant transition-colors duration-300" href="/contact">Contact</Link>
          </div>
          <button className="bg-primary text-surface px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors duration-300">
              Order Sample
          </button>
      </div>
    </nav>
  );
}
