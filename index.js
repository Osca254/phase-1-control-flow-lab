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

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case "generous" :
      return("Thank you so much.");
    case " not generous":
       return ("Thank you.");
    default:
         return ("Bye.");
  }
}
console.log(switchOnCharmFromTip(" not generous"));