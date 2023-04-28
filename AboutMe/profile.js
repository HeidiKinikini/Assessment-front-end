let favColorButton = document.getElementById('color')

let favPlaceButton = document.getElementById('place')

let favRitualButton = document.getElementById('ritual')


function clickColor(event){
alert('yellow, blue, pink, green')
event.preventDefault()
}

function clickPlace (event){
    alert('With my daughter')
    event.preventDefault()
}

function clickRitual(event){
    alert('Drinking caffeine')
    event.preventDefault()
}

favColorButton.addEventListener("click", clickColor)

favPlaceButton.addEventListener("click", clickPlace)

favRitualButton.addEventListener("click", clickRitual)