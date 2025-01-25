(async () => {
    AOS.init();
    
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

function openDialPad(phoneNumber) {
    window.location.href = `tel:${phoneNumber}`;
}

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


function inputImageHandler(element) {
    const avatar = element.closest('.input-avatar');

    if (!avatar) {
        console.warn('No .input-avatar found for the given input element.');
        return;
    }

    const avatarImage = avatar.querySelector('.avatar');
    const image = element.files[0];

    if (image && avatarImage) {
        avatarImage.src = URL.createObjectURL(image);
        avatarImage.alt = image.name;
        avatar.classList.add('active');
    } else {
        console.warn('Avatar image element not found or no image selected.');
    }
}


