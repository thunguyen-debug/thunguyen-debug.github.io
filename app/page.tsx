import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Thu Nguyen
          </h1>
          <p className="text-xl text-slate-600">
            Finance student at Macquarie University specializing in quantitative research
          </p>
          <p className="text-lg text-slate-500">
            Deep research in quant finance • Algorithmic trading • Portfolio optimization
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <Link
              href="/projects"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              View Research
            </Link>
            <a
              href="https://github.com/thunguyen-debug"
              target="_blank"
              className="border border-slate-300 hover:bg-slate-100 px-6 py-3 rounded-lg font-medium transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold mb-8">Featured Research</h2>
        <div className="border border-slate-200 rounded-lg p-6 hover:border-green-500 transition">
          <h3 className="text-2xl font-bold mb-2">Quant Finance Research Hub</h3>
          <p className="text-slate-600 mb-4">
            Institutional-grade quantitative finance research spanning portfolio optimization, factor analysis, derivatives pricing, and algorithmic trading strategies. Deep dives into market microstructure, risk models, and ML-driven alpha generation.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Python', 'NumPy', 'SciPy', 'Pandas', 'PyTorch', 'Zipline'].map((tag) => (
              <span key={tag} className="bg-slate-100 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/thunguyen-debug" className="text-green-600 hover:text-green-700 font-medium">
              GitHub →
            </a>
            <a href="/blog" className="text-green-600 hover:text-green-700 font-medium">
              Research Papers →
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-green-600">5+</p>
            <p className="text-slate-600">Years Finance</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-green-600">20+</p>
            <p className="text-slate-600">Quant Projects</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-green-600">2026-28</p>
            <p className="text-slate-600">Macquarie Uni</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Research Insights</h2>
          <p className="text-slate-700 mb-6">
            Deep dives into portfolio theory, market microstructure, factor investing, derivatives pricing, and machine learning in finance.
          </p>
          <Link href="/blog" className="text-green-600 hover:text-green-700 font-medium">
            Read Research Papers →
          </Link>
        </div>
      </section>
    </div>
  );
}