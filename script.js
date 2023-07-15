/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr
  .filter((person) => person.profession === "developer")
  .map((developer) => console.log(developer));
}

function PrintDeveloperbyForEach() {
  arr.forEach(function(item){
    if(item.profession=='developer'){
        console.log(item);
    }
})
  //Write your code here , just console.log
}

function addData() {
  let newentry={
    id:4,
    name:"susan",
    age:"20",
    profession:"intern"
  }
  arr.push(newentry);
console.log(arr);
  //Write your code here, just console.log
}

function removeAdmin() {
  let result = arr.filter(myfunc);
    function myfunc(value)
    {
        if(value.profession != "admin")
        return value;
    }
    console.log(result);
  //Write your code here, just console.log
}

function concatenateArray() {
  let newarr = [
    {id: 4, name: "richa", age: "25", profession: "system engineer" },
    { id: 5, name: "ishita", age: "26", profession: "professor" },
    { id: 6, name: "arhum", age: "124", profession: "artist" },
];
let result = arr.concat(newarr);
console.log(result);
  //Write your code here, just console.log
}
