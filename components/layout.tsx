import * as React from "react";
import Head from "next/head";
import Navbar from "./navbar";
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
    <div className="bg-white">
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
      <Navbar activePage={route} />
      {/* Contenido principal */}
      <main className="flex flex-col w-full items-stretch">{children}</main>
      {/* Pie de página */}
      <Footer />
    </div>
  );
}
