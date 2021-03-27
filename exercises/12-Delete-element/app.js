var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    let arr = [];
    people.forEach(element => {
        if (element != personName) {
            arr.push(element);
        } 
    });
    return arr;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));