function observes() {
  console.log("decorator invoked :-)");
}

class TestClass {
  @observes("state")
  doSomething() {
    console.log("You did something");
  }
}

console.log(TestClass);
