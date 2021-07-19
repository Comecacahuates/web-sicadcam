import * as React from "react";
import Image from "next/image";
import Link from "next/link";

/* Propiedades del componente de tarjeta con imagen */
export interface ImageCardProps extends React.HTMLProps<HTMLDivElement> {
  src: string;
  alt: string;
  href: string;
  children: React.ReactNode;
}

/* Componente de tarjeta con imagen */
export default function ImageCard(props: ImageCardProps) {
  /* Propiedades */
  const { src, alt, href, children, ...divProps } = props;
  const { className } = divProps;

  /* Renderización */
  return (
    <div className={`${className} relative overflow-hidden group`}>
      <Link href={href}>
        <a className="no-underline">
          <div className="absolute inset-0 z-10 px-3 md:px-10 flex items-center justify-center">
            {children}
          </div>
        </a>
      </Link>
      <div className="absolute inset-0 filter transition-brightness duration-500 brightness-40 group-hover:brightness-60 transform group-hover:scale-105">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
        />
      </div>
    </div>
  );
}
