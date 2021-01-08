const button = document.getElementById('btn');
const about = document.getElementById('about');

const collapse1 = document.getElementById('collapse1');
const collapsedetails1 = document.getElementById('collapsedetails1');
const collapse2 = document.getElementById('collapse2');
const collapsedetails2 = document.getElementById('collapsedetails2');
const collapse3 = document.getElementById('collapse3');
const collapsedetails3 = document.getElementById('collapsedetails3');
const collapse4 = document.getElementById('collapse4');
const collapsedetails4 = document.getElementById('collapsedetails4');

button.addEventListener('click',()=>{
    about.scrollIntoView();
})

collapse1.addEventListener('click',()=>{
    collapse1.classList.toggle('active');
})

collapse2.addEventListener('click',()=>{
    collapse2.classList.toggle('active');
})

collapse3.addEventListener('click',()=>{
    collapse3.classList.toggle('active');
})

collapse4.addEventListener('click',()=>{
    collapse4.classList.toggle('active');
})