let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
let odd = [];
let even = [];

const mergeTwoList = (arr) => {
    let list = [];
    arr.forEach(element => {
        if (element % 2 === 0) {
            even.push(element);
        } else {
            odd.push(element);
        }
    });
    odd.forEach(element => {
        list.push(element);
    });
    even.forEach(element => {
        list.push(element);
    });
    return list;
    //Another way is with odd.concat(even)
}

console.log(mergeTwoList(list_of_numbers))
