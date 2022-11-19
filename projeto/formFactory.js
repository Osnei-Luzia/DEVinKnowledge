export default function formFactory(cartao){
    const form = document.getElementById("cadastrarDica")
    form.formTitulo.value = cartao.titulo
    form.formLinguagem.value = cartao.linguagem
    form.formCategoria.value = cartao.categoria
    form.formDescricao.value = cartao.descricao
    form.formMedia.value = cartao.media
    form.submit.innerText = "Editar"
    form.clear.innerText = "Cancelar"
    document.getElementById("clear").addEventListener("click",cancela)
    form.cardId.value = cartao.id

    function cancela(){
        form.submit.innerText = "Salvar"
        form.clear.innerText = "Limpar"
    }
}

