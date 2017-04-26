var framework = { 
	append: function(t, w){ 
		t.appendChild(w); 
	}, 
	prepend: function(t, w){
		t.insertBefore(w, t.firstChild) 
	}, 
	replace(t, w){
		t.parentNode.replaceChild(t, w); 
	}, 
	create(s){ 
		return document.createElement(s); 
	}, 
	remove(t){
		t.remove();
	}, 
	event(t, e, f){
		if(typeof t.attachEvent == "function"){
			t.attachEvent("on" + e, f); 
		}else{
			t.addEventListener(e, f);
		}
	}, 
	unevent(t, e, f){
		if(typeof t.attachEvent == "function"){ 
			t.detachEvent("on" + e, f); 
		}else{
			t.removeEventListener(e,f); 
		}
	}, 
	dispatch(t, e){
		var event = new Event(e); 
		t.dispatchEvent(e); 
	} 
}
