var Name = document.getElementById('Name')

var Age = window.document.getElementById('Age')

var Gender = window.document.getElementsByName('gender')

var SelectedGender

for(let i = 0; i < Gender.length; i++) {
    if(Gender[i].checked) {
        SelectedGender = Gender[i].value
        break
    }
}

var Submit = document.getElementById('Submit')
Submit.addEventListener('click', Click)

function Click() {
    let NameValue = Name.value
    let AgeValue = Number(Age.value)
    let GenderValue = SelectedGender

     alert("Nome = " + NameValue + "Idade = " + AgeValue + "Genero = " + GenderValue) 
}