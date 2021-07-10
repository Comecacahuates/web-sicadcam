import * as React from "react";
import Link from "next/link";
import Icon from "./icon";

/* Componente de pie de página */
export default function Footer() {
  /* Renderización */
  return (
    <footer className="px-3 py-10 bg-my-gray text-white">
      <div className="container mx-auto">
        <div className="flex flex-col">
          {/* Diseño 3D */}
          <div className="py-3">
            <span className="h3 text-white">Diseño 3D</span>
            <ul>
              <li className="my-3">
                <Link href="#">
                  <a className="text-white">Rhinoceros</a>
                </Link>
              </li>
              <li className="my-3">
                <Link href="#">
                  <a className="text-white">Grasshopper</a>
                </Link>
              </li>
              <li className="my-3">
                <Link href="#">
                  <a className="text-white">Flamingo</a>
                </Link>
              </li>
              <li className="my-3">
                <Link href="#">
                  <a className="text-white">Bongo</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            {/* Fabricación */}
            <div className="py-3">
              <span className="h3 text-white">Fabricación</span>
              <ul>
                <li className="my-3">
                  <Link href="#">
                    <a className="text-white">RhinoCAM</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="#">
                    <a className="text-white">Máquinas CNC</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="#">
                    <a className="text-white">Impresoras 3D</a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Ingeniería inversa */}
            <div className="py-3">
              <span className="h3 text-white">Ingeniería inversa</span>
              <ul>
                <li className="py-3">
                  <Link href="#">
                    <a className="text-white">Digitalizadores MicroScribe</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Contacto */}
          <div className="py-3">
            <span className="h3 text-white">Contacto</span>
            <address>
              <ul>
                {/* Teléfono */}
                <li className="my-3">
                  <Icon icon="telephone-fill" />
                  {` `}
                  <a className="text-white" href="#">
                    55 4655 4775
                  </a>
                </li>
                {/* Correo */}
                <li className="my-3">
                  <Icon icon="envelope-fill" />
                  {` `}
                  <a className="text-white" href="#">
                    contacto@sicadcam.com
                  </a>
                </li>
                {/* Telegram */}
                <li className="my-3">
                  <Icon icon="telegram" />
                  {` `}
                  <a className="text-white" href="#">
                    /sicadcam
                  </a>
                </li>
                {/* Facebook */}
                <li className="my-3">
                  <Icon icon="facebook" /> {` `}
                  <a className="text-white" href="#">
                    /sicadcam
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
