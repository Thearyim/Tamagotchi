import './styles.css';
import Tamagotchi from './tamagotchi.js';

$(document).ready(function(){
  let pet;
  let petType;
  let refreshIntervalId;

  $("#pickPetKind").submit(function(){
    event.preventDefault();
    petType = $("#petKind").val();
    if(petType == "puppy" || petType == "kitten" || petType == "fish"){
      $("#intro").hide();
      $("#petIndex").show();
    }

  $("#Tamagotchi").submit(function() {
      pet = new Tamagotchi($('#name').val());
      $("#intro").hide();
      $("#petIndex").hide();
      $("#petLife").show();

      if (refreshIntervalId) {
        clearInterval(refreshIntervalId);
      }

      refreshIntervalId = setInterval(function(){
        refreshGameForm();
      }, 1000);
    }

    $("#feed").click(function(){
      pet.feed();
      refreshGameForm();
    });

    $("#play").click(function(){
      pet.play();
      refreshGameForm();
    });

    $("#rest").click(function(){
      pet.rest();
      refreshGameForm();
    });
  });
});

function refreshGameForm() {
  if(pet.didYourPetDie()) {
    if (refreshIntervalId) {
      clearInterval(refreshIntervalId);
    }

    $('#petDie').text(`Sorry... Your pet ${pet.name} vanished. Your pet deserves a better home!`);
  }
  else {
    $('#petName').text(pet.name);
    $('#foodLevel').text(pet.foodLevel);
    $('#happinessLevel').text(pet.happinessLevel);
    $('#restLevel').text(pet.restLevel);
  }
}
