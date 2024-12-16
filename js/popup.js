(async () => {
    try {
        const response = await fetch('/pages/popup.html');
        const preLoader = await response.text();
        const body = document.querySelector('body');
        body.insertAdjacentHTML('afterbegin', preLoader);
    } catch (error) {
        console.error('Error fetching header:', error);
    }
})();

function customPopUp(status = true, title = 'ចំណង់ជើង', subtitle = 'សេចក្ដីអត្ថាធិប្បាយ', timer = false) {
    var customPopUp = document.querySelector('#customPopUp.customPopUp');
    customPopUp.classList.add('active');

    if (status) {
        customPopUp.classList.remove('error');
    } else {
        customPopUp.classList.add('error');
    }

    customPopUp.querySelector('#title').innerText = title;
    customPopUp.querySelector('#subtitle').innerText = subtitle;

    customPopUp.querySelector('#customPopUp-close').onclick = () => {
        closeCostumPopUp();
    }

    if (typeof timer === 'number') {
        setTimeout(() => {
            closeCostumPopUp();
        }, timer);
    }
}


function PopUpOption(title = 'ចំណង់ជើង', subtitle = 'សេចក្ដីអត្ថាធិប្បាយ', status = null, multiOption = true) {
    var customPopUp = document.querySelector('#customPopUp.customTopUpOption');
    customPopUp.classList.add('active');

    customPopUp.querySelector('#title').innerText = title;
    customPopUp.querySelector('#subtitle').innerText = subtitle;

    if (status == null) {
        customPopUp.classList.remove('success', 'fail');
    } else if (status) {
        customPopUp.classList.add('success');
    } else {
        customPopUp.classList.add('fail');
    }

    var acceptButton = customPopUp.querySelector('#popUpAcceptButton');
    var rejectButton = customPopUp.querySelector('#popUpRejectButton');
    var closeButton = customPopUp.querySelector('#customPopUp-close');
    rejectButton.style.display = 'block';
    closeButton.style.display = 'block';

    return new Promise((resolve) => {
        acceptButton.onclick = () => {
            customPopUp.classList.remove('active');
            resolve(true);
        };

        if (multiOption) {
            rejectButton.onclick = () => {
                customPopUp.classList.remove('active');
                resolve(false);
            };

            closeButton.onclick = () => {
                closeCostumPopUp();
                resolve(false);
            }
        } else {
            rejectButton.style.display = 'none';
            closeButton.style.display = 'none';
        }

    });
}

function closeCostumPopUp() {
    var customPopUp = document.querySelector('#customPopUp.active');
    if (customPopUp) {
        customPopUp.querySelector('#title').innerText = '';
        customPopUp.querySelector('#subtitle').innerText = '';
        customPopUp.classList.remove('active');
    }
    return false;
}
