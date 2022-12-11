// const booger = document.getElementById('nametag')
// booger.style.background = 'purple';

const nameDisplay = document.getElementById('name-display');
const nameInput = document.getElementById('name-input');
const pronounsDisplay = document.getElementById('pronouns-display');
const pronounInput = document.getElementById('pronoun-input');
const button = document.getElementById('update-button');
button.addEventListener('click', () => {
    console.log('i am clicking the button');
    console.log(nameDisplay);
    console.log(pronounsDisplay)
   // nameDisplay.textContent = 'Julie';
   // nameDisplay.style.color = 'red';
   nameDisplay.textContent = nameInput.value;
   pronounsDisplay.textContent = pronounInput.value;
});

// not working yet \/
const guestButton = document.getElementById('guest-button');
guestButton.addEventListener('click', () => {
    roleDisplay.textContent = 'Event Guest';
});

const staffButton = document.getElementById('staff-button');
staffButton.addEventListener('click', () => {
    roleDisplay.textContent = 'Event Staff';
});