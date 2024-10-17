const body = document.getElementById("body");

/*barra navegacion*/

const iconoImagen = document.getElementById("icono_imagen");
const iconoTexto = document.getElementById("icono_texto");
const modoOscuro = document.getElementById("modo_oscuro");
const modoClaro = document.getElementById("modo_claro");
const menuMobile = document.getElementById("menuMobile");
const fondoEncabezado = document.querySelector("nav");

/*contenedor meme*/

const memeBox = document.getElementById("meme_box");
const boxTxtSuperior = document.getElementById("txt_superior");
const boxImagen = document.getElementById("box_img_meme");
const boxTxtInferior = document.getElementById("txt_inferior");
const descargarMeme = document.getElementById("descargar_meme");

/*aside imagen*/

const asideImagen = document.getElementById("aside_imagen");
const campoUrl = document.getElementById("url");
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

const ocultarMenuMobile = () => {
  menuMobile.style.display = "none";
};
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
  body.classList.add("bodyO");
  fondoEncabezado.classList.add("encabezadoO");
  fondoEncabezado.classList.remove("encabezado");
  fondoEncabezadoM.classList.add("encabezadoMobileO");
  fondoEncabezado.classList.remove("encabezadoMobile");
  modoClaro.style.display = "block";
  modoOscuro.style.display = "none";
  asideImagen.classList.add("aside_imagenO");
  asideImagen.classList.remove("aside_imagen");
  asideTexto.classList.add("aside_textoO");
  asideTexto.classList.remove("aside_texto");
};
const desactivarModoOscuro = () => {
  body.classList.remove("bodyO");
  fondoEncabezado.classList.add("encabezado");
  fondoEncabezado.classList.remove("encabezadoO");
  fondoEncabezadoM.classList.add("encabezadoMobile");
  fondoEncabezadoM.classList.remove("encabezadoMobileO");
  modoClaro.style.display = "none";
  modoOscuro.style.display = "block";
  asideImagen.classList.add("aside_imagen");
  asideImagen.classList.remove("aside_imagenO");
  asideTexto.classList.add("aside_texto");
  asideTexto.classList.remove("aside_textoO");
};

const visualizacionFondoModos = () => {
  body.classList.toggle("bodyO");
  if (body.classList.contains("bodyO")) {
    activarModoOscuro();
  } else {
    desactivarModoOscuro();
  }
};

modoOscuro.addEventListener(`click`, visualizacionFondoModos);
modoClaro.addEventListener(`click`, visualizacionFondoModos);

iconoTexto.addEventListener(`click`, mostrarPanelTexto);
iconoTexto.addEventListener(`click`, ocultarPanelImagen);

iconoImagen.addEventListener(`click`, mostrarPanelImagen);
iconoImagen.addEventListener(`click`, ocultarPanelTexto);

/*cambio de paneles mobile */

const iconoImagenM = document.getElementById("icono_imagenM");
const iconoTextoM = document.getElementById("icono_textoM");
const modoOscuroM = document.getElementById("modo_oscuroM");
const modoClaroM = document.getElementById("modo_claroM");
const fondoEncabezadoM = document.getElementById("fondoEncabezadoM");

const ocultarPanelImagenM = () => {
  asideImagen.style.display = "none";
  asideTexto.style.display = "block";
};
const ocultarPanelTextoM = () => {
  asideTexto.style.display = "none";
  asideImagen.style.display = "block";
};

iconoTextoM.addEventListener(`click`, ocultarPanelImagenM);
iconoImagenM.addEventListener(`click`, ocultarPanelTextoM);

const activarModoOscuroM = () => {
  body.classList.add("bodyO");
  fondoEncabezadoM.classList.add("encabezadoMobileO");
  fondoEncabezado.classList.remove("encabezadoMobile");
  fondoEncabezado.classList.add("encabezadoO");
  fondoEncabezado.classList.remove("encabezado");
  modoClaroM.style.display = "block";
  modoOscuroM.style.display = "none";
  asideImagen.classList.add("aside_imagenO");
  asideImagen.classList.remove("aside_imagen");
  asideTexto.classList.add("aside_textoO");
  asideTexto.classList.remove("aside_texto");
};

