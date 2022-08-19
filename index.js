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

function ternaryCheckCity(city){
  // Write your code here!

  return (city === "NYC")? "Ok, sounds good."  : "No go."
}
console.log(ternaryCheckCity("NYC"))

function switchOnCharmFromTip(){
  // Write your code here!
  const tip ="generous";
  switch(tip){
    case "generous" :
      return("Thank you so much.");
      break;
    case "generous":
       return ("Thank you.");
        break;
    default:
         return ("Bye.");
  }
}
console.log(switchOnCharmFromTip("oscar"));