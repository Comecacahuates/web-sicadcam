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
    <React.Fragment>
      {/* Barra de navegación */}
      <nav className="bg-indigo-800 w-full sticky top-0 z-50">
        <div
          className={`container mx-auto flex flex-col overflow-hidden transition-height duration-500 ${
            show ? "h-screen" : "h-20"
          }`}
        >
          <div className="h-20 px-8 flex-none flex flex-row justify-between items-center">
            {/* Logo */}
            <div>
              <a href="#" className="text-white">
                Sicadcam
              </a>
            </div>
            {/* Botón de menú desplegable */}
            <button
              className={`text-white transition-tranform lg:transition-none duration-500 ${
                show ? "-rotate-180" : "rotate-0"
              }`}
              onClick={() => setShow(!show)}
            >
              <Icon icon="chevron-down" />
            </button>
          </div>
          {/* Enlaces */}
          <div
            className={`px-8 overflow-hidden transition-opacity lg:transition-none duration-500 ${
              show ? "opacity-100" : "opacity-0 lg:opacity-100"
            }`}
          >
            <ul>{children}</ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
