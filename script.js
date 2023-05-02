function youClicked() {
    return console.log('You clicked me')
}

function youEntered() {
    return console.log('You entered me')
}

function youLeft() {
    return console.log('You left me')
}

const green = document.getElementById('green')
const orange = document.getElementById('orange')
const black = document.querySelector('.black')

green.addEventListener('click', () => {
    return youClicked();
})

orange.addEventListener('mouseover', () => {
    console.log('You moused over me')
})

black.addEventListener('click', function() {
    return youClicked();
})

black.addEventListener('mouseover', function() {
    console.log('You moused over me')
})