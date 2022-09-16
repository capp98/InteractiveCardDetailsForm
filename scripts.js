const numberReg = /(\d{4})(\d{4})(\d{4})(\d{4})/;
const dateReg = /([0-9]{2})([0-9]{2})/;

function formatStringDate(dates) {
    return `${dates[0].value.length === 1 ? '0' + dates[0].value : dates[0].value}${dates[1].value.length === 1 ? '0' + dates[1].value : dates[1].value}`;
}

function changeView() {
    let childNodes = Array.from(document.getElementsByClassName('form-side')[0].children);

    childNodes.forEach(node => {
        node.classList.toggle('hidden');
    });
}

function clearInputs() {
    let inputs = Array.from(document.getElementsByTagName('input'))
    inputs.forEach(input => {
        input.value = ""
    })
}

Array.from(document.getElementsByTagName('input')).forEach(input => {
    input.addEventListener("keyup", (e) => {
        let input = e.target;

        if (input.name === "date") {
            let cardfield = document.getElementsByClassName("date")[0];
            let stringDate = formatStringDate(document.getElementsByName("date"));

            let dateFieldValue = cardfield.innerHTML
            dateFieldValue = stringDate;

            if (dateFieldValue.length === 4) {
                dateFieldValue = dateFieldValue.replace(dateReg, '$1/$2')
            }
        } else {
            let id = input.id
            let value = input.value
            let cardfield = document.getElementsByClassName(`${id}`)[0];
            if (value != "") {
                if (id === 'number') {
                    input.value = input.value.replace(numberReg, '$1 $2 $3 $4');
                }
                cardfield.innerHTML = input.value
            } else {
                cardfield.innerHTML = cardfield.dataset.carddata
            }
        }
    })
});

document.querySelector('[type="submit"]').addEventListener('click', (e) => {
    if (document.forms.form.checkValidity()) {
        e.preventDefault();
        changeView();
    }
})
document.querySelector('[name="continue"]').addEventListener('click', (e) => {
    changeView();
    clearInputs();
})

Array.from(document.getElementsByTagName('input')).forEach(input => {
    input.addEventListener('oninvalid', (e) => {
        e.preventDefault();
    })
})