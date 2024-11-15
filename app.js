var btn = document.querySelector(".btn>button")
var box = document.querySelector(".box")

btn.addEventListener("click", ()=>
{
    update();
    
})

function update() {
  var  img= document.createElement("img")
    img.src= `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
    

    box.appendChild(img)
}
