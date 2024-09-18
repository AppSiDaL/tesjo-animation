import Modal from "react-modal";

Modal.setAppElement("#root"); // Asegúrate de que el modal se monte en el elemento correcto

export default function ModalComponent({
  isOpen,
  onRequestClose,
}: {
  isOpen: boolean;
  onRequestClose: () => void;
}) {
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
        <h2>Edificio CAI</h2>
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
          El centro <strong>CAI</strong> (Centros de Cooperación Academia
          Industria) sigue el modelo de educación superior de Corea del Sur para
          una vinculación más estrecha entre las empresas de la región y los
          investigadores y estudiantes de la Institución.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/cai.png"
            alt="CAI"
            style={{
              width: 600,
              height: 400,
            }}
          />
        </div>
      </div>
    </Modal>
  );
}