/*
Citations:
homepageImage = freepik.com
homepageLogo = flamingtext.com
Some code borrowed from Lesson 10: Traversals Investigate (4. Random Dog Picker Investigation)

App Link:
https://studio.code.org/projects/applab/JsjYMeS_JYVocWzpsLFVR5bnIRalwGfcpyCyvPxxFwk

Creation Date: Mar 24, 2023
Completion Date: Mar 25, 2023

*/

// Retrieving dog data from "Dogs" table columns.
var dogNamesList = getColumn("Dogs", "Name");
var dogImagesList = getColumn("Dogs", "Image");
var dogSizeList = getColumn("Dogs", "Maximum Height");
var dogBreedGroupList = getColumn("Dogs", "Breed Group");
var dogLifeSpanList = getColumn("Dogs", "Maximum Life Span");
var dogWeightList = getColumn("Dogs", "Maximum Weight");
var dogTemperamentList = getColumn("Dogs", "Temperament");

// Initializing empty arrays for filtered dog data.
var filteredDogNames = [];
var filteredDogImages = [];
var filteredDogTemperament = [];

// When "findButton" is clicked, switch to "dogFinder" screen.
onEvent("findButton", "click", function( ) {
  setScreen("dogFinder");
});

// When "findButton2" is clicked, get dropdown values and call "listSetup" function.
onEvent("findButton2", "click", function( ) {
  var dogSize = getText("sizeDropdown");
  var breedGroup = getText("breedGroupDropdown");
  var lifeSpan = getText("lifeSpanDropdown");
  var weight = getText("weightDropdown");
  listSetup(dogSize, breedGroup, lifeSpan, weight);
});

// Filtering dog data based on selected dropdown values.
function filter(dogSize, breedGroup, lifeSpan, weight){
  filteredDogNames = [];
  filteredDogImages = [];
  filteredDogTemperament = [];
  
  for(var i=0; i<dogBreedGroupList.length; i++){
    if(dogBreedGroupList[i] == breedGroup){
      if (lifeSpan == "Short" && dogLifeSpanList[i] <= 14) {
        if (weight == "Light" && dogWeightList[i] <= 100) {
          if(dogSizeList[i] < 16 && dogSize == "Small"){
            appendItem(filteredDogNames, dogNamesList[i]);
            appendItem(filteredDogImages, dogImagesList[i]);
            appendItem(filteredDogTemperament, dogTemperamentList[i]);
          } else if(dogSizeList[i] >= 16 && dogSizeList[i] < 24 && dogSize == "Medium"){
            appendItem(filteredDogNames, dogNamesList[i]);
            appendItem(filteredDogImages, dogImagesList[i]);
            appendItem(filteredDogTemperament, dogTemperamentList[i]);
          } else if(dogSizeList[i] >= 24 && dogSize == "Large") {
            appendItem(filteredDogNames, dogNamesList[i]);
            appendItem(filteredDogImages, dogImagesList[i]);
            appendItem(filteredDogTemperament, dogTemperamentList[i]);
          } 
        } else if (weight == "Heavy" && dogWeightList[i] > 100) {
          if(dogSizeList[i] < 16 && dogSize == "Small"){
            appendItem(filteredDogNames, dogNamesList[i]);
            appendItem(filteredDogImages, dogImagesList[i]);
            appendItem(filteredDogTemperament, dogTemperamentList[i]);
          } else if(dogSizeList[i] >= 16 && dogSizeList[i] < 24 && dogSize == "Medium"){
            appendItem(filteredDogNames, dogNamesList[i]);
            appendItem(filteredDogImages, dogImagesList[i]);
            appendItem(filteredDogTemperament, dogTemperamentList[i]);
          } else if(dogSizeList[i] >= 24 && dogSize == "Large") {
            appendItem(filteredDogNames, dogNamesList[i]);
            appendItem(filteredDogImages, dogImagesList[i]);
            appendItem(filteredDogTemperament, dogTemperamentList[i]);
          } 
        }
      } else if (lifeSpan == "Long" && dogLifeSpanList[i] > 14) {
        if (weight == "Light" && dogWeightList[i] <= 100) {
          if(dogSizeList[i] < 16 && dogSize == "Small"){
            appendItem(filteredDogNames, dogNamesList[i]);
            appendItem(filteredDogImages, dogImagesList[i]);
            appendItem(filteredDogTemperament, dogTemperamentList[i]);
          } else if(dogSizeList[i] >= 16 && dogSizeList[i] < 24 && dogSize == "Medium"){
            appendItem(filteredDogNames, dogNamesList[i]);
            appendItem(filteredDogImages, dogImagesList[i]);
            appendItem(filteredDogTemperament, dogTemperamentList[i]);
          } else if(dogSizeList[i] >= 24 && dogSize == "Large") {
            appendItem(filteredDogNames, dogNamesList[i]);
            appendItem(filteredDogImages, dogImagesList[i]);
            appendItem(filteredDogTemperament, dogTemperamentList[i]);
          }
        } 
      }
    }
  }
}

// Updating the "dogFinder" screen based on filtered dog data.
function updateScreen(){
  if(filteredDogNames.length == 0){
    setText("dogNameLabel", "No dogs found");
    setText("temperament", "");
    setImageURL("dogImage", "");
  } else {
    var randomIndex = randomNumber(0, filteredDogNames.length-1);
    setText("dogNameLabel", filteredDogNames[randomIndex]);
    setText("temperament", filteredDogTemperament[randomIndex]);
    setImageURL("dogImage", filteredDogImages[randomIndex]);
  }
}

// Setting up the list of filtered dogs based on selected dropdown values.
function listSetup(dogSize, breedGroup, lifeSpan, weight){
  filter(dogSize, breedGroup, lifeSpan, weight);
  updateScreen();
}
