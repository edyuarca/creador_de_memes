const body = document.getElementById("body");

/*barra navegacion*/

const iconoImagen = document.getElementById("icono_imagen");
const iconoTexto = document.getElementById("icono_texto");
const modoOscuro = document.getElementById("modo_oscuro");
const modoClaro = document.getElementById("modo_claro");

/*contenedor meme*/

const memeBox = document.getElementById("meme_box");
const imagenMeme = document.querySelector(".imagen_meme");
const boxTxtSuperior = document.getElementById("txt_superior");
const boxImagen = document.getElementById("box_img_meme");
const boxTxtInferior = document.getElementById("txt_inferior");
const descargarMeme = document.getElementById("descargar_meme");

/*aside imagen*/

const asideImagen = document.getElementById("aside_imagen");
const campoUrl = document.getElementById("url")
const fondo = document.getElementById("fondo");
const fondoDesplegable = document.getElementById("fondo_desplegable");
const colorHex = document.getElementById("color_hex");

const brillo = document.getElementById("brillo");
const opacidad = document.getElementById("opacidad");
const contraste = document.getElementById("contraste");
const desenfoque = document.getElementById("desenfoque");
const escalaDeGrises = document.getElementById("escala_grises");
const sepia = document.getElementById("sepia");
const hue = document.getElementById("hue");
const saturado = document.getElementById("saturado");
const negativo = document.getElementById("negativo");

const btnRestablecerFiltros = document.getElementById("reestablecer_filtros");

/*aside texto*/

const asideTexto = document.getElementById("aside_texto");
const textoSuperior = document.getElementById("superior");
const sinTextoSup = document.getElementById("sin_texto_sup");
const textoInferior = document.getElementById("inferior");
const sinTextoInf = document.getElementById("sin_texto_inf");
const pDelBoxS = document.getElementById("ocultar_texto_sup");
const pDelBoxI = document.getElementById("ocultar_texto_inf");

const fuentesDesplegables = document.getElementById("fuentes_desplegables");
const tamanoFuente = document.getElementById("tamano_fuente");
const textoIzquierda = document.getElementById("izquierda");
const textoCentro = document.getElementById("centro");
const textoDerecha = document.getElementById("derecha");

const colorTexto = document.getElementById("color");
const colorHexTxt = document.getElementById("color_hex_txt");
const colorHexTxt2 = document.getElementById("color_hex_txt2");
const fondoTexto = document.getElementById("fondo_box_txt");
const fondoTransparente = document.getElementById("fondo_transparente");

const noContorno = document.getElementById("ningun_contorno");
const contornoClaro = document.getElementById("claro");
const contornoOscuro = document.getElementById("oscuro");

const espaciado = document.getElementById("espaciado");
const interlineado = document.getElementById("interlineado");

/*Funciones paneles*/

const ocultarPanelImagen = () => {
  asideImagen.style.display = "none";
};
const mostrarPanelImagen = () => {
  asideImagen.style.display = "block";
};
const ocultarPanelTexto = () => {
  asideTexto.style.display = "none";
};
const mostrarPanelTexto = () => {
  asideTexto.style.display = "block";
};

const activarModoOscuro = () => {
  body.style.backgroundColor = `rgb(68, 73, 79)`;
};
const desactivarModoOscuro = () => {
  body.style.backgroundColor = `rgb(255, 255, 255)`;
};

const visualizacionFondoModos1 = () => {
  if (body.style.backgroundColor === `rgb(68, 73, 79)`) {
    desactivarModoOscuro();
  } /*esta funcion puede ser remplazada por la de la linea 93*/ else {
    activarModoOscuro();
  }
};

const visualizacionFondoModos2 = () => {
  if (body.style.backgroundColor === `rgb(255, 255, 255)`) {
    activarModoOscuro();
  } /*esta funcion puede ser remplazada por la de la linea 93*/ else {
    desactivarModoOscuro();
  }
};

const activarbtnClaro = () => {
  modoClaro.style.display = "block";
};
const desactivarbtnoscuro = () => {
  modoOscuro.style.display = "none";
};

const pruebaBtnModos1 = () => {
  modoClaro.style.display = "block";
  modoOscuro.style.display = "none";
};
const pruebaBtnModos2 = () => {
  modoClaro.style.display = "none";
  modoOscuro.style.display = "block";
};

