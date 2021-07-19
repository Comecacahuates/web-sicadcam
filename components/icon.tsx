import * as React from "react";

/** Propiedades del componente de ícono */
export interface IconProps extends React.HTMLProps<HTMLElement> {
  icon: string;
}

/** Componente de ícono */
export default function Icon(props: IconProps) {
  const { icon, ...iProps } = props;
  const { className, ...restProps } = iProps;

  /* Renderización */
  return <i className={`bi bi-${icon} ${className}`} {...restProps} />;
}
