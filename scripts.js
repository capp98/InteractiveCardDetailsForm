let inputs = Array.from(document.getElementsByTagName('input'));
inputs.forEach(input => {
    input.addEventListener("keyup", (e) => {
        let input = e.target;

        if (input.name === "date") {
            let dates = document.getElementsByName("date");

            let cardfield = document.getElementsByClassName("date")[0];

            cardfield.innerHTML = `${dates[0].value.length === 1 ? '0' + dates[0].value : dates[0].value}${dates[1].value.length === 1 ? '0' + dates[1].value : dates[1].value}`;
            if (cardfield.innerHTML.length === 4) {
                cardfield.innerHTML = cardfield.innerHTML.replace(/([0-9]{2})([0-9]{2})/, '$1/$2')
            }
        }
        else {
            let id = input.id

            let value = input.value
            if (value != "") {

                let cardfield = document.getElementsByClassName(`${id}`)[0];

                if (id === 'number') {
                    input.value = input.value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
                }

                cardfield.innerHTML = input.value

            } else {
                let cardfield = document.getElementsByClassName(`${id}`)[0];
                cardfield.innerHTML = cardfield.dataset.carddata
            }
        }
    })
});

document.querySelector('[type="submit"]').addEventListener('click', (e) => {
    if (document.forms.form.checkValidity()) {
        e.preventDefault();
        changeView(e.target);
    }
})
document.querySelector('[name="continue"]').addEventListener('click', (e) => {
    changeView(e.target);
    clearInputs();
})

Array.from(document.getElementsByTagName('input')).forEach(input => {
    input.addEventListener('oninvalid', (e) => {
        e.preventDefault();
    })
})

function changeView() {
    if (document.forms.form.checkValidity()) {
        let childNodes = Array.from(document.getElementsByClassName('form-side')[0].children);

        childNodes.forEach(node => {
            node.classList.toggle('hidden');
        });
    }
}

function clearInputs() {
    let inputs = Array.from(document.getElementsByTagName('input'))
    inputs.forEach(input => {
        input.value = ""
    })
}