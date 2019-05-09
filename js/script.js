$(document).ready(function(){
        var apiBase = "https://jsonplaceholder.typicode.com/photos/";
        var orderID = 0;

        axios.get(apiBase).then(function(response){
            $('#showPicture').on('click',function(){
                orderID++;
                var url= apiBase+orderID;

                axios.get(url).then(function(response){
                    
                    setTimeout(function(){
                        var title = response.data.title;
                        var imgs = response.data.url;
                        var thumbnailUrl = response.data.thumbnailUrl;

                        var $imgs = $('<img>').attr("src",imgs).attr("alt",url);
                        var $title = $('<p>').html('title: '+title);
                        var $thumbnailUrl = $('<p>').html('thumbnailUrl: '+ thumbnailUrl);

                        $('#task').html([$imgs,$title,$thumbnailUrl]);
                        $('#numberCounter').html('Now, the current picture is number: ' + orderID);
                        $('#display').html(' Please keep click for next pictures ');
                },3000);   
            });
            $('#display').html(' We are searching your next picture, please wait... ');
        });
    });
});
