function scuberGreetingForFeet(ride){
  // Write your code here!
  // let message;
  if ((ride) <= 400){
    return('This one is on me!');
  }
  else if ((ride)>2000 && (ride)<=2500){
    return("I will gladly take your thirty bucks.");
  }else{
    return 'No can do.'
  }
  
}
console.log(scuberGreetingForFeet(2007))

function ternaryCheckCity(city ){
  // Write your code here!
if (city === "NYC"){
  return "Ok, sounds good."
} else{
  return "No go."
}
}
  

console.log(ternaryCheckCity("oscar"))

function switchOnCharmFromTip(){
  // Write your code here!
  switch(tip){
    case "generous":
      return "Thank you so much."
     case "not as generous":
      break;
      return "Thank you"
       default:
        return "Bye."
  }
}