import cardFactory from "./cardFactory.js"
import dicaFactory from "./dicaFactory.js"
import formFactory from "./formFactory.js"
import * as CRUD from "./CRUD.js"

async function cadastrarDica(evento) {
    evento.preventDefault()
    const result = dicaFactory(evento.target)
    if(confirm("Enviar de Dados?")){
        if(evento.target.submit.innerText == "Editar"){
            await CRUD.editDicas(result,evento.target.cardId.value)
            alert("Dica Alterada.")
            window.location.reload()
        }else{
            await CRUD.postDicas(result)
            alert("Dica Cadastrada.")
            window.location.reload()
        }
    }
}

async function modificarDica(evento) {
    const ID = evento.target.id.replace("modificacard", "")
    const result = await CRUD.getDicasID(ID)
    formFactory(result)
}

async function deletarDica(evento) {
    if(confirm("Deletar Cartão?")){
        CRUD.deletarDica(evento)
        alert("Dica Removida.")
        window.location.reload()
    }
}

async function atualizaCards(valor) {
    const result = await CRUD.getDicas(valor)
    document.getElementById("cardsGrid").innerHTML = ""
    result.forEach((cartao) => {
        const card = cardFactory(cartao)
        document.getElementById("cardsGrid").appendChild(card)
        document.getElementById(`modifica${card.id}`).addEventListener("click", modificarDica)
        document.getElementById(`deleta${card.id}`).addEventListener("click", deletarDica)
    })
}

async function statusCards(evento) {
    const categorias = document.getElementsByClassName("cardData")
    const result = await CRUD.getDicas()
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

document.getElementById("cadastrarDica").reset();
window.addEventListener("load", () => { atualizaCards(document.getElementById("pesquisaCard").value) })
window.addEventListener("load", statusCards)
document.getElementById("cadastrarDica").addEventListener("submit", cadastrarDica)
document.getElementById("pesquisaCard").addEventListener("keyup", () => { atualizaCards(document.getElementById("pesquisaCard").value) })