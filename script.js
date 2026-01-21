// STAP 1: selecteren wat ik nodig heb de form, buttonen input

const form = document.querySelector('form')
const buttonText = document.querySelector('.button-text')
const button = document.querySelector('.submit-button')
const input = document.querySelector('#email')

//STAP2: luistreren naar submit, wachten op klik
form.addEventListener('submit', function(event){
    event.preventDefault()


//STAP3: animatie starten
buttonText.classList.add('rotate-text')
input.disabled = true // input uitschakelen 
})

// na animatie moet de tekst en kleur veranderen
buttonText.addEventListener('animationend', function(){
    buttonText.textContent = 'Signed Up ✔' //tekst veranderen
    button.classList.add('button-succes') //button kleur
})