iconoTexto.addEventListener(`click`, mostrarPanelTexto);
iconoTexto.addEventListener(`click`, ocultarPanelImagen);

iconoImagen.addEventListener(`click`, mostrarPanelImagen);
iconoImagen.addEventListener(`click`, ocultarPanelTexto);

modoOscuro.addEventListener(`click`, visualizacionFondoModos1);
modoOscuro.addEventListener(`click`, pruebaBtnModos1);

modoClaro.addEventListener(`click`, visualizacionFondoModos2);
modoClaro.addEventListener(`click`, pruebaBtnModos2);

/*boton url y box img meme */

const cambiarImagen = () => {
  boxImagen.style.backgroundImage = `url('${campoUrl.value}')`;
};
campoUrl.addEventListener("input", cambiarImagen);

/*boton color fondo imagen */

const cambioDeColor = () => {
  const btnColorFondo = fondo.value;
  boxImagen.style.backgroundColor = btnColorFondo;
  colorHex.textContent = btnColorFondo;
};
fondo.addEventListener(`input`, cambioDeColor);

const modoFusion = (e) => {
  boxImagen.style.backgroundBlendMode = e.target.value;
};
fondoDesplegable.addEventListener(`change`, (e) => modoFusion(e));

const filtroBrillo = () => {
  const valorBrillo = brillo.value;
  boxImagen.style.filter = `brightness(${valorBrillo})`;
};
brillo.addEventListener(`input`, filtroBrillo);

const filtroOpacidad = () => {
  const valorOpacidad = opacidad.value;
  boxImagen.style.filter = `opacity(${valorOpacidad})`;
};
opacidad.addEventListener(`input`, filtroOpacidad);

const filtroContraste = () => {
  const valorContraste = contraste.value;
  boxImagen.style.filter = `contrast(${valorContraste})`;
};
contraste.addEventListener(`input`, filtroContraste);

const filtroDesenfoque = () => {
  const valorDesenfoque = desenfoque.value;
  boxImagen.style.filter = `blur(${valorDesenfoque})`;
};
desenfoque.addEventListener(`input`, filtroDesenfoque);

const filtroEscalaGrises = () => {
  const valorEscalaGrises = escalaDeGrises.value;
  boxImagen.style.filter = `grayscale(${valorEscalaGrises})`;
};
escalaDeGrises.addEventListener(`input`, filtroEscalaGrises);

const filtroSepia = () => {
  const valorSepia = sepia.value;
  boxImagen.style.filter = `sepia(${valorSepia})`;
};
sepia.addEventListener(`input`, filtroSepia);

const filtroHue = () => {
  const valorHue = hue.value;
  boxImagen.style.filter = `hue-rotate(${valorHue})`;
};
hue.addEventListener(`input`, filtroHue);

const filtroSaturacion = () => {
  const valorSaturacion = saturado.value;
  boxImagen.style.filter = `saturation(${valorSaturacion})`;
};
saturado.addEventListener(`input`, filtroSaturacion);

const filtroNegativo = () => {
  const valorNegativo = negativo.value;
  boxImagen.style.filter = `invert(${valorNegativo})`;
};
negativo.addEventListener(`input`, filtroNegativo);

const obtenerValorOriginal = () => {
  return {
    brillo: `1`,
    opacidad: `1`,
    contraste: `100`,
    desenfoque: `0`,
    sepia: `0`,
    hue: `0`,
    saturado: `100`,
    negativo: `0`,
  };
};

const restablecerFiltros = () => {
  const valorOriginal = obtenerValorOriginal();

  boxImagen.style.filter = `
    brightness(${valorOriginal.brillo})
    opacity(${valorOriginal.opacidad})
    contrast(${valorOriginal.contraste}%)
    blur(${valorOriginal.desenfoque}px)
    sepia(${valorOriginal.sepia}%)
    hue-rotate(${valorOriginal.hue}deg)
    saturate(${valorOriginal.saturado}%)
    invert(${valorOriginal.negativo}%)
  `;
};

btnRestablecerFiltros.addEventListener(`click`, restablecerFiltros);

//Slide Texto//

const nuevoTextoSup = () => {
  pDelBoxS.innerHTML = textoSuperior.value;
};
textoSuperior.addEventListener(`input`, nuevoTextoSup);

const nuevoTextoInf = () => {
  pDelBoxI.innerHTML = textoInferior.value;
};
textoInferior.addEventListener(`input`, nuevoTextoInf);

