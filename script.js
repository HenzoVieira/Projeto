function toggleMode() {
  document.documentElement.classList.toggle("Light")
  const html = document.documentElement

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("Light")) {
    //  se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "imagens/Icon.Light.jpg")
  } else {
    img.setAttribute("src", "imagens/Icon.Usually.jpg")
  }
}
