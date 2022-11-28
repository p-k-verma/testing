import { expect, it, vi } from "vitest";
import { promises as fs } from 'fs';
import writeData from "./io";

vi.mock('fs')  //& in the mock testing, in which we replace the built-in module all functions with the empty function. basicallly check the module function called or not
vi.mock('path', ()=>{   //& in this we are replacing the single function ie 'Join' of path module to empty function
    return {
        default: {
            join: (...args)=>{
                return args[args.length -1]
            }
        }
    }
}) 

it('should return a promise that resolves to no values if called correctly', ()=>{
    const testData = 'test'
    const testFilename = 'text.txt'

    writeData(testData, testFilename)
    return expect(writeData(testData, testFilename)).resolves.toBeUndefined()
    // expect(fs.writeFile).toBeCalled()
    // expect(fs.writeFile).toBeCalledWith(testFilename, testData)
})

it('should execute the writefile method', ()=>{
    const testData = 'test'
    const testFilename = 'text.txt'

    writeData(testData, testFilename)
    // return expect(writeData(testData, testFilename)).resolves.toBeUndefined()
    // expect(fs.writeFile).toBeCalled()
    expect(fs.writeFile).toBeCalledWith(testFilename, testData)
})