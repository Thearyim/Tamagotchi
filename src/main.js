import './styles.css';
import Tamagotchi from './tamagotchi.js';

$(document).ready(function(){
  let pet;

  $("#pickPetKind").submit(function(){
    event.preventDefault();
    var petType = $("#petKind").val();
    if(petType == "puppy" && "kitten" && "fish"){
      pet = new Tamagotchi($('#name').val());
      $("#intro").hide();
    }


    $("#petLife").click(function() {
      pet.setHunger();
      pet.setHappiness();
      pet.setRest();
      $('#petName').text(pet.name);
      $('#foodLevel').text(pet.foodLevel);
      $('#happinessLevel').text(pet.happinessLevel);
      $('#restLevel').text(pet.restLevel);
      setInterval(function(){
        $('#foodLevel').text(pet.foodLevel);
        if(pet.didYourPetDie())
          $('#petDie').text(`Sorry... Your pet ${pet.name} vanished. Your pet deserves a better home!`);
        }, 1000);
      console.log("set name, set intervals");
      console.log(pet);
    });

    $("#feed").click(function(){
      pet.feed();
      $('#foodLevel').text(pet.foodLevel);
      console.log('feed');
      console.log(pet);
    });

  });
});
