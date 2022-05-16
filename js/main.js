var box = document.getElementById("box")
var leftPosition=0;
var topPosition=0;
window.addEventListener("keydown" , function(e){
    if(e.keyCode==39){
        leftPosition+=5;
        box.style.left=leftPosition+"px";
    }
    else if(e.keyCode==40){
        topPosition+=5;
        box.style.top=topPosition+"px";
    }
    else if(e.keyCode==38){
        topPosition-=5;
        box.style.top=topPosition+"px";
    }
    else if(e.keyCode==37){
        leftPosition-=5;
        box.style.left=leftPosition+"px";
    }
})
window.addEventListener("keydown" , function(e){
    if(e.key=="Enter"){
        var leftMini =box.style.left.slice(0,box.style.left.length-2)
        let topMini = box.style.top.slice(0,box.style.top.length-2)
        const newDiv= document.createElement("div");
        var mainbox= document.getElementById("mainbox");
        newDiv.classList.add("smallbox");
        newDiv.style.left=Number(leftMini) + 50 + "px";
        newDiv.style.top=Number(topMini) + 50 +"px";
        box.style.width=box.style.width.slice(0,box.style.width.length-2)-15 + "px";
        box.style.height=box.style.height.slice(0,box.style.height.length-2)-15 + "px";
        console.log(box.style.width)
        mainbox.append(newDiv)
    }
})