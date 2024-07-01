let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
screenValue = "";
var x=0, y, z = 0;
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
        buttonText = event.target.innerText;
        console.log("Button is " + buttonText);
        if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            if (z == 1) {
                y = screenValue.substr(screenValue.indexOf('^') + 1, screenValue.length);
                screen.value = Math.pow(x, y);
                screenValue = screen.value;
            }
            else {
                screen.value = eval(screenValue);
                screenValue = screen.value;
            }
        }
        else if (buttonText == 'x') {
            screen.value = screenValue.substr(0, screenValue.length - 1);
            screenValue = screen.value;
        }
        else if (buttonText == '^') {
            x = screenValue.substr(0, screenValue.length);
            screenValue += buttonText;
            screen.value = screenValue;
            z = 1;
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}


