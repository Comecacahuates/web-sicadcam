import * as React from "react";
import Link from "next/link";
import Icon from "./icon";

/* Componente de pie de página */
export default function Footer() {
  /* Renderización */
  return (
    <footer className="flex flex-col px-3 py-6">
      {/* Diseño 3D */}
      <div className="py-3">
        <span className="h3">Diseño 3D</span>
        <ul>
          <li className="my-3">
            <a className="a" href="#">
              Rhinoceros
            </a>
          </li>
          <li className="my-3">
            <a className="a" href="#">
              Grasshopper
            </a>
          </li>
          <li className="my-3">
            <a className="a" href="#">
              Flamingo
            </a>
          </li>
          <li className="my-3">
            <a className="a" href="#">
              Bongo
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        {/* Fabricación */}
        <div className="py-3">
          <span className="h3">Fabricación</span>
          <ul>
            <li className="my-3">
              <a className="a" href="#">
                RhinoCAM
              </a>
            </li>
            <li className="my-3">
              <a className="a" href="#">
                Máquinas CNC
              </a>
            </li>
            <li className="my-3">
              <a className="a" href="#">
                Impresoras 3D
              </a>
            </li>
          </ul>
        </div>
        {/* Ingeniería inversa */}
        <div className="py-3">
          <span className="h3">Ingeniería inversa</span>
          <ul>
            <li className="py-3">
              <a className="a" href="#">
                Digitalizadores MicroScribe
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Contacto */}
      <div className="py-3">
        <span className="h3">Contacto</span>
        <address>
          <ul>
            {/* Teléfono */}
            <li className="my-3">
              <Icon icon="telephone-fill" />
              {` `}
              <a className="a" href="#">
                55 4655 4775
              </a>
            </li>
            {/* Correo */}
            <li className="my-3">
              <Icon icon="envelope-fill" />
              {` `}
              <a className="a" href="#">
                contacto@sicadcam.com
              </a>
            </li>
            {/* Telegram */}
            <li className="my-3">
              <Icon icon="telegram" />
              {` `}
              <a className="a" href="#">
                t.me/sicadcam
              </a>
            </li>
            {/* Facebook */}
            <li className="my-3">
              <Icon icon="facebook" /> {` `}
              <a className="a" href="#">
                /sicadcam
              </a>
            </li>
          </ul>
        </address>
      </div>
    </footer>
  );
}
