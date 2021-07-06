import * as React from "react";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout
      route="/"
      title="Servicios de Ingeniería CAD/CAM | Inicio"
      author="Adrián Juárez Monroy"
      description="Soluciones para tus necesidades de fabricación digital"
    >
      {/* Título */}
      <section className="bg-gray-100">
        <div className="container h-80 mx-auto px-3 py-5">
          <h1 className="h2">Servicios de Ingeniería CAD/CAM</h1>
          <p className="p-lead">
            Todo lo que necesitas para tus proyectos de fabricación digital
          </p>
        </div>
      </section>
      {/* Paso 1 */}
      <section className="flex flex-col py-3">
        <div className="p-3">
          <h2 className="h2">Paso 1: Creación del modelo 3D</h2>
          <p className="p-lead">Crea el modelo que quieres fabricar.</p>
        </div>
        <div className="flex flex-col py-3">
          {/* Diseño 3D */}
          <div className="px-3 h-60">
            <h3 className="h3">Diseño 3D</h3>
            <p className="p">
              Genera modelos 3D desde cero con las herramientas que te ofrece
              Rhinoceros.
            </p>
          </div>
          {/* Ingeniería inversa */}
          <div className="px-3 h-60">
            <h3 className="h3">Ingeniería inversa</h3>
            <p className="p">
              Lleva un modelo físico al mundo digital mediante los brazos
              digitalizadores MicroScribe.
            </p>
          </div>
        </div>
      </section>
      {/* Paso 2 */}
      <section className="flex flex-col py-3">
        <div className="p-3">
          <h2 className="h2">Paso 2: Preparación del método de fabricación</h2>
          <p className="p-lead">
            Planifica las herramientas con las que fabricarás tu idea.
          </p>
        </div>
        <div className="flex flex-col py-3">
          {/* Maquinado CNC */}
          <div className="px-3 h-60">
            <h3 className="h3">Maquinado CNC</h3>
            <p className="p">
              Genera los códigos de maquinado para fabricación CNC con RhinoCAM.
            </p>
          </div>
          {/* Construcción por rebanadas */}
          <div className="px-3 h-60">
            <h3 className="h3">Construcción por rebanadas</h3>
            <p className="p">
              Utiliza Grasshopper para crear rebanadas a partir de tu modelo y
              prepáralas para corte.
            </p>
          </div>
        </div>
        {/* Paso 3 */}
      </section>
      <section className="flex flex-col py-3">
        <div className="p-3">
          <h2 className="h2">Paso 3: Fabricación</h2>
          <p className="p-lead">Es hora de llevar tu modelo al mundo real</p>
        </div>
        <div className="flex flex-col py-3">
          {/* Maquinado CNC */}
          <div className="px-3 h-60">
            <h3 className="h3">Maquinado CNC</h3>
            <p className="p">
              Utiliza tus códigos de maquinado para fabricar tu modelo con una
              máquina CNC.
            </p>
          </div>
          {/* Impresión 3D */}
          <div className="px-3 h-60">
            <h3 className="h3">Impresión 3D</h3>
            <p className="p">
              Obtén prototipos físicos muy fácil y rápidamente.
            </p>
          </div>
        </div>
      </section>
      {/* Educación */}
      <section className="flex flex-col py-3">
        <div className="p-3">
          <h2 className="h2">Educación</h2>
          <p className="p-lead">
            Ofrecemos cursos de capacitación para que domines todas las
            tecnologías que ponemos a tu disposición.
          </p>
        </div>
        <div className="h-60 bg-red-200"></div>
      </section>
    </Layout>
  );
}
