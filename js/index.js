
//transform: translateX(-168.125px) translateY(-42.9744px) rotateX(10.7436deg) rotateY(-5.60415deg);
window.onload = function(){
	var oMain = document.getElementById("main");
	var oBack1 = document.getElementById("back-1");
	var oBack2 = document.getElementById("back-2");
	var oBack3 = document.getElementById("back-3");
	var oBack4 = document.getElementById("back-4");
	var oBack5 = document.getElementById("back-5");
	var oBack6 = document.getElementById("back-6");
		var json = {webkit:"webkitTransform",moz:"MozTransform",o:"OTransform",ms:"msTransform"}
		function addPrev(obj,tx,ty,rx,ry){
			for(var name in json){
				
				obj.style[json[name]] = "translateX("+tx+"px) translateY("+ty+"px) rotateX("+rx+"deg) rotateY("+ry+"deg)";
			}
		}

		addPrev(oBack1,0.01,0.01,0.001,0.001);
	oMain.onmousemove = function(ev){
		var oEvent = ev || event;
		
		var scalX = oEvent.clientX;
		var scalY = oEvent.clientY;
		addPrev(oBack1,scalX*0.01,scalY*0.01,scalX*0.001,scalY*0.001);
		addPrev(oBack2,scalX*0.01,scalY*0.01,scalX*0.001,scalY*0.001);
		addPrev(oBack3,scalX*0.01,scalY*0.01,scalX*0.001,scalY*0.001);
		addPrev(oBack4,scalX*0.2,scalY*0.1,scalX*0.003,scalY*0.003);
		addPrev(oBack5,scalX*0.05,scalY*0.01,scalX*0.001,scalY*0.001);
		addPrev(oBack6,scalX*0.25,scalY*0.15,scalX*0.01,scalY*0.01);
		
	
	}
}