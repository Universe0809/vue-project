const vm = Vue.createApp({
  data() {
    return {
      firstName: "Minh",
      lastName: "Eriksen",
      url: "https://google.com",
      age: 23,
      purple: true,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
  },
  computed: {
    circle_classes() {
      return { purple: this.purple };
    },
  },
}).mount("#app");
