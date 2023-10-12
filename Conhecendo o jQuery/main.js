$(document).ready(function () {
    $('#formulario').on('submit', function (e) {
        e.preventDefault();
        const adicionaTarefa = $('#adicionaTarefa').val();
        const novaTarefa = $(`<li style="display: none">${adicionaTarefa}</li>`);

        novaTarefa.appendTo('ul').fadeIn();
        $('#adicionaTarefa').val('');
    })

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('concluido');
    });
    
});