
let body = document.querySelector("body")

//Change font to Arial,sans-serif
body.style.fontFamily = "Arial, sans-serif"

//(In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
let nickName = document.querySelectorAll("span")[0];
let favorites = document.querySelectorAll("span")[1];
let hometown = document.querySelectorAll("span")[2];

nickName.innerHTML = "Waney"
favorites.innerHTML = "Anime"
hometown.innerHTML = "Negeri Sembilan"

//Iterate through each li and change the class to "list-item". 
//Add a style tag that sets a rule for "list-item" to make the color "red".
let list = document.getElementsByTagName("li")

for(i= 0; i <= list.length -1;i++){
    list[i].className = "list=item";  
    list[i].style = "color:red"; 
}

let image = document.createElement('img')
image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92MPvhWaTH11fCJbNnxaQZQBhJwtC4P6zWg&usqp=CAU"
document.body.appendChild(image);

