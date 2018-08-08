function CoffeeMachine(power) {
  const maxTemp = 90,
        waterHeatCapacity = 2000,
        waterLimit = 1500,
        coffeeGrainsLimit = 100,
        waterForACupOfCoffee = 50,
        coffeeGrainsForACupOfCoffee = 10;
  let waterAmount = 0,
      coffeeGrainsAmount = 0,
      progressTimer,
      boilingIsInProgress = false;

  /**
   * Adds water to a coffee machine
   * @param newAmount amount of water in milliliters
   * that you want to add into the machine
   * @throws custom error in case of not enough room
   * for water that you want to add or in case of not 
   * correct input
  */
  this.addWater = function (newAmount) {
    if ((typeof newAmount != "number") || newAmount <= 0 || isNaN(newAmount)) {
      throw Error('Enter correct number!')
    } else if (waterAmount + newAmount > waterLimit) {
      throw Error('Coffee machine has no room for too much water')
    } else {
      waterAmount += newAmount;
    }
  };

  /**
   * A method returns amount of water in percents that left in
   * a coffee machine at this moment
   * @return a number in percents
  */
  this.getWaterPercents = function () {
    return waterAmount / waterLimit * 100;
  };

  /**
   * Adds coffee grains to a coffee machine
   * @param newAmount amount of coffee grains in milliliters
   * that you want to add into the machine
   * @throws custom error in case of not enough room
   * for coffee grains that you want to add
  */
  this.addCoffeeGrains = function (newAmount) {
    if ((typeof newAmount != "number") || newAmount <= 0 || isNaN(newAmount)) {
      throw Error('Enter correct number!')
    } else if (coffeeGrainsAmount + newAmount > coffeeGrainsLimit) {
      throw Error('Coffee machine has no room for too much coffee grains')
    } else {
      coffeeGrainsAmount += newAmount;
    }
  };

  /**
   * A method returns amount of coffee grains in percents that left in
   * a coffee machine at this moment
   * @return a number in percents
  */
  this.getCoffeeGrainsPercents = function () {
    return coffeeGrainsAmount / coffeeGrainsLimit * 100;
  };

  /**
   * A method returns a time to make a coffee
   * @return a number in milliseconds
  */
  this.getBoilTime = function () {
    return (waterAmount * waterHeatCapacity * maxTemp) / power;
  };

  /**
   * Starts a process of making a cup of coffee
   * @throws errors in case of coffee being already made 
   * at this moment and in case of not enought water /
   * coffee grains
  */
  this.launch = function () {
    if (boilingIsInProgress) {
      throw Error('Wait! Coffee is already being made at this moment!')
    } else if (waterAmount < waterForACupOfCoffee) {
      throw Error('Not enough water');
    } else if (coffeeGrainsAmount < coffeeGrainsForACupOfCoffee) {
      throw Error('Not enough coffee grains');
    } else {
      boilingIsInProgress = true;
      progressTimer = setTimeout(function() {
        waterAmount -= waterForACupOfCoffee;
        coffeeGrainsAmount -= coffeeGrainsForACupOfCoffee;
        boilingIsInProgress = false;
        console.log('Coffee is ready!')
      }, this.getBoilTime());
    }
  };

  /**
   * Stops a process of making a cup of coffee
   * @throws error in case there is no coffee being made
   * at this moment
  */
  this.stop = function() {
    if (!boilingIsInProgress) {
      throw Error('There is no coffee being made at this moment');
    } else {
      clearTimeout(progressTimer);
      boilingIsInProgress = false;
    }
  }
}


