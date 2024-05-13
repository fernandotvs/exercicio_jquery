$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
        
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
    
    $('form').on('submit' , function(e){
       e.preventDefault();
        
        let tarefa = $('#tarefa').val();
        let novaTarefa = $("<li>").text(tarefa);
        $('#listaTarefas').append(novaTarefa);
        $('#tarefa').val('');
    })

    $('#listaTarefas').on('click' , 'li' , function(){
        $(this).toggleClass('risc');
    })
    
    
})   




