let userName: String = "Jack";
let hasLoggedIn: boolean = true;

userName += "Smith";

console.log(hasLoggedIn);

let myNumber = 10;

let myRegex: RegExp = /foo/;

const names = userName.split(" ");
const myValues: Array<number> = [1, 2, 3];

interface Person{
    first: string;
    last: string;
}

const myPerson: {
  first: string;
  last: string;
} = {
  first: "Jack",
  last: "Smith"
}

const ids: Record<number, string> = {
    10:"a",
    20: "b"
}
ids [30] = "c";
if (ids[30] == 'D'){

}
for(let i = 0; i <10; i++){
    console.log(i);
}

[1,2,3].forEach((v) => console.log(v));
const out = [4,5,6].map((v)=> v * 10);
