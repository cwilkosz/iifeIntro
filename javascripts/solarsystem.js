var SolarSystem = (function(){

	var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
	var numPlanetsPeopleLandedOn = 0;
	
	var stars =["Sun", "Alpha Centauri", "Wolf 359"];
	var age = 0;
	return {
		setDate: Date.now(),
		getPlantes: function(){
			return planets;
		},
		getPlanetsLandedPeopleOn: function(){
			return numPlanetsPeopleLandedOn;	
		},
		setPlanetsLandedPeopleOn: function(){
			numPlanetsPeopleLandedOn++;
		},
		
		getDwarfPlanets : function (){
			return "they are rejects";
		},
		setDwarfPlanets : function(lumpOfRock){
			dwarfPlanets.push(lumpOfRock);
		},
		getStars : function(){
			return stars;
		},
		setStars : function(newStar){
			stars.push(newStar);
		},
		getSolarSytemsAge : function(){
			return age;
		},
		setSolarSytemsAge: function(){
			age++;
		}
	}
})();

// console.log("Planets ", SolarSystem.getPlantes());
// console.log("Planets with People: ", SolarSystem.getPlanetsLandedPeopleOn());
// SolarSystem.setSpaceships("Voayager 1");
// SolarSystem.setSpaceships("Voayager 2");
// SolarSystem.setSpaceships("Gemini");
// SolarSystem.setSpaceships("Apollo");
// console.log("Spaceships: ", SolarSystem.getSpaceships());