/*barra navegacion*/

const iconoImagen = document.getElementById("icono_imagen")
const iconoTexto = document.getElementById("icono_texto")
const modoOscuro = document.getElementById("modo_oscuro")

/*contenedor meme*/

const memeBox = document.getElementById("meme_box")
const boxTxtSuperior = document.getElementById("txt_superior")
const boxImgagen = document.getElementById("box_img_meme")
const boxTxtInferior = document.getElementById("txt_inferior")
const descargarMeme = document.getElementById("descargar_meme")

/*aside imagen*/

const asideImagen = document.getElementById("aside_imagen")
const campoUrl = document.getElementById("url")
const fondo = document.getElementById("fondo")
const fondo_desplegable = document.getElementById("fondo_desplegable")

const brillo = document.getElementById("brillo")
const opacidad = document.getElementById("opacidad")
const contraste = document.getElementById("contraste")
const desenfoque = document.getElementById("desenfoque")
const escalaDeGrises = document.getElementById("escala_de_grises")
const sepia = document.getElementById("sepia")
const hue = document.getElementById("hue")
const saturado = document.getElementById("saturado")
const negativo = document.getElementById("negativo")

const reestablecerFiltros = document.getElementById("reestablecer_filtros")

/*aside texto*/

const asideTexto = document.getElementById("aside_texto")
const textoSuperior = document.getElementById("superior")
const sinTextoSup = document.getElementById("sin_texto_sup")
const textoInferior = document.getAnimations("inferior")
const sinTextoInf = document.getElementById("sin_texto_inf")

const fuentesDesplegables = document.getElementById("fuentes_desplegables")
const tamanoFuente = document.getElementById("tamano_fuente")
const textoIzquierda = document.getElementById("izquierda")
const textoCentro = document.getElementById("centro")
const textoDerecha = document.getElementById("derecha")

const colorTexto = document.getElementById("color")
const fondoTexto = document.getElementById("fondo")
const fondoTransparente = document.getElementById("fondo_transparente")

const noContorno = document.getElementById("ningun_contorno")
const contornoClaro = document.getElementById("claro")
const contornoOscuro = document.getElementById("oscuro")

const espaciado = document.getElementById("espaciado")
const interlineado = document.getElementById("interlineado")


const ocultarPanelTexto = () => {
    asideTexto.style.display = "none"
}

iconoImagen.addEventListener('click', ocultarPanelTexto);

iconoTexto.addEventListener(`click`, () => {
    asideImagen.style.display = "block";
  } )

console.log(iconoImagen)
