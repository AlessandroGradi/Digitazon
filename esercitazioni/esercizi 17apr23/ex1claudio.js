let a1 = [10, "ciao", true, 20, "js", 4];
let sum = 0;
a1.forEach(
    function (i) {
        if (typeof i == "number") {
            sum += i;
        } else console.log("Mi serve un numero");
    }
);

console.log("La somma dei numeri nell'array è: " + sum);