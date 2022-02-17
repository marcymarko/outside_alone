//Get the string from the page
//Controller function
function getValue(){
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}
//Reverse the string
//Logic function
function reverseString(userString){

    let revString = [];

    //reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
        
    }

    return revString;

}
//Display the reversed string to the user
//View function
function displayString(revString){

    //Write to the page
    document.getElementById("message").innerHTML = `Your string reversed is: ${revString}`;
    //show the alert
    document.getElementById("alert").classList.remove("invisible");
}