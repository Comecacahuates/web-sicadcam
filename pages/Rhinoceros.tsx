import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import SideImage from "../components/sideimage";
import PriceCard from "../components/pricecard";
import Icon from "../components/icon";

export default function Rhinoceros() {
  return (
    <Layout
      route="/Rhinoceros"
      title="Rhinoceros | Servicios de Ingeniería CAD/CAM"
      author="Adrián Juárez Monroy"
      description="Rhinoceros: software de diseño 3D."
    >
      <section>
        {/* Título */}
        <SideImage
          className="lg:h-screen"
          src="https://placeimg.com/640/480/nature"
          alt=""
        >
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:justify-center">
            <div>
              <h1>Rhinoceros</h1>
              <h2>La navaja suiza del diseño 3D</h2>
            </div>
          </div>
        </SideImage>
        {/* Accesible */}
        <SideImage
          className="lg:min-h-screen"
          reverse={true}
          src="https://placeimg.com/640/480/nature"
          alt=""
        >
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:justify-center">
            <div>
              <h2>Diseño 3D para todos y todas</h2>
              <h3>Versátil</h3>
              <p className="lg:text-justify lead">
                Un software con el que podrás crear, transformar, analizar,
                renderizar y animar curvas y superficies NURBS, mallas
                poligonales, nubes de puntos y superficies de subdivisión.
              </p>
              <p className="lg:text-justify lead">
                Es compatible con la gran mayoría de software de{" "}
                <abbr
                  className="cursor-pointer"
                  title="Diseño asistido por computadora (Computer Aided Design)"
                >
                  CAD
                </abbr>{" "}
                y edición de gráficos vectoriales. Es capaz de abrir, procesar y
                guardar documentos .dxf, .dwg, .3ds, .stl, .iges, .svg, y un
                largo etcétera. Disponible para <strong>Windows</strong> y{" "}
                <strong>Mac</strong>.
              </p>
              <h3>Accesible</h3>
              <p className="lg:text-justify lead">
                Rhino es tan fácil de aprender, que no tendrás que preocuparte
                por cómo usarlo y podrás enfocarte por completo en el diseño
              </p>
              <p className="lg:text-justify lead">
                A diferencia de la mayoría de los programas de CAD, Rhino es muy
                económico, ya que no requiere hardware costoso, su precio es muy
                bajo y no debes pagar cuotas anuales.
              </p>
            </div>
          </div>
        </SideImage>
      </section>
      {/* Modelado orgánico */}
      <section>
        <SideImage
          className="lg:min-h-screen"
          src="https://placeimg.com/640/480/nature"
          alt=""
        >
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:justify-center">
            <div>
              <h2>Modelado orgánico</h2>
              <p className="lg:text-justify lead">
                En Rhino 7 se introdujo un nuevo tipo de geometría llamado SubD,
                con el que podrás realizar modelos 3D como si estuvieras
                moldeando plastilina con las manos.
              </p>
              <p className="lg:text-justify lead">
                A diferencia de las superficies NURBS, con SubD obtienes
                superficies uniformes y fáciles de modificar mediante la
                extrusión de caras y manipulación de puntos de control,
                manteniendo la continuidad y la suavidad de las superficies.
              </p>
            </div>
          </div>
        </SideImage>
      </section>
      <section>
        {/* Renderización */}
        <SideImage
          className="lg:min-h-screen"
          reverse={true}
          src="https://placeimg.com/640/480/nature"
          alt=""
        >
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:justify-center">
            <div>
              <h2>Renderización</h2>
              <h3>Renderizador de Rhino</h3>
              <p className="lg:text-justify lead">
                Rhino 7 incluye herramientas nuevas y mejoradas para generar
                imágenes fotorrealísticas de gran calidad y renderizado en
                tiempo real.
              </p>
              <h3>Flamingo nXt</h3>
              <p className="lg:text-justify lead">
                Un <i>plugin</i> de renderizado fotorrealístico para Rhino,
                fácil de usar y con características avanzadas. Con él, podrás
                configurar rápidamente las propiedades de los objetos y el
                ambiente de una escena, como los materiales, texturas,
                iluminación y sombras, plantas, etc.
              </p>
              <p className="lg:text-justify lead">
                Asigna materiales arrastrando y soltando en cada objeto. Utiliza
                los materiales de la biblioteca incluida, o modifícalos y crea
                tus propios materiales con propiedades personalizadas.
              </p>
            </div>
          </div>
        </SideImage>
      </section>
      <section>
        {/* Licencias */}
        <SideImage
          className="lg:min-h-screen"
          src="https://placeimg.com/640/480/nature"
          alt=""
        >
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:justify-center">
            <div>
              <h2>Administración de licencias</h2>
              <h3>Usa Rhino donde quieras</h3>
              <p className="lg:text-justify lead">
                Si no tienes disponible tu computadora personal, instala Rhino
                en cualquier computadora y obtén acceso a tu licencia mediante
                el administrador de licencias en la nube.
              </p>
              <h3>Licencias compartidas</h3>
              <p className="lg:text-justify lead">
                Comparte licencias fácilmente entre miembros de un equipo de
                trabajo o estudiantes en una escuela, dentro de una red local o
                en la nube. Concede y revoca el acceso a las personas que
                necesites.
              </p>
            </div>
          </div>
        </SideImage>
        {/* Software extensible */}
        <SideImage
          className="lg:min-h-screen"
          reverse={true}
          src="https://placeimg.com/640/480/nature"
          alt=""
        >
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:justify-center">
            <div>
              <h2>Software extensible</h2>
              <h3>
                Amplio catálogo de <i>plugins</i>
              </h3>
              <p className="lg:text-justify lead">
                Encuentra{" "}
                <Link href="https://www.food4rhino.com/es">
                  <a target="_blank">
                    <i>plugins</i> <Icon icon="box-arrow-up-right" />
                  </a>
                </Link>{" "}
                para una gran variedad de aplicaciones (joyería, calzado,
                arquitectura, diseño mecánico, etc) o para agilizar tu flujo de
                trabajo.
              </p>
              <h3>Herramientas de desarrollo</h3>
              <p className="lg:text-justify lead">
                Con las{" "}
                <Link href="https://developer.rhino3d.com/">
                  <a target="_blank">
                    herramientas de desarrollo{" "}
                    <Icon icon="box-arrow-up-right" />
                  </a>
                </Link>{" "}
                que proporciona Rhino, puedes crear tus propios <i>plugins</i>{" "}
                utilizando lenguajes de programación como C#, Visual Basic o
                Python.
              </p>
            </div>
          </div>
        </SideImage>
      </section>
      <hr />
      {/* Precios */}
      <section>
        <div className="lg:container mx-auto px-3 my-60">
          <h2 className="text-center">Precios</h2>
          {/* Precios de Rhino */}
          <div className="my-20">
            <h3 className="text-center">Licencia de Rhinoceros 7</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3 lg:gap-6 xl:gap-12">
              {/* Licencia educacional */}
              <PriceCard
                title="Educacional"
                price="595"
                currency="USD"
                color="bg-my-purple-3"
              >
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="book-fill" /> Para
                  estudiantes y profesores
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="arrow-up" />{" "}
                  <span>
                    Actualización:{" "}
                    <b>
                      $95 <span className="text-xs">USD</span>
                    </b>
                  </span>
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="person-fill" /> 1
                  usuario
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="check" /> Windows
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="check" /> Mac
                </p>
              </PriceCard>
              {/* Licencia comercial */}
              <PriceCard
                title="Comercial"
                price="995"
                currency="USD"
                color="bg-my-purple-3"
              >
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="unlock-fill" /> Para
                  cualquier uso
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="arrow-up" />{" "}
                  <span>
                    Actualización:{" "}
                    <b>
                      $595 <span className="text-xs">USD</span>
                    </b>
                  </span>
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="person-fill" /> 1
                  usuario
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="check" /> Windows
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="check" /> Mac
                </p>
              </PriceCard>
              {/* Licencia de laboratorio */}
              <PriceCard
                title="Laboratorio"
                price="975"
                currency="USD"
                color="bg-my-purple-3"
              >
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="award-fill" /> Para
                  escuelas y universidades
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="arrow-up" />
                  <span>
                    Actualización:{" "}
                    <b>
                      $295 <span className="text-xs">USD</span>
                    </b>
                  </span>
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="people-fill" />{" "}
                  <span className="flex-1">30 usuarios</span>
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="check" />
                  Windows
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="check" />
                  Mac
                </p>
              </PriceCard>
            </div>
          </div>
          {/* Precios de Flamingo */}
          <div className="my-20">
            <h3 className="text-center">Licencia de Flamingo nXt 5</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3 lg:gap-6 xl:gap-12">
              {/* Licencia educacional */}
              <PriceCard
                title="Educacional"
                price="195"
                currency="USD"
                color="bg-my-purple-3"
              >
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="book-fill" /> Para
                  estudiantes y profesores
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="arrow-up" />{" "}
                  <span>
                    Actualización desde Flamingo 1 y 2:{" "}
                    <b>
                      $95 <span className="text-xs">USD</span>
                    </b>
                  </span>
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="arrow-up" />
                  <span>
                    Actualización desde Flamingo nXt: <b>Gratis</b>
                  </span>
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="person-fill" /> 1
                  usuario
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="check" /> Windows
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="x" /> Mac
                </p>
              </PriceCard>
              {/* Licencia comercial */}
              <PriceCard
                title="Comercial"
                price="495"
                currency="USD"
                color="bg-my-purple-3"
              >
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="unlock-fill" /> Para
                  cualquier uso
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="arrow-up" />{" "}
                  <span>
                    Actualización desde Flamingo 1 y 2:{" "}
                    <b>
                      $295 <span className="text-xs">USD</span>
                    </b>
                  </span>
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="arrow-up" />{" "}
                  <span>
                    Actualización desde Flamingo nXt: <b>Gratis</b>
                  </span>
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="person-fill" /> 1
                  usuario
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="check" /> Windows
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="x" /> Mac
                </p>
              </PriceCard>
              {/* Licencia de laboratorio */}
              <PriceCard
                title="Laboratorio"
                price="675"
                currency="USD"
                color="bg-my-purple-3"
              >
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="award-fill" /> Para
                  escuelas y universidades
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="arrow-up" />{" "}
                  <span>
                    Actualización desde Flamingo 1 y 2:{" "}
                    <b>
                      $195 <span className="text-xs">USD</span>
                    </b>{" "}
                  </span>
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="arrow-up" />{" "}
                  <span>
                    Actualización desde Flamingo nXt: <b>Gratis</b>
                  </span>
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="people-fill" /> 30
                  usuarioas
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="check" /> Windows
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="x" /> Mac
                </p>
              </PriceCard>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
