import * as React from "react";

/** Propiedades del componente de título de sección */
export interface SectionTitleProps extends React.HTMLProps<HTMLDivElement> {
  children: string;
}

/** Componente de título de sección */
export default function SectionTitle(props: SectionTitleProps) {
  /* Propiedades */
  const { children, ...divProps } = props;
  const { className } = divProps;

  /* Renderización */
  return (
    <div className={`h-80 flex items-center ${className}`}>
      <div className="flex-1">
        <h2 className="text-center">{children}</h2>
        <div className="w-1/2 h-1 mx-auto bg-white"></div>
      </div>
    </div>
  );
}
