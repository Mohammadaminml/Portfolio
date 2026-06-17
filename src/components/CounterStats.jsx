export default function CounterStats() {
  return (
    <section className="py-24" id="stats">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12">Statistics</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["5+", "Years Coding"],
            ["20+", "Projects"],
            ["150+", "Students"],
            ["100%", "Passion"],
          ].map(([num, label]) => (
            <div key={label} className="glass p-8 rounded-3xl text-center">
              <h3 className="text-5xl font-bold text-blue-400">{num}</h3>
              <p className="mt-3 text-gray-300">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}