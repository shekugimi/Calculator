var string = "";
var input = document.querySelector('.main-input');

var buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);

        } else if (e.target.innerHTML == "C") {
            string = "";
        } else if (e.target.innerHTML == "«") {
            string = string.slice(0, -1);
        } else if (e.target.innerHTML == "x<sup>2</sup>") {
            string = string * string;
        }
        else {
            string += e.target.innerHTML;
        }

        if (string == undefined)
            input.value = 0;
        else
            input.value = string;



    })
})