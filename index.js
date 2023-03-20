const images = [
   " download (1).jpg",
   "download (2).jpg",
    "download (3).jpg",
    "download (4).jpg",
    "download (5).jpg",
    "download.jpg",
     
]

const imagesArea = document.getElementById("slider");
let imageIndex = 0
setInterval(()=>{
    if(imageIndex === images.length){
        imageIndex = 0
    }
        const imageUrl = images[imageIndex];
        imageIndex++;
        imagesArea.src=imageUrl;
        console.log(imageUrl)
},1000)