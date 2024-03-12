// let n = 5;
// let string = "";
// for(i=0; i<n; i++){
//     for(j=0; j<n; j++){
//         string += "*"
//     }
//     string += '\n';
// }
// console.log(string);    //Square Star Pattern in Javascript


// let n = 4;
// let string = "";

// for(i=0; i<=n; i++){
//     for(j=0; j<n-1; j++){
//         string += "";
//     }
//     for(k=0; k<n-i; k++){
//         string += "*";
//     }
//     string += "\n";
    
// }
// console.log(string);    // Right Triangle Pattern in JavaScript

// let n = 5;
// let string = '';

// for(i=0; i<=n; i++){
//     for(j=0; j<i; j++){
//         string += "*";
//     }
//     string += "\n"
// }
// console.log(string); //Left Triangle Pattern in Javascript

// let n = 5;
// let string = '';

// for(i=0; i<=n; i++){
//     for(j=0; j<n-i; j++){
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string); //Downward Triangle Star Pattern

// let n = 8;
// let string = '';

// for(let i = 1; i <= n; i++){
//     for(let j = n; j > i; j--){
//         string += '';
//     }
//     for(let k = 0; k < i * 2 - 1; k++){
//         string += '*';
//     }
//     string += '\n';
// }
// console.log(string);


// let n = 8; // you can take input from prompt or change the value
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string)


// let n = 5;
// let string = "";

// for (let i = 1; i <= n; i++) {

//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);  //Pyramid Star Pattern


// let n = 5; 
// let string = "";

// for(let i = 0; i <= n; i++){
//   for(let j = 0; j <= n-1; j++){
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++){

//   }
// }

// console.log(string);


let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  
  for (let j = n; j > i; j--) {
    string += " ";
  }
  for (let k = 0; k <= i * 2 - 1; k++) {
    if(k === 0 || k === 2 * i - 2){
      string += "*";
    }
    else{
      string += " ";
    }
  }
  string += "\n";
}
for(let i = 1; i<= n-1; i++){
  for(let j = 0; j<i; j++){
    string += " ";
  }
  for(let k = (n - i) * 2 - 1; k > 0; k--){
    if(k === 1 || k === (n - i) * 2 - 1){
      string += "*";
    }
    else{
      string += " ";
    }
  }
  string += "\n";
}
console.log(string);