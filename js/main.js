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