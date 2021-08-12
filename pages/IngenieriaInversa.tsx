import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import SideImage from "../components/sideimage";
import Card from "../components/card";
import PriceCard from "../components/pricecard";
import Icon from "../components/icon";

/** Especificaciones */
const specs: Record<string, string[]> = {
  "Extensión máxima": [
    '0.63 m (25")',
    '0.84 m (33")',
    '1.67 m (66")',
    '0.84 m (33")',
  ],
  "Diámetro del espacio de trabajo": [
    '1.27 m (50")',
    '1.67 m (66")',
    '1.27 m (50")',
    '1.67 m (66")',
  ],
  "Grados de libertad": ["5, 6", "5, 6", "5, 6", "5, 6"],
  "Precisión ": [
    '±0.152 mm (0.006")',
    '±0.152 mm (0.006")',
    '±0.0508 mm (0.002")',
    '±0.0762 mm (0.003")',
  ],
  "Peso ": [
    "3.8 kg (8.3 lb)",
    "4.1 kg (9.1 lb)",
    "5.4 kg (12.0 lb)",
    "6.0 kg (13.3 lb)",
  ],
  "Alimentación ": ["110 V/220 V", "110 V/220 V", "110 V/220 V", "110 V/220 V"],
  "Conectividad ": [
    "USB 1.1 / RS-232C Serial hasta 115 kps",
    "USB 1.1 / RS-232C Serial hasta 115 kps",
    "USB 2.0",
    "USB 2.0",
  ],
  "Sistema operativo": [
    "Windows XP/7/8/10",
    "Windows XP/7/8/10",
    "Windows XP/7/8/10",
    "Windows XP/7/8/10",
  ],
  "Temperatura de operación": [
    "15 °C - 35 °C (59 °F - 95 °F)",
    "15 °C - 35 °C (59 °F - 95 °F)",
    "15 °C - 35 °C (59 °F - 95 °F)",
    "15 °C - 35 °C (59 °F - 95 °F)",
  ],
  "Temperatura de almacenamiento": [
    "-20 °C - 70 °C (-4 °F - 158 °F)",
    "-20 °C - 70 °C (-4 °F - 158 °F)",
    "-20 °C - 70 °C (-4 °F - 158 °F)",
    "-20 °C - 70 °C (-4 °F - 158 °F)",
  ],
};

