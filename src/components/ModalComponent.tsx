import Modal from "react-modal";

Modal.setAppElement("#root"); // Asegúrate de que el modal se monte en el elemento correcto

export default function ModalComponent({
  isOpen,
  onRequestClose,
  clickPosition,
}: {
  isOpen: boolean;
  onRequestClose: () => void;
  clickPosition: [number, number, number] | null;
}) {
  const positions = [
    {
      build: "Cancha de baloncesto",
      description:
        "La cancha de baloncesto es un espacio deportivo que se encuentra en la parte frontal de la institución. Es un lugar donde los estudiantes pueden practicar deportes y realizar actividades físicas.",
      img: "/images/basquetball.png",
      position_min: [4.0, 0, -8.5],
      position_max: [5.8, 0.4, -7.5],
    },
    {
      build: "Edificio B",
      description:
        "El edificio B es un espacio de aprendizaje que se encuentra en la parte frontal de la institución. Este edificio es utilizado para impartir clases de ingles. De igual manera, estan ubicadas las oficinas de las actividades extraescolares.",
      img: "/images/edificio_b.jpeg",
      position_min: [4.5, 0, -5.9],
      position_max: [5.5, 0.6, -3.1],
    },
    {
      build: "Edificio de Audiovisual",
      description:
        "El edificio de audiovisual es un espacio de aprendizaje que se encuentra en la parte frontal de la institución. Este edificio es utilizado para impartir clases de audiovisual, cuenta con un laboratorio con un estudio de grabación, cabina de audio y un estudio de captura movimientos.",
      img: "/images/edificio_audiovisuales.jpeg",
      position_min: [2.4, 0, -6.0],
      position_max: [3.0, 0.6, -4.3],
    },
    {
      build: "Edificio C",
      description:
        "El edificio C es un espacio de aprendizaje que se encuentra en la parte frontal de la institución. Este edificio cuenta con salas de computo y laboratorios de redes. Es usado para impartir clases de informática, redes y programación. Asi como animación y diseño gráfico.",
      img: "/images/edificio_c.jpeg",
      position_min: [7.0, 0, -6.1],
      position_max: [7.8, 0.6, -4.0],
    },
    {
      build: "Gimnasio",
      description:
        "El gimnasio es un espacio deportivo que se encuentra en la parte central de la institución. Es un lugar donde los estudiantes pueden practicar deportes y realizar actividades físicas.",
      img: "/images/gimnasio.jpeg",
      position_min: [8.0, 0, -1.7],
      position_max: [8.8, 0.6, 1.4],
    },
    {
      build: "Biblioteca",
      description:
        "La biblioteca es un espacio de aprendizaje que se encuentra en la parte central de la institución. Es un lugar donde los estudiantes pueden estudiar, leer y realizar investigaciones.",
      img: "/images/biblioteca.jpeg",
      position_min: [6.0, 0, -0.6],
      position_max: [7.0, 0.6, 1.3],
    },
    {
      build: "Edificio E",
      description:
        "El edificio E es un espacio de aprendizaje que se encuentra en la parte central de la institución. Este edificio es utilizado por las carreras de Ing. Industrial, Ing. en Materiales, Ing. en Logistica y Lic. en Turismo.",
      img: "/images/edificio_e.jpeg",
      position_min: [3.9, 0, -0.7],
      position_max: [4.9, 0.6, 1.2],
    },
    {
      build: "Edificio I",
      description:
        "El edificio I es un espacio de aprendizaje que se encuentra en la parte central de la institución. Este edificio es utilizado por las carreras de Arquitectura, Ing. en Animacion y Efectos Visuales y tiene las oficinas de la carrera de Ing. en Sistemas Computacionales.",
      img: "/images/edificio_i.jpeg",
      position_min: [-0.3, 0, -0.7],
      position_max: [0.3, 0.6, 1.3],
    },
    {
      build: "Cancha Futbol Rapido",
      description:
        "La cancha de futbol rapido es un espacio deportivo que se encuentra en la parte central de la institución. Es un lugar donde los estudiantes pueden practicar deportes y realizar actividades físicas.",
      img: "/images/futbol_rapido.jpeg",
      position_min: [-3.8, 0, -4.4],
      position_max: [-2.3, 0.6, -2.3],
    },
    {
      build: "Kiosko",
      description:
        "El kiosko es un espacio de convivencia que se encuentra en la parte central de la institución. Es un lugar donde los estudiantes pueden reunirse, descansar y realizar actividades recreativas.",
      img: "/images/kiosko.jpeg",
      position_min: [-3.7, 0, -0.3],
      position_max: [-2.2, 0.6, 1.5],
    },
    {
      build: "Edificio F",
      description:
        "El edificio F es un espacio de aprendizaje que se encuentra en la parte posterior de la institución. Este edificio es utilizado por las carreras de Ing. en Quimica.",
      img: "/images/edificio_f.jpeg",
      position_min: [6.3, 0, 3.5],
      position_max: [8.3, 0.6, 4.3],
    },
    {
      build: "Edificio K",
      description:
        "El edificio K sirve como oficinas para control escolar, es donde se realizan los tramites escolares y se lleva el control de los alumnos. De igual forma cuenta con algunos laboratorios de simulacion de procesos.",
      img: "/images/edificio_k.jpeg",
      position_min: [4.45, 0, 3.45],
      position_max: [5.3, 0.7, 5],
    },
    {
      build:"Papeleria",
      description:"La papeleria es un espacio donde los estudiantes pueden comprar material escolar, libros y otros articulos de papeleria.",
      img:"/images/papeleria.jpeg",
      position_min:[3.0,0,3.5],
      position_max:[3.6,0.6,4.3]
    },
    {
      build:"Edificio G",
      description:"El edificio G es un espacio de aprendizaje que se encuentra en la parte posterior de la institución. Este edificio es utilizado por las carreras de Ing. en Electromecanica. Ademas de contar con un laboratorio de electronica y un taller de hidraulica.",
      img:"/images/edificio_g.jpeg",
      position_min:[-0.3,0,4.4],
      position_max:[1.6,0.6,5.1]
    },
    {
      build:"Papeleria",
      description:"La papeleria es un espacio donde los estudiantes pueden comprar material escolar, libros y otros articulos de papeleria.",
      img:"/images/papeleria.jpeg",
      position_min:[-0.5,0,3.1],
      position_max:[0.2,0.6,3.7]
    }
  ];

  const getBuildingInfo = (position: [number, number, number] | null) => {
    if (!position) return { build: "N/A", description: "N/A" };
    for (const pos of positions) {
      const [x, y, z] = position;
      const [minX, minY, minZ] = pos.position_min;
      const [maxX, maxY, maxZ] = pos.position_max;

      if (
        x >= minX &&
        x <= maxX &&
        y >= minY &&
        y <= maxY &&
        z >= minZ &&
        z <= maxZ
      ) {
        return { build: pos.build, description: pos.description, img: pos.img };
      }
    }
    return { build: "N/A", description: "N/A" };
  };

  const buildingInfo = getBuildingInfo(clickPosition);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Model Information"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "50vw",
          height: "50vh",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>{buildingInfo.build}</h2>
        <button
          onClick={onRequestClose}
          style={{
            height: 30,
            width: 30,
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#ff5c5c",
            color: "#fff",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          &times;
        </button>
      </div>
      <div>
        <p
          style={{
            width: "100%",
            height: "auto",
            overflow: "auto",
            marginBottom: 20,
          }}
        >
          {buildingInfo.description}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={buildingInfo.img}
            alt="CAI"
            style={{
              width: 600,
              height: 400,
            }}
          />
        </div>
      </div>
      <div>
        <p>Posición del clic:</p>
        <ul>
          <li>X: {clickPosition ? clickPosition[0] : "N/A"}</li>
          <li>Y: {clickPosition ? clickPosition[1] : "N/A"}</li>
          <li>Z: {clickPosition ? clickPosition[2] : "N/A"}</li>
        </ul>
      </div>
    </Modal>
  );
}
