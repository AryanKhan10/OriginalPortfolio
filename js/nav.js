const navList = document.querySelector('#nav-list');
const toggle = document.querySelector('.toggle');

// automatically add the ac class to the nav li a when the respected section become visible to the user also
// add the ac class when the nav li a is clicked
const navLinks = document.querySelectorAll('nav ul li a');
    document.addEventListener("DOMContentLoaded", function() {
    
        function onScroll() {
            const fromTop = window.scrollY;
    
            navLinks.forEach(link => {
                const section = document.querySelector(link.getAttribute('href'));
    
                if (section) {  // Check if the section exists
                    if (fromTop === 0) {
                        navLinks.forEach(link => link.classList.remove('ac'));
                        navLinks[0].classList.add('ac');
                    } else if (
                        section.offsetTop <= fromTop + 100 &&
                        section.offsetTop + section.offsetHeight > fromTop + 50
                    ) {
                        navLinks.forEach(link => link.classList.remove('ac'));
                        link.classList.add('ac');
                    }
                }
            });
        }
    
        window.addEventListener('scroll', onScroll);
    
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.forEach(link => link.classList.remove('ac'));
                this.classList.add('ac');
            });
        });
    
        // Set Home as the active link on page load
        navLinks[0].classList.add('ac');
    
        // Run onScroll once to set the initial active link
        onScroll();
    });
    
    
// Adding background color to the navbar on a little scroll 
let togglemanu=()=>{
    if(navList.classList.contains('nav-list')){
        navList.classList.add('nav-list-toggle')
        navList.classList.remove('nav-list')
        
    }
    else{
    navList.classList.add('nav-list')
    navList.classList.remove('nav-list-toggle')
    }
}

toggle.addEventListener('click',togglemanu);


//animating progress bar on scroll 
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navBar');
    if (window.scrollY > 50) { // Adjust the scroll value as needed
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
});


const skills =document.querySelector('#skills')
const progressBars =document.querySelectorAll('.progress-bar')

function showProgress(){
    progressBars.forEach(bar =>{
        const value = bar.dataset.progress;
        // console.log(value)
        bar.style.opacity=1;
        bar.style.width=`${value}`;
    })
}
function hideProgress(){
    progressBars.forEach(bar =>{
        const value = bar.dataset.progress;
        // console.log(value)
        // bar.style.opacity=0;
        bar.style.width=0;
    })
}
window.addEventListener('scroll', ()=>{
    const secPos = skills.getBoundingClientRect().top;
    const screenPos = window.innerHeight/2;
    // console.log(screenPos)
    // console.log(secPos)
    
    if(secPos<screenPos){
        console.log('show')
        showProgress()
    }
    else{
        hideProgress()
        console.log('hide')

    }
})

