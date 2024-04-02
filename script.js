// Function to get a random integer within a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to change the font of a letter element
function changeFont(letterId, fontClasses) {
    const randomIndex = getRandomInt(0, fontClasses.length - 1);
    const randomFontClass = fontClasses[randomIndex];
    const letterElement = document.getElementById(letterId);
    letterElement.className = ''; 
    letterElement.classList.add(randomFontClass);
}

// Font classes array
const fontClasses = ['font-swirly', 'font-hostage', 'font-serif', 'font-default', 'font-futuristic', 'font-blackletter', 'font-scratchy', 'font-salted'];

// Function to animate font changes
function animateFontChange() {
    for (let i = 1; i <= 20; i++) {
        const letterId = 'letter' + i;
        changeFont(letterId, fontClasses);
    }
}

// Set interval to animate font changes
const intervalId = setInterval(animateFontChange, 1000);


// for resetting text back to default font
function resetText() {
    for (let i = 1; i <= 20; i++) {
        const letterId = 'letter' + i;
        const letterElement = document.getElementById(letterId);
        letterElement.classList.remove(...fontClasses.filter(className => className !== 'font-default'));
        letterElement.classList.add('font-default');
    }
    localStorage.setItem('textReset', 'true'); 
}

if (localStorage.getItem('textReset') === 'true') {
    resetText();
}

document.querySelector('.text-normal').addEventListener('click', resetText);

document.querySelector('.text-normal').addEventListener('click', function(){
    clearInterval(intervalId)
    for (let i = 1; i <= 20; i++) {
        const letterId = 'letter' + i;
        document.getElementById(letterId).classList.add('font-default');
    }
})


// for clicking letters and images popping up on clickk
var translatedContent = document.querySelector('.landing-text')

var hiddenText = document.querySelector('.overflowing-aa');



document.addEventListener("DOMContentLoaded", function(){
    function toggleImages(buttonId, imageClass) {
        var showButton = document.getElementById(buttonId);
        var hiddenImages = document.querySelectorAll('.' + imageClass);

        showButton.addEventListener('click', function(){
            hiddenImages.forEach(function(image){
                if (image.style.display === 'none'|| image.style.display === '') {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        });
    }
    toggleImages('letter16', 'image-aa');
    toggleImages('letter17', 'image-aaa');
    toggleImages('letter18', 'image-aaaa');
})



//for blurring background on image click

document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.image-aaa, .image-aa, image-aaaa');
    images.forEach(function(image) {
      image.addEventListener('click', function() {
        images.forEach(function(img) {
            image.addEventListener('click', function(e) {
                var additionalText = e.target.closest('.image-text').querySelector('.image-text-text');
                additionalText.style.display = (additionalText.style.display === 'none' ? 'block' : 'none');
            });
          img.classList.remove('clear-image');
          img.classList.remove('enlarged-image');
          img.classList.add('blur-background');
        });
        document.querySelector('.landing-text').classList.add('blur-background');
        image.classList.add('clear-image');
        image.classList.toggle('enlarged-image');
      });
    });
});


  