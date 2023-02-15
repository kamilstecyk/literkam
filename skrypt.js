var numer = 0;
var timer1 = 0;
var timer2 = 0;

function schowaj()
{
	$("#img_main").fadeOut(400);
}



function zmien_slajd()
{
	numer++;
	if(numer>5) numer=1;
			
	var plik = 'url("slajd/slajd' + numer + '.jpg")';
	document.getElementById("img_main").style.backgroundImage = plik;
	$("#img_main").fadeIn(400);
	timer1 = setTimeout("zmien_slajd()",3400);
	timer2 = setTimeout("schowaj()",3000);
}


lightbox.option({
      'resizeDuration': 300,
      'wrapAround': true
    })


function animate(){
	var container = document.getElementById("container");
	//var slogan = document.getElementsByClassName("slogan");
	
	var down = document.getElementById("down");

	//container.classList.add("animation_extend");
	//slogan.classList.add("animation_fade_in");
	//console.log("hello");
	if(down){ down.classList.add("animation_fade_in");}
	if(down){container.classList.add("animation_extend");}
	else{container.classList.add("animation_fade_in")}
	setTimeout(()=>{if(down){down.classList.remove("animation_fade_in");}if(down){container.classList.remove("animation_extend")}else{container.classList.remove("animation_fade_in")};},2000);

}