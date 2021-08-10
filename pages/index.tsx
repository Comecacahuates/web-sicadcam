import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import ImageCard from "../components/imagecard";

export default function Home() {
  return (
    <Layout
      route="/"
      title="Inicio | Servicios de Ingeniería CAD/CAM"
      author="Adrián Juárez Monroy"
      description="Las mejores herramientas de fabricación digital"
    >
      {/* Hero */}
      <section>
        <div className="h-screen flex flex-col lg:grid lg:grid-cols-2">
          {/* Título */}
          <div className="flex-none lg:flex lg:items-center mx-auto px-3 lg:px-8">
            <div className="py-12 text-center lg:text-right">
              <h1>Las mejores herramientas para fabricación digital</h1>
              <p className="h3 text-gray-600">Diseño 3D / Fabricación</p>
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
        </div>
      </section>
      {/* Diseño 3D */}
      <section className="bg-gray-200">
        <div className="my-20 md:h-screen md:grid md:grid-cols-2 md:auto-rows-fr xl:container xl:mx-auto">
          <div className="h-28 md:h-auto md:flex md:items-center md:justify-center">
            <h2 className="text-center">Diseño 3D</h2>
          </div>
          {/* Rhinoceros */}
          <ImageCard
            className="h-96 md:h-auto md:order-first"
            src="https://placeimg.com/640/480/nature"
            alt="Rhinoceros: software de diseño 3D"
            href="/Rhinoceros"
          >
            <div className="text-center">
              <h3 className="text-white">Rhinoceros</h3>
              <p className="lead text-white">
                Crea, edita, analiza y anima modelos 3D fácilmente.
              </p>
            </div>
          </ImageCard>
          {/* Grasshopper */}
          <ImageCard
            className="h-96 md:h-auto"
            src="https://placeimg.com/640/480/nature"
            alt="Grasshopper: software para diseño 3D paramétrico"
            href="/Grasshopper"
          >
            <div className="text-center">
              <h3 className="text-white">Grasshopper</h3>
              <p className="lead text-white">
                Un editor gráfico de algoritmos para diseño paramétrico.
              </p>
            </div>
          </ImageCard>
          {/* Digitalizadores MicroScribe */}
          <ImageCard
            className="h-96 md:h-auto"
            src="https://placeimg.com/640/480/nature"
            alt="Brazo digitalizador 3D"
            href="#"
          >
            <div className="text-center">
              <h3 className="text-white">Digitalizadores MicroScribe</h3>
              <p className="lead text-white">
                Utiliza modelos reales como referencia para recrearlos
                digitalmente.
              </p>
            </div>
          </ImageCard>
        </div>
      </section>
      {/* Fabricación */}
      <section>
        <div className="my-20 md:h-screen md:grid md:grid-cols-2 md:auto-rows-fr xl:container xl:mx-auto">
          <div className="h-28 md:h-auto md:flex md:items-center md:justify-center">
            <h2 className="text-center">Fabricación</h2>
          </div>
          {/* RhinoCAM */}
          <ImageCard
            className="h-96 md:h-auto"
            src="https://placeimg.com/640/480/nature"
            alt="RhinoCAM: software de maquinado CNC"
            href="#"
          >
            <div className="text-center">
              <h3 className="text-white">RhinoCAM</h3>
              <p className="lead text-white">
                Genera los códigos de maquinado CNC dentro de Rhinoceros para
                fabricar tus modelos.
              </p>
            </div>
          </ImageCard>
          {/* Máquinas CNC */}
          <ImageCard
            className="h-96 md:h-auto"
            src="https://placeimg.com/640/480/nature"
            alt="Máquina CNC"
            href="#"
          >
            <div className="text-center">
              <h3 className="text-white">Máquinas CNC</h3>
              <p className="lead text-white">
                Fabrica tus modelos en una gran cantidad de materiales.
              </p>
            </div>
          </ImageCard>
          {/* Impresoras 3D */}
          <ImageCard
            className="h-96 md:h-auto"
            src="https://placeimg.com/640/480/nature"
            alt="Impresora 3D"
            href="#"
          >
            <div className="text-center">
              <h3 className="text-white">Impresoras 3D</h3>
              <p className="lead text-white">
                Obtén prototipos y piezas funcionales en cuestión de horas.
              </p>
            </div>
          </ImageCard>
        </div>
      </section>
      {/* Educación */}
      <section className="flex flex-col bg-my-yellow">
        <h2>Educación</h2>
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
