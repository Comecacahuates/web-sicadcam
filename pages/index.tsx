import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import Icon from "../components/icon";

export default function Home() {
  return (
    <Layout
      route="/"
      title="Servicios de Ingeniería CAD/CAM | Inicio"
      author="Adrián Juárez Monroy"
      description="Soluciones para tus necesidades de fabricación digital"
    >
      {/* Título */}
      <section className="pt-5 h-screen flex flex-col">
        <div className="flex-1 flex items-center mx-auto px-3">
          <div>
            <p className="h3 text-blue-dark text-center">
              Servicios de ingeniería CAD/CAM
            </p>
            <h1 className="text-center">
              Las mejores herramientas para fabricación digital
            </h1>
            <p className="h3 text-center">Diseño 3D & Fabricación</p>
          </div>
        </div>
        <div className="flex-1 h-96 relative">
          <Image
            src="https://placeimg.com/640/480/nature"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>
      </section>
      {/* Diseño 3D */}
      <section className="flex flex-col">
        <div className="h-80 flex items-center bg-my-blue text-white">
          <div className="flex-1">
            <h2 className="text-center">Diseño 3D</h2>
          </div>
        </div>
        {/* Rhinoceros */}
        <div className="container flex flex-col">
          <h1>Rhino</h1>
        </div>
      </section>
      {/* Creación del modelo 3D */}
      <section className="px-3 pt-10 bg-my-yellow">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div>
              <h2 className="text-black">Creación de modelos 3D</h2>
              <p className="lead">
                Genera la geometría de tus modelos desde cero o con un modelo
                físico de referencia.
              </p>
            </div>
            <div className="flex flex-col py-3">
              {/* Diseño 3D */}
              <div className="h-60">
                <h3 className="text-black">Diseño 3D</h3>
                <p>
                  Crea en la computadora el modelo que imaginaste con las
                  herramientas que te ofrece Rhinoceros.
                </p>
                <p>
                  <Link href="#">
                    <a className="text-black">
                      Más información <Icon icon="arrow-right" />
                    </a>
                  </Link>
                </p>
              </div>
              {/* Ingeniería inversa */}
              <div className="h-60">
                <h3 className="text-black">Ingeniería inversa</h3>
                <p>
                  Lleva un modelo físico al mundo digital mediante los brazos
                  digitalizadores MicroScribe.
                </p>
                <p>
                  <Link href="#">
                    <a className="text-black">
                      Más información <Icon icon="arrow-right" />
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Imagen */}
      <div className="h-96 relative diagonal-top-right before:bg-my-yellow">
        <Image
          src="https://placeimg.com/640/480/nature"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </div>
      {/* Métodos de fabricación */}
      <section className="px-3 py-5">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div>
              <h2>Métodos de fabricación</h2>
              <p className="lead">
                Planifica las herramientas con las que fabricarás tu idea.
              </p>
            </div>
            <div className="flex flex-col py-3">
              {/* Maquinado CNC */}
              <div className="h-60">
                <h3>Maquinado CNC</h3>
                <p>
                  Genera los códigos de maquinado para fabricación CNC con
                  RhinoCAM.
                </p>
                <p>
                  <Link href="#">
                    <a>
                      Más información <Icon icon="arrow-right" />
                    </a>
                  </Link>
                </p>
              </div>
              {/* Construcción por rebanadas */}
              <div className="h-60">
                <h3>Construcción por rebanadas</h3>
                <p>
                  Utiliza Grasshopper para crear rebanadas a partir de tu modelo
                  y prepáralas para corte.
                </p>
                <p>
                  <Link href="#">
                    <a>
                      Más información <Icon icon="arrow-right" />
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fabricación */}
      <section className="px-3 py-5">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div>
              <h2>Fabricación</h2>
              <p className="lead">
                Utiliza la tecnología para llevar tu modelo al mundo real
              </p>
            </div>
            <div className="flex flex-col py-3">
              {/* Maquinado CNC */}
              <div className="h-60">
                <h3>Maquinado CNC</h3>
                <p>
                  Utiliza tus códigos de maquinado para fabricar tu modelo con
                  una máquina CNC.
                </p>
                <p>
                  <Link href="#">
                    <a>
                      Más información <Icon icon="arrow-right" />
                    </a>
                  </Link>
                </p>
              </div>
              {/* Impresión 3D */}
              <div className="h-60">
                <h3>Impresión 3D</h3>
                <p>Obtén prototipos físicos muy fácil y rápidamente.</p>
                <p>
                  <Link href="#">
                    <a>
                      Más información <Icon icon="arrow-right" />
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Educación */}
      <section className="px-3 py-5">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div>
              <h2>Educación</h2>
              <p className="lead">
                Capacítate con nosotros para dominar las tecnologías y
                herramientas que ponemos a tu disposición.
              </p>
              <p>
                <Link href="#">
                  <a>
                    Más información <Icon icon="arrow-right" />
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
