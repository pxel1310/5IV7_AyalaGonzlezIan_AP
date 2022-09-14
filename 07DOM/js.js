window.onload = () => {
  const images = [
    "https://w.wallhaven.cc/full/l3/wallhaven-l315vy.png",
    "https://w.wallhaven.cc/full/j3/wallhaven-j3gz1w.jpg",
    "https://w.wallhaven.cc/full/72/wallhaven-725mg9.png",
    "https://w.wallhaven.cc/full/rd/wallhaven-rd83mq.jpg",
  ];

  const display = document.getElementById("display");
  const botones = Array.from(document.getElementsByName("boton"));
  const campoMensaje = document.getElementById("mensaje");
  const mensajes = document.getElementById("mensajes");
  const colorValor = document.getElementById("colorValor");

  let imagenActual = 0;

  const imageSiguiente = () => {
    if (imagenActual < images.length - 1) {
      imagenActual++;
    } else {
      imagenActual = 0;
    }
    display.src = images[imagenActual];
  };

  const pantallaCompleta = () => {
    display.requestFullscreen();
  };

  const mostarMensaje = () => {
    mensajes.inneHTML += `${campoMensaje.value}
    <br/>`;
    campoMensaje.value = "";
  };

  const cambiarColor = () => {
    colorValor.click();
  };

  const inicializar = () => {
    botones.find((boton) => boton.id === "siguiente").onclick = imageSiguiente;
    botones.find((boton) => boton.id === "anterios").onclick = imagenAnterior;
    botones.find((boton) => boton.id === "pantallaCompleta").onclick =
      pantallaCompleta;
    botones.find((boton) => boton.id === "mostrarMensaje").onclick =
      mostarMensaje;
    botones.find((boton) => boton.id === "camiarColor").onclick = cambiarColor;
    colorValor.onchange = () => {
      mensajes.style.color = colorValor.value;
    };
    display.src = images[0];
  };
  inicializar();
};
