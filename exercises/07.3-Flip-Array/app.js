var arr = [45,67,87,23,5,32,60];

//Your code here.
let aux = [];
for (let index = 0; index < arr.length; index++) {
    
    aux.push(arr[arr.length - index - 1]); // Last element stored
}
console.log(aux);
