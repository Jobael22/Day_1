let unCapitalize_Words = function (str) {

  let result = str.split(" "),

  output = "";

  for(let i = 0; i < result.length; i++){

  output += result[i].charAt(0).toLowerCase() + result[i].substr(1) + " ";
  }

  return output;

  };

  console.log(unCapitalize_Words('Js String Exercises'));
