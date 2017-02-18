var outside = "global"

function scopeStuff(){
	var inside = "local";
	console.log("outside from inside the function", outside);//outside outsid
	console.log("inside from inside the function", inside);//inside global function
}

console.log("outside from inside the function", outside);
//console.log("inside from inside the function", inside);


//scopeStuff();

var global_base = 500;
!function throwAway(){
	global_base=+500;
	console.log(global_base);
}();


var cats = (function(){
	var color = "black";
	var type = "tiger";
	var name = "fluffy";


	return {
		getColor : function(){ 
		var result = "your cat is " + color; //function inside of obeject
			return color;
		},
		getType : function(){
			return type;
		},
		setColor: function(newColor){
			color = newColor;
		}
	};
})();

console.log(cats);
cats.setColor("pink");
console.log(cats.getColor());




//

// inside of an object need : insted of =
// function(){
// 	console.log("something fun");
// }

//throwAway();

//document.getElementById('cat').addEventListener("click", throwAway)


