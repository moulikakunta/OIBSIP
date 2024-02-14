let fahrenheit = document.getElementById("fahrenheit")

let celcius = document.getElementById("celcius")


let degreesEl = document.getElementById("degrees")
let typeEl = document.getElementById("type")
let result = document.getElementById("result")

function convertTemperature() {


    let degree = parseInt(degreesEl.value)

    let type = typeEl.value
    if (isNaN(degree)) {
        console.log(degree)
        result.value = ""
        alert("please enter the degrees")
        return;
    } else {
        if (type === "celcius") //if give type is celcius then temp converted to fahrenheit
        {
            result.value = (degree - 32) * 5 / 9
        } else if (type === "fahrenheit") //if give type is fahrenheit then temp converted to celcius
        {
            result.value = (9 / 5 * degree) + 32
        }
    }



    degreesEl.value = ""
}

function clearPreviousResult() {
    result.value = ""
}
