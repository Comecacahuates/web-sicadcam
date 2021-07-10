import * as React from "react";
import Icon from "../components/icon";

/* Propiedades del componente de barra de navegación */
export interface NavbarProps {
  children: React.ReactNode;
}

/** Componente de barra de navegación */
export default function Navbar(props: NavbarProps) {
  /* Propiedades */
  const { children } = props;

  /* Estado */
  const [show, setShow] = React.useState<boolean>(false);

  /* Renderización */
  return (
    <nav
      className={`w-full px-3 sticky top-0 z-50 transition-colors duration-500 ${
        show ? "bg-my-blue-dark" : "bg-my-white bg-opacity-70"
      }`}
    >
      <div
        className={`container mx-auto flex flex-col overflow-hidden transition-height duration-500 ${
          show ? "h-screen" : "h-20"
        }`}
      >
        <div className="h-20 flex-none flex flex-row justify-between items-center">
          {/* Logo */}
          <div>
            <a
              href="#"
              className={`font-display text-2xl font-bold bg-transparent hover:bg-transparent no-underline transition-colors ${
                show
                  ? "text-white"
                  : "text-my-blue-dark hover:text-my-blue-dark"
              }`}
            >
              SICADCAM
            </a>
          </div>
          {/* Botón de menú desplegable */}
          <button
            className={`text-xl transition-tranform duration-500 ${
              show ? "-rotate-180 text-white" : "rotate-0 text-my-blue dark"
            }`}
            onClick={() => setShow(!show)}
          >
            <Icon icon="chevron-down" />
          </button>
        </div>
        {/* Enlaces */}
        <div
          className={`overflow-hidden transition-opacity lg:transition-none duration-500 ${
            show ? "opacity-100" : "opacity-0 lg:opacity-100"
          }`}
        >
          <ul>{children}</ul>
        </div>
      </div>
    </nav>
  );
}
