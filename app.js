var char  = [];


var charInput  = document.getElementById("chars");
var messageBox  = document.getElementById("display");


insert = () => {
 
    char.push(charInput.value);
    
 
 
 clearAndShow();
 special();
 
 
}

clearAndShow = () => {
  // Clear our fields
  charInput.value = ""; 
  // Show our output
  messageBox.innerHTML = ""; 
  messageBox.innerHTML += char.join(", ");
  
}

special = () => {

    var acceptChar =  messageBox.innerHTML; 
    var divide = acceptChar.split("",10);

    for(watch of divide){
    
    var randomize = Math.floor(Math.random() * 10);

    var holdFinals = watch += randomize;

   

   document.write(holdFinals);
   
    //console.log(holdFinals);
   
    }
    
}

