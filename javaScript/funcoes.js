
var pizzas =[];
pizzas ["Mucarela"] = 0;
pizzas ["Portuguesa"] = 0;
pizzas ["Calabresa"] = 0;
pizzas ["Champignon"] = 0;
pizzas ["Bacon"] = 0;
pizzas ["Margherita"] = 0;
pizzas ["Rucula"] = 0;
pizzas ["Camarao"] = 0;

var bebidas =[];
bebidas["CocaColaLata"]=0;
bebidas["CocaColaSeiscentos"]=0;
bebidas["CocaColaDoisL"]=0;

function alerta(sabor){
	alert("Essa é uma foto de pizza sabor "+sabor);
}

function abrirPedido(adcPedido,nProdutos){

	document.getElementById(adcPedido).style.visibility="visible";

	switch(document.getElementById(nProdutos).id){
		case "pMucarela":
			pizzas["Mucarela"]++;
			document.getElementById(nProdutos).textContent = pizzas["Mucarela"];
		break;
		case "pPortuguesa":
			pizzas["Portuguesa"]++;
			document.getElementById(nProdutos).textContent = pizzas["Portuguesa"];
		break;
		case "pCalabresa":
			pizzas["Calabresa"]++;
			document.getElementById(nProdutos).textContent = pizzas["Calabresa"];
		break;
		case "pChampignon":
			pizzas["Champignon"]++;
			document.getElementById(nProdutos).textContent = pizzas["Champignon"];
		break;
		case "pBacon":
			pizzas["Bacon"]++;
			document.getElementById(nProdutos).textContent = pizzas["Bacon"];
		break;
		case "pMargherita":
			pizzas["Margherita"]++;
			document.getElementById(nProdutos).textContent = pizzas["Margherita"];
		break;
		case "pRucula":
			pizzas["Rucula"]++;
			document.getElementById(nProdutos).textContent = pizzas["Rucula"];
		break;
		case "pCamarao":
			pizzas["Camarao"]++;
			document.getElementById(nProdutos).textContent = pizzas["Camarao"];
		break;


		case "pCocaColaLata":
			bebidas["CocaColaLata"]++;
			document.getElementById(nProdutos).textContent = bebidas["CocaColaLata"];
		break;

		case "pCocaColaSeiscentos":
			bebidas["CocaColaSeiscentos"]++;
			document.getElementById(nProdutos).textContent = bebidas["CocaColaSeiscentos"];
		break;

		case "pCocaColaDoisL":
			bebidas["CocaColaDoisL"]++;
			document.getElementById(nProdutos).textContent = bebidas["CocaColaDoisL"];
		break;
	}

}

function excluirItem(excPedido,nProdutos){

	document.getElementById(excPedido).style.visibility="hidden";

	switch(document.getElementById(nProdutos).id){
		case "pMucarela":
			pizzas["Mucarela"]=0;
			document.getElementById(nProdutos).textContent = pizzas["Mucarela"];
		break;
		
		case "pPortuguesa":
			pizzas["Portuguesa"]=0;
			document.getElementById(nProdutos).textContent = pizzas["Portuguesa"];
		break;
		case "pCalabresa":
			pizzas["Calabresa"]=0;
			document.getElementById(nProdutos).textContent = pizzas["Calabresa"];
		break;
		case "pChampignon":
			pizzas["Champignon"]=0;
			document.getElementById(nProdutos).textContent = pizzas["Champignon"];
		break;
		case "pBacon":
			pizzas["Bacon"]=0;
			document.getElementById(nProdutos).textContent = pizzas["Bacon"];
		break;
		case "pMargherita":
			pizzas["Margherita"]=0;
			document.getElementById(nProdutos).textContent = pizzas["Margherita"];
		break;
		case "pRucula":
			pizzas["Rucula"]=0;
			document.getElementById(nProdutos).textContent = pizzas["Rucula"];
		break;
		case "pCamarao":
			pizzas["Camarao"]=0;
			document.getElementById(nProdutos).textContent = pizzas["Camarao"];
		break;

		case "pCocaColaLata":
			bebidas["CocaColaLata"]=0;
			document.getElementById(nProdutos).textContent = bebidas["CocaColaLata"];
		break;

		case "pCocaColaSeiscentos":
			bebidas["CocaColaSeiscentos"]=0;
			document.getElementById(nProdutos).textContent = bebidas["CocaColaSeiscentos"];
		break;

		case "pCocaColaDoisL":
			bebidas["CocaColaDoisL"]=0;
			document.getElementById(nProdutos).textContent = bebidas["CocaColaDoisL"];
		break;
	}
}

