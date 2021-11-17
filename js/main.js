

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.images_slider img').forEach(images =>{
    
    images.onclick = () =>{
        var src = images.getAttribute('src');
        document.querySelector('.main_home_image').src = src;
    }        
});

// auto section

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar ul li a');

window.onscroll = () =>{

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar ul li a[href*='+id+']').classList.add('active');
      });
    };

  });

}