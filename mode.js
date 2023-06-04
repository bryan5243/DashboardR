window.addEventListener('resize', function() {
    if (window.innerWidth > 0) {
      // Aquí puedes realizar alguna acción o recargar la página
      location.reload();
    }
  });




const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");


const themeToggler=document.querySelector(".theme-toggler");

//mostrar menu
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
  });
  
  closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
  });


//cambiar tema
themeToggler.addEventListener('click',()=> {
    document.body.classList.toggle('dark-theme-variables');


    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');



});