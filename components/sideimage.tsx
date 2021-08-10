import * as React from "react";
import Image from "next/image";

/* Propiedades del componente de imagen lateral */
export interface SideImageProps extends React.HTMLProps<HTMLDivElement> {
  src: string;
  alt: string;
  reverse?: boolean;
  children: React.ReactNode;
}

/* Componente de imagen lateral */
export default function SideImage(props: SideImageProps) {
  /* Propiedades */
  const { src, alt, reverse, children, ...divProps } = props;
  const { className, ...restProps } = divProps;

  /* Renderización */
  return (
    <div className={`lg:grid lg:grid-cols-12 ${className}`} {...restProps}>
      <div
        className={`px-3 lg:px-8 lg:py-20 ${
          reverse
            ? "lg:col-start-7 lg:col-end-13 xl:col-end-12 2xl:col-end-11 lg:order-last"
            : "lg:text-right lg:col-start-1 xl:col-start-2 2xl:col-start-3 lg:col-end-7"
        }`}
      >
        {children}
      </div>
      {/* Imagen */}
      <div className="h-screen lg:h-auto lg:col-span-6 relative">
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
