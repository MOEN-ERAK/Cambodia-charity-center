(async () => {
    const rootElement = document.documentElement;

    if(localStorage.getItem('cdc-theme-mode') != null) {
        rootElement.classList.add('dark');
    }

    try {
        const response = await fetch('/pages/live-chat.html');
        const liveChat = await response.text();
        document.querySelector('body').insertAdjacentHTML('afterbegin', liveChat);
    } catch (error) {
        console.error('Error fetching live chat:', error);
    }
})();


function toggleLiveChat(button) {
    let liveChat = document.querySelector('form#chat-box');
    if (liveChat) {
        liveChat.classList.toggle('active');
    }
}

function toggleDarkMode() {
    const rootElement = document.documentElement;

    if(localStorage.getItem('cdc-theme-mode') != null) {
        rootElement.classList.remove('dark');
        localStorage.clear('cdc-theme-mode');
    } else {
        rootElement.classList.add('dark');
        localStorage.setItem('cdc-theme-mode' , 'dark');
    }
}



function inputRealTimeValidation(element, rex) {
    var input = element;
    var trimInputValue = input.value.trim();
    var inputWrapper = input.parentElement;

    while (inputWrapper && !inputWrapper.classList.contains('tf-input-primary')) {
        inputWrapper = inputWrapper.parentElement;
    }

    if (inputWrapper) {

        if (trimInputValue == '') {
            inputWrapper.classList.remove('invalid');
            inputWrapper.classList.remove('valid');
        } else {
            if (rex.test(input.value)) {
                inputWrapper.classList.add('valid');
                inputWrapper.classList.remove('invalid');
            } else {
                inputWrapper.classList.add('invalid');
                inputWrapper.classList.remove('valid');
            }
        }
    } else {
        alert('ERROR: .tf-input-primary not found');
    }
}