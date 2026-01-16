// STAP 1: selecteren wat ik nodig heb de form, buttonen input

const form = document.querySelector('form')
const button = document.querySelector('form button')
const input = document.querySelector('#email')

//STAP2: luistreren naar submit, wachten op klik
form.addEventListener('submit', function(event){
    event.preventDefault()


//STAP3: actie uitvoeren + animatie
button.classList.add('rotate')
button.textContent = 'Signed Up' //tekst veranderen
input.disabled = true // input uitschakelen 
});
