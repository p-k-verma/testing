import { it, expect } from "vitest";  // we can use the test or it, both are same
import { add } from "./math";


//* Test 1
it("should summarise all number values in an array", () => {
  //& Arrange   basically input
  const numbers = [1, 2, 3];
  
  //& Act  basically machine
  const result = add(numbers); // Try to make the expect to be more dynamic

  //& Assert   basically output
  const expectedResult = numbers.reduce((prevValue, curValue)=> prevValue + curValue, 0)
  expect(result).toBe(expectedResult);  // Try to make the expect to be more dynamic
});

//* Test 2
it('should yield NaN if at least one invalid number is provided', ()=>{
    const inputs  = ['invalid', 1]

    const result = add(inputs)

    expect(result).toBeNaN       //& here we don't need NaN as separate, we have NaN function
})


//* Test 3
it('should yield a correct sum if an array of numeric string values is provided', ()=>{
    const numbers = ['1', '2']

    const result = add(numbers)

    const expectedResult = numbers.reduce((prevValue, curValue)=> +prevValue + +curValue, 0)

    expect(result).toBe(expectedResult)

})

//* Test 4
it('should yield 0 if an empty array is passed', ()=>{
    const numbers  = []

    const result = add(numbers)

    expect(result).toBe(0)
    //& expect(result).not.toBe(0) we can use the not as mentioned
})

//* Test 5
it('should throw an error if no value is passed into the function', ()=>{
    //& The vite has the its try catch block and throws error, we don't need to write the try catch we can use toThrow

    const resultFn = ()=>{ 
        add() 
    }

    expect(resultFn).toThrow()  //& Here toThrow means function is throwing the error or not, we are checking it here
    
})

//* Test 6
it('should throw an error if provided with multiple arguments instead of array', ()=>{
    const num1 = 1;
    const num2 = 1;

    const resultFn = ()=>{
        add(num1, num2)
    }

    expect(resultFn).toThrow(/is not iterable/)   //& in toThrow we can also specify the the type of error to throw while testing
})