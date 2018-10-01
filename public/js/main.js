$(document).ready(function () {
    $('.delete-article').on('click', function (e) {
        var $target = $(e.target);
        var id = $target.attr('data-id');
        $.ajax({
            type: 'DELETE',
            url:'/articles/'+id,
            success:function () {
                console.log('deleting');
                window.location.href='/'
            },
            error:function (err) {
                console.log(err)
            }

            }
        )
    })
})