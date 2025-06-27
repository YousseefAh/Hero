import Image from "next/image";

function Hamurger() {
  return (
    <button className="lg:hidden">
      <Image
        src="/hamburger.svg"
        alt="Hamburger menu icon"
        width={24}
        height={24}
        className="w-6 h-6 transition-all duration-200 hover:-rotate-90"
      />
    </button>
  );
}

export default Hamurger;
