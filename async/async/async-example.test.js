import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it('should ganerate a valid token', (done)=>{   //& done parameter is used to call the function when you're done in testing the code because vitest & jest don not wait for any inner callback function to finish. so whether test passed or failed it will pass the test
    const testUserEmail = 'test@test.com'
    generateToken(testUserEmail, (err, token)=>{
        try {
            expect(token).toBeDefined()
            // expect(token).toBe(2)
            done() 
        } catch (error) {
            done(error)
        }
    })
})

//& below are the two methods which we use to resolve the promise for checking the code
it('should generate a token value', ()=>{
    const testUserEmail = "test@test.com"

    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined()
})

it('should generate a token value', async()=>{
    const testUserEmail = "test@test.com"

    const token = await generateTokenPromise(testUserEmail)

    expect(token).toBeDefined()
})