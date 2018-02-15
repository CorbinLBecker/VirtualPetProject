

$(function() {
  
  checkAndUpdatePetInfoInHtml();

  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.givebrew-button').click(clickedgivebrewButton);

})


var pet_info ={
name:"Bonzo",
weight: 20,
happiness: 10
}



  function clickedTreatButton() {
  pet_info.weight += 2;
  pet_info.happiness +=3;  
    
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedPlayButton() {
  pet_info.happiness +=3;
  pet_info.weight -=2;
    if (pet_info.happiness >= 20)
    {
      pet_info.name = "BONZOOO!!";
    }
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedExerciseButton() {
    pet_info.happiness -=3;
    pet_info.weight -=3;
    checkAndUpdatePetInfoInHtml();
  }
  function clickedgivebrewButton() {

    alert("Bark Bark")
    checkAndUpdatePetInfoInHtml();
  }
  function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();  
    updatePetInfoInHtml();
  }
  
  function checkWeightAndHappinessBeforeUpdating() {
    if(pet_info.weight == 0 || pet_info.weight < 0)
      pet_info.weight = 0 && console.log("Feed that pooch");
  }
  
  function updatePetInfoInHtml() {
    $('.name').text(pet_info['name']);
    $('.weight').text(pet_info['weight']);
    $('.happiness').text(pet_info['happiness']);
  }




