const Engineer = require("../lib/Engineer");

test("Creates new Engineer Object", () => {
  const employee = new Engineer(
    "David Vallejo",
    80,
    "Vallejo1194"
  );

  expect(employee.name).toBe("David Vallejo");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.github).toEqual(expect.any(String));
});

test("Checks all methods for Engineer class", () => {
  const employee = new Engineer(
    "David Vallejo",
    80,
    "Vallejo1194"
  );

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getid()).toBe(employee.id);
  expect(employee.getGithub()).toBe(employee.github_username);
  expect(employee.getRole()).toBe("Engineer");
});