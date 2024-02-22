import { useEffect, useState } from "react";

export const FollowMouse = () => {
  // activar o desactivar el seguimiento del raton
  const [enable, setEnable] = useState(false);
  // guardar posicion
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // console.log("efecto", { enable });
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      // console.log("handleMove", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };
    if (enable) {
      window.addEventListener("pointermove", handleMove);
    }
    // Cleanup
    // cuando el componente se desmonta
    // cuando cambian las dependencias
    return () => {
      // console.log("cleanup");
      // Desuscribir el evento de escuchar el raton
      window.removeEventListener("pointermove", handleMove);
      setPosition({ x: 0, y: 0 });
    };
  }, [enable]);

  useEffect(() => {
    document.body.classList.toggle("no-cursor", enable);

    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enable]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <h3>Proyecto 3</h3>
      <button onClick={() => setEnable(!enable)}>
        {enable ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
};
