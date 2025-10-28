const products = [
  {
    id: 1,
    name: 'Aero Mesh Running Shoes',
    price: 129,
    tag: 'Sports',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Midnight Wireless Headphones',
    price: 219,
    tag: 'Electronics',
    image:
      'https://images.unsplash.com/photo-1518447533718-7db2579c2eea?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Minimalist Smart Watch',
    price: 179,
    tag: 'Gadgets',
    image:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Glass Carafe + Tumbler Set',
    price: 59,
    tag: 'Home',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Everyday Oversized Hoodie',
    price: 89,
    tag: 'Fashion',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Ergo Studio Chair',
    price: 349,
    tag: 'Office',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function ProductShowcase() {
  return (
    <section id="featured" className="relative py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Featured products</h2>
            <p className="mt-1 text-sm text-slate-600">Hand‑picked items from multiple niches</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700">View all</a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {products.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700">{p.tag}</span>
                  <span className="text-sm font-semibold text-slate-900">${p.price}</span>
                </div>
                <h3 className="mt-2 line-clamp-2 text-sm font-medium text-slate-900">{p.name}</h3>
                <button className="mt-3 w-full rounded-xl bg-slate-900 py-2 text-sm font-semibold text-white hover:bg-slate-800">Add to cart</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
