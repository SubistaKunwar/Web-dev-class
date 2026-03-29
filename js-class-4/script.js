/*let arr1 = ['horse', 'cow']
let animals = ["cow", "goat"]
animals.splice(1, 0, "horse", "camel");
console.log(animals);

let arr1 = ['horse', 'cow'];
let arr2 = ['zebra', 'tiger'];
let arr3 = arr1.concat(arr2);
console.log(arr3);

let arr1 = ['horse','cow', 'donkey'];
arr1.forEach((arr) => {
  console.log(arr);
});
*/

let num = [1,2,3,4];
let finalNum=[];
for(let i=0; i<num.length;i++)
{
    finalNum.push(num[i]+5);
}
console.log(finalNum);