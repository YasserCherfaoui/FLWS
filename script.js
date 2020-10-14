function findLongestWordLength(str) {
  //Declaring Variables;
    let count = 0;
    let arr = [];
    let space = 0;
    //Starting a loop to check the Characters;
    for (let i=0;i<str.length;i++){
        if(str[i]==' '){
            space++;
        }
    //Using the Switch case to control the counter
        switch(str[i]){
            case ' ' : arr.push(count);
                count = 0;
                break;
                arr.push(count);
                break;
            default : count++;
        }if (str[i]!=' '){
            arr.push(count);
        }
    }
    //Getting the max;
    let max = 0;
    for (let j=0;j<arr.length;j++){
        if (max<arr[j]){
            max=arr[j];
        }
    }
    //printing the max on the console;
    console.log(max);

    return max;
}
// Calling the Function;
findLongestWordLength("Yasser is a developer");
