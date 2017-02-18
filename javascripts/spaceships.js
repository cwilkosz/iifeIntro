var SolarSystem = (function(oldSolarSystem){

	var spaceships = [];

	oldSolarSystem.getSpaceships = function(){
		return spaceships;
	};
	oldSolarSystem.setSpaceships = function(newSpaceship){
		spaceships.push(newSpaceship);
	};
	oldSolarSystem.wreckedSpaceships = function(){
		spaceships.pop();
	};



	return oldSolarSystem;
})(SolarSystem || {});//augmented empty obj