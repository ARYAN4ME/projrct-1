// $(document).ready(function(){
//     $('.container-2').slick({
//       arrows:false,
//       dots:true,
//       appendDots:'slider-dots',
//       fade:true
//     });


//     $('.slider-2').slick({
//       arrows:false,
//       dots:false,
//       slidesToShow:3,
//       slidesToScroll:1,
//       centerMode:true
//       // appendDots:'slider-dots',
//       // fade:true
//     });
//   });



  const tregger = document.querySelectorAll('.menu-treger')
console.log(tregger);

for (let i=0; i<tregger.length; i++){
    tregger[i].addEventListener('click',function(e){
        e.preventDefault();
        this.classList.toggle('is-open');
    });
    
}
const humburger = document.querySelectorAll('.humburger')
const times = document.querySelectorAll('.times')
const mobileNav = document.querySelectorAll('.mobileNav')


humburger.addEventListener('ckick',function(){
  mobileNav.classList.add('open')
})
times.addEventListener('ckick',function(){
  mobileNav.classList.remove('open')
})
humburger.classList.add("homo")