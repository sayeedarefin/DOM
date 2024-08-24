console.log("This is 2nd inside of the js file");

// select all li

const AllLi = document.getElementsByTagName('li');
console.log(AllLi);

// select All classes

const AllClass = document.getElementsByClassName('section-title');
console.log(AllClass);

// select a specific id

const secondSection = document.getElementById('second-section');
console.log(secondSection);
secondSection.style.color="Red";
secondSection.style.background="Green";

//adding a new list item

const newItem = document.getElementById('second-List');
const newLi = document.createElement('li');
newLi.innerText = 'My dynamic Item'
newItem.appendChild(newLi);

//adding a total new section

const main = document.getElementById('main-container');
const section = document.createElement('Section');
section.innerHTML = `
    <h1>My new dynamic section</h1>    
    <p>Extra text added to paragraph</p>
    <ul>
        <li>Dynamic-1</li>
        <li>Dynamic-1</li>
        <li>Dynamic-1</li>
        <li>Dynamic-1</li>
    </ul>
`

main.appendChild(section);

//query selector
const firstLi = document.querySelector('li');
console.log(firstLi); // Selects the first <li> element

const allLi = document.querySelectorAll('li');
console.log(allLi); // Selects all <li> elements as a NodeList
