let buscar= document.getElementById("buscar");
let imagen= document.querySelector("#imagen");
let nombre= document.querySelector("#nombre");
let boton= document.querySelector("#boton");
let boton2= document.querySelector("#boton2");
let input= document.querySelector("#input");
let victoria= document.querySelector("#victoria");
let pos = 0;
let cont = 0;
let contbien = 0;

fetch("https://restcountries.com/v2/all")
	.then(resp => resp.json())
	.then((resp) =>{
	console.log(resp)

    pos=Math.floor(Math.random()*resp.length);
    imagen.setAttribute("src", resp[pos].flag)
	
    const adiv=()=>{
        if(input.value==resp[pos].name){
            contbien=contbien+1
            console.log("si")
            victoria.style.display="block";
            input.style.backgroundColor = "white";
        }else{
            input.style.backgroundColor = "red";
        }
    }
    boton.addEventListener("click", adiv)

    const jugardenuevo=()=>{
        pos=Math.floor(Math.random()*resp.length);
        imagen.setAttribute("src", resp[pos].flag)
        cont=cont +1;
        console.log(cont)
    }
    boton2.addEventListener("click", jugardenuevo)


    localStorage.setItem("Numero", cont);
})

// localStorage.setItem("datos", JSON.stringify(cont))
//     array=JSON.parse(localStorage.getItem("datos", JSON.stringify(cont)))
//     console.log(array)


