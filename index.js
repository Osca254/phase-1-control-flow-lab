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

function ternaryCheckCity(city = "NYC" ){
  // Write your code here!
  return (city === true)? "Ok,sounds good." : "No go."
}
console.log(ternaryCheckCity("NYC"))

function switchOnCharmFromTip(){
  // Write your code here!
  let tip ="generous";
  switch(tip){
    case "generous" :
      console.log("Thank you so much.");
      break;
      case tip != "generous":
        console.log("Thank you");
        break;
        default:
          console.log("Bye");
  }
}
switchOnCharmFromTip()