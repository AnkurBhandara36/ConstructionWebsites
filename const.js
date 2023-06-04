const caraousel= document.querySelector('.caraousel');


caraousel.addEventListener('mousemove', (e) =>{
    caraousel.scrollLeft =e.pageX;
});




let slideShow = (num) =>{
    let slide = document.getElementsByClassName('slider');

}

let flag=0;
slideShow( flag);


let top1 = document.getElementsByClassName('navbar')[0];

// console.log(top1);

top1.classList.toggle('sticky-top');
// for message button





