let number = 14

function numbertype (number){

switch(true){

    case(number>0)
       : console.log("number is positive")
      break  
    case(number<0)
       : console.log ("number is negative")
      break  
    default :   
      console.log ("number is zero")

}
}
numbertype(-3)
numbertype(33334)
numbertype(0)
