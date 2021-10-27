var membername = ["Family Book", "Aalap Parikh", "Varsha Khemani", "Aahan Parikh", "Aarna Parikh"];
  
  var images = ["https://images-na.ssl-images-amazon.com/images/I/91zbi9M+mKL.jpg", "https://www.jamiesale-cartoonist.com/wp-content/uploads/cartoon-business-man-free1.png", "https://cdn4.vectorstock.com/i/1000x1000/28/63/business-woman-cartoon-character-beautiful-lady-vector-22952863.jpg", "https://image.shutterstock.com/image-vector/cartoon-boy-giving-you-thumbs-260nw-143614309.jpg", "https://i.pinimg.com/736x/ff/f4/b0/fff4b0c227d2a4d8168c1150f295b103.jpg"];

  
  var i = 0;
  function nextslide() {  document.getElementById("name").innerHTML = membername[i];
    document.getElementById("album").src = images[i];
    i++; }
    
  
  