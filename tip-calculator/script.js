//Selectors
const inputElements = document.querySelectorAll("input");

//Event listeners
inputElements.forEach((input) => input.addEventListener("input", update));

//functions
function update() {
    const bill = Number(document.getElementById("yourBill").value);
    const tipPercent = Number(document.getElementById("tipInput").value);
    const split = Number(document.getElementById("splitInput").value);

    const tip = bill * (tipPercent / 100);
    const total = bill + tip;
    const billEach = total / split;
    const tipEach = tip / split;

    document.getElementById("tipPercent").innerText = tipPercent + "%";
    document.getElementById("tipValue").innerText = formatMoney(tip);
    document.getElementById("totalWithTip").innerHTML = formatMoney(total);
    document.getElementById("splitValue").innerText = split + " person";
    document.getElementById("billEach").innerText = formatMoney(billEach);
    document.getElementById("tipEach").innerText = formatMoney(tipEach);
}

function formatMoney(value) {
    value = value.toFixed(2);
    return "$ " + value;
}
