function paginaLogin(){
    window.location.href = "registrarUser.html"
}
function registroLogin(){

    let user = document.getElementById("userName").value
    let pass = document.getElementById("pass").value
    let email = document.getElementById("email").value
    if (user === "" || pass === "" || email === "") {
        document.getElementById("userName").value = ""
        document.getElementById("pass").value = ""
        document.getElementById("email").value = ""
        document.getElementById("erroLogin").style.display = "block"
        return
    }
    if (email.indexOf("@gmail.com") === -1) {
        document.getElementById("erroLogin").style.display = "block"
        return
        
    }
    alert("Cadastrado")
    document.getElementById("registrado").style.display = "block"
    window.location.href = "index.html"
    localStorage.setItem("email", email)
    localStorage.setItem("user", user)
    localStorage.setItem("senha", pass)
}
function validaLogin(){
    let user = document.getElementById("userName2").value
    let pass = document.getElementById("pass2").value
    let usuLS = localStorage.getItem("user")
    let passLS = localStorage.getItem("senha")

    if(user == usuLS && pass == passLS){
        document.getElementById("logado").style.display = "block"
        window.location.href = "paginainicial.html"
    }else{
        document.getElementById("erroLogin").style.display = "block"
        document.getElementById("userName2").value = ""
        document.getElementById("pass2").value = "" 
       
  
    } 
}
function recuperarSenha(){
    let email = document.getElementById("email").value
    let emailLS = localStorage.getItem("email")

    if(email == emailLS){
    alert(`Um email de recuperação de senha foi enviado para ${email}`)
    window.location.href = "index.html"
    }else{
        document.getElementById("erroLogin").style.display = "block";
        document.getElementById("email").value = ""
    }

}