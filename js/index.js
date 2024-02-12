const yesButton = document.getElementById('Yes');
const noButton = document.getElementById('No');
const modalWindow = document.querySelector('.modal');
const closeModalButton = document.getElementById('close-modal')


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
        modalWindow.classList.add('accepted');
    }
})

noButton.addEventListener('click', () => {
    if (noButton.textContent === 'Yes') {
        modalWindow.classList.add('accepted');
    }
})

closeModalButton.addEventListener('click', () => {
    modalWindow.classList.remove('accepted');
})