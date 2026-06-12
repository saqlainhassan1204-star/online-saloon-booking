const DarkBulb=document.getElementById('LightBulb');
  
let isDark=false;

       
const body=document.body;
 function dark(){  
         
         body.style.backgroundColor='#1a1a1a';
         const nav=document.getElementById('nav');
         nav.style.backgroundColor='#a0a0a0';
         const SubNav=document.getElementById('RightNav');
         SubNav.style.backgroundColor='#1a1a1a';

         body.style.color=' #fffbf0';
         const paragraph=document.getElementById('para');
         paragraph.style.color=' #fffbf0';
        //     DarkBulb.src='https://c8.alamy.com/comp/HDWFKY/bulb-light-draw-icon-vector-illustration-graphic-design-HDWFKY.jpg'
        // DarkBulb.style.width='25px'
 }
   function white(){  
         
         body.style.backgroundColor='white';
         const nav=document.getElementById('nav');
         nav.style.backgroundColor=' aliceblue';
         const SubNav=document.getElementById('RightNav');
         SubNav.style.backgroundColor='rgb(71, 166, 166)';

         body.style.color=' black';
         const paragraph=document.getElementById('para');
         paragraph.style.color='black';
        paragraph.style.fontFamily = 'Arial, sans-serif';  
paragraph.style.fontSize = '1.25rem';
// DarkBulb.src='https://static.vecteezy.com/system/resources/previews/013/442/202/original/light-bulbs-illustration-creative-idea-png.png'
//         DarkBulb.style.width='44px'
 }       


DarkBulb.addEventListener('click',()=>{
    isDark=!isDark;
    if(isDark){
        dark();
    }else{
        white();
    }
})



// const Home=document.getElementById('home');
// Home.addEventListener('click',()=>{
//     window.open("home.html")
// })

function Home(){
    window.open('home.html');
}

// const About=document.getElementById('about');
// About.addEventListener('click',()=>{
//     window.open("about.html")
// })

function About(){
    window.open('about.html');
}

// const Service=document.getElementById('services');
// Service.addEventListener('click',()=>{
//     window.open("services.html")
// })
function Services(){
    window.open('services.html');
}

// const Book=document.getElementById('Booking');
// Book.addEventListener('click',()=>{
//     window.open("Booking.html")
// })
function Booking(){
    window.open('Booking.html');
}


function Contact(){
    window.open('contact.html');
}










function booking(){

const name=document.getElementById('name').value;
   

const phone=document.getElementById('number').value;


const email=document.getElementById('email').value;

const service=document.getElementById('services').value;


const date=document.getElementById('date').value;


const time=document.getElementById('time').value;


if(!name || !phone || !email || !service ||!date ||!time){
    alert("please fill all the required field");
}else{
    alert('Booking confirmed \n Name :'+ name  +'\n we will contact you at :' + phone +'\n email :' +email + '\n service :'+ service+'\n date :' +date+'\n time :'+time)
}



}



 



