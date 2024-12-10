(async () => {
    try {
        const response = await fetch('/pages/footer.html');
        const nav = await response.text();
        const footer = document.querySelector('footer');
        if (footer) {
            footer.innerHTML = nav;
        }
    } catch (error) {
        console.error('Error fetching footer:', error);
    }
})();
