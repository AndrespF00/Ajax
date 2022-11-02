$(document).ready(function() {

    console.log('jquery esta funcionando');
    
    $('#search').keyup(function(e) {
        let search = $('#search').val();
        $.ajax({
            url: 'task-search.php',
            type: 'POST',
            Date: { search },
            success: function(response){
                let task = JSON.parse(response);
                console.log(taks);
            }
        })
    })
});