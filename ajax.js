console.log("ajax.js loaded");
let fetchbtn = document.getElementById("fetchbtn");
fetchbtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
    console.log("You have clicked the fetchbtn");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "test.txt", true);
    xhr.onprogress = function () {
        console.log("On progress");
    };
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.error("Some error occurred");
        }
    };
    xhr.send();
}
