export async function postDicas(conteudo) {
    await fetch(`http://localhost:3000/dicas`, {
        method: `POST`,
        headers: new Headers({
            "Content-Type": `application/json`,
        }),
        body: JSON.stringify(conteudo)
    })
}

export async function getDicas(args = "", categoria = "") {
    const result = await fetch(`http://localhost:3000/dicas/`)
    const busca = await result.json()
    if (categoria == "Total") {
        return busca.filter(card => card.titulo.toUpperCase().includes(args.toUpperCase()))
    } else {
        return busca.filter(card => card.titulo.toUpperCase().includes(args.toUpperCase()) && card.categoria == categoria)
    }
}

export async function getDicasID(args = "") {
    const result = await fetch(`http://localhost:3000/dicas/`)
    const busca = await result.json()
    return busca.find(card => card.id == args)
}

export async function editDicas(conteudo, cardId) {
    await fetch(`http://localhost:3000/dicas/${cardId}`, {
        method: `PUT`,
        headers: new Headers({
            "Content-Type": `application/json`,
        }),
        body: JSON.stringify(conteudo)
    })
}

export async function deletarDica(evento) {
    const id = evento.target.id.replace("deletacard", "")
    await fetch(`http://localhost:3000/dicas/${id}`, {
        method: `DELETE`,
    })
}
