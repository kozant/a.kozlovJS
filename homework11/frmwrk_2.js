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
	},
	width(e){
		return e.clientWidth;
	},
	height(e){
		return e.clientHeight;
	},
	pageTop(e){
		return e.offsetTop;
	},
	pageLeft(e){
		return e.offsetLeft;
	},
	css(){
		if(arguments.length == 2){
			var e = arguments[0];
			var p = arguments[1];
			return  window.getComputedStyle(e)[p];
		}
		else{
			var e = arguments[0];
			var p = arguments[1];
			var v = arguments[2];
			e.style[p] = v;
		}
	},
	Get : {
		byId(t){
			return document.getElementById(t);
		},
		byClass(t){
			return document.getElementsByClassName(t);
		},
		byTag(t){
			return document.getElementsByTagName(t);
		},
		bySelector(t){
			return document.querySelector(t);
		},
		bySelectorAll(t){
			return document.querySelectorAll(t);
		}
	}
	ajax: function(p, m, c){
		var xhr = new XMLHttpRequest();
		xhr.open(m, p, true);
		xhr.onload = function(){
			c(xhr.responseText);
		}
		xhr.send(null);
	}
}

