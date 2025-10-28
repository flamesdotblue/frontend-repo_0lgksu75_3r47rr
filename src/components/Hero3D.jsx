import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative">
      <div className="relative h-[70vh] min-h-[520px] w-full overflow-hidden rounded-b-[2rem] bg-gradient-to-b from-white to-slate-50">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/90" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-black/10 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Now supporting multiple niches with one cart
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Shop everything you love in one modern marketplace
            </h1>
            <p className="mt-4 max-w-xl text-slate-600">
              Discover curated picks across fashion, tech, home, beauty and more. A sleek, glass‑morphic design for a seamless shopping experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#featured" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">Browse featured</a>
              <a href="#categories" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-black/10 hover:bg-slate-50">Explore categories</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
