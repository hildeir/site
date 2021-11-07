document.querySelector(".menu-mobile").addEventListener("click",()=>{
	let nav = document.querySelector(".nav-mobile");
	nav.style.right = "0px";
});
document.querySelector("#fechar-nav-mobile").addEventListener("click",()=>{
	let nav = document.querySelector(".nav-mobile");
	nav.style.right = "-200px";
});