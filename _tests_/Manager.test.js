const Manager = require("../lib/Manager.js");
const testManager = new Manager("dave", 2, "dave@gmail.com", 1234567890);


test("checks that Manager constructor works", () => {
  expect(testManager.name).toBe("dave");
  expect(testManager.id).toBe(2);
  expect(testManager.email).toBe("dave@gmail.com");
  expect(testManager.officeNum).toBe(1234567890);
});


test("checks that Manager extended getName() method from Employee", () => {
  expect(testManager.getName()).toBe("dave");
});
test("checks that Manager extended getID() method from Employee", () => {
  expect(testManager.getID()).toBe(2);
});
test("checks that Manager extended getEmail() method from Employee", () => {
  expect(testManager.getEmail()).toBe("dave@gmail.com");
});


test("checks that getRole() method works", () => {
  expect(testManager.getRole()).toBe("Manager");
});

test("checks that the getOfficeNum() method works", () => {
  expect(testManager.getOfficeNum()).toBe(1234567890);
});
