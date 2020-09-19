$(document).ready(function () {

console.log('jquery conected');

    $(".btn").on('click', function(e){
        console.log('clicked');
         const event = $("#eventname").val();
        console.log(event);
        const data  = {
            event: event
        }

        $.ajax({
                type: "POST",
                url: "/events/search",
                data: data,
                dataType: "dataType",
            }).then(function (res) {
                console.log('success');
                document.body.innerHTML = res;
            });
            })
        });