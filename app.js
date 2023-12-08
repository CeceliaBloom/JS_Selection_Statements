console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

            //Exercise 1:
let correctNumber=22;
let guessNumber=prompt("guess a number");

if(guessNumber == correctNumber){
  console.log("Congratulations!!!");

} else if(guessNumber > correctNumber){
    console.log("Too high");
}else if(guessNumber < correctNumber){
    console.log("Too low");
};

            //Exercise 2:
let birthMonth=prompt("What is your birth month?");

switch(birthMonth){
  case "December":
  case "January":
  case "February":
    console.log("Winter");
    break;

  case "March":
  case "April":
  case "May":
    console.log("Spring");
    break;
  
  case "June":
  case "July":
  case "August":
    console.log("Summer");
    break; 

  case "September":
  case "October":
  case "November":
    console.log("Fall");
    break;  
  
  default:
    console.log("Invalid month");
};

            //Exercise 3:
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

            //Switch Statement for typeId
switch(typeId){
  case "01":
    type= "Tank Top";
  break;

  case "02":
    type= "T-Shirt";
  break;

  case "03":
    type= "Long Sleeve";
  break;

  case "04":
    type= "Sweat Shirt";
  break;

  default:
    type= "other";   
};

          //Switch Statement for colorId
switch(colorId){
  case "BK":
    color= "Black";
  break;

  case "BL":
    color= "Blue";
  break;

  case "RD":
    color= "Red";
  break;

  case "PU":
    color= "Purple";
  break;

  default:
    color= "White";
};

          //Switch Statement for sizeId
switch(sizeId){
  case "S":
    size= "Small";
  break;

  case "M":
    size= "Medium";
  break;

  case "L":
    size= "Large";
  break;

  case "XL":
    size= "Extra Large";
  break;

  default:
    size= "One Size Fits All";
};
console.log(`Product: ${size} ${color} ${type}`);









