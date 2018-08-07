function CoffeeMachine(power) {
  const maxTemp = 90,
        waterHeatCapacity = 4200,
        waterLimit = 1500,
        coffeeGrainsLimit = 100;
  let waterAmount = 0,
      coffeeGrainsAmount = 0;
  
  this.addWater = function (newAmount) {
    if (waterAmount+newAmount>waterLimit) {
      throw Error('Coffee machine has no room for too much water')
    } else {
      waterAmount += newAmount;
    }
  };

  this.getWaterPercents = function () {
    return waterAmount / waterLimit * 100;
  };

  this.addCoffeeGrains = function (newAmount) {
    if (coffeeGrainsAmount+newAmount>coffeeGrainsLimit) {
      throw Error('Coffee machine has no room for too much coffee grains')
    } else {
      coffeeGrainsAmount += newAmount;
    }
  };

  this.getCoffeeGrainsPercents = function () {
    return coffeeGrainsAmount / coffeeGrainsLimit * 100;
  };

  let calcBoilTime = function () {
    return (waterAmount*waterHeatCapacity*maxTemp)/power;
  };

  // Rework required
  this.launch = function () {
    setTimeout(function() {
      console.log('Кофе готов!')
    }, calcBoilTime());
  };
}

let machine = new CoffeeMachine(3500);
machine.launch();  // Delete it later

document.addEventListener("DOMContentLoaded", () => {

  // Add Water button onclick handler
  document.querySelector('#addWaterBtn').addEventListener('click', () => {
    let waterInput = document.querySelector('input[aria-label="waterAmount"]');
    let waterAmount = +waterInput.value;
    try {
      machine.addWater(waterAmount);

      // Adding an alert block
      let inputForm = document.querySelector('.water-input-form');
      let successHtml = document.createElement('div');
      successHtml.className = "alert alert-success alert-dismissible fade show";
      successHtml.innerText = "Water added successfully!";
      inputForm.append(successHtml);
      setTimeout(() => successHtml.remove(), 5000);

      // Refreshing a progress bar
      let waterProgressBar = document.querySelector('.water-progressbar');
      waterProgressBar.style.width = `${machine.getWaterPercents()}%`;
      waterProgressBar.innerHTML = `${Math.floor(machine.getWaterPercents())}%`;
    } catch(err) {

      // Adding an alert block
      let inputForm = document.querySelector('.water-input-form');
      let errorHtml = document.createElement('div');
      errorHtml.className = "alert alert-danger alert-dismissible fade show";
      errorHtml.innerText = err;
      inputForm.append(errorHtml);
      setTimeout(() => errorHtml.remove(), 5000);
    }
  });

  // Add Coffee Grains button onclick handler
  document.querySelector('#addCoffeeGrainsBtn').addEventListener('click', () => {
    let coffeeGrainsInput = document.querySelector('input[aria-label="coffeeGrainsAmount"]');
    let coffeeGrainsAmount = +coffeeGrainsInput.value;
    try {
      machine.addCoffeeGrains(coffeeGrainsAmount);

      // Adding an alert block
      let inputForm = document.querySelector('.coffee-grains-input-form');
      let successHtml = document.createElement('div');
      successHtml.className = "alert alert-success alert-dismissible fade show";
      successHtml.innerText = "Coffee grains added successfully!";
      inputForm.append(successHtml);
      setTimeout(() => successHtml.remove(), 5000);

      // Refreshing a progress bar
      let coffeeGrainsProgressBar = document.querySelector('.coffeegrains-progressbar');
      coffeeGrainsProgressBar.style.width = `${machine.getCoffeeGrainsPercents()}%`;
      coffeeGrainsProgressBar.innerHTML = `${Math.floor(machine.getCoffeeGrainsPercents())}%`;

    } catch(err) {

      // Adding an alert block
      let inputForm = document.querySelector('.coffee-grains-input-form');
      let errorHtml = document.createElement('div');
      errorHtml.className = "alert alert-danger alert-dismissible fade show";
      errorHtml.innerText = err;
      inputForm.append(errorHtml);
      setTimeout(() => errorHtml.remove(), 5000);
    }
  });
});
