let i = 0;
const add_form_button = document.getElementById('duplicateForm');
add_form_button.addEventListener('click', function() {
        const current_select_options = document.getElementsByName('date')[i];
    if(current_select_options.length>1){  // Test du nombre de choix restant
        const original_form = document.getElementById('div'+i);
        const added_form = original_form.cloneNode(true);

        // console.log(current_select_options.value);
        // console.log(current_select_options.options[current_select_options.selectedIndex].id);

        const selected_date = current_select_options.options[current_select_options.selectedIndex].id;
        const remove_selected_date = added_form.querySelector('option[id="' + selected_date + '"]');
        remove_selected_date.remove();
        // adding a new form
        document.body.insertBefore(added_form, add_form_button);
        i++;
        added_form.id = 'div'+i; 
    }
    else{ console.log("Can't add another form") }
});