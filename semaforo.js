const img = document.querySelector('#img')
const buttons = document.querySelector('#buttons')
const buttonAutomatic = document.querySelector('#button_automatic')

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

function automaticHandleColor(color){
    setInterval( () => {
        return img.src = `assets/${color}.png`
    }, 1000)
}

function toggleAutomatic(){
    let colors = ['red', 'green', 'yellow']
    
    if (colors == 0){
        for (let i = 0; i < colors.length; i++){
            automaticHandleColor(colors[i])
        }
    } 
     
}

buttons.onclick = toggleColor
buttonAutomatic.onclick = toggleAutomatic