//Anthony Owen, csc102, Assignment3.1//
//creates function for string//
function strings()
{
    // creates var for firstInput//
    var string1 = document.getElementById("firstInput").value;
    
    //creates var for splitting string1//
    var splitStr = string1.split("");
    
    //creates var for reversing of the split of string1//
    var reverseStr = splitStr.reverse();
    
    //creates var for joining the reverse split of string1//
    var joinStr = reverseStr.join("");
    
    //if string1 is = to the joined string inputs Palindrome in status are//
    if (string1 == joinStr)
    {
        document.getElementById("stringStatus").innerHTML = "Palindrome"
    }
    // if it string1 does not = joined string inputs not a palindrome//
    else
    {
        document.getElementById("stringStatus").innerHTML = "not a palindrome"
    }
    // if string1 is blank then inputs Error in status area//
    if (string1 == "")
         {
        document.getElementById("stringStatus").innerHTML = "Error"
         } 
    

}

function verifyname()
{
    // gets veriables from form//
    var name1 = document.getElementById("firstName").value;
    var name2 = document.getElementById("lastName").value;
    var wholename = name1+name2;
    
    //verifies length of whole name//
    if (wholename.length <=19) 
        {//updates nameStatus if wholename is less than 20//
            document.getElementById("nameStatus").innerHTML = "combined length too short"
        }
    else 
        {//updates nameStatus if wholename is 20 or greater//
            document.getElementById("nameStatus").innerHTML = "complete zipcode verification"
        }



}


function verifyzipcode()
{//gets veriables from form//
    var zip = document.getElementById("zipcode").value;
    // if zipcode length is less than 5 zipcodeStatus is updated to "zipcode too short"//
    if (zip.length <=4) 
        {
        document.getElementById("zipcodeStatus").innerHTML = "zipcode too short"
        } 
        //if zipcode length is 5 zipcodeStatus is updated to "secret message"//
    else {
        document.getElementById("zipcodeStatus").innerHTML = "Silly String was invented in 1972 by Leonard A. Fish and Robert P. Cox originally as an instant bone cast "
         }
         //if zipcode is longer than 5 zipcodeStatus is updated to "zipcode is too long"//
    if (zip.length >=6)
        {
        document.getElementById("zipcodeStatus").innerHTML = "zipcode is too long"
        }
    
    
}

