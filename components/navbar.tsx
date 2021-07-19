import * as React from "react";
import Link from "next/link";
import Icon from "../components/icon";

/* Elementos de la barra de navegación */
type Item = {
  title: string;
  href: string;
  subitems?: Subitem[];
};
type Subitem = {
  title: string;
  href: string;
};
const navbarItems: Item[] = [
  { title: "Inicio", href: "/" },
  {
    title: "Diseño 3D",
    href: "#",
    subitems: [
      { title: "Rhinoceros", href: "/Rhinoceros" },
      { title: "Grasshopper", href: "#" },
      { title: "Digitalizadores MicroScribe", href: "#" },
    ],
  },
  {
    title: "Fabricación",
    href: "#",
    subitems: [
      { title: "RhinoCAM", href: "#" },
      { title: "Máquinas CNC", href: "#" },
      { title: "Impresoras 3D", href: "#" },
    ],
  },
  { title: "Educación", href: "#" },
];

/* Propiedades del componente de barra de navegación */
export interface NavbarProps {
  activePage: string;
}

/** Componente de barra de navegación */
export default function Navbar(props: NavbarProps) {
  /* Propiedades */
  const { activePage } = props;

  /* Estado */
  const [show, setShow] = React.useState<boolean>(false);

  /* Renderización */
  return (
    <nav
      className={`w-full px-3 sticky top-0 z-50 transition-colors duration-500 shadow-md md:bg-my-blue ${
        show ? "bg-my-blue-dark" : "bg-my-blue"
      }`}
    >
      <div
        className={`container mx-auto md:overflow-visible transition-height duration-500 md:transition-none md:h-16 md:flex md:justify-between md:items-center ${
          show
            ? "h-screen overflow-y-auto overscroll-contain"
            : "h-16 overflow-hidden"
        }`}
      >
        <div className="h-16 flex justify-between items-center">
          {/* Logo */}
          <Link href="#">
            <a className="font-display text-2xl text-white font-bold no-underline">
              SICADCAM
            </a>
          </Link>
          {/* Botón de menú desplegable */}
          <button
            className={`text-white text-xl transition-tranform duration-500 md:hidden ${
              show ? "-rotate-180" : "rotate-0"
            }`}
            onClick={() => setShow(!show)}
          >
            <Icon icon="caret-down-fill" />
          </button>
        </div>
        {/* Enlaces */}
        <ul
          className={`transition-opacity lg:transition-none duration-500 md:flex md:opacity-100 ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          {navbarItems.map((item: Item, index: number) => (
            <NavbarItem
              key={index}
              title={item.title}
              href={item.href}
              active={
                activePage === item.href ||
                (item.subitems &&
                  item.subitems
                    .map((subitem: Subitem) => subitem.href)
                    .includes(activePage))
              }
            >
              {item.subitems
                ? item.subitems.map((subitem: Subitem, index: number) => (
                    <NavbarSubitem
                      key={index}
                      title={subitem.title}
                      href={subitem.href}
                      active={activePage === subitem.href}
                    />
                  ))
                : null}
            </NavbarItem>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* Propiedades del componente de elemento de la barra de navegación */
interface NavbarItemProps {
  title: string;
  href?: string;
  active?: boolean;
  children?: React.ReactNode;
}

/* Componente de elemento de la barra de navegación */
function NavbarItem(props: NavbarItemProps) {
  /* Propiedades */
  const { title, href, active, children } = props;

  /* Renderización */
  return (
    <li className="pb-3 md:pb-0 mb-3 md:mb-0 md:mx-6 border-b border-white border-opacity-30 md:border-0 relative group">
      <Link href={href || "#"}>
        <a
          className={`text-white no-underline hover:text-opacity-100 ${
            active ? "font-bold text-opacity-100" : "text-opacity-70"
          }`}
        >
          {title}
          {children ? (
            <React.Fragment>
              {" "}
              <Icon icon="caret-down-fill" className="hidden md:inline" />
            </React.Fragment>
          ) : null}
        </a>
      </Link>
      {children ? (
        <ul className="ml-3 mt-3 md:m-0 md:pt-3 md:px-3 md:w-36 md:absolute md:left-0 md:top-6 md:bg-my-blue md:rounded-b-md md:shadow-2xl md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100">
          {children}
        </ul>
      ) : null}
    </li>
  );
}

/* Componente de subelemento de la barra de navegación */
function NavbarSubitem(props: NavbarItemProps) {
  /* Propiedades */
  const { title, href, active } = props;

  /* Renderización */
  return (
    <li className="mb-3">
      <Link href={href || "#"}>
        <a
          className={`text-white no-underline hover:text-opacity-100 ${
            active ? "font-bold text-opacity-100" : "text-opacity-70"
          }`}
        >
          {title}
        </a>
      </Link>
    </li>
  );
}
