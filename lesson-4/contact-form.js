new Vue({
  el: '#contact-form',
  data: {
    cities: [],
    inputFocused: false,
    name: "",
    email: "",
    phone: "",
    cityName: "",
    nameValError: "",
    phoneValError: "",
    emailValError: "",
    messageClass: "",
    messageText: ""
  },
  methods: {
    validateForm: function () {
      if (/[^a-z^A-Z]/.test(this.name) || this.name == "") {
        throw Error('Enter correct name');
      };
      if (!/^\+\d\(\d{3}\)\d{3}\-\d{4}$/.test(this.phone) || this.phone == "") {
        throw Error('Enter correct phone');
      };
      if (!/^\w{2,}(\.\w{2,})?(\-\w{2,})?\@[a-zA-Z_]{2,}\.[a-zA-Z]{2,}$/.test(this.email) || this.email == "") {
        throw Error('Enter correct email');
      }
    },
    validate: function () {
      this.nameValError = "";
      this.phoneValError = "";
      this.emailValError = "";
      try {
        this.validateForm();
        this.messageClass = "alert alert-success";
        this.messageText = "Success!";
        setTimeout(() => {
          this.messageClass = "";
          this.messageText = "";
        }, 5000);
      } catch (err) {
        if (err.message.indexOf("name") > 0) {
          this.nameValError = "error";
        } else if (err.message.indexOf("phone") > 0) {
          this.phoneValError = "error";
        } else if (err.message.indexOf("email") > 0) {
          this.emailValError = "error";
        }
        this.messageClass = "alert alert-danger";
        this.messageText = err.message;
        setTimeout(() => {
          this.messageClass = "";
          this.messageText = "";
        }, 5000);
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
      fetch(`https://api.teleport.org/api/cities/?search=${this.cityName}`).then(res => {
        return res.json();
      }).then(data => {
        this.cities = data._embedded["city:search-results"];
      });
      if (this.inputFocused == false) {
        this.inputFocused = true;
      }
    },
    choiceTheCity: function(city) {
      this.cityName = city;
      this.inputFocused = false;
    },
  }
});