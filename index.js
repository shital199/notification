const markAsReadBtn = document.querySelector('.mark-all-as-read-button');
const numberOfUnreadNotifications = document.getElementById('number-of-unread-notifications')
const unreadNotifications = document.querySelectorAll('.unread');

numberOfUnreadNotifications.innerText = unreadNotifications.length;

unreadNotifications.forEach(notification => {
    const indicator = document.createElement('span');
    indicator.classList.add('unread-indicator');
    notification.children[1].append(indicator);
})

markAsReadBtn.addEventListener('click', () => {
    unreadNotifications.forEach(notification => {
        notification.classList.remove('unread');
        numberOfUnreadNotifications.innerText = document.querySelectorAll('.unread').length;
        const unreadIndicators = document.querySelectorAll('.unread-indicator');
        unreadIndicators.forEach(indicator => {
            indicator.remove();
        })
    })
})  
let all=document.querySelectorAll("container");
let dots=document.querySelectorAll("span.dot");
document.querySelector(".mark-all-as-read-button").addEventListener("click",() =>{
    document.querySelector(".number-of-unread-notifications").innerHTML="0";
    for(a of all){
        a.style.backgroundColor="white";
        a.querySelector("div p span.dot").style.display="name";
    }
})
function container(){
    if(document.querySelector(".number-of-unread-notifications").innerHTML>0){
        document.querySelector(".number-of-unread-notifications").innerHTML=
        document.querySelector(".number-of-unread-notifications").innerHTML-1;}
        else{
            document.querySelector('.number-of-unread-notifications').innerHTML=0;
        }
    }
    function bgChange(b){
        document.getElementById(b).style.backgroundColor = "white";
    }
    function displayChange(c){
        document.querySelector(c).style.display="none";
    }
    for(a of all){
        let didi=a.id;
        a.addEventListener("click" ,()=>{
            bgChange(didi);
            displayChange(`#${didi}div p span.dot`);
            bgChange();
        },{once:true})
    }
