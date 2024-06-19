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
        return;
    }

    if (email.indexOf("@gmail.com") === -1) {
        document.getElementById("erroLogin").style.display = "block"
        return
    }
    let users = JSON.parse(localStorage.getItem("users")) || []


    users.push({ user: user, pass: pass, email: email })

    localStorage.setItem("users", JSON.stringify(users))

    alert("Cadastrado");
    document.getElementById("registrado").style.display = "block"
    window.location.href = "index.html"
}

function validaLogin(){
    let user = document.getElementById("userName2").value
    let pass = document.getElementById("pass2").value

    let users = JSON.parse(localStorage.getItem("users")) || []

    let foundUser = users.find(u => u.user === user && u.pass === pass)

    if (foundUser) {
        document.getElementById("logado").style.display = "block"
        window.location.href = "paginainicial.html"
    } else {
        document.getElementById("erroLogin").style.display = "block"
        document.getElementById("userName2").value = ""
        document.getElementById("pass2").value = ""
    }
}
function recuperarSenha() {
    let email = document.getElementById("email").value
    
 
    let users = JSON.parse(localStorage.getItem("users")) || []
    let foundUser = users.find(u => u.email === email)
    
    if (foundUser) {
        alert(`Um email de recuperação de senha foi enviado para ${email}`)
        window.location.href = "index.html";
    } else {
        document.getElementById("erroLogin").style.display = "block"
        document.getElementById("email").value = ""
    }
}