const app = Vue.createApp({
  data() {
    return {
      myName: "Emanuel",
      myAge: 32,
      myUrl:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFsDLYljhIIww/profile-displayphoto-shrink_200_200/0/1582735224966?e=1615420800&v=beta&t=v3ySgThm8rxmj7tIyvYRwNjxNeMJzatU4i-BzSaKCpw",
    };
  },
  methods: {
    myAgePlusFive() {
      return this.myAge + 5;
    },
    getRandomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
