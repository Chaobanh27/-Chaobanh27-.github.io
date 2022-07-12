//  Count visitor
 const count = document.getElementById('count');

  updateVisitCount();
  
  function updateVisitCount(){
    fetch('https://api.countapi.xyz/hit/PERSOL/ChaoBanh/?amount=1')
      .then(res => res.json())
      .then(res => {
        count.innerHTML = res.value
    });
  }
//  Count visitor

// Display Time
  function displayTime() {
    const now = new Date();
    const timeString = [now.getHours(),now.getMinutes(),now.getSeconds()];
    // document.writeln("<h1>" + timeString.join(':') + "</h1>");
    document.getElementById("time").innerHTML = timeString.join(':');
    const reset = setInterval(displayTime,1000);
    const session = document.getElementById('session');
    let hrs = now.getHours();
    if (hrs >= 12 ) {
        session.innerHTML = 'PM';
    }
    else {
        session.innerHTML = 'AM';
    }
    // setTimeout(refresh ,1000);
}
// function refresh() {
//     location.reload();
// }
displayTime();

function displayDate () {
    const date = new Date();
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Sarturday"];
    document.getElementById('date').innerHTML = "Today is " + day[date.getDay()] + "," + " Month " + (date.getMonth()+1)  +  " Day " + date.getDate() + " Year " + date.getFullYear();
    
}
displayDate();
// Display Time
