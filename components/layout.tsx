import * as React from "react";
import Head from "next/head";
import Navbar from "./navbar";
import NavbarItem from "./navbaritem";
import Footer from "./footer";

/* Propiedades del componente de diseño de página */
export interface LayoutProps {
  route: string;
  title: string;
  author: string;
  description: string;
  ogImage?: string;
  ogDescription?: string;
  ogTitle?: string;
  children?: React.ReactNode;
}

/* Componente de diseño de página */
export default function Layout(props: LayoutProps) {
  /* Propiedades */
  const {
    route,
    title,
    author,
    description,
    ogImage,
    ogDescription,
    ogTitle,
    children,
  }: LayoutProps = props;

  /* Renderización */
  return (
    <div className="bg-indigo-200">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="author" content={author} />
        <meta name="description" content={description} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogDescription && (
          <meta property="og:description" content={ogDescription} />
        )}
      </Head>
      {/* Barra de navegación */}
      <Navbar>
        <NavbarItem href="/" activePage={route}>
          Inicio
        </NavbarItem>
        <NavbarItem href="/Diseño3D" activePage={route}>
          Diseño 3D
        </NavbarItem>
        <NavbarItem href="/DiseñoParametrico" activePage={route}>
          Diseño paramétrico
        </NavbarItem>
        <NavbarItem href="/MaquinadoCNC" activePage={route}>
          Maquinado CNC
        </NavbarItem>
        <NavbarItem href="/Impresion3D" activePage={route}>
          Impresión 3D
        </NavbarItem>
        <NavbarItem href="/IngenieriaInversa" activePage={route}>
          Ingeniería inversa
        </NavbarItem>
        <NavbarItem href="/Educacion" activePage={route}>
          Educación
        </NavbarItem>
      </Navbar>
      {/* Contenido principal */}
      <main className="flex flex-col w-full items-stretch">{children}</main>
      {/* Pie de página */}
      <Footer />
    </div>
  );
}
