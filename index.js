
function system() {
    const d = new Date();
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let meridiem;

    if (d.getHours() < 12) {
        meridiem = "AM";
    } else {
        meridiem = "PM";
    }

    document.getElementById("day").innerHTML = week[d.getDay()];
    document.getElementById("date").innerHTML = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    document.getElementById("hour").innerHTML = (d.getHours() % 12).toString().padStart(2,'0');
    document.getElementById("minute").innerHTML = d.getMinutes();
    document.getElementById("seconds").innerHTML = d.getSeconds().toString().padStart(2,'0');
    document.getElementById("am").innerHTML = meridiem;

}

setInterval(system, 1000);
system();