// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '7df6861ef9mshcf74c2f2b24ec9ep10bd07jsn3689a5e6a374',
// 		'X-RapidAPI-Host': 'referential.p.rapidapi.com'
// 	}
// };

fetch("https://restcountries.com/v2/all")
	.then(resp => resp.json())
	.then((resp) =>{
	console.log(resp)

	resp.forEach(element => {
		let div = document.createElement("DIV")
		div.classList.add("section__div")
		ddd.appendChild(div)
		
		let img = document.createElement("IMG");
		img.classList.add("div__img");
		img.src = element.flag
		div.appendChild(img);

		let p = document.createElement("P");
		p.classList.add("div__p");
		p.textContent = "Pais: "+element.name
		div.appendChild(p);
		
		let p2 = document.createElement("P");
		p2.classList.add("div__p");
		p2.textContent = "Capital: "+element.capital
		div.appendChild(p2);

		let p3 = document.createElement("P");
		p3.classList.add("div__p");
		p3.textContent ="Continente: "+ element.region
		div.appendChild(p3);

		// let p4 = document.createElement("P");
		// p4.classList.add("div__p");
		// p4.textContent ="Idioma: "+ element.currencies[1]
		// div.appendChild(p4);
		
	});
	
})



// fetch("https://restcountries.com/v2/all")
// 	.then(resp => resp.json())
// 	.then((resp) =>{
// 	console.log(resp)
		
// });
	
