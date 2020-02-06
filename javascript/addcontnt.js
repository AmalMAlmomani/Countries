var showOrder = function(){

    var userOrder ;
    var numberOfImages;
    var orderImage = '';
    while ( userOrder !== "house" && userOrder !== "hotel"){
        userOrder = prompt(" please enter house or hotel.")
    numberOfImages = prompt("how many images do you want ?");
    for (var i = 0 ; i < numberOfImages ; i++){
        console.log("index is " + i);
        if ( userOrder === "hotel"){
            orderImage = orderImage + '<img src="img/https://previews.123rf.com/images/sarahdesign/sarahdesign1706/sarahdesign170600677/80760671-hotel-icon.jpg">';
        }else if ( userOrder === "house"){
            orderImage = orderImage + '<img src="img/https://www.pngitem.com/pimgs/m/76-765395_house-png-icon-house-icon-for-resume-transparent.png">';
        }console.log(orderImage);
       
     }return orderImage;
    }
    }
    document.write('<p>' + showOrder() + '</p>');