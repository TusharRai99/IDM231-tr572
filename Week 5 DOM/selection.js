const example = document.querySelector('.example01'); 
// Query Selector gets everything including all content
const exampleText = example.textContent;

console.group('Example');
console.log('example', example);
console.log('exampleText', exampleText);
console.groupEnd();


const firstUl = document.querySelector('ul');
  const newListItem = document.createElement('li');
  const newTextInfo = document.createTextNode('Howdy!');

  newListItem.appendChild(newTextInfo);
  firstUl.appendChild(newListItem);
  firstUl.removeChild(example);

  const wwa = document.getElementById('working_with_attributes');
  console.group('Working With Attributes');
  console.log(wwa.innerHTML);
  console.log(wwa.getAttribute('class'));
  console.log(wwa.classList);
  console.log(wwa.className);
  console.groupEnd();

  wwa.setAttribute('class', 'testing class2');
  console.log(wwa.className);
  wwa.removeAttribute('id');
  wwa.removeAttribute('class');

  const myID = document.getElementById('myID');
  console.group('Access by ID');
  console.log(myID.innerHTML);
  console.groupEnd()

  const listItems = document.querySelectorAll('li');
  console.group('List Items');
  console.log(listItems);
  console.groupEnd();

  const listItemsLength = listItems.length;
  console.log('listItemsLength', listItemsLength);

  let noteElements = document.getElementsByClassName('note');
  console.log('noteElements', noteElements);

  noteElements = document.getElementsByTagName('li');
  console.log('noteElements', noteElements);