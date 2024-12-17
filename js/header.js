(async () => {
    try {
        const response = await fetch('/pages/header.html');
        const nav = await response.text();
        const header = document.querySelector('header');
        if (header) {
            header.innerHTML = nav;
        }
    } catch (error) {
        console.error('Error fetching header:', error);
    }
})();


function navbarActive(child) {
    var attempts = 0;
    var interval = setInterval(function() {
        var navMenu = document.querySelector('.navbar-menu');
        if (navMenu) {
            var links = navMenu.querySelectorAll('a');
            if (links[child]) {
                links[child].classList.add('active');
                clearInterval(interval);
            }
        }
        attempts++;
        if (attempts >= 600) {
            clearInterval(interval);
            console.log('Header not found within 1 minute.');
        }
    }, 100); 
}