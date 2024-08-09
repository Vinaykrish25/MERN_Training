const button = document.getElementById('toggle-button');
const moreText = document.getElementById('more-text');

button.addEventListener('click', () => {
    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'inline';
        button.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        button.textContent = 'Read More';
    }
});