const yesButton = document.getElementById('Yes');
const noButton = document.getElementById('No');
const approvalModalWindow = document.querySelector('.approval');
const modalWindow = document.querySelector('.modal');
const closeModalButton = document.getElementById('close-modal');
const acceptedYesButton = document.getElementById('approve-button');
const acceptedNoButton = document.getElementById('not-approved');


yesButton.addEventListener('mouseover', () => {
    noButton.textContent = "No";
    yesButton.textContent = "Yes";
});

noButton.addEventListener('mouseover', () => {
    noButton.textContent = "Yes";
    yesButton.textContent = "No";
});



yesButton.addEventListener('click', () => {
    if (yesButton.textContent === 'Yes') {
        approvalModalWindow.classList.add('approve');
    }
})

noButton.addEventListener('click', () => {
    if (noButton.textContent === 'Yes') {
        approvalModalWindow.classList.add('approve');
    }
})

closeModalButton.addEventListener('click', () => {
    modalWindow.classList.remove('accepted');
})

acceptedYesButton.addEventListener('click', () => {
        modalWindow.classList.add('accepted');
        approvalModalWindow.classList.remove('approve');
   })

acceptedNoButton.addEventListener('click', () => {
    approvalModalWindow.classList.remove('approve')
})
