const Manager = require("../lib/Manager");

test("generate manager object and gets role of employee", () => {
  const manager = new Manager(
    "David Vallejo",
    80,
    "adrian.vallejo94@gmail.com",
   5432
  );
  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.getRole()).toEqual("Manager");
});