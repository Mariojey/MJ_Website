//Constans - get article with <id>

//Variables
const hobby = document.getElementById('hobby');
const interesting = document.getElementById('interesting');
const aboutme = document.getElementById('aboutme');


//Button's constans
const btnArticleHobby = document.getElementById('btnArticleHobby');
const btnArticleInteresting = document.getElementById('btnArticleInteresting');
const btnArticleAboutMe = document.getElementById('btnArticleAboutMe');

//Button's constans for testing
const hideArticleHobby = document.getElementById('hideArticleHobby');
const hideArticleInteresting = document.getElementById('hideArticleInteresting');
const hideArticleAboutMe = document.getElementById('hideArticleAboutMe');


//Boolean
let isOpenHobby = false;
let isOpenInteresting = false;
let isOpenAboutMe = false;

//Onclick's
btnArticleHobby.addEventListener('click', () => {
    if (isOpenHobby == false) {
        const hobbyText = document.createElement('p');
        hobbyText.textContent = `
                                Czytanie książek fantasy,
                                Ciekawostki historyczne,
                                Spanie,
                                Chodzenie na grzyby
                                `;
        isOpenHobby = true;
        hobby.insertBefore(hobbyText, btnArticleHobby);
        btnArticleHobby.textContent = 'Hobby!';
        console.log(isOpenHobby);
    } else {
        hobby.parentNode.removeChild(hobbyText);
        isOpen = false;
        console.log(isOpenHobby);
    }
});
btnArticleInteresting.addEventListener('click', () => {
    if (isOpenInteresting == false) {
        const interestingText = document.createElement('p');
        interestingText.textContent = `Programowanie Strukturalne,,
                                        Full Stack,
                                        Python,
                                        JavaScript,
                                        Node.js,
                                        PHP&MySQL`;
        isOpenInteresting = true;
        interesting.insertBefore(interestingText, btnArticleInteresting);
        btnArticleInteresting.textContent = 'Zainteresowania!';
        console.log(isOpenInteresting);
    } else {
        interesting.parentNode.removeChild(interestingText);
        isOpenInteresting = false;
        console.log(isOpenInteresting);
    }
    /*const interestingText = document.createElement('p');
    interestingText.textContent = `Programowanie Strukturalne<br/>Full Stack <br/>Python<br/>JavaScript<br/>Node.js<br/>PHP&MySQL <br/>`;
    interesting.insertBefore(interestingText, btnArticleInteresting);
    btnArticleInteresting.textContent = 'Zamknij!';
    btnArticleInteresting.setAttribute('id', 'hideArticleInteresting');*/
});
btnArticleAboutMe.addEventListener('click', () => {
    if (isOpenAboutMe == false) {
        const aboutMeText = document.createElement('p');
        aboutMeText.textContent = `Wiek: 17 lat,
                                    Wzrost: 1,86m,
                                    Szkoła: ZST Mielec,
                                    Profil: Informatyk,
                                    Kolor oczu: Niebieski`;
        isOpenAboutMe = true;
        aboutme.insertBefore(aboutMeText, btnArticleAboutMe);
        btnArticleAboutMe.textContent = 'O mnie!';
        console.log(isOpenAboutMe);
    } else {
        aboutme.parentNode.removeChild(aboutMeText);
        isOpenAboutMe = false;
        console.log(isOpenAboutMe);
    }
});