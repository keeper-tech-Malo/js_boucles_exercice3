//1
console.log('____1____');
let multi = 5;
for (let i = 1; i <= 9; i++) {
    console.log(`${multi} x ${i} = ${multi*i}`);
}

console.log('____2____');
//2
for (let i = 1; i <= 9; i += 2) {
    console.log(`${multi} x ${i} = ${multi*i}`);
}

console.log('____3____');
//3 
// for (let i = 20; i >= 0; i-=2) {
//     console.log(i);
// }

// let monTab = [];
// for (let i = 20; i >=0; i-=2) {
//        monTab.push(i)
// }
// let result = monTab.join('-');
// console.log(result);

let nb = [];
for (let i = 20; i > 0; i--) {
    if (i % 2 == 0) {
        nb.push(i)
    }
}
let result = nb.join('-');
console.log(result);


console.log('____4____');
//4
let coding16 = ["saliou", "zakaria", "ayoub", "mohammed", "alex", "adame", "sebastien", "achraf", "bene", "abdellah", "malo", "louise", "natchez", "dawid", "maximilien", "jamila", "mexence", "zulma"]

let longPrenom = [];
let petitPrenom = [];

coding16.forEach(el => {
    if (el.length >= 5) {
        longPrenom.push(el)
    } else {
        petitPrenom.push(el)
    }
});

// for (let i = 0; i < coding16.length; i++) {
//     if (coding16[i].length >= 5) {
//         longPrenom.push(coding16[i])
//     } else {
//         petitPrenom.push(coding16[i])
//     }
// }

console.log(longPrenom);
console.log(petitPrenom);

console.log('____5____');
//5
let sommes = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61];

let grossesSommes = [];
let petiteSommes = [];

// sommes.forEach(el => {
//     if (el > 60) {
//         grossesSommes.push(el)
//         sommes.splice(el, 1)
//     } else {
//         petiteSommes.push(el)
//         sommes.splice(el, 1)
//     }
// });
for (let i = 0; i < sommes.length; i++) {
    if (sommes[i] > 60) {
        grossesSommes.push(sommes[i])
    } else {
        petiteSommes.push(sommes[i])
    }
    sommes.splice(i, 1)
    i--
}

console.log(grossesSommes);
console.log(petiteSommes);
console.log(sommes);

console.log('____6____');
//6

let typeString = [];
let typeNumber = [];
let typeObject = [];
let typeAutre = [];

//v1 pas propre --
// donnees.forEach((el,i) => {
//     if (typeof el == 'string') {
//         console.log(`${typeof el} = ${el} -> à l'indice ${i}`);
//         typeString.push(el)
//         // delete donnees[i]

//     } else if (typeof el == 'number') {
//         console.log(`${typeof el} = ${el} -> à l'indice ${i}`);
//         typeNumber.push(el)
//         // delete donnees[i]

//     } else if (typeof el == 'object') {
//         console.log(`${typeof el} = ${el} -> à l'indice ${i}`);
//         typeObject.push(el)
//         // delete donnees[i]

//     } else {
//         console.log(`${typeof el} = ${el} -> à l'indice ${i}`);
//         typeAutre.push(el)
//         // delete donnees[i]
//     }
// });
// donnees.splice(0)
// for (let i = 0; i < donnees.length; i++) {
// donnees.splice(i, 1)
// }

let donnees = [14, 7, 97, {}, "247", 67, 101, true, 34, 78, ['tableau'], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100];

//v2 plus propre
for (let i = 0; i < donnees.length; i++) {
    if (typeof donnees[i] == 'string') {
        console.log(`${typeof donnees[i]} = ${donnees[i]} -> à l'indice ${i}`);
        typeString.push(donnees[i])

    } else if (typeof donnees[i] == 'number') {
        console.log(`${typeof donnees[i]} = ${donnees[i]} -> à l'indice ${i}`);
        typeNumber.push(donnees[i])

    } else if (typeof donnees[i] == 'object') {
        console.log(`${typeof donnees[i]} = ${donnees[i]} -> à l'indice ${i}`);
        typeObject.push(donnees[i])

    } else {
        console.log(`${typeof donnees[i]} = ${donnees[i]} -> à l'indice ${i}`);
        typeAutre.push(donnees[i])
    }
    donnees.splice(i, 1)
    i--
}

console.log(typeString);
console.log(typeNumber);
console.log(typeObject);
console.log(typeAutre);
console.log(donnees);