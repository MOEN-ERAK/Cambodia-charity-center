(async () => {
    try {
        const response = await fetch('/pages/pre-loader.html');
        const preLoader = await response.text();
        const body = document.querySelector('body');
        body.insertAdjacentHTML('afterbegin', preLoader);
    } catch (error) {
        console.error('Error fetching header:', error);
    }
})();


function preLoader(timer) {
    const preLoader = document.querySelector('#custom-preloader');
    if (preLoader) {
        preLoader.classList.add('active');
        return new Promise((resolve) => {
            setTimeout(() => {
                preLoader.classList.remove('active');
                resolve(true);
            }, timer);
        });
    } else {
        alert('No preloader');
        return Promise.reject('No preloader element found');
    }
}


function preLoaderLink(location , timer) {
    preLoader(timer);
    setTimeout(() => {
        window.location.href = location;
    }, timer)
}