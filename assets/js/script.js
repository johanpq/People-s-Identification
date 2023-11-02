var Name = document.getElementById('Name')
var Age = document.getElementById('Age')

var Gender = document.getElementsByName('gender')

var SelectedGender = ""

var Submit = document.getElementById('Submit')
Submit.addEventListener('click', Click)

function Click() {
    if(Name.value.trim() === "") {
        alert("Type your name please! ")
        //checa se o nome não recebe nada
        //função trim retira os espaços em branco no inicio e fim da string
    } else if(!isNaN(Name.value)) {
        alert("It's a number! Type words")

        //isNaN = is not a number
        // !isNaN() - verifica se é um número
        // isNaN() - verifica se não é um número
    }

    if(Age.value > 110) {
        alert("Age is too high, try less! ")
    }

    if(Gender[0].checked) {
        SelectedGender = "Male"
    } else if(Gender[1].checked) {
        SelectedGender = "Female"
    }

}


// Criando elementos
/* 
var img = document.createElement('img') criei uma tag img <img src = "">

img.setAttribute('id', "foto") criei um id com o valor foto 

<img id = "foto" src = "">

img.setAttribute('src', 'diretorio da imagem') cria o src com o direitorio

e uma forma para colocar a imagem no html 

div.appendChild(img)  appendChild adicionar um elemento filho sendo a div o pai
 */