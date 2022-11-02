$(function(){
    console.log('jquery esta funcionando');
    $('#search').keyup(function(){
        let search = $('#search').val();
        console.log(search);
        $.ajax({
            url: 'task-search.php',
            type: 'POST',
            success: function(response){
                console.log(response);
            }
        })
    });
});