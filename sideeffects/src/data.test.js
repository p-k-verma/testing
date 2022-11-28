import { describe, expect, it, vi } from "vitest";
import {generateReportData} from './data'

describe('generateReportData()', ()=>{
    it('should execute logFn if provided', ()=>{
        const logger = vi.fn()    //& vi.fn() is the spy function which helps to test logger(or can say logFn in data.js) function is called or not. spy function checks whether something was called or not
                                    //& spies is generally empty function, but we can pass any function in it

        //logger.mockImplementationOnce(()=>{})  //& this the case where we implement mock in particular and particluar case and one time
        generateReportData(logger)
        expect(logger).toBeCalled()
    })
})