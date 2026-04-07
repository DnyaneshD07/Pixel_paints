// @ts-nocheck
export default function Page() {
  return (
    <main>

{/* Sidebar / Search UI */}
<aside className="w-full md:w-[450px] bg-surface-container-low z-20 flex flex-col h-full md:h-auto border-r border-outline-variant/10">
{/* Search Header */}
<div className="p-8 md:p-12 bg-surface-container-lowest">
<h1 className="font-headline text-4xl mb-6 text-primary tracking-tight">Dealer Locator</h1>
<p className="font-body text-on-surface-variant mb-8 text-sm leading-relaxed">Discover our artisanal pigments at a curated atelier near you. Professional consultations available at all locations.</p>
<div className="space-y-4">
<div className="relative">
<label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 block">Your Location</label>
<input className="w-full bg-surface-container-lowest border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-secondary transition-all font-body px-0 py-3 text-lg placeholder:text-outline-variant" placeholder="Enter Zip or City" type="text"/>
</div>
<button className="w-full bg-primary text-on-primary py-4 font-label font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
<span className="material-symbols-outlined text-sm">search</span>
                        Find Dealer
                    </button>
</div>
</div>
{/* Results List */}
<div className="flex-1 overflow-y-auto p-8 space-y-6 hide-scrollbar">
<div className="flex items-center justify-between mb-4">
<span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">3 Curated Dealers Nearby</span>
</div>
{/* Dealer Card 1 */}
<div className="group bg-surface-container-lowest p-6 cursor-pointer hover:bg-surface-container transition-colors shadow-[0_4px_20px_rgba(5,17,37,0.03)] border border-transparent hover:border-outline-variant/20">
<div className="flex justify-between items-start mb-4">
<h3 className="font-headline text-2xl text-primary">The Heritage Studio</h3>
<span className="font-label text-[10px] font-bold text-secondary bg-secondary-fixed px-2 py-1">0.8 MI</span>
</div>
<p className="font-body text-on-surface-variant text-sm mb-4 leading-relaxed">
                        1422 West Greenwich Ave,<br/>London, EC1M 6BY
                    </p>
<div className="flex items-center justify-between pt-4 border-t border-surface-container">
<a className="font-label text-xs tracking-widest text-primary flex items-center gap-2" href="tel:02072345678">
<span className="material-symbols-outlined text-sm">call</span> 020 7234 5678
                        </a>
<span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/* Dealer Card 2 */}
<div className="group bg-surface-container-lowest p-6 cursor-pointer hover:bg-surface-container transition-colors shadow-[0_4px_20px_rgba(5,17,37,0.03)] border border-transparent hover:border-outline-variant/20">
<div className="flex justify-between items-start mb-4">
<h3 className="font-headline text-2xl text-primary">Bespoke Pigment Co.</h3>
<span className="font-label text-[10px] font-bold text-secondary bg-secondary-fixed px-2 py-1">2.4 MI</span>
</div>
<p className="font-body text-on-surface-variant text-sm mb-4 leading-relaxed">
                        88 Shoreditch High St,<br/>London, E1 6JJ
                    </p>
<div className="flex items-center justify-between pt-4 border-t border-surface-container">
<a className="font-label text-xs tracking-widest text-primary flex items-center gap-2" href="tel:02078881234">
<span className="material-symbols-outlined text-sm">call</span> 020 7888 1234
                        </a>
<span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/* Dealer Card 3 */}
<div className="group bg-surface-container-lowest p-6 cursor-pointer hover:bg-surface-container transition-colors shadow-[0_4px_20px_rgba(5,17,37,0.03)] border border-transparent hover:border-outline-variant/20">
<div className="flex justify-between items-start mb-4">
<h3 className="font-headline text-2xl text-primary">Atelier North</h3>
<span className="font-label text-[10px] font-bold text-secondary bg-secondary-fixed px-2 py-1">4.1 MI</span>
</div>
<p className="font-body text-on-surface-variant text-sm mb-4 leading-relaxed">
                        21 Angel Mews,<br/>London, N1 0BY
                    </p>
<div className="flex items-center justify-between pt-4 border-t border-surface-container">
<a className="font-label text-xs tracking-widest text-primary flex items-center gap-2" href="tel:02074449988">
<span className="material-symbols-outlined text-sm">call</span> 020 7444 9988
                        </a>
<span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
</aside>
{/* Map UI */}
<section className="flex-1 relative bg-surface-container min-h-[500px] md:min-h-0">
<div className="absolute inset-0 grayscale contrast-125 opacity-40 mix-blend-multiply bg-[#1a0b2e]"></div>
<img className="w-full h-full object-cover grayscale brightness-90 contrast-100" data-alt="minimalist overhead map view of urban city grid with monochromatic charcoal and light grey tones architectural aesthetic" data-location="London" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO-LL4YDUZzKZOkyQyeik3Ui3Ch89vIwsdSV1ERKIxL2NgH74bd-wWUMXKoIy59sotgAh-ilxcvq39hfGTEcNhANWQuoqZd27EEsmWJ8wcGmqBPbD_wGsBaAR5X3GNRwehGbcKx3Z6Q4wUsIRrIUcqEk6LgGBLe1QERoXfS4cxcCQZT9_2oXSskWnTyySG3adaYoukYGS42_7PMFB6irBKlr-nTN5jHpl3U7nkn12hzvNWjzUmsJG3IhqSlSYYwTPn7GiLMD1Nug"/>
{/* Map Markers */}
<div className="absolute top-1/4 left-1/3">
<div className="relative group">
<div className="absolute -inset-4 bg-secondary/20 rounded-full animate-pulse"></div>
<div className="w-4 h-4 bg-secondary border-2 border-white rounded-full relative z-10 shadow-lg cursor-pointer transform hover:scale-125 transition-transform"></div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-4 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
<p className="font-headline text-lg text-primary">The Heritage Studio</p>
</div>
</div>
</div>
<div className="absolute top-1/2 right-1/4">
<div className="relative group">
<div className="w-4 h-4 bg-primary border-2 border-white rounded-full relative z-10 shadow-lg cursor-pointer transform hover:scale-125 transition-transform"></div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-4 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
<p className="font-headline text-lg text-primary">Bespoke Pigment Co.</p>
</div>
</div>
</div>
{/* Map Controls */}
<div className="absolute bottom-12 right-12 flex flex-col gap-2">
<button className="w-12 h-12 bg-white text-primary flex items-center justify-center shadow-lg hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">add</span>
</button>
<button className="w-12 h-12 bg-white text-primary flex items-center justify-center shadow-lg hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">remove</span>
</button>
<button className="w-12 h-12 bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-container transition-colors mt-4">
<span className="material-symbols-outlined">my_location</span>
</button>
</div>
{/* Featured Quote Overlay */}
<div className="absolute top-12 right-12 hidden lg:block max-w-sm pointer-events-none">
<div className="bg-primary/90 backdrop-blur-md p-8 text-on-primary">
<span className="material-symbols-outlined text-secondary text-4xl mb-4" style={{"fontVariationSettings":"'FILL' 1"}}>format_quote</span>
<p className="font-headline text-2xl italic leading-tight mb-4">"The right pigment doesn't just color a wall; it holds the light of the room."</p>
<p className="font-label text-[10px] uppercase tracking-widest text-on-primary-container">Atelier Master Mixologist</p>
</div>
</div>
</section>

    </main>
  );
}
