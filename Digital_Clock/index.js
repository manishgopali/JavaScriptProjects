

function updateClock(){
    const now = new Date();

    
    const days = ['Sun', 'Mon', 'Tue', 'Wedn', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    const dateString = `${days[now.getDay()]},${months[now.getMonth()]} ${now.getDate()},${now.getFullYear()}`;
    
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
    document.getElementById("date").textContent = dateString;


}
updateClock();
setInterval(updateClock,1000);