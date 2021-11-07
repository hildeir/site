var xDesktop = -1105;//valor de passos do slide desktop
document.querySelector(".bt-right").addEventListener("click",avanca);
document.querySelector(".bt-left").addEventListener("click",volta);
/* bts legenda ddeesktop */
let bt_legenda = document.querySelectorAll(".bt-legenda");
bt_legenda.forEach((elem)=>{
	elem.addEventListener("click",go);
});
/* bts mobile */
document.querySelector(".right-mobile").addEventListener("click",avanca_mobile);
document.querySelector(".left-mobile").addEventListener("click",volta_mobile);


let tela = window.screen.width;
/********** define o carrossel parra deeteerminada tela *************/
if(tela >= 1440){
	document.querySelector("#cont-slide").classList.add("cont-slide-desktop");
	/* define as classes de cada item da div cont-slide */ 
	let filhos_cont_slide = document.querySelector("#cont-slide").children;
	for (var i = 0; i < filhos_cont_slide.length; i++) {
		filhos_cont_slide[i].classList.add("cont-item");
		filhos_cont_slide[i].classList.add("item-margin");
	}
	/* fimm */
	document.querySelector(".janela-indentificador").classList.add("janela-desktop");
	/*  peega aa soma dos  3  itens da largurraa ee define comoo a llarggura
	da jjannela-desktop */
	let width_itens3_total = 0;
	for (var i = 0; i < 3; i++) {
		width_itens3_total += document.querySelectorAll('.cont-item')[i].clientWidth; 
	}
	document.querySelector(".janela-desktop").style.width = (width_itens3_total+55)+"px";
	
	/*  fim */
	if(tela >= 2560){
		document.querySelector(".janela-desktop").style.width = (width_itens3_total - 60)+"px";
	}

}else if(tela <= 1024){ 
	document.querySelector(".janela-indentificador").classList.add("janela-mobile");
	let janelaWidth = parseInt(document.querySelector(".janela-mobile").clientWidth);//pega largura
	document.querySelector(".janela-indentificador").classList.remove("janela-desktop");
	document.querySelector(".legenda-slide").style.display = "none"; //oculta a legenda desktop
	/* define aas pposicoes e aas clases de cada item um do  lado do outro dentro 
	da div cont-slide */ 
	let filhos_cont_slide = document.querySelector("#cont-slide").children;
	for (var i = 0; i < filhos_cont_slide.length; i++) {
		filhos_cont_slide[i].classList.add("cont-item-mobile");
		filhos_cont_slide[i].style.left = (i * janelaWidth)+"px";
	}
	/* fim */
	document.querySelector(".cont-bts-mobile-legenda").style.display = "flex";
	document.querySelector("#cont-slide").classList.add("cont-slide-mobile");

	/* pega a altura do primeiro item e define como a altura da .janela-mobile */
	let x = document.querySelector(".cont-item-mobile").clientHeight;
	document.querySelector(".janela-mobile").style.height = (x+40)+"px";
	/* ffim */

}
/********* centraliza slide *******8***/
if(tela >= 320 && tela <= 1024){
	let centro = tela / 2;
	let metade_slide = document.querySelector(".janela-mobile").clientWidth / 2;
	let posicao = centro - metade_slide;
	document.querySelector(".janela-mobile").style.left = posicao+"px";
}else{
	let centro = tela / 2;
	let metade_slide = document.querySelector(".janela-desktop").clientWidth / 2;
	let posicao = centro - metade_slide;
	document.querySelector(".janela-desktop").style.left = posicao+"px";
}
/*8******* fim *****8**8**/
/** ffim **/
function avanca(){
	let slide = document.querySelector("#cont-slide");
	let cont = parseInt(slide.getAttribute("cont"));
	let last = parseInt(document.querySelectorAll(".cont-item").length);

	if(cont >= 0 && cont < (last -1)){
		cont += 1;
		var move = cont * xDesktop;
		slide.setAttribute("cont",cont);
		slide.style.left = move+'px';

		
		/*  peega aa soma dos  3  itens da largurraa e define
		 comoo a largura da janela-desktop */
		let len = document.querySelectorAll('.cont-item').length;
		let width_itens3_total = 0;
		for (var i = (2*cont); i < len; i++) {
			width_itens3_total += document.querySelectorAll('.cont-item')[i].clientWidth; 
		}
		document.querySelector(".janela-desktop").style.width = (width_itens3_total)+"px";
		
		/*  fim */
		
	}

	
	bts(cont);
}
function volta(){
	let slide = document.querySelector("#cont-slide");
	let cont = parseInt(slide.getAttribute("cont"));
	let last = parseInt(document.querySelectorAll(".cont-item").length);

	if(cont > 0 && cont <= (last -1)){
		cont -= 1;
		var move = cont * xDesktop;
		slide.setAttribute("cont",cont);
		slide.style.left = move+'px';

		/*  peega aa soma dos  3  itens da largurraa e define
		 comoo a largura da janela-desktop */
		let len = document.querySelectorAll('.cont-item').length;
		let width_itens3_total = 0;
		for (var i = cont; i < 3; i++) {
			width_itens3_total += document.querySelectorAll('.cont-item')[i].clientWidth; 
		}
		document.querySelector(".janela-desktop").style.width = (width_itens3_total+60)+"px";
		
		/*  fim */

	}

	bts(cont);
}
function bts(contador) {
	let bt = document.querySelectorAll(".bt");
	let quant = document.querySelectorAll(".bt").length;
	let last = quant - 1;
	/* tira o botao left ou right se ele tiver em ullimo ou em primeiro */
	if(contador == 0){//primeiro
		bt.forEach((elem)=>{
			if(elem.classList.contains("active")){
				document.querySelector(".bt-left").style.visibility = "hidden";
				document.querySelector(".bt-right").style.visibility = "visible";
			}
		});
	}
	if(contador == last){//uultimo
		bt.forEach((elem)=>{
			if(elem.classList.contains("active")){
				document.querySelector(".bt-right").style.visibility = "hidden";
				document.querySelector(".bt-left").style.visibility = "visible";
			}
		});
	}
	//destaca a bolinha da legennda correspondente ao item quanndo o item appareccer no slide 
	bt.forEach((elem,index)=>{
		elem.classList.remove("active");
		elem.classList.add("desactive");
		if(index == contador){
			elem.classList.add("active");
		}
	});
}
/* /q//////////// mobille ////q//q///*/
function avanca_mobile(){

	let slide = document.querySelector("#cont-slide");
	let cont = parseInt(slide.getAttribute("cont"));
	let last = parseInt(document.querySelectorAll(".cont-item-mobile").length);
	let janelaWidth = parseInt(document.querySelector(".janela-mobile").clientWidth);
	let widthMobile = -janelaWidth;
	
	if(cont >= 0 && cont < (last -1)){
		cont += 1;
		var move = cont * widthMobile; 
		//slide.setAttribute("pos",move);
		slide.setAttribute("cont",cont);
		slide.style.left = move+"px";
		/*redmensiona a altura da jaaneela conforme a altura do item */
		let x = document.querySelectorAll(".cont-item-mobile")[cont].clientHeight;
		document.querySelector(".janela-mobile").style.height = (x+40)+"px";
	}
}
function volta_mobile(){
	let slide = document.querySelector("#cont-slide");
	let cont = parseInt(slide.getAttribute("cont"));
	let pos = parseInt(slide.getAttribute("pos"));
	let last = parseInt(document.querySelectorAll(".cont-item-mobile").length);
	let janelaWidth = parseInt(document.querySelector(".janela-mobile").clientWidth);
	let widthMobile = -janelaWidth;
	
	if(cont > 0 && cont <= (last -1)){
		cont -= 1;
		var move = cont * widthMobile; 
		slide.setAttribute("cont",cont);
		slide.style.left = move+"px";
		let x = document.querySelectorAll(".cont-item-mobile")[cont].clientHeight;
		document.querySelector(".janela-mobile").style.height = (x+40)+"px";
	}
}
/* animacao pela llegenda desktop*/
function go(e){
	let slide = document.querySelector("#cont-slide");
	let id = parseInt(e.target.id);
	let cont = id;
	var move = cont * x; 
	slide.setAttribute("cont",cont);
	slide.style.left = move+"px";
		
	bts(cont);
}