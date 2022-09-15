

let names = []
let password = []
let choice = true

registro()

while(choice){

    dados()
    
    function dados(){
        choice = prompt("1 Cadastrar /// 2 Fazer Login /// 3 Encerrar /// 4 Excluir Cadastro")

        if(choice == "1"){
            registro()
        }

        if(choice == "2"){
            login()
        }
        if(choice == "3"){
            finish()
        }

        if(choice == "4"){
            erase()
         }
    }

}


function registro(){
    names.push(prompt("Digite seu Usuário"))
    password.push(prompt("Digite uma Senha"))
}



function login(){
    let names2 = prompt("Qual seu usuário ?")
    let password2 = prompt("Qual sua Senha ?")

    names.forEach(VerificateName)

    if(VerificateName == true && VerificatePassword == true){
        return alert("Login Efeutado com sucesso !")
    }

    else{
        return alert("Usuário ou Senha incorretos")
    }

    function VerificateName(item){
        if(item == names2){
            password.forEach(VerificatePassword)
            return VerificateName = true
        }
    }

    function VerificatePassword(item){
        if(item == password2){
            return VerificatePassword = true
        }
    }
}


function finish(){
    choice = false
}


function erase(){
    let NameErase = prompt("Qual usuário você quer excluir ?")

    names.forEach(EraseName)

    if(EraseName == true){
        return alert("Usuário e Senha excluidos com sucesso")
    }

    else{
        return alert("Usuário inexistente")
    }
    function EraseName(item, index){
        if(NameErase == item){
            names.splice(index, 1)
            password.splice(index, 1)
            return EraseName = true 
        }
              
    }
}

console.log(names, password)