async function cadastrarDica(evento) {
    evento.preventDefault()
    if (formMedia.value) {
        if (!validarVideo()) {
            alert("Favor corrigir URL para Vídeo")
            return
        }
    }
    const result = {
        titulo: evento.target.formTitulo.value,
        linguagem: evento.target.formLinguagem.value,
        categoria: evento.target.formCategoria.value,
        descricao: evento.target.formDescricao.value,
        media: evento.target.formMedia.value,
    }
    await postDicas(result)
}

function validarVideo() {
    //fazer REGEX para Url Youtube
    const regex = new RegExp('abc')
    return regex.test(document.getElementById("formMedia").value)
}


async function atualizaCards(evento) {
    const result = await getDicas(evento.target.value)
    document.getElementById("cards").innerHTML = ""
    result.forEach((cartao) => {
        const card = document.createElement("div")
        card.innerHTML = `
            ${cartao.titulo}<br>${cartao.descricao}
        `
        document.getElementById("cards").appendChild(card)
    })
}
async function statusCards(evento) {
    const categorias = document.getElementsByClassName("cardData")
    const result = await getDicas()
    result.forEach((card) => {
        switch (card.categoria) {
            case 'FrontEnd':
                categorias[1].innerText++
                break;
            case 'BackEnd':
                categorias[2].innerHTML++
                break;
            case 'FullStack':
                categorias[3].innerHTML++
                break;
            case 'Comportamental/Soft':
                categorias[4].innerHTML++
                break;
        }
        categorias[0].innerText++
    })
}
document.getElementById("cadastrarDica").addEventListener("submit", cadastrarDica)
document.getElementById("pesquisaCard").addEventListener("keyup", atualizaCards)
window.addEventListener("load", atualizaCards)
window.addEventListener("load", statusCards)

async function postDicas(conteudo) {
    await fetch(`http://localhost:3000/dicas`, {
        method: `POST`,
        headers: new Headers({
            "Content-Type": `application/json`,
        }),
        body: JSON.stringify(conteudo)
    })
}

async function getDicas(args = "") {
    const result = await fetch(`http://localhost:3000/dicas/`)
    const busca = await result.json()
    //busca está case sensitive
    return busca.filter(card => card.titulo.includes(args))
}