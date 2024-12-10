//Selecting Elements
let smallImages = document.getElementsByClassName("oldImg");
for(let  i = 0 ;i<smallImages.length ;i++){
    smallImages[i].src ="_64_spiderman_img.png";
    console.log(`value of image no. ${i} is changed `);
}

// Query Selectors 

console.dir(document.querySelectorAll('p'));
console.dir(document.querySelectorAll('.oldImg'));
console.dir(document.querySelectorAll('#description'));
console.dir(document.querySelectorAll('div a'));

