export default function formFactory(formCard){
    formCard = 
    `<form id="editarDica">
        <label for="formTitulo">Título:</label>
        <input type="text" id="formTitulo" required minlength="8" maxlength="64">
            <label for="formLinguagem">Linguagem/Skill:</label>
            <input type="text" id="formLinguagem" required minlength="2" maxlength="16">
                <label for="formCategoria">Categoria:</label>
                <select id="formCategoria" required>
                    <option value="">
                        Selecione uma Categoria
                    </option>
                    <option value="FrontEnd">
                        FrontEnd
                    </option>
                    <option value="BackEnd">
                        BackEnd
                    </option>
                    <option value="FullStack">
                        FullStack
                    </option>
                    <option value="Comportamental/Soft">
                        Comportamental/Soft
                    </option>
                </select>
                <label for="formDescricao">Descrição:</label>
                <textarea style="resize: none" id="formDescricao" required minlength="16" maxlength="512"></textarea>
                <label for="formMedia">Vídeo:</label>
                <input type="url" id="formMedia">
                    <div>
                        <button type="submit">
                            Salvar
                        </button>
                        <button type="reset">
                            Limpar
                        </button>
                    </div>
    </form>
    `
}

