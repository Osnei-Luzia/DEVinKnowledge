async function cadastrarDica(evento){
    evento.preventDefault()
    console.log(evento)
    if(formMedia){
        if(!validarVideo()){
            alert("Favor corrigir URL para Vídeo")
            return
        }
    }
    //qual é meu conteúdo de envio?
    await postDicas(target)
}
function validarVideo(){
    //fazer REGEX para Url Youtube
    const regex = new RegExp('abc')
    return regex.test(document.getElementById("formMedia").value)
}

async function postDicas(conteudo){
    await fetch(`http://localhost:3000/dicas`) ,{
        method: `POST`,
        headers: new Headers({
            "Content-Type": `application/json`,
        }),
        body: JSON.stringify(conteudo),
    }
}

document.getElementById("cadastrarDica").addEventListener("submit",cadastrarDica)