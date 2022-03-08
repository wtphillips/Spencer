document.querySelector("#more").style.display = "none";
let readMoreReadLess = document.querySelector("#more");

function readMore() {
    if (readMoreReadLess.style.display === "none") {
        document.querySelector("#more").style.display = "block";
        document.querySelector(".readMoreBtn").innerHTML = "Read Less"
    } else {
        readMoreReadLess.style.display="none"
        document.querySelector(".readMoreBtn").innerHTML = "Read More"
    }

}

document.querySelector(".readMoreBtn").addEventListener('click', readMore)