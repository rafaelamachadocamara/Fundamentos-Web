/* var = uma variável declarada com var possui o que chamamos de escopo de função. 
Isso significa que se criarmos uma variável deste tipo dentro de uma função, 
sua referência poderá ser identificada e modificada em qualquer parte desta função, 
mesmo que criemos outros escopos dentro dela*/

/* let = um variável declarada com let leva em conta, não a função onde foi criada, 
mas sim o bloco de código de sua origem. Isso significa que se a declararmos 
dentro de um if(), switch() ou for(), ela será “enxergada” apenas dentro desta parte 
do código, dentro deste escopo específico. */

/* const = a última maneira de declarar uma variável é por meio de const, usada para definir uma constante. 
Talvez pensemos: “Mas como é possível usar uma declaração de variável para criar uma constante?”
Isso pode parecer não ter sentido. Entretanto, declarar uma variável como const não significa 
necessariamente que seu valor não pode ser mudado. 
Significa que não podemos sobrescrever o seu identificador */

/*

formas de acessar o dom: 

Case Sensitive = reconhece letras maisculas e minusculas

- por tag: getElementByTagName()
- por id: getElementById()
- por nome: getElementsByName()
- por classe: getElementsByClassName()
- por seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
     } else{
            txtNome.innerHTML = "Nome Válido"
            txtNome.style.color = "green"
            nomeOk = true
        }
    }

    function validaEmail(){
        let txtEmail = document.querySelector("#txtEmail")
        if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
            txtEmail.innerHTML = "E-mail Inválido"
            txtEmail.style.color = "red"
        }else{
            txtEmail.innerHTML = "E-mail Válido"
            txtEmail.style.color = "green"
            emailOk = true
         }
        }
        function validaAssunto(){
            let txtAssunto = document.querySelector("#txtAssunto")
            if(assunto.value.length >= 100){
                txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
                txtAssunto.style.color = "red"
                txtAssunto.style.display = "block"
            }else{
                txtAssunto.style.display = "none"
                assuntoOk = true
            }
        }
        function enviar(){
            if(nomeOk == true && emailOk == true && assuntoOk == true){
                alert("Formulário enviado com sucesso!")
            }else{
                alert("Preencha o formulário corretamente antes de enviar")
            }
        }
        function mapaZoom(){
            mapa.style.width = "800px"
            mapa.style.height = "600px"
        }
        function mapaNormal(){
            mapa.style.width = "400px"
            mapa.style.height = "250px"
        }