function fattoriale(n) {
    if (n==0) {
        return 1;
    } else {
        return (n * fattoriale(n-1));
    }
}

console.log(fattoriale(0));
console.log(fattoriale(1));
console.log(fattoriale(2));
console.log(fattoriale(3));
console.log(fattoriale(4));