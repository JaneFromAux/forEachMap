
console.log("Level1_1");


let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]
let getSort = getraenke.sort();
console.log(getSort);
let myDrinks = getSort.forEach((elt) => {
    document.write(`<p>${elt}</p>`);
})


console.log("Level1_2");
let upperDrinks = getSort.map((elt) => {
    return elt.toUpperCase();
})
console.log(upperDrinks);


console.log("Level1_3");
let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];
let arr2 = array.map((num) => {
    return num * 2;
})
console.log(arr2);
let arr2Sort = arr2.sort((a, b) => a - b);
console.log(arr2Sort);

console.log("Level1_4");
let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let umrechnung = fahrenheit.map((ele) => {
    let celsius = Math.round((ele - 32) / 1.8000);
    return celsius;
});
console.log(umrechnung);




console.log("Level1_5");
let checkNumber = [18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];


// const checkCheck = checkNumber.map((part) => {
//     if (part % 3 === 0) {
//         return part + 100;
//     } else {
//         return part;
//     }
// });
let checkCheck = []
checkNumber.forEach((part) => {
    if (part % 3 === 0) {
        checkCheck.push(part + 100);
    } else {
        checkCheck.push(part);
    }
});
console.log(checkCheck);
// bei forEach muss ein leeres Array erstellt werden und das ergbnis hinein gepusht oder hineinn unshift() werden, da forEach sonst undefined zurückgibt