// ============== Navbar Active =================================================================================
const navMenuLink = document.querySelectorAll('.nav--menu--link');

function activeNav() {
    navMenuLink.forEach((link) =>
        link.classList.remove('active'));
        this.classList.add('active');
}

navMenuLink.forEach((link) => link.addEventListener('click', activeNav));

// ============== SWITCH MODE =================================================================================
const btnTheme = document.querySelector('.switch--theme--container');
const iconTheme = document.querySelector('.switch--theme--icon');
const clound = document.querySelector('.clound');
const body = document.querySelector('body');

//to save the dark  mode use the object "local storage"
//function that stores the value true if the dark mode is activated or false if it is not
function store(value) {
    localStorage.setItem('dark--theme', value);
}

//function that indicates if the dark mode property exists. It loads the page as we had left it
function load() {
    const darkTheme = localStorage.getItem('dark--theme');

    //if the dark mode was never activated
    if (!darkTheme) {
        store(false);
        iconTheme.classList.add('bi-sun-fill');
        clound.innerHTML = `
            <img class="animate__animated animate__fadeInLeft clound-left animate__delay-0_4s" src="./img/clound/clound-left.png" alt="">
            <img class="animate__animated animate__fadeInRight clound-right animate__delay-0_4s" src="./img/clound/clound-right.png" alt="">
        `;
    } else if (darkTheme == 'true') { //if the dark mode is activated
        body.classList.toggle('dark--theme');
        iconTheme.classList.add('bi-moon-stars-fill');
        clound.innerHTML = `
            <img class="animate__animated animate__fadeInLeft clound-left animate__delay-0_4s" src="./img/clound/clound-moon-left.png" alt="">
            <img class="animate__animated animate__fadeInRight clound-right animate__delay-0_4s" src="./img/clound/clound-moon-left.png" alt="">
        `;
    } else { //if the dark mode exists but is disabled
        iconTheme.classList.add('bi-sun-fill');
        clound.innerHTML = `
            <img class="animate__animated animate__fadeInLeft clound-left animate__delay-0_4s" src="./img/clound/clound-left.png" alt="">
            <img class="animate__animated animate__fadeInRight clound-right animate__delay-0_4s" src="./img/clound/clound-right.png" alt="">
        `;
    }
}

load();

btnTheme.addEventListener('click', () => {
    body.classList.toggle("dark--theme");
    iconTheme.classList.add('animated');

    //save true or false
    store(body.classList.contains('dark--theme'));

    if (body.classList.contains("dark--theme")) {
        iconTheme.classList.add('bi-moon-stars-fill');
        iconTheme.classList.remove('bi-sun-fill');
        clound.innerHTML = `
            <img class="animate__animated animate__fadeOutLeft clound-left animate__delay-0_4s" src="./img/clound/clound-left.png" alt="">
            <img class="animate__animated animate__fadeOutRight clound-right animate__delay-0_4s" src="./img/clound/clound-right.png" alt="">
            <img class="animate__animated animate__fadeInLeft clound-left animate__delay-0_4s" src="./img/clound/clound-moon-left.png" alt="">
            <img class="animate__animated animate__fadeInRight clound-right animate__delay-0_4s" src="./img/clound/clound-moon-left.png" alt="">
        `;
    } else {
        iconTheme.classList.add('bi-sun-fill');
        iconTheme.classList.remove('bi-moon-stars-fill');
        clound.innerHTML = `
            <img class="animate__animated animate__fadeOutLeft clound-left animate__delay-0_4s" src="./img/clound/clound-moon-left.png" alt="">
            <img class="animate__animated animate__fadeOutRight clound-right animate__delay-0_4s" src="./img/clound/clound-moon-left.png" alt="">
            <img class="animate__animated animate__fadeInLeft clound-left animate__delay-0_4s" src="./img/clound/clound-left.png" alt="">
            <img class="animate__animated animate__fadeInRight clound-right animate__delay-0_4s" src="./img/clound/clound-right.png" alt="">
        `;
    }

    setTimeout( () => {
        iconTheme.classList.toggle('animated');
    }, 400)
});

// ============== TYPED JS =========================================================================
const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Content Creator", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 10,
    backDelay: 1000,
    loop: true,
});

// // ============== SCROLL REVEAL ANIMATION ================
// const sr = ScrollReveal({
//     distance: 0,
//     duration: 3500,
//     delay: 200,
//     reset: true,
// });

// sr.reveal(".animate__animated");
// sr.reveal(".home--container h3", { origin: "top" });