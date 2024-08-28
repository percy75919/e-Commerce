document.querySelector('.ham').addEventListener('click', function() {
    document.querySelector('.menu').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.menu').style.display = 'none';
});
