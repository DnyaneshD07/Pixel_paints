// @ts-nocheck
export default function Page() {
  return (
    <main>

{/* Product Hero Section */}
<section className="relative min-h-[921px] flex flex-col md:flex-row items-center overflow-hidden">
{/* Asymmetrical Image Background */}
<div className="w-full md:w-3/5 h-[512px] md:h-full relative overflow-hidden order-1 md:order-2">
<img className="absolute inset-0 w-full h-full object-cover scale-105 transform hover:scale-100 transition-transform duration-1000" data-alt="A premium minimalist designer paint bucket set against a textured terracotta wall with architectural shadows and soft side lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXAucLieElm5CSbuO4TehWNtq0PkQ46o2HQ2BmEv4A66LqKwOz2qOv0pQUFPSjpvSyg9AZewn2TMsVNUD3Fpg-VoEgTBINcgjsWhqq9zh097s6WJ3pMOCeRF1eLaFZzBoXXc33rTEhbMu3mnr9s1nysiOvILVD9IGjX5v7KTc_W-4jkDUOVEQgyF3PKrritaK9jgVHu0cMMM6pyrqAZk0UEc_PcCZfKUzLmSuxz6nBNGcrxFugJXAnmKomo94ezl27BILgWYtqGA"/>
<div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent hidden md:block"></div>
</div>
{/* Content Area */}
<div className="w-full md:w-2/5 px-8 md:px-24 py-12 md:py-24 z-10 order-2 md:order-1">
<nav className="flex items-center space-x-2 mb-8 opacity-60 font-label text-[10px] uppercase tracking-[0.2em]">
<span>Collections</span>
<span className="material-symbols-outlined text-[12px]">chevron_right</span>
<span>Earth Tones</span>
</nav>
<h1 className="font-headline text-5xl md:text-7xl leading-tight tracking-tight mb-4">
                    Canyon Clay <span className="italic font-light">04</span>
</h1>
<p className="font-body text-lg text-on-surface-variant mb-10 max-w-md leading-relaxed">
                    A deep, sun-baked terracotta with ochre undertones. Inspired by the shifting light of the high desert, this pigment brings a grounded, architectural warmth to modern interior spaces.
                </p>
<div className="flex items-baseline space-x-4 mb-12">
<span className="font-headline text-4xl">$124.00</span>
<span className="font-label text-sm opacity-50">/ Gallon</span>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-secondary text-on-secondary px-10 py-5 rounded-DEFAULT font-label text-sm uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center space-x-3">
<span>Order Sample</span>
</button>
<button className="border border-primary/20 hover:bg-surface-container transition-colors px-10 py-5 rounded-DEFAULT font-label text-sm uppercase tracking-widest">
                        Store Locator
                    </button>
</div>
</div>
</section>
{/* Technical Specs Bento Grid */}
<section className="py-24 px-8 md:px-24 bg-surface-container-low">
<div className="max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
<div className="md:col-span-1">
<h2 className="font-headline text-3xl mb-6">Technical Integrity</h2>
<p className="text-on-surface-variant font-body leading-relaxed mb-8">
                            Engineered for durability without compromising the velvet-matte finish. Our proprietary blend uses natural earth minerals for superior depth.
                        </p>
<div className="space-y-4">
<div className="group flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg hover:bg-surface transition-colors cursor-pointer border-b-2 border-transparent hover:border-secondary">
<span className="font-label text-xs uppercase tracking-widest">TDS (Technical Data)</span>
<span className="material-symbols-outlined text-secondary">download</span>
</div>
<div className="group flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg hover:bg-surface transition-colors cursor-pointer border-b-2 border-transparent hover:border-secondary">
<span className="font-label text-xs uppercase tracking-widest">MSDS (Safety Sheet)</span>
<span className="material-symbols-outlined text-secondary">security</span>
</div>
</div>
</div>
<div className="md:col-span-2 bg-surface-container-lowest p-8 md:p-12 shadow-sm">
<table className="w-full font-body text-sm">
<tbody className="divide-y divide-surface-container">
<tr className="py-6 block md:table-row">
<td className="py-6 font-label uppercase tracking-widest text-[10px] opacity-60 w-1/3">Coverage</td>
<td className="py-6 text-right md:text-left">400 - 450 sq. ft per gallon</td>
</tr>
<tr className="py-6 block md:table-row">
<td className="py-6 font-label uppercase tracking-widest text-[10px] opacity-60">Washability</td>
<td className="py-6 text-right md:text-left">Class 1 Scrub Resistance</td>
</tr>
<tr className="py-6 block md:table-row">
<td className="py-6 font-label uppercase tracking-widest text-[10px] opacity-60">Finish</td>
<td className="py-6 text-right md:text-left">Matte Velvet (3% Sheen)</td>
</tr>
<tr className="py-6 block md:table-row">
<td className="py-6 font-label uppercase tracking-widest text-[10px] opacity-60">VOC Content</td>
<td className="py-6 text-right md:text-left">&lt; 1g/L (Zero VOC)</td>
</tr>
<tr className="py-6 block md:table-row">
<td className="py-6 font-label uppercase tracking-widest text-[10px] opacity-60">Drying Time</td>
<td className="py-6 text-right md:text-left">Touch: 1hr | Recoat: 4hrs</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
{/* Usage Guide (Horizontal Flow) */}
<section className="py-32 px-8 md:px-24">
<div className="max-w-screen-2xl mx-auto text-center mb-20">
<span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-4 block">The Application</span>
<h2 className="font-headline text-4xl md:text-5xl">Mastering the Canvas</h2>
</div>
<div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative">
{/* Connectors for Desktop */}
<div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-[1px] bg-surface-container-highest z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center px-4">
<div className="w-24 h-24 bg-surface-container flex items-center justify-center rounded-full mb-8 border border-surface-container-highest">
<span className="material-symbols-outlined text-3xl text-primary">brush</span>
</div>
<h3 className="font-headline text-2xl mb-4">01. Prep</h3>
<p className="text-on-surface-variant font-body leading-relaxed">Ensure surfaces are clean, dry, and free of dust. We recommend Atelier Primer for high-absorption walls.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center px-4">
<div className="w-24 h-24 bg-surface-container flex items-center justify-center rounded-full mb-8 border border-surface-container-highest">
<span className="material-symbols-outlined text-3xl text-primary">format_paint</span>
</div>
<h3 className="font-headline text-2xl mb-4">02. Apply</h3>
<p className="text-on-surface-variant font-body leading-relaxed">Apply two uniform coats using a high-quality microfiber roller or natural bristle brush for edge work.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center px-4">
<div className="w-24 h-24 bg-surface-container flex items-center justify-center rounded-full mb-8 border border-surface-container-highest">
<span className="material-symbols-outlined text-3xl text-primary">check_circle</span>
</div>
<h3 className="font-headline text-2xl mb-4">03. Finish</h3>
<p className="text-on-surface-variant font-body leading-relaxed">Allow 4 hours between coats. Maximum durability is achieved after a 14-day full cure cycle.</p>
</div>
</div>
</section>
{/* Related Products (Asymmetric Grid) */}
<section className="py-24 px-8 md:px-24 bg-surface-container-low overflow-hidden">
<div className="max-w-screen-2xl mx-auto">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="font-headline text-4xl mb-4">Sister Pigments</h2>
<p className="font-body opacity-60">Colors that resonate in the same spectrum.</p>
</div>
<a className="font-label text-xs uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-secondary hover:border-secondary transition-all" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Product 1 */}
<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden mb-6 bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A textured interior wall painted in a warm terracotta shade with sunlight hitting the corner" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFjiqbZACp-yZUVXQ8TrccKGQ_i-XWlnexSNCmAfkiZ85T8z_Kap5l--aDQvEy0VSmbHyhs2axQw6TPaGvgfv8iAK_F2htaDmpAMZlE5Yi3ViMCeRwTZBcqG1Ak1-xTP_X-9BIbMMZ1d4MS-VwdTfFYC7DplrOZjzlaR7C1ni_j06rN2rB5TBAcLaggO42DwdFKB4QoNq6Y96mWsc7KfkVh1LM3IsAfx0dAH7CgONbEe60aoDTQXjZry_0ANR5P0XZI97c-JZA3w"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-headline text-xl mb-1">Raw Sienna 12</h4>
<p className="font-label text-[10px] uppercase tracking-widest opacity-60">Architectural Matte</p>
</div>
<span className="font-body">$124.00</span>
</div>
</div>
{/* Product 2 (Offset) */}
<div className="group cursor-pointer md:translate-y-12">
<div className="aspect-[4/5] overflow-hidden mb-6 bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Modern interior room with minimalist furniture and a deep earthy red accent wall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA70zk21D0LcMYYvA_BLTfNzpdPnjwszlewLgX1K3oQqA_GVE5DXpbvmoMXkJ0hWmzUdu_m7n-7MBGHe4rsnzX5mgj4Vd4-Op_ybGIbU-GS6lXzfo3j-o9ud3WDT50IZu9eB7iMldMkyrYmiIr2FM3jd5arJNX1V4QgmE1OV8BT9ZyEzS0OtwCsqcjHXIgVm5w2XbnyXbe-07qI9h6tfvox1cOVb8sYugf-r2APw2e5SgVW9I3uIYA2POxwbJEHuI8E4KzVghNNHw"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-headline text-xl mb-1">Burnt Umber 08</h4>
<p className="font-label text-[10px] uppercase tracking-widest opacity-60">Architectural Matte</p>
</div>
<span className="font-body">$124.00</span>
</div>
</div>
{/* Product 3 */}
<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden mb-6 bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A smooth painted wall in a soft ochre yellow color with elegant shadow patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbw87QMMFu_ElbE1gTcX3zZIm2SNvNzbSu-S_Xv37dvBI6UtPBpyWuZk4zuZC4xHmADX9TvS2FrhbtQnHoGIfo69BIuj_Sao2X_SefUx1joitRQykDEPzUgTIE-4G9fcQIjMTZB-6JKaWX9BBDuIvujhMuutXY6ZDFU5tE7JmUiTsWikv9t5H3aj48pJv8uw2dUE4HyfCBBQZ9Q6Cxx00-t0w6iYySJR4JnNkhFbbC7QMVn52u6uxezmwDTO6f6In9qJIGoWH3CQ"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-headline text-xl mb-1">Ochre Dust 02</h4>
<p className="font-label text-[10px] uppercase tracking-widest opacity-60">Architectural Matte</p>
</div>
<span className="font-body">$124.00</span>
</div>
</div>
</div>
</div>
</section>

    </main>
  );
}
