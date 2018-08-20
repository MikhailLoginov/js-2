Vue.component('first-tab', { 
	template: '<div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem laborum a tempore sequi adipisci aut libero nobis ullam, exercitationem esse repellat repellendus dignissimos quo vero neque placeat accusantium? Et odio sapiente accusantium culpa quidem veritatis error, minus expedita amet autem beatae labore magni neque aspernatur quo quia consequuntur! Consequatur, ratione?</div>' 
})
Vue.component('second-tab', { 
	template: '<div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem laborum a tempore sequi adipisci aut libero nobis ullam, exercitationem esse repellat repellendus dignissimos quo vero neque placeat accusantium? Et odio sapiente accusantium culpa quidem veritatis error, minus expedita amet autem beatae.</div>' 
})
Vue.component('third-tab', { 
	template: '<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi nemo dicta assumenda adipisci quis commodi id aperiam, ipsum a perspiciatis obcaecati quod dignissimos! Quod alias adipisci ipsum quaerat iusto sit obcaecati voluptate ab fugit aliquid, repudiandae possimus ut ducimus eligendi, quisquam officia ipsam omnis. Maxime sit consectetur non tenetur officiis iure in culpa aspernatur beatae laboriosam, voluptas ducimus sunt.</div>' 
})

new Vue({
  el: '#tab-controller',
  data: {
    currentTab: 'first-tab',
    tabs: ['first-tab', 'second-tab', 'third-tab']
  },
  computed: {
    getText: function () {
      return this.currentTab;
    }
  }
})