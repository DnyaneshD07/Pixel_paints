// @ts-nocheck
export default function Page() {
  return (
    <main>

{/* Hero Section */}
<section className="relative min-h-[921px] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-container to-primary pt-20">
<div className="absolute inset-0 opacity-20 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(148,73,37,0.4)_0%,transparent_70%)]"></div>
</div>
<div className="max-w-screen-2xl mx-auto px-12 w-full grid md:grid-cols-12 gap-12 items-center relative z-10">
<div className="md:col-span-6 lg:col-span-5 space-y-8">
<span className="inline-block font-label text-secondary tracking-widest uppercase font-bold text-xs bg-secondary/10 px-4 py-1">Est. 1924</span>
<h1 className="font-headline text-6xl lg:text-8xl text-surface font-bold leading-[0.9] tracking-tighter">
                        The Art of <br/><span className="italic font-normal">Living</span> in Color
                    </h1>
<p className="font-headline text-2xl text-on-primary-container max-w-md">
                        Premium Architectural Coatings designed to transform light, texture, and atmosphere.
                    </p>
<div className="flex items-center gap-6 pt-4">
<button className="bg-secondary text-on-secondary px-10 py-5 rounded-lg text-lg font-bold shadow-2xl hover:scale-105 transition-transform active:scale-95">
                            Explore Collections
                        </button>
<button className="text-surface font-bold border-b-2 border-surface/30 pb-1 hover:border-secondary transition-colors group flex items-center gap-2">
                            View Lookbook <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</div>
<div className="md:col-span-6 lg:col-span-7 relative h-[600px] flex items-center justify-center">
{/* Rotating Textures/Cans Mockup */}
<div className="relative w-full h-full">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-surface-container-highest shadow-2xl rotate-[-6deg] z-20 group hover:rotate-0 transition-transform duration-700">
<img className="w-full h-full object-cover" data-alt="Close up of high-end matte paint tin with elegant minimal typography on label against a neutral studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqYha0zrNfT68ABTbbuZq2qRo7RTTPGNWjxkw7qdAooL843s7R2l8fYiMFmSyl9f-BC7dw7mmCpkofBAQoTfNg3UvqUVgECbGi8LhAAbincz00xypWfUUO1ZUP7IBg6XJA7lyiEpVx7cRaYLorrUmnHJlNvq0sPoalqNPh0lwBZwbynajZ-cmI2-8jKZbQDZUt_NSYByUMZHQgoBE4hgnTw8u9QGtAKolwPrnX2g-Pfd0yWFO5AOYl9A_w-yhsaiOQt66UmfXOgw"/>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[40%] w-80 h-96 bg-surface-container shadow-xl rotate-[12deg] z-10 opacity-80">
<img className="w-full h-full object-cover" data-alt="Macro texture of wet terracotta colored pigment showing thick brush strokes and rich material depth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz9V8kzOJ9hq_zoxVAsku2impdrf_mraL61AqoeQA5mmStf0dvQs-uxkRT2AJIOYfixBbAowFiuVSY6-_QRPtE6bG0TPUy6lKtV7YTMjtTvqj1WU-F0wHBdOgIVTNpnd_WdKzJ6IasrbizHavkV5KpGVCPaO6kLPEj9z2AqkxIN2zqI4C-ztGWFrgH5gCejiOWGTkbT9Lqen8y9BZzuiSD3Xd2hlnJ24F_thZhsKdDvJKzAAzxhh-753l6Ymc6FuDQyn22ODsY4Q"/>
</div>
<div className="absolute bottom-0 right-0 w-48 h-48 rounded-full border border-secondary/30 flex items-center justify-center animate-pulse">
<span className="font-headline italic text-surface text-sm text-center px-4 leading-tight opacity-60">Hand-Mixed in the Atelier</span>
</div>
</div>
</div>
</div>
</section>
{/* USPs Section */}
<section className="py-24 bg-surface">
<div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-16">
<div className="space-y-4 group">
<div className="w-12 h-12 bg-surface-container-low flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-surface transition-colors duration-300">
<span className="material-symbols-outlined text-3xl">eco</span>
</div>
<h3 className="font-headline text-2xl font-bold">Eco-certified</h3>
<p className="text-on-surface-variant leading-relaxed">Sustainably sourced pigments and zero-VOC bases, ensuring your home remains as healthy as it is beautiful.</p>
</div>
<div className="space-y-4 group">
<div className="w-12 h-12 bg-surface-container-low flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-surface transition-colors duration-300">
<span className="material-symbols-outlined text-3xl">verified</span>
</div>
<h3 className="font-headline text-2xl font-bold">Extreme Durability</h3>
<p className="text-on-surface-variant leading-relaxed">Our advanced polymer binding technology ensures a finish that resists scuffs, moisture, and time itself.</p>
</div>
<div className="space-y-4 group">
<div className="w-12 h-12 bg-surface-container-low flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-surface transition-colors duration-300">
<span className="material-symbols-outlined text-3xl">texture</span>
</div>
<h3 className="font-headline text-2xl font-bold">Superior Coverage</h3>
<p className="text-on-surface-variant leading-relaxed">Highly concentrated pigments offer unmatched depth and saturation, requiring fewer coats for a perfect finish.</p>
</div>
</div>
</section>
{/* Category Preview */}
<section className="py-24 bg-surface-container-low overflow-hidden">
<div className="max-w-screen-2xl mx-auto px-12 mb-16">
<h2 className="font-headline text-5xl font-bold text-primary mb-4">Curated Finishes</h2>
<div className="w-24 h-1 bg-secondary"></div>
</div>
<div className="flex flex-col md:flex-row gap-12 px-12 max-w-screen-2xl mx-auto">
{/* Interior Card */}
<div className="flex-1 group cursor-pointer">
<div className="relative h-[600px] overflow-hidden mb-8">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Minimalist interior living room with high ceilings, soft sage green walls, and sunlight casting elegant shadows on the matte finish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHgkm4nd0k-6354So0_XqDCElQF1h5M-IoMn-iSnuZO2PBtXUQSPVK1vDF2ZfpISWNfNRWgfCxGz-TGXbEMj2HovgR0MeEQTOaL3fLYI9rRG_5g0w5w-5CqJN1FgNnyMoQlFbKa9QhglPBNNFizOXRVoIV1yITz__Ov5T23qidwBFP-6wOA26AQWUgAd1ESyixMN-H7IIgtwfYyvrNCx_ZUz5duaZmnpJebjtxs3AtrjiC5fQH9gtD1BUnsYYnP7AOe33Hd0cang"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-8 left-8">
<span className="font-label text-[10px] uppercase tracking-[0.3em] text-surface bg-primary/40 px-3 py-1 backdrop-blur-sm">Indoor Living</span>
</div>
</div>
<h4 className="font-headline text-3xl font-bold mb-2">Interior Collections</h4>
<p className="text-on-surface-variant mb-4">From velvet-matte to satin eggshell, explore pigments that define interior elegance.</p>
<span className="text-secondary font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                        Browse Interior <span className="material-symbols-outlined text-sm">east</span>
</span>
</div>
{/* Exterior Card */}
<div className="flex-1 group cursor-pointer md:mt-24">
<div className="relative h-[600px] overflow-hidden mb-8">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Modern architectural house exterior with deep navy masonry paint and warm wood accents at dusk with subtle accent lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXFnXwJ-KxJwuYHbhnONFTzdOF91t7jyN_W1OKR2ltkn-qhgcPm0SgZRyjVjmm3cXqJZVQ_xkSoGQMYOCjs2knbdWCMRXSGVQ-3YchpP2yMjQPzqQx5A1F2ItFdCamPrh55Zi0udaBfu4CU3IppyUngbW9JO1Xs0pIaveQ1fOgU2aXDh2qe3lqST6bpcfnOCvYHqPK3Yg86R8HWYNc74vwcr3fmPilOLn4-2UT787ZUiacfshfaVIP_5D1vzt9DIoVj8zdBBP-aQ"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-8 left-8">
<span className="font-label text-[10px] uppercase tracking-[0.3em] text-surface bg-primary/40 px-3 py-1 backdrop-blur-sm">Structural Integrity</span>
</div>
</div>
<h4 className="font-headline text-3xl font-bold mb-2">Exterior Masonry</h4>
<p className="text-on-surface-variant mb-4">Weather-resistant coatings that protect and beautify the architectural facade.</p>
<span className="text-secondary font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                        Browse Exterior <span className="material-symbols-outlined text-sm">east</span>
</span>
</div>
</div>
</section>
{/* Project Showcase (Before/After) */}
<section className="py-32 bg-surface">
<div className="max-w-screen-2xl mx-auto px-12">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-4">
<h2 className="font-headline text-4xl lg:text-5xl font-bold mb-6">The Power of <br/><span className="text-secondary">Transformation</span></h2>
<p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                            Watch as dull spaces are revitalized with our signature Pigment No. 42 "Dusk Terracotta." Our coatings don't just cover; they character.
                        </p>
<div className="space-y-6">
<div className="flex items-start gap-4 p-6 bg-surface-container-low">
<span className="text-2xl font-headline font-bold text-secondary">01</span>
<div>
<h5 className="font-bold mb-1">Light Interaction</h5>
<p className="text-sm text-on-surface-variant">Designed to shift with natural sunlight throughout the day.</p>
</div>
</div>
<div className="flex items-start gap-4 p-6">
<span className="text-2xl font-headline font-bold text-secondary">02</span>
<div>
<h5 className="font-bold mb-1">Depth of Tone</h5>
<p className="text-sm text-on-surface-variant">Three times the pigment density of standard trade paints.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-8 relative group">
<div className="asymmetric-grid grid-rows-1 gap-4 h-[500px]">
<div className="col-span-5 h-full overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="Desaturated, unpainted concrete room with basic lighting and a dusty feel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVMq9WcezukLvsUUBnO-K0E1mYC7Zvn_l74AvvnNxC6_Eh47uKzrdi56i2NITqjtG2HBLDztxcowxxgzk_EfhuZwZ-zZl6htQmBbM-j6suk9KsUHwoH9RWlQBqMml9WEAZheJGpGRxPGAxqAZ_mJyVWTe4Na_2EXpTUwh7J4XRa6P1HY2nRCkW_BZUIVNhO7rVO-K3Bzhbh36KlyLIa-idh8twgJmBVy7UmQwTPJxa8wZzxrbS-ubq6BXKej3Yiw70e6RfxgVvxQ"/>
<div className="absolute top-4 left-4 font-label text-[10px] bg-primary text-surface px-2 py-1">BEFORE</div>
</div>
<div className="col-span-7 h-full overflow-hidden relative shadow-2xl">
<img className="w-full h-full object-cover" data-alt="The same room transformed with deep rich ochre paint on the walls, designer furniture, and warm moody lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC1UXKzeBtYS9501BkseiRWlNyYaBmR2cPBr3jgUG0CmImZaKvOZ67bCC6pWqiKpGHOO2UiJx4ZHPFZ772FEmdsHq-e2e3YcqMguxaU65R7O1unhn4qLjummEULC4VHXMZwB6Rphf2VFRSe3FsCFCdWw7k_pF-rnoz8BfVC35SkGTbR4MkGAw7mxWEVjlMt1p9I5mMU3-eTyCVlaKzVjDXJXOnKIVTTJ0nXWOHf9yAClzhjGhvN_ZDmBXJpXXxPY64KfuPOHR-Uw"/>
<div className="absolute top-4 left-4 font-label text-[10px] bg-secondary text-surface px-2 py-1">AFTER</div>
<div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur p-4 shadow-xl max-w-xs">
<p className="text-xs font-bold text-primary mb-1">FEATURED COLOR</p>
<p className="font-headline italic">Ochre Heritage No. 12</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* CTA Dealer Banner */}
<section className="py-24 bg-primary relative overflow-hidden">
<div className="absolute inset-0 opacity-10">
<img className="w-full h-full object-cover" data-alt="Abstract macro shot of swirling dark blue and grey paint with fine grain texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVW3nb4Dim6mD_fydWDfu84AJ3Cxy0_-b7SHwJqH-nHDDhhTaZOtjOhmGQWxKcL0DRt1XsTdsxNT569ObWodm6DG3DKEC2WCwvjGHXhLdUz9bM_vhah3TtChjS8_hX_nl4BpqlEoifww4uQpbC4EmNY8yH7bOyxkYtjuok9tas9SvKmiN29NN4sK4yR8jn2rOrTMAcHslxNfpNanmNwlVZZ4id9N7_a3GvtpuP676vRK3kfItRe5DUMFMReWAFNoM4gprRxcvC1g"/>
</div>
<div className="max-w-4xl mx-auto px-12 text-center relative z-10">
<h2 className="font-headline text-4xl lg:text-5xl text-surface font-bold mb-8">Ready to bring your vision to life?</h2>
<p className="text-on-primary-container text-lg mb-12">Visit an authorized Atelier Pigments dealer to experience our finishes in person and receive expert color consultation.</p>
<div className="flex flex-col md:flex-row gap-0 max-w-xl mx-auto shadow-2xl">
<input className="flex-1 px-8 py-5 bg-surface-container-lowest border-none focus:ring-2 focus:ring-secondary text-primary font-medium" placeholder="Enter Zip Code or City" type="text"/>
<button className="bg-secondary text-on-secondary px-10 py-5 font-bold hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2">
                        Find Dealer <span className="material-symbols-outlined">search</span>
</button>
</div>
<p className="mt-8 text-on-primary-container/60 text-sm font-label tracking-widest uppercase">Over 2,400 Certified Stockists Worldwide</p>
</div>
</section>

    </main>
  );
}
