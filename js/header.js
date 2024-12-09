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
