function Hamurger() {
  return (
    <button className="lg:hidden p-2 group" aria-label="Toggle menu">
      {/* 3×3 dot grid in app colors */}
      <span className="grid grid-cols-3 gap-[4px] w-6 h-6">
        {[...Array(9)].map((_, i) => (
          <span
            key={i}
            className={`rounded-full w-[6px] h-[6px] transition-all duration-300 group-hover:scale-110 ${
              i % 2 === 0 ? "bg-accent-500" : "bg-primary-800"
            }`}
          />
        ))}
      </span>
    </button>
  );
}

export default Hamurger;
