window.onload = () => {
    var active = false;
    var button = document.getElementById("btnWatch") 
    var circleWatch = document.getElementById("circleWatch")
    var textWacth = document.getElementById("textWacth")

    button.onclick = () => {
        if(active === true){
            textWacth.style.paddingRight = 0
            textWacth.style.paddingLeft = "15px"
            circleWatch.style.left = "0"
        }else{
            textWacth.style.paddingLeft = 0
            textWacth.style.paddingRight = "15px"
            circleWatch.style.left = "144px"
        }

        active = !active
    }
}