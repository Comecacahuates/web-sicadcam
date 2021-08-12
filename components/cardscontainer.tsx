import * as React from "react";

// TODO: Reemplazar con un módulo de Tailwind

/** Propiedades */
export interface CardsContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

/** Componente de comparación de precios */
export default function CardsContainer(props: CardsContainerProps) {
  /* Propiedades */
  const { children, ...divProps } = props;
  const { className, ...restProps } = divProps;

  /* Renderización */
  return (
    <div
      className={`flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-6 md:gap-3 lg:gap-6 xl:gap-12 justify-center ${className}`}
      {...restProps}
    >
      {children}
    </div>
  );
}
