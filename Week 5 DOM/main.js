  
//
//
// 
function fade2Content() {
    console.log('fade2Content called');
    document.body.classList.remove("blackScreen"); //?????
  }

  const pisObj = document.getElementById('pis');
  const scoObj = document.getElementById('sco');
  const aquObj = document.getElementById('aqu');

  const displayObj = document.getElementById('display');

  pisObj.addEventListener('click',function(evt) {
      console.log('pis button clicked' )
      const idName = evt.target.id;
      userPicked(idName);

  } );

  scoObj.addEventListener('click',function(evt) {
    console.log('sco button clicked')
    const idName = evt.target.id;
    userPicked(idName);

} );

aquObj.addEventListener('click',function(evt) {
    console.log('aqu button clicked')
    const idName = evt.target.id;
    userPicked(idName);

} );


function userPicked (whichOne) {
    switch (whichOne) {
case 'pis':
displayObj.src = 'images/ful_pisces.png';
// display date range
// display description
// play sound
break;
case 'sco':
displayObj.src = 'images/ful_scorpio.png';
break;
case 'aqu':
displayObj.src = 'images/ful_aquarius.png';
break;
    default:
        displayObj.src = 'images/ful_blank.png';
    }

}

// Calander Input Code



const userSubmitObj = document.getElementById('userSubmit');
userSubmitObj.addEventListener('click', function() {
console.log('User Submit button clicked');
// Get the user first name and store it in a variable
const userFirstName = document.getElementById('fname').value;
console.log('userFirstName is: '  +userFirstName);
// Get the user date and exctract day and month
const userBday = new Date(document.getElementById('bday').value);
console.log('user Bday is ' +userBday);
// Figure out the zodaic sign based on month and day
let whichMonth = userBday.getUTCMonth();
whichMonth++;
console.log('whichMonth is ' +whichMonth);

const whichDayOfMonth = userBday.getUTCDate();
console.log('whichDay is ' +whichDayOfMonth);

let AstroSign = "";

if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "cap";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "sag";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "sco";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "lib";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "vir";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "can";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "gem";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "tau";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "ari";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "pis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "aqu";
  }
console.log('AstroSign is ' +AstroSign);
userPicked(AstroSign);


//Display custom Image based on zodiac sign

});