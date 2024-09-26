function cadastro(){
    const nome = document.getElementById("nome").value
    const senha = document.getElementById("senha").value
    const senha2 = document.getElementById("senha2").value

    if (nome === "" || senha === "" || senha2 === ""){
        event.preventDefault()
        document.getElementById("error").innerHTML = "Todos os campos devem ser preenchidos"
        document.getElementById("error").style.display = "block"
        return false
    }else if(senha !== senha2){
        event.preventDefault()
        document.getElementById("error").innerHTML = "As senhas tao diferente"
        document.getElementById("error").style.display = "block"
        return false
    }else{
        alert("Cadastro efetuado com sucesso")
        return true
    }
}