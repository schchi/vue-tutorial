
// import Vue from 'vue'
// import App from './App.vue'
// //import Ninjas from './Ninjas.vue'
//
// //Vue.component('ninjas', Ninjas);
//
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
//   el:'#vue-app',
//   data: {
//     output:'Your fav food'
//   },
//   methods: {
//     readRefs: function(){
//       console.log(this.$refs.test.innerText);
//       this.output = this.$refs.input.value;
//     }
//   }
// })

// Vue.component('greeting',{
//   template:'<p>Hey there.I am {{ name }} . <button v-on:click="changeName">Change name</button></p>',
//   data: function(){
//     return {
//       name:'Yoshi'
//     }
//   },
//   methods:{
//     changeName:function(){
//       this.name = 'Mario';
//     }
//   }
// });
//
// new Vue({
//   el:'#vue-app-one'
// });
//
// new Vue({
//   el:'#vue-app-two'
// });

//
// var one = new Vue({
//   el:'#vue-app-one',
//   data: {
//     title:'Vue App One'
//   },
//
//   methods: {
//
//   },
//
//   computed:{
//     greet: function(){
//       return 'Hello from app one :)';
//     }
//   }
// });
//
// var two = new Vue({
//   el:'#vue-app-two',
//   data: {
//     title:'Vue App Two'
//   },
//
//   methods: {
//     changeTitle: function(){
//       one.title = "Title changed."
//     }
//   },
//
//   computed:{
//     greet: function(){
//       return 'This is app 2 speakin to ya';
//     }
//   }
// })
//
// two.title = "Changed from outide";
//
//
// // new Vue({
// //   el:'#vue-app',
// //   data: {
// //     health: 100,
// //     ended: false
// //     // characters: ['Mario','Luigi','Yoshi','Bowser'],
// //     // ninjas:[
// //     //   {name:'Ryu', age:25},
// //     //   {name:'Yoshi', age:35},
// //     //   {name: 'Ken', age: 55}
// //     // ]
// //
// //     // error:false,
// //     // success:false
// //
// //     // available:false,
// //     // nearby:false,
// //
// //     // age:20,
// //     // a:0,
// //     // b:0
// //
// //     // name:'',
// //     // age:''
// //     // age: 25,
// //     // x: 0,
// //     // y: 0
// //
// //   //   name: 'Shaun',
// //   //   job: 'Ninja',
// //   //   website: 'https://www.google.com/',
// //   //   websiteTag:'<a href="https://www.google.com/"> The Google Website </a>'
// //   },
// //   methods: {
// //     punch: function(){
// //       this.health -=10;
// //       if (this.health <= 0){
// //         this.ended = true;
// //       }
// //     },
// //     restart: function(){
// //       this.health =100;
// //       this.ended=false;
// //     }
// //
// //     // addtoA: function(){
// //     //   console.log('addtoA')
// //     //   return this.a + this.age;
// //     // },
// //     // addtoB: function(){
// //     //   console.log('addtoB')
// //     //   return this.b + this.age;
// //     // }
// //     // logName: function(){
// //     //   console.log('you entered your name');
// //     // },
// //     // logAge: function(){
// //     //   console.log('you entered your age');
// //     // },
// //
// //     // add: function(inc){
// //     //   this.age += inc;
// //     // },
// //     // subtract: function(dec){
// //     //   this.age -= dec;
// //     // },
// //     // updateXY: function(event){
// //     //   this.x = event.offsetX;
// //     //   this.y = event.offsetY;
// //     //   // console.log(event);
// //     // },
// //     // click: function(){
// //     //   alert('You clicked me!');
// //     // }
// //
// //   //   greet:function(time) {
// //   //       return 'Good' + time + this.name;
// //   //   }
// //   },
// //   computed: {
// //
// //
// //     // compClasses:function(){
// //     //   return {
// //     //     available: this.available,
// //     //     nearby: this.nearby
// //     //   }
// //     // }
// //
// //     // addtoA: function(){
// //     //   console.log('addtoA')
// //     //   return this.a + this.age;
// //     // },
// //     // addtoB: function(){
// //     //   console.log('addtoB')
// //     //   return this.b + this.age;
// //     // }
// //   }
// // });
