$(document).ready(function () {
    
let newPost;
$("#submit").on('click', function(event){

    const author = $('#author').val();
    const blog = $("#blog").val();
    const title = $('#title').val();
   
    newPost = {
        title: title,
        author: author,
        blog: blog,
    }
    console.log(newPost);

    $.ajax("/api/stacheposts",{
        type: "POST",
        data: newPost
    }).then(
        function(){
            console.log(`New post by ${newPost.author} was made.`);
        });
});

});