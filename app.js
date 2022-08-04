
var calInput = document.getElementById("cal-input");

// function insertValue(val) {
//     calInput.value += val
// }

function insertValue(a) {
    var lastIndex = calInput.value.length - 1;
    if ((calInput.value[lastIndex] === "+" || calInput.value[lastIndex] === "-" || calInput.value[lastIndex] === "*" || calInput.value[lastIndex] === "/") && (a === "+" || a === "-" || a === "*" || a === "/")) {
        calInput.value = calInput.value.slice(0, lastIndex) + a;
    } else {
        calInput.value += a;
    }
    for (i = 0; i < calInput.value.length; i++) {
        if (calInput.value[i] === ".") {
            document.getElementById("id1").setAttribute("disabled", "disabled")
        }
        else if (calInput.value[i] === "+" || calInput.value[i] === "-" || calInput.value[i] === "/" || calInput.value[i] === "*") {
            document.getElementById("id1").removeAttribute("disabled", "disabled")
        }
    }
}

function clearValue() {
    calInput.value = ""
}


function showResult() {
    calInput.value = eval(calInput.value)
}