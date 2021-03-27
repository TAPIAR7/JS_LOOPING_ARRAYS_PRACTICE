// Code goes here
function matrixBuilder(value){
    let arr = [];
    for (let row = 0; row < value; row++) {
        arr[row] = [];
        for (let col = 0; col < value; col++) {
             arr[row][col] = 1;
        }
    }
    return arr;
}


// do not change anything from this line down
console.log(matrixBuilder(5))