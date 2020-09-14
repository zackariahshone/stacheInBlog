$(document).ready(function () {
    
let newPost;
$("#test").on('click', function(event){

    const author = $('#author').val();
    const blog = $("#blog").val();
    const title = $('#title').val();
   
    newPost = {
        title: title,
        author: author,
        blog: blog,
    }
    console.log(newPost);

    $.ajax({
        type: "POST",
        url: "/api/stacheposts",
        data: newPost,
    }).then(
        function(){
            console.log(`New post by ${newPost.author} was made.`);
        }
    );
});

});