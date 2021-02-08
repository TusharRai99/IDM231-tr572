const trumpetObj = document.getElementById('trumpet');
const cornetObj = document.getElementById('cornet');
const tubaObj = document.getElementById('tuba');

trumpetObj.addEventListener('click', function(){
    console.log('Trumpet clicked ON!');
    UserPicked('trumpet');
});

cornetObj.addEventListener('click', function(){
    console.log('Cornet clicked ON!');
    UserPicked('cornet');
});

tubaObj.addEventListener('click', function(){
    console.log('Tuba clicked ON!');
    UserPicked('tuba');
});

function UserPicked(wmp){
    console.log('User Picked Called ' + wmp);
    // Display large image
    // Display date range
    // Display description
    //Play Item Sound 
}


const table = {
    type: 'billiards',
    solids: 8,
    stripes: 7,
    games: ['8-Ball', '9-Ball', 'Straight']
  };
  
  console.log('The answer is ' + table.games[1]);

  for (let z = 1, z <=10; z++) {
    console.log('Item'+ z);
    }