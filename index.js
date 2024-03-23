function scuberGreetingForFeet(ride){
  // Write your code here!
  let payment;
  if (ride<= 400){
    payment = 'This one is on me!';
  }
  else if(ride >=401 && ride<=2000){
    payment = 'That will be twenty bucks.';
  }
  else if (ride>=2001 && ride <= 2500){
   payment= 'I will gladly take your thirty bucks.';
  }
  else if (ride>=2501){
   payment='No can do.';
  }
  return payment;
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);


function ternaryCheckCity(city){
  // Write your code here!
return city ==="NYC"? "Ok, sounds good." : "No go.";
}

ternaryCheckCity("NYC");
ternaryCheckCity("Pittsburgh");


function switchOnCharmFromTip(tip){
  // Write your code here!

  switch(tip){
    case 'generous':
      return 'Thank you so much.';

      case 'not as generous':
        return 'Thank you.';

        case 'if anything else' && 'thanks for everything':
          return 'Bye.';
  }

  switchOnCharmFromTip('generous');
  switchOnCharmFromTip('not as generous');
  switchOnCharmFromTip('if anything else' || 'thanks for everything');



}