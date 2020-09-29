$(document).ready(function () {

    console.log('jquery conected');

    $(".btn").on('click', function (e) {
       // console.log('clicked');
        const event = $("#eventname").val();
        const data = {
            event: event
        }
        
        console.log(data);
        $.ajax({
            type: "POSt",
            url: "/events/search",
            data: data,
            dataType: "dataType",
        }).then(function (res) {
            //console.log(res);
        }); //promise close
        
    }); //button click close
}); //jquery ready close