//arr = [1,2,3,4,5,6,7,8,9,20]

arr1 = []

for  (let i = 1; i <= 10; i++){
    arr1.push(i);

}
console.log(arr1);

//arr = [10,9,8,7,6,5,4,3,2,1]

arr2 = []

for (let i = 10; i >= 1; i--){
    arr2.push(i);
}
console.log(arr2);

//arr4=[1,2,3,4,5,10,9,8,7,6]

arr3 = []

for (let i = 1; i <= 10; i++){
if (i>5){
    arr3.unshift(i)
}
else{
    arr3.push(i)
}
}
console.log(arr3);

//do a for lop that finds the index 3;

arr6 = [1,2,3,4,5,6,7,8,9,10];
for(let i in arr6){
    if(arr6[i] == 3){
        console.log("elementi : " + arr6[i] + " , " + "indeksi : " + i);
    }
}

const {property} =  require("./ushtrime1.js");
property("eyecolor");






