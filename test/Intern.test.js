
const Intern = require("../lib/Intern");

test("Generate object for Intern", () => {
  const intern = new Intern(
    "David Vallejo",
    80,
    "adrian.vallejo94@gmail.com",
    "UANL"
  );
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.getRole()).toEqual("Intern");
});