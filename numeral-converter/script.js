//Selectors
const title = document.getElementById("title");
const form = document.querySelector("form");
const input = document.getElementById("userInput");
const output = document.getElementById("output");
const switchBtn = document.getElementById("switch");

//Necessary Object
const romanValues = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

Object.freeze(romanValues); //Preventing object mutation

//Type conversion
let type = "decimal to roman";
switchBtn.addEventListener("click", switchType);

//Event listeners
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = Number(input.value.trim());
    if (type === "decimal to roman") {
        const roman = convertDecimalToRoman(inputValue);
        output.innerText = `Roman number of ${inputValue} is ${roman}`;
    } else if (type === "roman to decimal") {
        const decimal = convertRomanToDecimal(input.value.trim().toUpperCase());
        output.innerText = `Decimal value of ${input.value.toUpperCase()} is ${decimal}`;
    }
    input.value = "";
});

//Functions
function switchType() {
    if (type === "decimal to roman") {
        type = "roman to decimal";
        title.innerText = "Roman to Decimal Numeral Converter and Vice Versa";
        input.placeholder = "Enter a roman number...";
        input.setAttribute("type", "text");
        input.removeAttribute("min");
    } else if ((type = "roman to decimal")) {
        type = "decimal to roman";
        title.innerText = "Decimal to Roman Numeral Converter and Vice Versa";
        input.placeholder = "Enter a decimal number...";
        input.setAttribute("type", "number");
        input.setAttribute("step", "1");
    }
}

//Decimal to Roman converter function
function convertDecimalToRoman(decimalNum) {
    const romanArr = [];
    for (let key in romanValues) {
        while (decimalNum >= romanValues[key]) {
            romanArr.push(key);
            decimalNum -= romanValues[key];
        }
    }
    const romanNum = romanArr.join("");
    return romanNum;
}

//Roman to Decimal converter function
function convertRomanToDecimal(romanNum) {
    let roman = [
        "I",
        "IV",
        "V",
        "IX",
        "X",
        "XL",
        "L",
        "XC",
        "C",
        "CD",
        "D",
        "CM",
        "M",
    ];
    let value = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let decimalNum = 0;
    for (let i = 12; i >= 0; i--) {
        while (romanNum.indexOf(roman[i]) === 0) {
            let reg = new RegExp(roman[i]);
            romanNum = romanNum.replace(reg, "");
            decimalNum += value[i];
        }
    }
    return decimalNum;
}
