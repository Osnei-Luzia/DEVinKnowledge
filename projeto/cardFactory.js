export default function cardFactory(cartao) {
    const card = document.createElement('div')
    card.className = `card`
    card.id = `card${cartao.id}`
    card.innerHTML = `
            <div class="cardHeader">
                <h4>${cartao.titulo}</h4>
                <p style="font-size:80%">${cartao.linguagem}<br>
                ${cartao.categoria}</p>
                </div>
            <div class="cardMain">
                <p>${cartao.descricao}</p>
                </div>
                <div class="cardFooter">
                <a target="blank" id="cardMedia" href="${cartao.media}">${cartao.media?"<button>Vídeo</button>":""}</a>
                <button id="modifica${card.id}">Editar</button>
                <button id="deleta${card.id}">Deletar</button>    
            </div>
        `
    return card
}