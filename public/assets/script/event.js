// $(document).ready(function () {
    
//     const APIKEY = "58f7590b78mshb2a60492e836525p15bc37jsna6355455c4b7";
    
    
//     $.ajax({
//         type: "GET",
//         url: "https://www.eventbriteapi.com/v3/categories/?token=GWFXNZZUTNCKCDN34HUJ",
//         data: "data",
//     }).then(function(response){
//         console.log(response);
//     })
    
// });
    
const https = require('https');



$.ajax({
    type: "get",
    url: "/api/eventserch",
    data: "data",
    dataType: "dataType",
    success: function (response) {
        
        response 

    }
});