// @ts-nocheck
export default function Page() {
  return (
    <main>

{/* Hero Section */}
<section className="relative pt-24 pb-32 px-12 overflow-hidden bg-surface">
<div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-end gap-12">
<div className="w-full md:w-2/3">
<span className="font-label text-secondary uppercase tracking-[0.2em] text-xs font-bold block mb-6">Inquiry &amp; Collaboration</span>
<h1 className="font-headline text-7xl md:text-8xl text-primary leading-[0.9] tracking-tighter mb-8">
                        Connect with Our <br/> <span className="italic font-normal">Atelier</span>
</h1>
<p className="max-w-xl text-lg text-on-surface-variant leading-relaxed">
                        Whether you are an architect detailing a new vision or a homeowner seeking the perfect shade, our consultants are here to guide your chromatic journey.
                    </p>
</div>
<div className="w-full md:w-1/3 flex justify-end">
<div className="w-48 h-64 bg-surface-container-high rounded-sm relative overflow-hidden rotate-3 shadow-2xl">
<img alt="Artisan mixing pigment" className="w-full h-full object-cover" data-alt="Close-up of artisan hands mixing raw ochre pigment into a thick white paint base in a ceramic bowl, soft morning light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDn0wR14bfPY7tPyIlqH1eRqs8XQKFKkHmkgh8A0W4vUEZTWtanMZHzMYXJZM73SB8f2StZb0zTrrfMy9AVBis5jtuaPLZfXCCY0F6jkobgyoxj1x75wDzZb0-Vw_NzInb9w903beN0Yp2dhK3iYlhqE7oOQGfgMqUcv5y3WQojaezg-wSwaLutxT0Z3YsICTFYWmpaNDUj74KCbHY157s7aoOZM9akjBlDe5XTstDlE3zu7IlvFHPb7HRayw20SX9EjMFs7dkLA"/>
</div>
</div>
</div>
</section>
{/* Contact & Map Section */}
<section className="px-12 pb-32 bg-surface">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
{/* Left Column: Form */}
<div className="lg:col-span-7 bg-surface-container-low p-12 md:p-16 rounded-sm shadow-[0_10px_40px_rgba(5,17,37,0.04)]">
<h2 className="font-headline text-4xl text-primary mb-12">Send a Message</h2>
<form className="space-y-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="relative group">
<label className="block font-label text-[0.7rem] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Name</label>
<input className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 px-0 py-3 transition-colors placeholder:text-outline-variant/50" placeholder="Julianne Vane" type="text"/>
</div>
<div className="relative group">
<label className="block font-label text-[0.7rem] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Email</label>
<input className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 px-0 py-3 transition-colors placeholder:text-outline-variant/50" placeholder="j.vane@studio.com" type="email"/>
</div>
</div>
<div className="relative group">
<label className="block font-label text-[0.7rem] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Topic</label>
<select className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 px-0 py-3 transition-colors text-on-surface-variant">
<option>General Inquiry</option>
<option>Architectural Consultation</option>
<option>Sample Request</option>
<option>Dealer Partnership</option>
</select>
</div>
<div className="relative group">
<label className="block font-label text-[0.7rem] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Message</label>
<textarea className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 px-0 py-3 transition-colors placeholder:text-outline-variant/50 resize-none" placeholder="How can we help bring your space to life?" rows="4"></textarea>
</div>
<div className="pt-6">
<button className="bg-secondary text-on-secondary px-12 py-4 rounded font-bold tracking-widest uppercase text-xs hover:opacity-95 transition-all shadow-lg flex items-center gap-3" type="submit">
                                Submit Inquiry
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</form>
</div>
{/* Right Column: Info & Map */}
<div className="lg:col-span-5 space-y-20">
<div>
<h2 className="font-headline text-4xl text-primary mb-12">Global Studios</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12">
{/* Paris */}
<div className="group">
<h3 className="font-label text-secondary font-extrabold text-xs uppercase tracking-[0.2em] mb-4">Paris Headquarters</h3>
<p className="text-on-surface-variant leading-relaxed mb-4">
                                    14 Rue de l'Atelier<br/>
                                    75003 Paris, France
                                </p>
<a className="text-primary font-bold text-sm flex items-center gap-2 hover:text-secondary transition-colors" href="tel:+33145678900">
<span className="material-symbols-outlined text-base">call</span>
                                    +33 1 45 67 89 00
                                </a>
</div>
{/* London */}
<div className="group">
<h3 className="font-label text-secondary font-extrabold text-xs uppercase tracking-[0.2em] mb-4">London Design Studio</h3>
<p className="text-on-surface-variant leading-relaxed mb-4">
                                    88 Curated Mews, Marylebone<br/>
                                    London W1U 4QY, UK
                                </p>
<a className="text-primary font-bold text-sm flex items-center gap-2 hover:text-secondary transition-colors" href="tel:+442079460123">
<span className="material-symbols-outlined text-base">call</span>
                                    +44 20 7946 0123
                                </a>
</div>
</div>
</div>
{/* Map Integration */}
<div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-surface-container-high overflow-hidden rounded-sm shadow-inner group">
<div className="absolute inset-0 bg-primary/5 z-10 pointer-events-none transition-opacity group-hover:opacity-0"></div>
<img alt="Map view of Paris 3rd Arrondissement" className="w-full h-full object-cover filter grayscale opacity-80" data-alt="Stylized monochromatic map of Paris Le Marais district with a single subtle terracotta pin indicating the showroom location." data-location="Paris" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ9xAl_5OgUY01oJiUYe_gLJeWKQxf5g8X0FrhNCQ7lmyZE3yuu8I7dIz2ByIqolewAFZiJdrd-PWOvdYVFlGJKAZEFUbAjlIpqu0agWaKltb_f09dQRx7UT_sregLAtK9hcFA3hEKEAcCQS77tIWDap7J_2oL2aUzUe-yD4MqVHgLvfsa_SORXRySz0ldz7ORWkX_hruXNimgK3ZINoiReDVuaifPtSp8hY0yzR1ubP3WL_jICStvHqOiwAPRER-ehqnRh3mNsw"/>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<div className="w-4 h-4 bg-secondary rounded-full animate-pulse shadow-[0_0_20px_rgba(148,73,37,0.6)]"></div>
</div>
<div className="absolute bottom-6 left-6 z-20 bg-surface-container-lowest/90 backdrop-blur-sm p-4 rounded shadow-lg border border-outline-variant/10">
<p className="font-label text-[0.65rem] font-black uppercase tracking-widest text-secondary">Showroom Location</p>
<p className="font-headline text-lg italic text-primary">Rue de l'Atelier</p>
</div>
</div>
</div>
</div>
</section>

    </main>
  );
}