const ocultarTextoS = () => {
  if (sinTextoSup.checked) {
    pDelBoxS.style.display = "none";
  } else {
    pDelBoxS.style.display = "block";
  }
};
sinTextoSup.addEventListener(`change`, ocultarTextoS);

const ocultarTextoI = () => {
  if (sinTextoInf.checked) {
    pDelBoxI.style.display = "none";
  } else {
    pDelBoxI.style.display = "block";
  }
};
sinTextoInf.addEventListener(`change`, ocultarTextoI);

const cambioFuentes = (e) => {
  pDelBoxI.style.fontFamily = e.target.value;
  pDelBoxS.style.fontFamily = e.target.value;
};

fuentesDesplegables.addEventListener(`change`, (e) => cambioFuentes(e));

const cambioTamano = (e) => {
  pDelBoxI.style.fontSize = e.target.value + "px";
  pDelBoxS.style.fontSize = e.target.value + "px";
};

tamanoFuente.addEventListener(`input`, (e) => cambioTamano(e));

const alinearIzquierda = () => {
  pDelBoxS.style.textAlign = "left";
  pDelBoxI.style.textAlign = "left";
};
textoIzquierda.addEventListener("click", alinearIzquierda);

const alinearDerecha = () => {
  pDelBoxS.style.textAlign = "right";
  pDelBoxI.style.textAlign = "right";
};
textoDerecha.addEventListener("click", alinearDerecha);

const alinearCentro = () => {
  pDelBoxS.style.textAlign = "center";
  pDelBoxI.style.textAlign = "center";
};
textoCentro.addEventListener("click", alinearCentro);

const cambioColorTxt = () => {
  const colorTxt = colorTexto.value;
  pDelBoxS.style.color = colorTxt;
  pDelBoxI.style.color = colorTxt;
  colorHexTxt.textContent = colorTxt;
};
colorTexto.addEventListener(`input`, cambioColorTxt);

const cambioFondoTxt = () => {
  const colorFondoTxt = fondoTexto.value;
  boxTxtSuperior.style.backgroundColor = colorFondoTxt;
  boxTxtInferior.style.backgroundColor = colorFondoTxt;
  colorHexTxt2.textContent = colorFondoTxt;
};

fondoTexto.addEventListener(`input`, cambioFondoTxt);

const ocultarBoxTexto = () => {
  if (fondoTransparente.checked) {
    boxTxtSuperior.style.backgroundColor = "transparent";
    boxTxtInferior.style.backgroundColor = "transparent";
  } else {
    boxTxtSuperior.style.backgroundColor = "";
    boxTxtInferior.style.backgroundColor = "";
  }
};
fondoTransparente.addEventListener(`change`, ocultarBoxTexto);

const contornoOscuroTxt = () => {
  pDelBoxS.style.textShadow = "-1px 1px 1px black";
  pDelBoxI.style.textShadow = "-1px 1px 1px black";
};
contornoOscuro.addEventListener(`click`, contornoOscuroTxt);

const contornoClaroTxt = () => {
  pDelBoxS.style.textShadow = "-1px 1px 1px white";
  pDelBoxI.style.textShadow = "-1px 1px 1px white";
};
contornoClaro.addEventListener(`click`, contornoClaroTxt);

const sinContornoTxt = () => {
  pDelBoxS.style.textShadow = "none";
  pDelBoxI.style.textShadow = "none";
};
noContorno.addEventListener(`click`, sinContornoTxt);

const espaciadoBox = () => {
  const valorEspaciado = espaciado.value + "px";
  boxTxtSuperior.style.paddingTop = valorEspaciado;
  boxTxtSuperior.style.paddingBottom = valorEspaciado;
  boxTxtInferior.style.paddingTop = valorEspaciado;
  boxTxtInferior.style.paddingBottom = valorEspaciado;
};
espaciado.addEventListener(`change`, espaciadoBox);

const interlineadoBox = (e) => {
  const valorInterlineado = e.target.value;
  boxTxtSuperior.style.lineHeight = valorInterlineado;
  boxTxtInferior.style.lineHeight = valorInterlineado;
};
interlineado.addEventListener(`change`, interlineadoBox);

const descargaMeme = () => {
  domtoimage.toBlob(memeBox).then(function (blob) {
    saveAs(blob, "meme.png");
  });
};

descargarMeme.addEventListener("click", descargaMeme);
