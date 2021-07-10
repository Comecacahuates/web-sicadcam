import * as React from "react";
import Link from "next/link";

/* Propiedades del componente de elemento de barra de navegación */
export interface NavbarItemProps {
  href?: string;
  activePage?: string;
  children: React.ReactNode;
}

/** Componente de elemento de barra de navegación */
export default function NavbarItem(props: NavbarItemProps) {
  /* Propiedades */
  const { href, activePage, children }: NavbarItemProps = props;

  /* Renderización */
  return (
    <li className="py-3">
      <Link href={href || "#"}>
        <a
          className={`py-3 bg-transparent no-underline hover:bg-transparent text-white hover:text-opacity-100 ${
            activePage === href
              ? "font-bold text-opacity-100"
              : "text-opacity-70"
          }`}
        >
          {children}
        </a>
      </Link>
    </li>
  );
}
