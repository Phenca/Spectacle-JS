document.addEventListener("DOMContentLoaded", function () {
    const new_form = document.getElementById('duplicateForm');
    const options = [
        { id: '12 Janvier 2024', label: '12 Janvier 2024' },
        { id: '15 Janvier 2024', label: '15 Janvier 2024' },
        { id: '18 Janvier 2024', label: '18 Janvier 2024' }
    ];

    const removed_options = [];

    function updateOptions(selectedOption, removeFromRemovedOptions) {
        if (removeFromRemovedOptions) {
            const index = removed_options.findIndex(option => option.id === selectedOption);
            if (index !== -1) {
                options.push(removed_options[index]);
                removed_options.splice(index, 1);
            }
        } else {
            const index = options.findIndex(option => option.id === selectedOption);
            if (index !== -1) {
                removed_options.push(options[index]);
                options.splice(index, 1);
            }
        }
    }

    function DeleteButton(form, index) {
        const delete_button = document.createElement('button');
        delete_button.textContent = 'Supprimer le formulaire';
        delete_button.id = `remove-form${index}`,
        delete_button.addEventListener('click', function (event) {
            event.preventDefault();
            const selector_value = form.querySelector(`#dateselector${index}`).value;
            if (selector_value) { updateOptions(selector_value, true); }
            form.remove();
            console.log(options)
            console.log(removed_options)
            if (options.length > 0) { new_form.disabled = false; }
            const date_selectors = document.querySelectorAll('[id^="dateselector"]');
            date_selectors[date_selectors.length - 1].disabled = false;
        });
        form.appendChild(delete_button);
    }

    function create_form(new_form_button){
        const index = Date.now(); 
        const new_div = document.createElement('div');
        const new_form = document.createElement('form');
        new_form.action = "";
        new_form.method = "post";
        new_form.id = `form${index}`;
    
        let select_options = '';
        for (let option of options) {
            select_options += `<option id="${option.id}">${option.label}</option>`;
        }
        new_form.innerHTML = `
            <label for="date">Sélectionnez la date du spectacle :</label>
                <select id="dateselector${index}" name="date">
                    ${select_options}
                </select><br>
            <label for="nombrePlaces">Nombre de places :</label>
            <input type="number" id="places${index}" name="nombrePlaces" min="1" value="1"><br>
        `;
        const test = new_form.querySelector('[id^="dateselector"]')
        console.log(test)
        new_div.appendChild(new_form);
        document.body.insertBefore(new_div, new_form_button);
        DeleteButton(new_form, index);
        if (options.length === 1) { new_form_button.disabled = true; }
    }

    new_form.addEventListener('click', function () {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const formId = form.id;
            const index = formId.replace('form', '');
            const selected_option = form.querySelector(`#dateselector${index}`).value;
            if (selected_option) {
                updateOptions(selected_option, false);
                console.log(options);
                console.log(removed_options)
            }
            const date_selector = form.querySelector(`#dateselector${index}`);
            date_selector.disabled = true;
        });
        create_form(new_form);
    });
});