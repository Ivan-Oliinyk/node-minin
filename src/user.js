console.log("=== user!!! ====");

const user = {
  name: "Elena",
  age: 25,
};

console.log("user.elena", user);

module.exports = {
  user,
  sayHEllo() {
    console.log(`Hellow ${this.user.name}`);
  },
};
