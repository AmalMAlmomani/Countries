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
            orderImage = orderImage + '<img src="images/hotel.png">';
        }else if ( userOrder === "house"){
            orderImage = orderImage + '<img src="images/house.png">';
        }console.log(orderImage);
       
     }return orderImage;
    }
    }
    document.write('<p>' + showOrder() + '</p>');