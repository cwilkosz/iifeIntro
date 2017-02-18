var SolarSystem = (function(oldSolarSystem){

	var age = 0;

    oldSolarSystem.getSolarSytemsAge = function(){
			return age;
	};
	oldSolarSystem.setSolarSytemsAge = function(){
		age++;
	};


	return oldSolarSystem;
})(SolarSystem || {});//augmented empty obj