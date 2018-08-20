new Vue({
  el: '#contact-form',
  data: {
    cities: [],
    inputFocused: false
  },
  methods: {
    validateForm: function () {
      const name = document.querySelector('#name').value,
        phone = document.querySelector('#phone').value,
        email = document.querySelector('#email').value;
      if (/[^a-z^A-Z]/.test(name) || name == "") {
        throw Error('Enter correct name');
      };
      if (!/^\+\d\(\d{3}\)\d{3}\-\d{4}$/.test(phone) || phone == "") {
        throw Error('Enter correct phone');
      };
      if (!/^\w{2,}(\.\w{2,})?(\-\w{2,})?\@[a-zA-Z_]{2,}\.[a-zA-Z]{2,}$/.test(email) || email == "") {
        throw Error('Enter correct email');
      }
    },
    validate: function () {
      document.querySelector('#name').style.border = "1px solid #ced4da";
      document.querySelector('#phone').style.border = "1px solid #ced4da";
      document.querySelector('#email').style.border = "1px solid #ced4da";
      try {
        this.validateForm();
        let message = document.createElement('div');
        message.className = `alert alert-success`;
        message.innerText = "Success!";
        document.body.insertBefore(message, document.querySelector('script'));
        setTimeout(() => message.remove(), 5000);
      } catch (err) {
        if (err.message.indexOf("name") > 0) {
          document.querySelector('#name').style.border = "1px solid red";
        } else if (err.message.indexOf("phone") > 0) {
          document.querySelector('#phone').style.border = "1px solid red";
        } else if (err.message.indexOf("email") > 0) {
          document.querySelector('#email').style.border = "1px solid red";
        }
        let message = document.createElement('div');
        message.className = `alert alert-danger`;
        message.innerText = err;
        document.body.insertBefore(message, document.querySelector('script'));
        setTimeout(() => message.remove(), 5000);
      }
    },
    openDropdown: function () {
      if (this.inputFocused == false) {
        fetch('https://api.teleport.org/api/cities/').then(res => {
          return res.json();
        }).then(data => {
          this.cities = data._embedded["city:search-results"];
        });
        this.inputFocused = true;
      } else {
        this.inputFocused = false;
      }
    },
    searchCities: function () {
      let value = document.querySelector('input[aria-label="Text input with dropdown button"]').value;
      fetch(`https://api.teleport.org/api/cities/?search=${value}`).then(res => {
        return res.json();
      }).then(data => {
        this.cities = data._embedded["city:search-results"];
      });
      if (this.inputFocused == false) {
        this.inputFocused = true;
      }
    },
    choiceTheCity: function(city) {
      document.querySelector('input[aria-label="Text input with dropdown button"]').value = city;
    },
    
  }
});