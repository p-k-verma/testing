import { it, expect, beforeAll, beforeEach, afterEach, afterAll } from "vitest";

//  beforeAll, beforeEach, afterEach, afterAll are the built in hooks of vitest, and works as per name

import { User } from "./hooks";
const testEmail = "test@test.com";
let user = new User(testEmail);

beforeAll(()=>{ console.log("beforeall") })
beforeEach(()=>{ console.log("beforeeach") })
afterEach(()=>{ 
  console.log("aftereach") 
  user = new User(testEmail);
})
afterAll(()=>{ console.log("afterall") })

it.concurrent("should update the email", () => {  //& concurrent is used to make test a bit faster because if we add this tag means this test will run in parallel so the test become a bit faster.  we can use the concurrent along with the describe
  const newTestEmail = "test2@test.com";

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

it("should store the provided email value", () => {
  expect(user.email).toBe(testEmail);
});

it("should clear the email", () => {
  user.clearEmail();

  expect(user.email).toBe("");
});

it("should still have an email property after clearing the email", () => {
  user.clearEmail();

  expect(user).toHaveProperty("email");
});
