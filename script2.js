function string_parameterize(str)
{
    let temp = str.split('');

    let ar = [];
    for(let i = 0 ; i < temp.length ; i++)
    {
      
        if(temp[i] == ' ')
        {
            ar[i]='-';
            continue
        }
        else
         ar.push(temp[i])
    }
    return ar.join('').toLowerCase()
}

console.log(string_parameterize("Robin Singh from USA"));