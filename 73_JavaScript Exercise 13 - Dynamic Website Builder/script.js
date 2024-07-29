function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;
    if (views < 1000) {
        viewStr = views;
    } else if (views >= 1000000) {
        viewStr = (views / 1000000) + "M";
    } else {
        viewStr = (views / 1000) + "K";
    }

    let html = `
        <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>
    `;
    return html;
}

document.querySelector(".btn").addEventListener("click", function() {
    const container = document.querySelector(".container");
    const cardHTML = createCard(
        "Introduction to Backend | Sigma Web Dev video #4", 
        "CodeWithHarry", 
        560000, 
        5, 
        "31:22", 
        "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
    );
    container.innerHTML += cardHTML;
});