export default function IngenieriaInversa() {
  return (
    <Layout
      route="/IngenieriaInversa"
      title="Ingeniería inversa | Servicios de Ingeniería CAD/CAM"
      author="Adrián Juárez Monroy"
      description="Herramientas para ingeniería inversa 3D."
    >
      {/* Título */}
      <SideImage
        className="lg:h-screen"
        src="https://placeimg.com/640/480/nature"
        alt=""
      >
        <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:justify-center">
          <div>
            <h1>Ingeniería inversa</h1>
            <p className="h2">Del mundo físico al mundo digital</p>
          </div>
        </div>
      </SideImage>
      <section>
        {/* Mesh2Surface */}
        <SideImage
          className="lg:h-screen"
          reverse={true}
          src="https://placeimg.com/640/480/nature"
          alt=""
        >
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:justify-center">
            <div>
              <h2>Mesh2Surface para Rhino</h2>
              <p className="text-justify lead">
                Muchos procesos de escaneo 3D generan como resultado mallas o
                nubes de puntos muy densas y difíciles de manipular. Con
                Mesh2Surface podrás crear curvas y superficies a partir del
                escaneo para reconstruir modelos 3D físicos on mucha facilidad.
                Es compatible con Rhino 5, 6 y 7.
              </p>
            </div>
          </div>
        </SideImage>
        {/* Superficies cuadradas */}
        <SideImage
          className="lg:h-60vh"
          src="https://placeimg.com/640/480/nature"
          alt=""
        >
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:justify-center">
            <div>
              <h3>Superficies cuadradas</h3>
              <p className="text-justify lead">
                Un método simple, eficiente y fácil que te permite reconstruir
                formas complejas envolviendo mallas con superficies. Incluye
                herramientas de ajuste a las mallas y control de desviación en
                tiempo real.
              </p>
            </div>
          </div>
        </SideImage>
        {/* Superficies automáticas */}
        <SideImage
          className="lg:h-60vh"
          src="https://placeimg.com/640/480/nature"
          alt=""
        >
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:justify-center">
            <div>
              <h3>Superficies automáticas</h3>
              <p className="text-justify lead">
                Convierte mallas de modelos orgánicos complejos a superficies
                NURBS con un solo botón.
              </p>
            </div>
          </div>
        </SideImage>
        {/* Dibuja sobre las mallas */}
        <SideImage
          className="lg:h-60vh"
          reverse={true}
          src="https://placeimg.com/640/480/nature"
          alt=""
        >
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:justify-center">
            <div>
              <h3>Dibuja sobre las mallas</h3>
              <p className="text-justify lead">
                Crea curvas que se amoldan a la superficie de una malla con las
                que podrás crear superficies NURBS interactivamente y agregar
                puntos de control hasta obtener la tolerancia deseada.
              </p>
            </div>
          </div>
        </SideImage>
        {/* Análisis de desviación */}
        <SideImage
          className="lg:h-60vh"
          reverse={true}
          src="https://placeimg.com/640/480/nature"
          alt=""
        >
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:justify-center">
            <div>
              <h3>Análisis de desviación</h3>
              <p className="text-justify lead">
                Independientemente del método con el que creas tus superficies,
                podrás compararlas con las mallas de referencia para saber qué
                tanto se asemejan utilizando mapas de calor.
              </p>
            </div>
          </div>
        </SideImage>
        <hr />
        {/* Precios de Mesh2Surface */}
        <div className="lg:container mx-auto px-3 my-60">
          <h2 className="text-center">Precios</h2>
          <div className="my-20">
            <h3 className="text-center">Licencia de Mesh2Surface</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3 lg:gap-6 xl:gap-12">
              {/* Licencia educacional */}
              <PriceCard
                title="Educacional"
                price="345"
                currency="EUR"
                color="bg-my-purple-3"
              >
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="book-fill" /> Para
                  estudiantes y profesores
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="grid-1x2-fill" />{" "}
                  Compatible con Rhino 5, 6 y 7
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
                <hr />
                {[
                  "Alineación al sistema de coordenadas universal",
                  "Extracción de primitivas, parches, extusiones y superficies de revolución",
                  "Definición de planos de simetría",
                  "Dibujo interactivo 2D y 3D",
                  "Superficies de red de curvas, barrido, transición y mezcla",
                  "Control de tolerancia en tiempo real",
                  "Ajuste de parches con tolerancia",
                  "Segmentación de mallas",
                  "Medición de radios de redondeo",
                  "Análisis de desviación",
                  "Impoertación de puntos PTX",
                  "Modelado orgánico",
                  "Modelado basado en simetría",
                  "Tecnología de ajuste a mallas",
                  "Tolerancia en tiempo real para modelado de formas libres",
                  "Manipuladores para modelado",
                  "Análisis de calidad de superficies",
                  "Superficies automárticas",
                ].map((feature: string, index: number) => (
                  <p key={index} className="flex">
                    <Icon className="w-8 flex-none" icon="check" /> {feature}
                  </p>
                ))}
              </PriceCard>
              {/* Licencia estándar */}
              <PriceCard
                title="Estándar"
                price="795"
                currency="EUR"
                color="bg-my-purple-3"
              >
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="unlock-fill" /> Para
                  cualquier uso
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="grid-1x2-fill" />{" "}
                  Compatible con Rhino 5, 6 y 7
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
                <hr />
                {[
                  "Alineación al sistema de coordenadas universal",
                  "Extracción de primitivas, parches, extusiones y superficies de revolución",
                  "Definición de planos de simetría",
                  "Dibujo interactivo 2D y 3D",
                  "Superficies de red de curvas, barrido, transición y mezcla",
                  "Control de tolerancia en tiempo real",
                  "Ajuste de parches con tolerancia",
                  "Segmentación de mallas",
                  "Medición de radios de redondeo",
                ].map((feature: string, index: number) => (
                  <p key={index} className="flex">
                    <Icon className="w-8 flex-none" icon="check" /> {feature}
                  </p>
                ))}
              </PriceCard>
              {/* Licencia premium */}
              <PriceCard
                title="Premium"
                price="1245"
                currency="EUR"
                color="bg-my-purple-3"
              >
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="unlock-fill" /> Para
                  cualquier uso
                </p>
                <p className="flex">
                  <Icon className="w-8 flex-none" icon="grid-1x2-fill" />{" "}
                  Compatible con Rhino 5, 6 y 7
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
                <hr />
                {[
                  "Alineación al sistema de coordenadas universal",
                  "Extracción de primitivas, parches, extusiones y superficies de revolución",
                  "Definición de planos de simetría",
                  "Dibujo interactivo 2D y 3D",
                  "Superficies de red de curvas, barrido, transición y mezcla",
                  "Control de tolerancia en tiempo real",
                  "Ajuste de parches con tolerancia",
                  "Segmentación de mallas",
                  "Medición de radios de redondeo",
                  "Análisis de desviación",
                  "Impoertación de puntos PTX",
                  "Modelado orgánico",
                  "Modelado basado en simetría",
                  "Tecnología de ajuste a mallas",
                  "Tolerancia en tiempo real para modelado de formas libres",
                  "Manipuladores para modelado",
                  "Análisis de calidad de superficies",
                  "Superficies automárticas",
                ].map((feature: string, index: number) => (
                  <p key={index} className="flex">
                    <Icon className="w-8 flex-none" icon="check" /> {feature}
                  </p>
                ))}
              </PriceCard>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        {/* Digitalizadores MicroScribe */}
        <SideImage
          className="lg:h-screen"
          src="https://placeimg.com/640/480/nature"
          alt=""
        >
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:justify-center">
            <div>
              <h2>Digitalizadores MicroScribe</h2>
              <p className="text-justify lead">
                Los digitalizadores MicroScribe funcionan como un <i>mouse</i>{" "}
                3D que te permiten capturar puntos en el espacio que podrás
                utilizar para crear curvas y superficies para recrear modelos
                físicos dentro de Rhino y otros programas CAD.
              </p>
            </div>
          </div>
        </SideImage>
        {/* Fácil de usar */}
        <SideImage
          className="lg:h-60vh"
          reverse={true}
          src="https://placeimg.com/640/480/nature"
          alt=""
        >
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:justify-center">
            <div>
              <h3>Fácil de usar</h3>
              <p className="text-justify lead">
                Coloca la punta sobre la superficie del modelo a digitalizar y
                captura cada punto con un clic. Captura tantos puntos como
                necesites para crear las curvas y superficies.
              </p>
            </div>
          </div>
        </SideImage>
        {/* Gran precisión */}
        <SideImage
          className="lg:h-60vh"
          reverse={true}
          src="https://placeimg.com/640/480/nature"
          alt=""
        >
          <div className="my-20 lg:m-0 h-full lg:flex lg:flex-col lg:justify-center">
            <div>
              <h3>Gran precisión</h3>
              <p className="text-justify lead">
                Captura puntos con una precisión de hasta 0.0508mm, que te
                permitirá realizar proyectos de investigación, ingeniería, artes
                gráficas, animación, medicina, etc.
              </p>
            </div>
          </div>
        </SideImage>
        <hr />
        {/* Especificaciones */}
        <div className="lg:container mx-auto px-3 my-60">
          <h2 className="text-center">Especificaciones</h2>
          <div className="my-20 overflow-x-auto shadow-md">
            <table className="table-fixed border-collapse w-360 xl:w-full">
              <thead>
                <tr>
                  <th className="w-1/5"></th>
                  <th className="w-1/5 text-left">
                    MicroScribe <i>i</i>
                  </th>
                  <th className="w-1/5 text-left">
                    MicroScribe <i>iL</i>
                  </th>
                  <th className="w-1/5 text-left">MicroScribe MX</th>
                  <th className="w-1/5 text-left">MicroScribe MLX</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(specs).map((spec: string, index: number) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td className="font-bold">{spec}</td>
                      {specs[spec].map((value: string, index: number) => (
                        <td key={index}>{value}</td>
                      ))}
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}
