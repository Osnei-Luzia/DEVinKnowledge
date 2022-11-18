import formFactory from "./formFactory.js"

async function cadastrarDica(evento) {
    evento.preventDefault()
    if (formMedia.value) {
        if (!validarVideo()) {
            alert("Favor corrigir URL para Vídeo")
            return
        }
    }
    //construtor recebe evento.target.values
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
    const regex = new RegExp('abc.com')
    return regex.test(document.getElementById("formMedia").value)
}

async function modificarDica(evento) {
    console.log(evento.target.id)
    const id = evento.target.id.replace("modificacard", "")
    
    const conteudo = ""
    // await fetch(`http://localhost:3000/dicas/${id}`, {
    //     method: `PUT`,
    //     headers: new Headers({
    //         "Content-Type": `application/json`,
    //     }),
    //     body: JSON.stringify(conteudo)
    // })
}

async function deletarDica(evento) {
    const id = evento.target.id.replace("deletacard", "")
    await fetch(`http://localhost:3000/dicas/${id}`, {
        method: `DELETE`,
    })
}
async function atualizaCards(valor) {
    const result = await getDicas(valor)
    document.getElementById("cardsGrid").innerHTML = ""
    result.forEach((cartao) => {
        const card = document.createElement('div')
        card.className = `card`
        card.id = `card${cartao.id}`
        //input ou transformar tags em inputs
        //usar classe ou id?
        card.innerHTML = `
            <div class="cardHeader">
                <h4>${cartao.titulo}</h4>
                <p style="font-size:80%">${cartao.linguagem}<br>
                ${cartao.categoria}</p>
                </div>
            <div class="cardMain">
                <p>${cartao.descricao}</p>
                ${cartao.media}
            </div>
            <div class="cardFooter">
                <button id="modifica${card.id}">Editar</button>
                <button id="deleta${card.id}">Deletar</button>    
            </div>
        `
        document.getElementById("cardsGrid").appendChild(card)
        document.getElementById(`modifica${card.id}`).addEventListener("click", formFactory)
        document.getElementById(`deleta${card.id}`).addEventListener("click", deletarDica)
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

window.addEventListener("load", () => { atualizaCards(document.getElementById("pesquisaCard").value) })
window.addEventListener("load", statusCards)
document.getElementById("cadastrarDica").addEventListener("submit", cadastrarDica)
document.getElementById("pesquisaCard").addEventListener("keyup", () => { atualizaCards(document.getElementById("pesquisaCard").value) })



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
    return busca.filter(card => card.titulo.toUpperCase().includes(args.toUpperCase()))
}