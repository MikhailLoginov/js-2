new Vue({
  el: "#app",
  data: {
    baseUrl: "http://89.108.65.123:8080/",
    products: [
      {
        product_id: "_iphone",
        name: 'iPhone',
        price: '1200$'
      },
      {
        product_id: "_samsung",
        name: 'Samsung',
        price: '1000$'
      },
      {
        product_id: "_nokia",
        name: 'Nokia',
        price: "300$"
      }
    ],
    cart: [],
    text: ""
  },
  asyncComputed: {
    user_id: async function() {
      let user_id = "";
      await fetch(`${this.baseUrl}shop`).then((res) => {
        res.json().then(res => {
          user_id = res.user_id;
        });
      });
      return user_id;
    },
    comments: async function() {
      let comments = [];
      await fetch(`${this.baseUrl}comments`).then(res => {
        res.json().then(res => {
          comments = res;
        });
      });
      return comments;
    } 
  },
  methods: {
    addToCart: function(product) {
      fetch(`${this.baseUrl}shop?user_id=${this.user_id}&product=${product.name}&price=${product.price}`,{
        method: "POST"
      }).then(res => {
        res.json().then(res => {
          this.getCart();
        });
      });
    },
    getCart: function() {
      fetch(`${this.baseUrl}shop?user_id=${this.user_id}`,{
        method: "GET"
      }).then(res => {
        res.json().then(res => {
          this.cart = res.cart;
        });
      });
    },
    discard: function(product) {
      fetch(`${this.baseUrl}shop?user_id=${this.user_id}&product_id=${product.product_id}`,{
        method: "DELETE"
      }).then(res => {
        res.json().then(res => {
          this.cart = res.cart;
        })
      });
    },
    refreshComments: function() {
      fetch(`${this.baseUrl}comments`).then(res => {
        res.json().then(res => {
          this.comments = res;
        });
      });  
    },
    addComment: async function(text) {
      await fetch(`${this.baseUrl}comments?text=${text}`, {
        method: "POST"
      });
      await this.refreshComments();
    },
    likeComment: async function(comment) {
      await fetch(`${this.baseUrl}comments?comment_id=${comment.comment_id}`, {
        method: "PATCH"
      });
      await this.refreshComments();
    },
    deleteComment: async function(comment) {
      await fetch(`${this.baseUrl}comments?comment_id=${comment.comment_id}`, {
        method: "DELETE"
      });
      await this.refreshComments();
    }
  }
});