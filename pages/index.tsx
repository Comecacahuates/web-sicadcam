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
      {/* Título */}
      <section className="h-screen flex flex-col lg:flex-row">
        <div className="flex-none lg:flex-1 lg:flex items-center mx-auto px-3 lg:px-8">
          <div className="py-12 text-center lg:text-right">
            <h1 className="text-my-blue-dark">
              Las mejores herramientas para fabricación digital
            </h1>
            <p className="h4 text-gray-500">Diseño 3D & Fabricación</p>
          </div>
        </div>
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
      <section className="bg-my-blue text-white flex flex-col">
        <SectionTitle textColor="white">Diseño 3D</SectionTitle>
        {/* Rhinoceros */}
        <SectionImg src="https://placeimg.com/640/480/nature" alt="Alt">
          <h3>Rhinoceros</h3>
          <p className="lead">
            La navaja suiza del diseño 3D. Crea, edita, analiza y anima modelos
            fácil.
          </p>
          <p>
            <Link href="#">
              <a>
                Más información <Icon icon="arrow-right" />
              </a>
            </Link>
          </p>
        </SectionImg>
        {/* Grasshopper */}
        <SectionImg src="https://placeimg.com/640/480/nature" alt="Alt">
          <h3>Grasshopper</h3>
          <p className="lead">
            Un editor gráfico de algoritmos con el que podrás generar geometría
            compleja con muy poco esfuerzo.
          </p>
        </SectionImg>
        {/*     Digitalizadores MicroScribe */}
        <SectionImg src="https://placeimg.com/640/480/nature" alt="Alt">
          <h3>Digitalizadores MicroScribe</h3>
          <p className="lead">
            Utiliza modelos reales como referencia para recrearlos digitalmente.
          </p>
        </SectionImg>
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
