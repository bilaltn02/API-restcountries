let buscar= document.getElementById("buscar");
let imagen= document.querySelector("#imagen");
let nombre= document.querySelector("#nombre");
let boton= document.querySelector("#boton");
let boton2= document.querySelector("#boton2");
let input= document.querySelector("#input");
let victoria= document.querySelector("#victoria");
let p= document.querySelector("#p");
let pos = 0;
let cont = 0;
let contbien = 0;



fetch("https://restcountries.com/v2/all")
	.then(resp => resp.json())
	.then((resp) =>{
	console.log(resp)

    // let paises=[];

    // localStorage.setItem("paises", JSON.stringify(paises))
    // array=JSON.parse(localStorage.getItem("paises", JSON.stringify(paises)))


    pos=Math.floor(Math.random()*resp.length);
    imagen.setAttribute("src", resp[pos].flag)
	
    const adiv=()=>{
        if(input.value==resp[pos].name){
            contbien=contbien+1
            console.log("si")
            victoria.style.display="block";
            input.style.backgroundColor = "white";
            // paises.push(input.value)
            // localStorage.setItem("paises", JSON.stringify(paises))
            // array=JSON.parse(localStorage.getItem("paises", JSON.stringify(paises)))
            // console.log(array)
        }else{
            input.style.backgroundColor = "red";
        }
    }
    boton.addEventListener("click", adiv)

    const jugardenuevo=()=>{
        pos=Math.floor(Math.random()*resp.length);
        imagen.setAttribute("src", resp[pos].flag)
        input.value=""
        input.style.backgroundColor = "white";
        victoria.style.display="none";
        cont=cont +1;
        console.log(cont)
    }
    boton2.addEventListener("click", jugardenuevo)
})



let cosas=[]
const aniadir=(event)=>{
  if(event.target.id=="boton"){
    let pais=input.value

    cosas.push(pais)

    localStorage.setItem("datos", JSON.stringify(cosas))
  }
}
document.addEventListener("click", aniadir)

let array2=JSON.parse(localStorage.getItem("datos", JSON.stringify(cosas)))
console.log(array2)

p.innerHTML ="Ultimas respuestas: "+JSON.stringify(array2)
// cada vez que reinicias la pagina sale lo que has escrito al darle al boton de enviar
