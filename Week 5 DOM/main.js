  
//
//
// 
function fade2Content() {
    console.log('fade2Content called');
    document.body.classList.remove("blackScreen");
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