coffeeMachineFrontend = function() {

  let machine = new CoffeeMachine(3500),
      progressTimer,
      successTimer;

  /** 
   * Appends a visual message into your HTML page
   * @param whereToAppend HTML Selector of place, after which you want
   * to append your message
   * @param messageText text inside your message
   * @param messageType recieves "danger" or "success" and changes color
   * of your message / background; "success" is a default value
  */
  renderMessage = function(whereToAppend, messageText, messageType) {
    messageType = messageType == "danger" ? "danger" : "success"; 
    let message = document.createElement('div');
    message.className = `alert alert-${messageType}`;
    message.innerText = messageText;
    document.querySelector(whereToAppend).append(message);
    setTimeout(() => message.remove(), 5000);
  }

  /** 
   * ProgressBars universal refresher
   * @param progressBarName
   * "water" or "coffee grains"
   * refreshing a respectful bar;
   * in case of no or wrong params - refreshing both bars
  */
  refreshProgressBar = function(progressBarName) {
    if (progressBarName == "water") {
      let progressBar = document.querySelector('.water-progressbar');
      progressBar.style.width = `${machine.getWaterPercents()}%`;
      progressBar.innerHTML = `${Math.floor(machine.getWaterPercents())}%`;
    } else if (progressBarName == "coffee grains") {
      let progressBar = document.querySelector('.coffeegrains-progressbar');
      progressBar.style.width = `${machine.getCoffeeGrainsPercents()}%`;
      progressBar.innerHTML = `${Math.floor(machine.getCoffeeGrainsPercents())}%`;
    } else {
      let progressBar = document.querySelector('.water-progressbar');
      progressBar.style.width = `${machine.getWaterPercents()}%`;
      progressBar.innerHTML = `${Math.floor(machine.getWaterPercents())}%`;
      progressBar = document.querySelector('.coffeegrains-progressbar');
      progressBar.style.width = `${machine.getCoffeeGrainsPercents()}%`;
      progressBar.innerHTML = `${Math.floor(machine.getCoffeeGrainsPercents())}%`;
    }
  }

  // "Add Water" button onclick handler
  document.querySelector('#addWaterBtn').addEventListener('click', () => {
    let waterAmount = +document.querySelector('input[aria-label="waterAmount"]').value;
    try {
      machine.addWater(waterAmount);
      renderMessage('.water-input-form', "Water added successfully!", "success");
      refreshProgressBar("water");
    } catch(err) {
      renderMessage('.water-input-form', err, "danger");
    }
  });

  // "Add Coffee Grains" button onclick handler
  document.querySelector('#addCoffeeGrainsBtn').addEventListener('click', () => {
    let coffeeGrainsAmount = +document.querySelector('input[aria-label="coffeeGrainsAmount"]').value;
    try {
      machine.addCoffeeGrains(coffeeGrainsAmount);
      renderMessage('.coffee-grains-input-form', "Coffee grains added successfully!", "success");
      refreshProgressBar("coffee grains");
    } catch(err) {
      renderMessage('.coffee-grains-input-form', err, "danger");
    }
  });

  // "Make Coffee" button onclick handler
  document.querySelector('#makeCoffee').addEventListener('click', () => {
    try {
      machine.launch();
      let controlForm = document.querySelector('#controls');
      let successHtml = document.createElement('div');
      successHtml.className = "alert alert-success";

      // A countdown of making a coffee
      let boilTime = machine.getBoilTime()/1000;
      progressTimer = setInterval(() => {
        boilTime -= 0.1;
        successHtml.innerText = `Your coffee is being made... It will be ready in ${boilTime.toFixed(1)} s`;
      }, 100);
      controlForm.append(successHtml);
      successTimer = setTimeout(() => {
        successHtml.remove();
        renderMessage('#controls', "Enjoy your coffee!", "success");
        refreshProgressBar();
      }, machine.getBoilTime());
    } catch (err) {
      renderMessage('#controls', err, "danger");
    }
  });

  // "Stop" button onclick handler
  document.querySelector('#stop').addEventListener('click', () => {
    try {
      machine.stop();
      clearTimeout(progressTimer);
      clearTimeout(successTimer);
      Array.from(document.getElementsByClassName('alert')).forEach( elem => elem.remove());
      renderMessage('#controls', "Operation canceled", "danger");
    } catch (err) {
      renderMessage('#controls', err, "danger");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  coffeeMachineFrontend();
});
