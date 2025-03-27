// Birinci Task

let eded = 0;

for (let i = 1; i <= 100; i++) {
    eded += i
}

console.log("Ededlerin cemi", eded);


// Ikinci Task

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}


// Ucuncu Task 

let adam = {
    name : "Ali",
    age : 21,
    town : "Baku"
}
    
for (let x in adam) {
    console.log(adam[x]);
}


// Dorduncu Task

let book = {
    kitab: '1984', 
    müəllif: 'George Orwell'
}
    
for (let x in book) {
    console.log(book[x]);
}

// Beshinci Task

const meyveler = ['alma', 'armud', 'banan'];
for (const x of meyveler) {
    console.log(x);
}


// Altinci Task 

const Salam = 'Salam';
for (const x of Salam)
    console.log(x);
    

// Yeddinci Task

let i = 1;
while (i <= 10) {
    console.log(i); i++;
}


// Sekkizinci Task

let arr = [5, 10, 15, 20];

do {
    console.log(arr.shift());
} while (arr.length > 0)



// Doqquzuncu Task

let n = 1;
do {
    console.log(n); n++;
}   while (n <= 5)


// Onuncu Task

let k = 0;
const a = 50;

do {
    console.log(k), k++;
    
} while (k < a)