const activarModoClaroM = () => {
  body.classList.remove("bodyO");
  fondoEncabezadoM.classList.add("encabezadoMobile");
  fondoEncabezadoM.classList.remove("encabezadoMobileO");
  fondoEncabezado.classList.add("encabezado");
  fondoEncabezado.classList.remove("encabezadoO");
  modoClaroM.style.display = "none";
  modoOscuroM.style.display = "block";
  asideImagen.classList.add("aside_imagen");
  asideImagen.classList.remove("aside_imagenO");
  asideTexto.classList.add("aside_texto");
  asideTexto.classList.remove("aside_textoO");
};

const alternarModoOscuro = () => {
  body.classList.toggle("bodyO");
  if (body.classList.contains("bodyO")) {
    activarModoOscuroM();
  } else {
    activarModoClaroM();
  }
};
modoOscuroM.addEventListener(`click`, alternarModoOscuro);
modoClaroM.addEventListener(`click`, alternarModoOscuro);

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

let valorBrillo = 1;
let valorOpacidad = 1;
let valorContraste = 1;
let valorDesenfoque = 0;
let valorEscalaGrises = 0;
let valorSepia = 0;
let valorHue = 0;
let valorSaturacion = 1;
let valorNegativo = 0;

const aplicarFiltros = () => {
  boxImagen.style.filter = `brightness(${valorBrillo}) opacity(${valorOpacidad}) contrast(${valorContraste}) blur(${valorDesenfoque}px) grayscale(${valorEscalaGrises}) sepia(${valorSepia}) hue-rotate(${valorHue}deg) saturate(${valorSaturacion}) invert(${valorNegativo})`;
};

const filtroBrillo = () => {
  valorBrillo = brillo.value;
  aplicarFiltros();
  console.log(`valor brillo`, valorBrillo);
};
brillo.addEventListener(`input`, filtroBrillo);

const filtroOpacidad = () => {
  valorOpacidad = opacidad.value;
  aplicarFiltros();
};
opacidad.addEventListener(`input`, filtroOpacidad);

const filtroContraste = () => {
  valorContraste = contraste.value;
  aplicarFiltros();
};
contraste.addEventListener(`input`, filtroContraste);

const filtroDesenfoque = () => {
  valorDesenfoque = desenfoque.value;
  aplicarFiltros();
};
desenfoque.addEventListener(`input`, filtroDesenfoque);

const filtroEscalaGrises = () => {
  valorEscalaGrises = escalaDeGrises.value;
  aplicarFiltros();
};
escalaDeGrises.addEventListener(`input`, filtroEscalaGrises);

const filtroSepia = () => {
  valorSepia = sepia.value;
  aplicarFiltros();
};
sepia.addEventListener(`input`, filtroSepia);

const filtroHue = () => {
  valorHue = hue.value;
  aplicarFiltros();
};
hue.addEventListener(`input`, filtroHue);

const filtroSaturacion = () => {
  valorSaturacion = saturado.value;
  aplicarFiltros();
};
saturado.addEventListener(`input`, filtroSaturacion);

const filtroNegativo = () => {
  valorNegativo = negativo.value;
  aplicarFiltros();
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
    boxTxtSuperior.style.visibility = "hidden";
  } else {
    boxTxtSuperior.style.visibility = "visible";
  }
};
sinTextoSup.addEventListener(`change`, ocultarTextoS);

const ocultarTextoI = () => {
  if (sinTextoInf.checked) {
    boxTxtInferior.style.visibility = "hidden";
  } else {
    boxTxtInferior.style.visibility = "visible";
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
  console.log(`memedescargado`);
};

descargarMeme.addEventListener("click", descargaMeme);
