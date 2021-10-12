$(document).ready(function() {
    $("#myTable").dynamicTable({
        //definimos las columnas iniciales    
        columns: [{
                text: "Nombre",
                key: "name"
            },
            {
                text: "Docente",
                key: "doc"
            },
            {
                text: "Género",
                key: "gender"
            },
            {
                text: "url",
                key: "url"
            },
        ],

        //carga de datos
        data: [{
                name: 'Marketing digital',
                doc: 'Juan bravo',
                gender: 'T',
                url: 'https://asdas.com'
            },
            {
                name: 'Piano',
                doc: 'Maria Carranza',
                gender: 'M',
                url: 'https://asdas.com'
            },
            {
                name: 'Nutricion',
                doc: 'KAty',
                gender: 'C',
                url: 'https://asdas.com'
            }
        ],

        //definición de botones
        buttons: {
            addButton: '<input type="button" value="Nuevo" class="btn btn-success" />',
            cancelButton: '<input type="button" value="Cancelar" class="btn btn-primary" />',
            deleteButton: '<input type="button" value="Borrar" class="btn btn-danger" />',
            editButton: '<input type="button" value="Editar" class="btn btn-primary" />',
            saveButton: '<input type="button" value="Guardar" class="btn btn-success" />',
        },
        showActionColumn: true,
        //condicionales
        getControl: function(columnKey) {

            if (columnKey == "gender") {
                return '<select class="form-control"><option value="M">Musica</option><option value="C">Cocina</option><option value="T">Tecnologia</option></select></select> ';
            }

            return '<input type="text" class="form-control" />';
        }

    });
});