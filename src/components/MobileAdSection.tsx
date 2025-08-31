import aplicativo from "../assets/aplicativo.png";
import mobile from "../assets/mobile.png";

export default function AppBanner() {
  return (
    <section
      id="aplicativo"
      className="flex justify-center bg-[#FAFAFA] pb-[120px]"
    >
      {/* Mostra só no desktop/tablet */}
      <img
        src={aplicativo}
        alt="Aplicativo Desktop"
        className="hidden sm:block w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] h-auto object-contain"
      />

      {/* Mostra só no celular */}
      <img
        src={mobile}
        alt="Aplicativo Mobile"
        className="block sm:hidden w-full max-w-[90%] h-auto object-contain"
      />
    </section>
  );
}
