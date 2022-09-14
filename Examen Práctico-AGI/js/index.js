// Gracias por no usar ; , pero al final el interprete los agrega xD

const doujutsus = "./src/json/dojutsus.json"

let rango = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)

const info = async (idB) => {
  const portador = document.querySelector(".modal-header")
  const portador2 = document.querySelector(".modal-body")

  const fragment = new DocumentFragment()
  const fragment2 = new DocumentFragment()

  const response = await fetch(doujutsus)
  const data = await response.json()
  portador.innerHTML = ""

  data.forEach((douj) => {
    if (douj["id"] == idB) {
      const h2 = document.createElement("h2")
      h2.textContent = douj.title
      h2.setAttribute("class", "modal-title")

      fragment.appendChild(h2)

      if (!document.getElementById("modalP")) {
        var p = document.createElement("p")
        p.setAttribute("id", "modalP")
        // Porqueria y media xd, hasta apenas me entero que exite el setAtribute
        fragment2.appendChild(p)
        portador2.appendChild(fragment2)
      }
      document.getElementById("modalP").textContent = douj.description
    }
  })
  portador.appendChild(fragment)
}

const getDo = async () => {
  const portador = document.querySelector(".cards_doujutsus")
  const fragment = new DocumentFragment()

  const response = await fetch(doujutsus)
  const data = await response.json()
  portador.innerHTML = ""

  const min = 1
  const max = 9

  data.forEach((douj) => {
    if (
      douj["id"] == rango(max, min) ||
      douj["id"] == rango(max, min) ||
      douj["id"] == rango(max, min)
    ) {
      const div = document.createElement("div")
      div.classList.add("dou-item")

      const h2 = document.createElement("h2")
      h2.textContent = douj.title

      const img = document.createElement("img")
      img.src = douj.url

      const button = document.createElement("button")
      const buttonText = document.createTextNode("+ Info")
      button.appendChild(buttonText)
      button.type = "button"
      button.setAttribute("data-bs-toggle", "modal")
      button.setAttribute("data-bs-target", "#mimodal")
      button.onclick = () => info(douj.id)

      div.appendChild(h2)
      div.appendChild(img)
      div.appendChild(button)
      fragment.appendChild(div)
    }
  })
  portador.appendChild(fragment)
  // Hijo?? qqqqqqqqqq
}

const getUsu = async () => {
  const portador = document.querySelector(".cards_usuarios")
  const fragment = new DocumentFragment()

  const response = await fetch(doujutsus)
  const data = await response.json()

  portador.innerHTML = ""

  const min = 1
  const max = 51

  data.forEach((dou) => {
    const usu = dou["usuarios"]

    usu.forEach((douj) => {
      if (
        douj["id"] == rango(max, min) ||
        douj["id"] == rango(max, min) ||
        douj["id"] == rango(max, min) ||
        douj["id"] == rango(max, min) ||
        douj["id"] == rango(max, min) ||
        douj["id"] == rango(max, min)
      ) {
        const div = document.createElement("div")
        div.classList.add("user-item")
        // Hola, Goku SSJ 100 por favor
        const h2 = document.createElement("h2")
        h2.textContent = douj.usuario

        const p = document.createElement("p")
        p.textContent = "Clan: " + douj.clan
        // Nerfeen a los Uchihas
        const p2 = document.createElement("p")
        p2.textContent = douj.dojutsu

        const img = document.createElement("img")
        img.src = douj.url

        // const button = document.createElement("button")
        // const buttonText = document.createTextNode("+ Favorito")
        // button.appendChild(buttonText)
        // button.type = "button"

        div.appendChild(h2)
        div.appendChild(p2)
        div.appendChild(p)
        div.appendChild(img)
        // div.appendChild(button)
        fragment.appendChild(div)
      }
    })
  })

  portador.appendChild(fragment)

  console.log(
    "⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣠⣤⣶⣶ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠀⠀⠀⢰⣿⣿⣿⣿" +
      "\n" +
      "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣀⣀⣾⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿ " +
      "\n" +
      "⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿ ⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿" +
      "\n" +
      "⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿" +
      "\n" +
      "⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀ ⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿ " +
      "\n" +
      "⣿⣿⣿⣿⣿⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀ ⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿ " +
      "\n" +
      "⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿" +
      "\n" +
      "\n" +
      "JIJIJAJA"
  )
}

getDo()
getUsu()
// SIUUUUUUUUUUUUUUUUUUUUUUUUUUU
