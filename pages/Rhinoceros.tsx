import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import SideImage from "../components/sideimage";
import Icon from "../components/icon";

/* Tabla de precios */
type PriceTable = {
  product: string;
  prices: Price[];
};
/* Elemento de la tabla de precios */
type Price = {
  title: string;
  update?: string;
  users: string;
  multipleUsers?: boolean;
  priceWin: string;
  priceMac?: string;
};
/* Tabla de precios de Rhino */
const rhinoPriceTable: PriceTable = {
  product: "Rhinoceros 7",
  prices: [
    {
      title: "Licencia comercial",
      users: "1 usuario",
      priceWin: "995 USD",
      priceMac: "995 USD",
    },
    {
      title: "Licencia comercial",
      update: "Actualización desde cualquier versión",
      users: "1 usuario",
      priceWin: "595 USD",
      priceMac: "595 USD",
    },
    {
      title: "Licencia educacional",
      users: "1 usuario",
      priceWin: "195 USD",
      priceMac: "195 USD",
    },
    {
      title: "Licencia educacional",
      update: "Actualización desde cualquier versión",
      users: "1 usuario",
      priceWin: "95 USD",
      priceMac: "95 USD",
    },
    {
      title: "Licencia de laboratorio",
      users: "30 usuarios",
      multipleUsers: true,
      priceWin: "975 USD",
      priceMac: "975 USD",
    },
    {
      title: "Licencia de laboratorio",
      update: "Actualización desde cualquier versión",
      users: "30 usuarios",
      multipleUsers: true,
      priceWin: "295 USD",
      priceMac: "295 USD",
    },
  ],
};
/* Tabla de precios de Flamingo */
const flamingoPriceTable: PriceTable = {
  product: "Flamingo nXt 5",
  prices: [
    {
      title: "Licencia comercial",
      users: "1 usuario",
      priceWin: "495 USD",
    },
    {
      title: "Licencia comercial",
      update: "Actualización desde Flamingo 1 o 2",
      users: "1 usuario",
      priceWin: "295 USD",
    },
    {
      title: "Licencia comercial",
      update: "Actualización desde Flamingo nXt",
      users: "1 usuario",
      priceWin: "Gratis",
    },
    {
      title: "Licencia educacional",
      users: "1 usuario",
      priceWin: "195 USD",
    },
    {
      title: "Licencia educacional",
      update: "Actualización desde Flamingo 1 o 2",
      users: "1 usuario",
      priceWin: "95 USD",
    },
    {
      title: "Licencia educacional",
      update: "Actualización desde Flamingo nXt",
      users: "1 usuario",
      priceWin: "Gratis",
    },
    {
      title: "Licencia de laboratorio",
      users: "30 usuarios",
      multipleUsers: true,
      priceWin: "675 USD",
    },
    {
      title: "Licencia de laboratorio",
      update: "Actualización desde Flamingo 1 o 2",
      users: "30 usuarios",
      multipleUsers: true,
      priceWin: "195 USD",
    },
    {
      title: "Licencia de laboratorio",
      update: "Actualización desde Flamingo nXt",
      users: "30 usuarios",
      multipleUsers: true,
      priceWin: "Gratis",
    },
  ],
};

