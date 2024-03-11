let input_string = "My name is Nishat";

let array = [];
let temp = '';


for(const text of input_string){
    if(text !== ''){
        temp += text;
    }
    else {
        if(temp !== ''){
            array.push(temp);
            temp = '';
        }
        }    
    }
    if (temp !== '') {
        array.push(temp);
}


console.log(array);













