console.log("Javascript is connected")
const year=new Date().getFullYear();
document.querySelector('.site-footer p').innerHTML=
` &copy;${year} Meet Amit Dharaiya. All rights reserved.`;
function getGreeting(){
    const hour=new Date().getHours();
    if(hour <12) return "Good Morning";
    if(hour <17) return "Good Afternoon";
    return "Good Evening";
}
const heroTitle =document.querySelector('.hero-section h1');
if (heroTitle){
    heroTitle.textContent=`${getGreeting()}, I'm Meet A 👋`
}