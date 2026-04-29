function Hamurger() {
  return (
    <button className="lg:hidden p-2 group" aria-label="Toggle menu">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-200 group-hover:-rotate-90"
      >
        {/* Row 1 */}
        <circle cx="4"  cy="4"  r="2" fill="#C6FF00" />
        <circle cx="12" cy="4"  r="2" fill="#1E1B22" />
        <circle cx="20" cy="4"  r="2" fill="#C6FF00" />
        {/* Row 2 */}
        <circle cx="4"  cy="12" r="2" fill="#1E1B22" />
        <circle cx="12" cy="12" r="2" fill="#C6FF00" />
        <circle cx="20" cy="12" r="2" fill="#1E1B22" />
        {/* Row 3 */}
        <circle cx="4"  cy="20" r="2" fill="#C6FF00" />
        <circle cx="12" cy="20" r="2" fill="#1E1B22" />
        <circle cx="20" cy="20" r="2" fill="#C6FF00" />
      </svg>
    </button>
  );
}

export default Hamurger;
