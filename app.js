document.getElementById('addTareaBtn').addEventListener('click', function() {
    console.log("Botón Añadir tarea clickeado");
    let modal = new bootstrap.Modal(document.getElementById('addTareaModal'));
    modal.show();
});

document.getElementById('saveTareaBtn').addEventListener('click', function() {
    console.log("Botón Aceptar clickeado");
    let titulo = document.getElementById('titulo').value;
    let descripcion = document.getElementById('descripcion').value;

    // Obtener la tabla
    let table = document.getElementById('tareaTable');
    console.log("Tabla encontrada:", table);

    // Obtener el cuerpo de la tabla
    let tbody = table.getElementsByTagName('tbody')[0];
    console.log("Cuerpo de la tabla:", tbody);

    // Crear una nueva fila para la tabla
    let newRow = tbody.insertRow();
    console.log("Nueva fila creada:", newRow);

    // Insertar celdas con los datos de la tarea
    let checkboxCell = newRow.insertCell(0);
    checkboxCell.innerHTML = '<input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">';

    let titleCell = newRow.insertCell(1);
    titleCell.textContent = titulo;

    let descriptionCell = newRow.insertCell(2);
    descriptionCell.textContent = descripcion;

    let actionCell = newRow.insertCell(3);

    let editButton = document.createElement('button');
    editButton.setAttribute('type', 'button');
    editButton.setAttribute('class', 'btn btn-light editTarea');
    editButton.innerHTML = '<i class="fa-solid fa-pen-to-square text-success"></i>';
    actionCell.appendChild(editButton);

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('class', 'btn btn-light deleteTarea');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can text-danger"></i>';
    actionCell.appendChild(deleteButton);

    // Cerrar el modal después de agregar la tarea
    let modal = new bootstrap.Modal(document.getElementById('addTareaModal'));
    modal.hide();

    // Limpiar los campos del formulario
    document.getElementById('titulo').value = '';
    document.getElementById('descripcion').value = '';
});
