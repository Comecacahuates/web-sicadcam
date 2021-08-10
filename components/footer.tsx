import * as React from "react";
import Link from "next/link";
import Icon from "./icon";

/* Componente de pie de página */
export default function Footer() {
  /* Renderización */
  return (
    <footer className="py-16 bg-my-gray">
      <div className="container mx-auto px-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Diseño 3D */}
        <div className="mb-12">
          <p className="h4 text-white">Diseño 3D</p>
          <ul>
            <li className="mb-3">
              <Link href="/Rhinoceros">
                <a className="text-white">Rhinoceros</a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/Grasshopper">
                <a className="text-white">Grasshopper</a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/IngenieriaInversa">
                <a className="text-white">Ingeniería inversa</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* Fabricación */}
        <div className="mb-12">
          <p className="h4 text-white">Fabricación</p>
          <ul>
            <li className="mb-3">
              <Link href="/RhinoCAM">
                <a className="text-white">RhinoCAM</a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/MaquinasCNC">
                <a className="text-white">Máquinas CNC</a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/Impresoras3D">
                <a className="text-white">Impresoras 3D</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* Educación */}
        <div className="mb-12">
          <p className="h4 text-white">Educación</p>
          <ul>
            <li className="mb-3">
              <Link href="/Cursos">
                <a className="text-white">Cursos de capacitación</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* Contacto */}
        <div className="mb-12">
          <p className="h4 text-white">Servicios de Ingeniería CAD/CAM</p>
          <address>
            <ul className="text-white">
              {/* Teléfono */}
              <li className="mb-3">
                <Icon icon="telephone-fill" />{" "}
                <Link href="#">
                  <a className="text-white">55 4655 4775</a>
                </Link>
              </li>
              {/* Correo */}
              <li className="mb-3">
                <Icon icon="envelope-fill" />{" "}
                <Link href="#">
                  <a className="text-white">contacto@sicadcam.com</a>
                </Link>
              </li>
            </ul>
            <div className="">
              {/* Facebook */}
              <Link href="#">
                <a className="text-white mr-3">
                  <Icon icon="facebook" />
                </a>
              </Link>
              {/* Telegram */}
              <Link href="#">
                <a className="text-white mr-3">
                  <Icon icon="telegram" />
                </a>
              </Link>
            </div>
          </address>
        </div>
      </div>
    </footer>
  );
}
