import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import SectionTitle from "../components/sectiontitle";
import SectionImg from "../components/sectionimg";
import Icon from "../components/icon";

export default function Home() {
  return (
    <Layout
      route="/"
      title="Servicios de Ingeniería CAD/CAM | Inicio"
      author="Adrián Juárez Monroy"
      description="Las mejor fabricación digital"
    >
      {/* Hero */}
      <section className="h-screen flex flex-col lg:grid lg:grid-cols-2">
        {/* Título */}
        <div className="flex-none lg:flex items-center mx-auto px-3 lg:px-8">
          <div className="py-12 text-center lg:text-right">
            <h1 className="text-my-blue-dark">
              Las mejores herramientas para fabricación digital
            </h1>
            <p className="h4 text-gray-500">Diseño 3D & Fabricación</p>
          </div>
        </div>
        {/* Imagen */}
        <div className="flex-1 relative">
          <Image
            src="https://placeimg.com/640/480/nature"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>
      </section>
      {/* Diseño 3D */}
      <section className="my-36 md:h-screen md:grid md:grid-cols-2 xl:container xl:mx-auto">
        <div className="h-40 md:h-auto md:flex md:items-center md:justify-center">
          <h2 className="text-center">Diseño 3D</h2>
        </div>
        {/* Rhinoceros */}
        <div className="h-96 md:h-auto relative md:order-first">
          <div className="absolute inset-0 z-10 px-3 md:px-10 py-12 flex items-center justify-center xl:px-10">
            <div className="text-center">
              <h3>
                <Link href="#">
                  <a className="text-white">Rhinoceros</a>
                </Link>
              </h3>
              <p className="lead text-white">
                Crea, edita, analiza y anima modelos 3D fácilmente.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 filter brightness-40">
            <Image
              src="https://placeimg.com/640/480/nature"
              alt="Rhinoceros: software de diseño 3D"
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
            />
          </div>
        </div>
        {/* Grasshopper */}
        <div className="h-96 md:h-auto relative">
          <div className="absolute inset-0 z-10 px-3 md:px-10 py-12 flex items-center justify-center xl:px-10">
            <div className="text-center">
              <h3>
                <Link href="#">
                  <a className="text-white">Grasshopper</a>
                </Link>
              </h3>
              <p className="lead text-white">
                Un editor gráfico de algoritmos para diseño paramétrico.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 filter brightness-40">
            <Image
              src="https://placeimg.com/640/480/nature"
              alt="Grasshopper: software para diseño 3D paramétrico"
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
            />
          </div>
        </div>
        {/* Digitalizadores MicroScribe */}
        <div className="h-96 md:h-auto relative">
          <div className="absolute inset-0 z-10 px-3 md:px-10 py-12 flex items-center justify-center xl:px-10">
            <div className="text-center">
              <h3>
                <Link href="#">
                  <a className="text-white">Digitalizadores MicroScribe</a>
                </Link>
              </h3>
              <p className="lead text-white">
                Utiliza modelos reales como referencia para recrearlos
                digitalmente.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 filter brightness-40">
            <Image
              src="https://placeimg.com/640/480/nature"
              alt="Brazo digitalizador 3D"
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
            />
          </div>
        </div>
      </section>
      {/* Fabricación */}
      <section className="flex flex-col">
        <SectionTitle textColor="black">Fabricación</SectionTitle>
        {/* RhinoCAM */}
        <SectionImg src="https://placeimg.com/640/480/nature" alt="Alt">
          <h3>RhinoCAM</h3>
          <p className="lead">
            Genera los códigos de maquinado CNC dentro de Rhinoceros para
            fabricar tus modelos.
          </p>
        </SectionImg>
        {/* Máquinas CNC */}
        <SectionImg src="https://placeimg.com/640/480/nature" alt="Alt">
          <h3>Máquinas CNC</h3>
          <p className="lead">
            Fabrica tus modelos en una gran cantidad de materiales.
          </p>
        </SectionImg>
        {/* Impresión Impresoras 3D */}
        <SectionImg src="https://placeimg.com/640/480/nature" alt="Alt">
          <h3>Impresoras 3D</h3>
          <p className="lead">
            Obtén prototipos y piezas funcionales en cuestión de horas.
          </p>
        </SectionImg>
      </section>
      {/* Educación */}
      <section className="flex flex-col bg-my-yellow">
        <SectionTitle textColor="black">Educación</SectionTitle>
        <div className="container mx-auto px-3 py-10">
          <p className="lead">
            Aprende con nosotros a utilizar las tecnologías que ponemos a tu
            disposición.
          </p>
        </div>
        <div className="h-96 relative">
          <Image
            src="https://placeimg.com/640/480/nature"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>
      </section>
    </Layout>
  );
}
