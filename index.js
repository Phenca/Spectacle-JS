document.addEventListener("DOMContentLoaded", function () {
    let i = 0; // Sert à compter le nombre de formulaires
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
    function addDeleteButton(form) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer ce formulaire';
        deleteButton.id = `remove-form${i}`
        deleteButton.addEventListener('click', function () {
            const selectorValue = form.querySelector(`#dateselector${form.dataset.index}`).value;
            if (selectorValue) {
                updateOptions(selectorValue, false);
            }
            form.remove();
        });
        form.appendChild(deleteButton);
    }

    new_form.addEventListener('click', function () {
        const original_form = document.getElementById(`form${i}`);
        const cloned_form = original_form.cloneNode(true);
        const clonedSelector = cloned_form.querySelector(`#dateselector${i}`);
        const clonedPlaces = cloned_form.querySelector(`#places${i}`);
        const selected_option = clonedSelector.value; // Utiliser directement la valeur du sélecteur cloné
        if (selected_option) {
            const option_to_remove = clonedSelector.querySelector(`[id="${selected_option}"]`);
            if (option_to_remove) {
                updateOptions(selected_option, false);
                option_to_remove.remove();
                removed_options.push(selected_option);
            }
        }

        i++;
        cloned_form.id = `form${i}`;
        clonedSelector.id = `dateselector${i}`;
        clonedPlaces.id = `places${i}`;
        clonedPlaces.value = 1;
        original_form.insertAdjacentElement('afterend', cloned_form);
        addDeleteButton(cloned_form);
    });
});


// Supprimer les boutons en trop 

/*
désactiver le sélecteur de date quand on ajoute un nouveau formulaire et réactiver à la suppression
S'occuper de l'envoi du formulaire
Supprimer le bouton d'ajout si on ne peut plus ajouter et le remettre quand on enlève un formulaire
*/
/*

Ajouter le bouton de suppression et toute les fonctionnalités associés a la suppresion d'une réservation

Modifier l'id du selecteur de date après avoir ajouter un nouveau formulaire et celui des dates du selector
*/