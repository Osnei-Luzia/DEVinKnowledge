export default function dicaFactory(form){
    return {
        titulo: form.formTitulo.value,
        linguagem: form.formLinguagem.value,
        categoria: form.formCategoria.value,
        descricao: form.formDescricao.value,
        media: form.formMedia.value,
    }
}