const img = document.querySelector('#img')
const buttons = document.querySelector('#buttons')
const buttonAutomatic = document.querySelector('#button_automatic')
const buttonStop = document.querySelector('#button_stop')
function toggleColor (event){
    let colorButton = event.target.id

    if (colorButton === 'button_red'){
        img.src = 'assets/red.png'
    }
    else if (colorButton === 'button_green'){
        img.src = 'assets/green.png'
    }
    else if (colorButton === 'button_yellow'){
        img.src = 'assets/yellow.png'
    } 
}

function toggleAutomatic(){
    let colors = ['red', 'yellow', 'green']
    let index = 0
    const interval =  setInterval( () => { 
        if (index < colors.length) {
        img.src = `assets/${colors[index]}.png`
        return index ++
        }
        img.src = 'assets/off.png'
        return clearInterval(interval)
    }, 1000)
}

buttons.onclick = toggleColor
buttonAutomatic.onclick = toggleAutomatic
