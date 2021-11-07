/* bts mobile */
document.querySelector(".right-mobile").addEventListener("click",function(){
	avanca_mobile();
});
document.querySelector(".left-mobile").addEventListener("click",function(){
	volta_mobile();
});

let janelaWidth = document.querySelector(".janela").clientWidth;
let tela = window.screen.width;
let xMobile = -janelaWidth;

function avanca_mobile(){
	let slide = document.querySelector(".cont-slide");
	let janela = document.querySelector(".janela");
	let cont = parseInt(slide.getAttribute("cont"));
	let pos = parseInt(slide.getAttribute("pos"));
	let last = parseInt(document.querySelectorAll(".cont-item").length);


	if(cont >= 0 && cont < (last -1)){
		cont += 1;
		var move = cont * xMobile; 
		//slide.setAttribute("pos",move);
		slide.setAttribute("cont",cont);
		slide.style.left = move+"px";
		
	}

}
function volta_mobile(){
	let slide = document.querySelector(".cont-slide");
	let cont = parseInt(slide.getAttribute("cont"));
	let pos = parseInt(slide.getAttribute("pos"));
	let last = parseInt(document.querySelectorAll(".cont-item").length);
	
	if(cont > 0 && cont <= (last -1)){
		cont -= 1;
		var move = cont * xMobile; 
		slide.setAttribute("cont",cont);
		slide.style.left = move+"px";
		
	}
}