export default function Rhinoceros() {
  return (
    <Layout
      route="/Rhinoceros"
      title="Rhinoceros | Servicios de Ingeniería CAD/CAM"
      author="Adrián Juárez Monroy"
      description="Rhinoceros: software de diseño 3D"
    >
      <section>
        {/* Título */}
        <SideImage src="https://placeimg.com/640/480/nature" alt="">
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:items-stretch lg:justify-center">
            <div>
              <h1>Rhinoceros</h1>
              <h2>La navaja suiza del diseño 3D</h2>
            </div>
          </div>
        </SideImage>
        {/* Accesible */}
        <SideImage
          reverse={true}
          src="https://placeimg.com/640/480/nature"
          alt=""
        >
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:items-stretch lg:justify-center">
            <div>
              <h3>Versátil</h3>
              <p className="text-justify lead">
                Un software con el que podrás crear, transformar, analizar,
                renderizar y animar curvas y superficies NURBS, mallas
                poligonales, nubes de puntos y superficies de subdivisión.
              </p>
              <p className="text-justify lead">
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
            </div>
            <div>
              <h3>Accesible</h3>
              <p className="text-justify lead">
                Ya que Rhino es tan fácil de aprender, no tendrás que
                preocuparte por cómo usarlo y podrás enfocarte por completo en
                el diseño
              </p>
              <p className="text-justify lead">
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
        <SideImage src="https://placeimg.com/640/480/nature" alt="">
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:items-stretch lg:justify-center">
            <div>
              <h2>Modelado orgánico</h2>
              <p className="text-justify lead">
                En Rhino 7 se introdujo un nuevo tipo de geometría llamado SubD,
                con el que podrás realizar modelos 3D como si estuvieras
                moldeando plastilina con las manos.
              </p>
              <p className="text-justify lead">
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
          reverse={true}
          src="https://placeimg.com/640/480/nature"
          alt=""
        >
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:items-stretch lg:justify-center">
            <div>
              <h2>Renderización</h2>
            </div>
            <div>
              <h3>Renderizador de Rhino</h3>
              <p className="text-justify lead">
                Rhino 7 incluye herramientas nuevas y mejoradas para generar
                imágenes fotorrealísticas de gran calidad y renderizado en
                tiempo real.
              </p>
            </div>
            <div>
              <h3>Flamingo nXt</h3>
              <p className="text-justify lead">
                Un <i>plugin</i> de renderizado fotorrealístico para Rhino,
                fácil de usar y con características avanzadas. Con él, podrás
                configurar rápidamente las propiedades de los objetos y el
                ambiente de una escena, como los materiales, texturas,
                iluminación y sombras, plantas, etc.
              </p>
              <p className="text-justify lead">
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
        <SideImage src="https://placeimg.com/640/480/nature" alt="">
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:items-stretch lg:justify-center">
            <div>
              <h2>Administración de licencias</h2>
            </div>
            <div>
              <h3>Usa Rhino donde quieras</h3>
              <p className="text-justify lead">
                Si no tienes disponible tu computadora personal, instala Rhino
                en cualquier computadora y obtén acceso a tu licencia mediante
                el administrador de licencias en la nube.
              </p>
            </div>
            <div>
              <h3>Licencias compartidas</h3>
              <p className="text-justify lead">
                Comparte licencias fácilmente entre miembros de un equipo de
                trabajo o estudiantes en una escuela, dentro de una red local o
                en la nube. Concede y revoca el acceso a las personas que
                necesites.
              </p>
            </div>
          </div>
        </SideImage>
        {/* Extensible */}
        <SideImage
          reverse={true}
          src="https://placeimg.com/640/480/nature"
          alt=""
        >
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:items-stretch lg:justify-center">
            <div>
              <h2>Extensible</h2>
            </div>
            <div>
              <h3>
                Amplio catálogo de <i>plugins</i>
              </h3>
              <p className="text-justify lead">
                Encuentra{" "}
                <Link href="https://www.food4rhino.com/es">
                  <a target="_blank">
                    <i>plugins</i> <Icon icon="box-arrow-up-right" />
                  </a>
                </Link>{" "}
                para una gran variedad de aplicaciones específicas o para
                agilizar tu flujo de trabajo.
              </p>
            </div>
            <div>
              <h3>Herramientas de desarrollo</h3>
              <p className="text-justify lead">
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
      {/* Precios */}
      <section className="bg-gray-50">
        <div className="px-3 w-full lg:container mx-auto my-20 overflow-x-hidden">
          <h2>Precios</h2>
          {[rhinoPriceTable, flamingoPriceTable].map(
            (priceTable: PriceTable, index: number) => (
              <React.Fragment key={index}>
                <h3 className="sticky top-16 bg-gray-50 py-4">
                  {priceTable.product}
                </h3>
                <div className="overflow-x-auto w-full mb-8">
                  <table className="table-fixed border-collapse w-144 lg:w-full lg:w-2/3 xl:w-1/2">
                    <thead>
                      <tr className="py-2 px-2 border-t border-gray-500">
                        <th className="w-3/5 lg:w-4/6 text-left px-4 py-4"></th>
                        <th className="w-1/5 lg:w-1/6 text-right px-4 py-4">
                          Windows
                        </th>
                        <th className="w-1/5 lg:w-1/6 text-right px-4 py-4">
                          Mac
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-t border-b border-gray-500">
                      {priceTable.prices.map((price: Price, index: number) => (
                        <tr key={index} className="odd:bg-white">
                          <td className="px-4 py-4">
                            {price.title}
                            <span className="text-sm text-gray-600">
                              {price.update ? (
                                <React.Fragment>
                                  <br />
                                  <Icon icon="arrow-up" /> {price.update}
                                </React.Fragment>
                              ) : null}
                              <br />
                              {price.multipleUsers ? (
                                <Icon icon="people-fill" />
                              ) : (
                                <Icon icon="person-fill" />
                              )}{" "}
                              {price.users}
                            </span>
                          </td>
                          <td className="text-right px-4 py-4">
                            {price.priceWin}
                          </td>
                          <td className="text-right px-4 py-4">
                            {price.priceMac || <Icon icon="x" />}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </React.Fragment>
            )
          )}
        </div>
      </section>
    </Layout>
  );
}