"use client";

import Image from 'next/image';
import { useRef, MouseEvent } from 'react';

// Reusable 3D Tilt Card Component
function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const rotateX = ((y / rect.height) - 0.5) * -20;
    const rotateY = ((x / rect.width) - 0.5) * 20;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    cardRef.current.style.transition = 'none'; 
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    cardRef.current.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-all duration-500 ease-out will-change-transform drop-shadow-2xl hover:shadow-[0_0_80px_rgba(240,194,123,0.3)] hover:z-50 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-inherit z-50"></div>
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#3d0b2f] to-[#120524] overflow-hidden transition-colors duration-500">
      
      {/* Flamboyant Extravagant Mesh Background (Royal Purple, Velvet Red, Rose Gold) */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden mix-blend-color-dodge opacity-80">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-[#a80b32] rounded-full filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50rem] h-[50rem] bg-[#631e8c] rounded-full filter blur-[150px] animate-blob animation-delay-2000 opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60rem] h-[60rem] bg-[#df9588] rounded-full filter blur-[200px] animate-blob animation-delay-4000 opacity-50"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 z-10 w-full max-w-screen-2xl mx-auto px-12">
          <div className="w-full grid md:grid-cols-12 gap-12 items-center relative">
              <div className="md:col-span-6 space-y-8 z-20">
                  <span className="inline-block font-label text-[#fdf0ed] tracking-widest uppercase font-extrabold text-xs bg-white/10 px-6 py-2 rounded-full border border-white/20 shadow-lg backdrop-blur-md">The Premier Collection</span>
                  <h1 className="font-headline text-5xl md:text-7xl lg:text-[7rem] text-white font-extrabold leading-[0.9] tracking-tighter drop-shadow-2xl">
                      The Art of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df9588] to-[#f4d1c9] italic font-light drop-shadow-[0_0_25px_rgba(223,149,136,0.6)]">Living</span> in Color
                  </h1>
                  <p className="font-body text-xl text-white/80 max-w-xl font-medium leading-relaxed drop-shadow-md">
                      Extravagant architectural coatings formulated with vibrant velvet reds, celestial royal purples, and striking rose golds.
                  </p>
                  <div className="flex items-center gap-6 pt-8">
                      <button className="bg-gradient-to-r from-[#a80b32] to-[#df9588] text-white px-10 py-5 text-sm uppercase tracking-widest font-bold shadow-[0_0_40px_rgba(168,11,50,0.6)] hover:scale-105 transition-all duration-300 rounded-full border border-white/20">
                          Explore Collections
                      </button>
                  </div>
              </div>
              
              <div className="md:col-span-6 relative h-[700px] flex items-center justify-center p-12">
                  <TiltCard className="w-full h-full rounded-[3rem] overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(223,149,136,0.2)]">
                      <div className="absolute inset-0 bg-[#3d0b2f]/30 mix-blend-overlay z-10"></div>
                      <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover transform scale-110 brightness-110 hue-rotate-[340deg] saturate-[1.2]" alt="Vibrant warm interior" />
                      
                      <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-xl p-8 rounded-3xl z-20 border border-white/20 shadow-2xl" style={{ transform: 'translateZ(50px)' }}>
                         <p className="text-xs uppercase tracking-[0.2em] text-[#df9588] font-extrabold mb-2">Featured Pigment</p>
                         <h3 className="font-headline text-3xl font-bold text-white drop-shadow-md">Velvet Rose No. 18</h3>
                      </div>
                  </TiltCard>
              </div>
          </div>
      </section>

      {/* Category Preview (Curated Finishes) */}
      <section className="py-32 relative z-10 bg-white/5 backdrop-blur-3xl border-y border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
          <div className="max-w-screen-2xl mx-auto px-12 mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-white">
              <div>
                  <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[#df9588]">Curated Finishes</h2>
                  <div className="w-32 h-2 bg-gradient-to-r from-[#df9588] to-[#a80b32] mt-8 rounded-full shadow-[0_0_15px_rgba(223,149,136,0.6)]"></div>
              </div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 px-12 max-w-screen-2xl mx-auto">
              {/* Card 1 */}
              <div className="flex-1 perspective-1000">
                  <TiltCard className="relative h-[700px] w-full overflow-hidden rounded-[3rem] border border-white/20">
                      <img className="w-full h-full object-cover saturate-[1.5] hue-rotate-[320deg]" src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2574&auto=format&fit=crop" alt="Luxurious Interior" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e]/90 via-[#3d0b2f]/40 to-transparent flex flex-col justify-end p-10 text-white" style={{ transform: 'translateZ(30px)' }}>
                          <span className="font-label text-[10px] uppercase tracking-[0.3em] mb-4 text-[#fdf0ed] border border-[#df9588] w-max px-4 py-2 rounded-full backdrop-blur-md bg-[#a80b32]/20">Indoor Living</span>
                          <h4 className="font-headline text-4xl font-bold mb-4 drop-shadow-md">Interior Elegance</h4>
                          <p className="text-white/80 mb-8 max-w-md font-light leading-relaxed">Rich crushed velvet tones and vibrant rose gold bases that completely absorb light and exude absolute luxury.</p>
                          <span className="font-bold uppercase tracking-widest text-xs inline-flex items-center gap-4 transition-all w-max bg-white/10 border border-white/20 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white hover:text-[#1a0b2e] shadow-lg">
                              Browse Interior <span className="material-symbols-outlined text-sm">east</span>
                          </span>
                      </div>
                  </TiltCard>
              </div>
              
              {/* Card 2 */}
              <div className="flex-1 mt-12 md:mt-24 perspective-1000">
                  <TiltCard className="relative h-[700px] w-full overflow-hidden rounded-[3rem] border border-white/20">
                      <img className="w-full h-full object-cover saturate-[1.2]" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2574&auto=format&fit=crop" alt="Vibrant warm architecture exterior" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e]/90 via-[#1a0b2e]/40 to-transparent flex flex-col justify-end p-10 text-white" style={{ transform: 'translateZ(30px)' }}>
                          <span className="font-label text-[10px] uppercase tracking-[0.3em] mb-4 text-[#fdf0ed] border border-[#df9588] w-max px-4 py-2 rounded-full backdrop-blur-md bg-[#631e8c]/40">Structural Integrity</span>
                          <h4 className="font-headline text-4xl font-bold mb-4 drop-shadow-md">Exterior Majesty</h4>
                          <p className="text-white/80 mb-8 max-w-md font-light leading-relaxed">Weather-resistant coatings that protect and beautify the architectural facade in breathtaking jewel tones.</p>
                          <span className="font-bold uppercase tracking-widest text-xs inline-flex items-center gap-4 transition-all w-max bg-white/10 border border-white/20 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white hover:text-[#1a0b2e] shadow-lg">
                              Browse Exterior <span className="material-symbols-outlined text-sm">east</span>
                          </span>
                      </div>
                  </TiltCard>
              </div>
          </div>
      </section>

      {/* Featured Artists Slider/Grid */}
      <section className="py-32 relative z-10 overflow-hidden text-center text-white/90">
          <div className="max-w-screen-2xl mx-auto px-12 relative z-10">
              <div className="mb-20 text-center max-w-2xl mx-auto">
                  <span className="block font-label text-xs tracking-[0.3em] uppercase mb-4 text-[#df9588] font-bold">The Visionaries</span>
                  <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight mb-8 drop-shadow-2xl">Featured Artists</h2>
                  <p className="text-white/80 text-lg font-light leading-relaxed">Creators who use our flamboyant curated palettes to shatter the monotony of modern structural spaces.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-left">
                  <TiltCard className="bg-white/5 backdrop-blur-2xl border border-white/20 hover:border-[#df9588]/50 p-10 rounded-[2rem] transition-colors duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#a80b32]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                          <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-[#df9588]/50 shadow-[0_0_20px_rgba(223,149,136,0.4)]">
                              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2676&auto=format&fit=crop" className="w-full h-full object-cover" alt="Elena Rostova" />
                          </div>
                          <h5 className="text-2xl font-bold mb-2">Elena Rostova</h5>
                          <p className="text-white/70 font-light italic mb-8 leading-relaxed">"A room without vibrant color is a room without a soul. Deep velvet red breathes absolute life into cold walls."</p>
                          <span className="text-xs tracking-[0.2em] uppercase text-[#df9588] font-bold block pt-4 border-t border-white/10">Architectural Designer</span>
                      </div>
                  </TiltCard>
                  
                  <TiltCard className="bg-white/5 backdrop-blur-2xl border border-white/20 hover:border-[#631e8c]/50 p-10 rounded-[2rem] transition-colors duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#631e8c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                          <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-[#631e8c]/50 shadow-[0_0_20px_rgba(99,30,140,0.4)]">
                              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover" alt="Marcus Wright" />
                          </div>
                          <h5 className="text-2xl font-bold mb-2">Marcus Wright</h5>
                          <p className="text-white/70 font-light italic mb-8 leading-relaxed">"The majestic purples from Atelier Pigments bring an air of absolute royalty to any interior sanctuary."</p>
                          <span className="text-xs tracking-[0.2em] uppercase text-[#b683d6] font-bold block pt-4 border-t border-white/10">Interior Sculptor</span>
                      </div>
                  </TiltCard>
                  
                  <TiltCard className="bg-white/5 backdrop-blur-2xl border border-white/20 hover:border-[#a80b32]/50 p-10 rounded-[2rem] transition-colors duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#df9588]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                          <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-[#a80b32]/50 shadow-[0_0_20px_rgba(168,11,50,0.4)]">
                              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop" className="w-full h-full object-cover" alt="Sarah Chen" />
                          </div>
                          <h5 className="text-2xl font-bold mb-2">Sarah Chen</h5>
                          <p className="text-white/70 font-light italic mb-8 leading-relaxed">"Rose gold catches the light at dusk in a way that feels almost otherworldly. It's like painting with actual fire."</p>
                          <span className="text-xs tracking-[0.2em] uppercase text-[#df9588] font-bold block pt-4 border-t border-white/10">Spatial Artist</span>
                      </div>
                  </TiltCard>
              </div>
              <div className="text-center">
                  <button className="bg-gradient-to-r from-[#631e8c] to-[#a80b32] text-white shadow-[0_0_30px_rgba(168,11,50,0.5)] px-12 py-5 text-sm uppercase tracking-[0.2em] font-extrabold hover:scale-105 transition-transform rounded-full border border-white/20">
                      Meet the Artists
                  </button>
              </div>
          </div>
      </section>

      {/* Project Showcase (Before/After) */}
      <section className="py-32 relative z-10 bg-black/40 backdrop-blur-xl border-y border-white/10">
          <div className="max-w-screen-2xl mx-auto px-12">
              <div className="grid lg:grid-cols-12 gap-16 items-center text-white">
                  <div className="lg:col-span-4 drop-shadow-xl">
                      <h2 className="font-headline text-5xl md:text-6xl font-extrabold mb-8 text-white">The Power of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df9588] to-[#a80b32]">Flamboyance</span></h2>
                      <p className="text-white/80 text-lg mb-12 font-medium leading-relaxed">
                          Watch as monochromatic, cold spaces are catapulted into extraordinary luxury. Our coatings don't just cover walls; they ignite them.
                      </p>
                      <div className="space-y-8">
                          <div className="flex items-start gap-6 border-b border-white/20 pb-8">
                              <span className="text-2xl font-headline font-extrabold text-[#df9588] bg-[#df9588]/10 px-4 py-2 rounded-xl border border-[#df9588]/20">01</span>
                              <div>
                                  <h5 className="text-xl font-bold mb-2 text-white">Visceral Warmth</h5>
                                  <p className="text-white/70 font-light">Deep velvet crimson completely alters the perception of space, exuding intense warmth.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="lg:col-span-8 relative">
                      <TiltCard className="grid grid-cols-12 gap-4 h-[600px] w-full rounded-[3rem] overflow-hidden bg-white/5 p-4 shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/20">
                          <div className="col-span-5 h-full overflow-hidden relative rounded-[2rem]">
                              <img className="w-full h-full object-cover filter grayscale opacity-70" alt="Before" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"/>
                              <div className="absolute top-6 left-6 font-label text-[10px] tracking-widest bg-black/80 backdrop-blur-md text-white font-bold px-4 py-2 uppercase rounded-full shadow-lg">Before</div>
                          </div>
                          <div className="col-span-7 h-full overflow-hidden relative rounded-[2rem] shadow-2xl">
                              <img className="w-full h-full object-cover mix-blend-color-dodge brightness-75 contrast-125 saturate-[2]" style={{ backgroundColor: '#a80b32' }} alt="After" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"/>
                              <div className="absolute inset-0 bg-gradient-to-t from-[#3d0b2f]/80 to-transparent mix-blend-overlay"></div>
                              <div className="absolute top-6 left-6 font-label text-[10px] tracking-widest bg-[#a80b32] text-white font-bold px-4 py-2 uppercase rounded-full shadow-[0_0_15px_rgba(168,11,50,0.8)] border border-white/20">After</div>
                              <div className="absolute bottom-6 right-6 bg-[#1a0b2e]/80 backdrop-blur-xl text-white p-6 max-w-sm rounded-[1.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.8)] border border-[#df9588]/30" style={{ transform: 'translateZ(60px)' }}>
                                  <p className="text-[10px] tracking-widest uppercase mb-2 text-[#df9588] font-bold drop-shadow-md">Featured Finish</p>
                                  <p className="font-headline text-2xl font-bold">Royal Velvet No. 9</p>
                              </div>
                          </div>
                      </TiltCard>
                  </div>
              </div>
          </div>
      </section>

      {/* CTA Dealer Banner & USPs */}
      <section className="relative z-10 text-white">
          <div className="py-32 bg-gradient-to-r from-[#3d0b2f] via-[#1a0b2e] to-[#631e8c] relative overflow-hidden rounded-t-[4rem] mx-4 mt-12 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border border-white/10">
              <div className="absolute inset-0 opacity-60 mix-blend-color-dodge">
                  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(223,149,136,0.5)_0%,transparent_70%)] animate-blob"></div>
                  <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(168,11,50,0.5)_0%,transparent_70%)] animate-blob animation-delay-2000"></div>
              </div>
              <div className="max-w-4xl mx-auto px-12 text-center relative z-10">
                  <h2 className="font-headline text-5xl lg:text-7xl text-white font-extrabold mb-8 drop-shadow-2xl">Access True <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df9588] to-[#f4d1c9]">Extravagance</span></h2>
                  <p className="text-white/80 font-medium text-xl mb-12 max-w-2xl mx-auto drop-shadow-md">Visit an authorized luxury stockist to experience our vibrant, light-catching flamboyant finishes in person.</p>
                  <div className="flex flex-col md:flex-row gap-2 max-w-xl mx-auto bg-white/10 backdrop-blur-2xl p-2 rounded-full border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-20">
                      <input className="flex-1 px-8 py-5 bg-black/40 backdrop-blur-md rounded-full border-none focus:outline-none focus:ring-2 focus:ring-[#df9588] text-white font-bold placeholder:text-white/40" placeholder="Enter Zip Code or City" type="text"/>
                      <button className="bg-gradient-to-r from-[#a80b32] to-[#df9588] text-white px-10 py-5 font-bold hover:brightness-110 transition-all uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 rounded-full shadow-[0_0_20px_rgba(168,11,50,0.5)] border border-white/30">
                          Locate <span className="material-symbols-outlined">search</span>
                      </button>
                  </div>
              </div>
          </div>
      </section>
    </main>
  );
}
