function unc(str, separator) {
    
    if(typeof(separator) == "undefined") {
      separator = " ";
    }
    
    let str1 = str.replace(/[A-Z]/g, function (letter) 
    {
      return separator + letter.toLowerCase();
    });
 
    return str1.replace("/^" + separator + "/", '');
  }
  console.log(unc('helloWorld'));
  console.log(unc('helloWorld','-'));
  console.log(unc('helloWorld','_'));