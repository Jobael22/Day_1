truncate_string = function(str1,length){
    let substr = "";

    for (i=0; i<length; i++){

        substr += str1.charAt(i)
    }
    return substr;

}
console.log(truncate_string("Robin Singh",4));

