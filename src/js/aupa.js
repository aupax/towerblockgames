;(function(){
  
	var icon = '<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png">';
	document.head.insertAdjacentHTML('beforeend','<style> img { width: 35px; height: 35px; position: fixed; bottom: 10px; right: 10px; } .sg .eye { -webkit-transform: translateX(0px);   transform: translateX(0px); } .sg:hover .eye { -webkit-transition: -webkit-transform 0.3s ease; transition: -webkit-transform 0.3s ease; transition: transform 0.3s ease; transition: transform 0.3s ease, -webkit-transform 0.3s ease; -webkit-transform: translateX(12px);   transform: translateX(12px); }</style>'); 
  
	var a = document.createElement('a');
	a.setAttribute('href','https://github.com/aupax');
	a.setAttribute('target','_blank');
  a.setAttribute('oncontextmenu','return false')
	a.innerHTML = icon;
    
 	document.body.appendChild(a);
})();