import logoWhite from "../assets/logoWhite.png";

export default function Navbar() {
  return (
    <nav className="bg-white text-[#707478] h-14 w-[1240px] rounded-full flex items-center justify-between p-2  text-sm">
      <div className="flex items-center ">
        <img src={logoWhite} alt="Logo" className="h-[46px] w-[46px] mr-7" />
        <ul className="flex items-center space-x-4">
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Compliance</a>
          </li>
          <li>
            <a href="#">Tecnologia PIX</a>
          </li>
          <li>
            <a href="#">Funcionalidades</a>
          </li>
          <li>
            <a href="#">Aplicativo</a>
          </li>
          <li>
            <a href="#">Aplicativo</a>
          </li>
          <li>
            <a href="#">WiteLabel</a>
          </li>
        </ul>
      </div>
      <div>
        <button className="border border-black text-black mr-[11px]  py-2 px-4 rounded-full">
          Entrar
        </button>
        <button className="bg-black w-[216px] text-white py-2 px-4 rounded-full">
          Falar com um especialista
        </button>
      </div>
    </nav>
  );
}
