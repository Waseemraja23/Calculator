let clearvalue = () => {
    document.querySelector(".output").value = "";
}

let calculate = () => {
    let element = document.querySelector(".output").value;
    let result = eval(element);
    document.querySelector(".output").value = result;
}

let addCharacter = (character) => {
    document.querySelector(".output").value += character;
}

let deleteCharacter = () => {
    let currentInput = document.querySelector(".output").value;
    document.querySelector(".output").value = currentInput.slice(0, -1);
}