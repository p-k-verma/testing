import { beforeEach, expect, it, vi } from "vitest";
import fs from "fs"
import { showError } from "./dom";
import path from "path";
import {Window } from "happy-dom"

//& in the frontend we don't use the real dom bcoz it creates the sideeffects and it don't have the document object access so we creates the virtual browser(not virtual dom). and here we can access the node api(fs and path) in test file

//cwd means the current working directory
const htmlDocPath = path.join(process.cwd(), "index.html")
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString()

const window = new Window()
const document = window.document
vi.stubGlobal('document',document)

beforeEach(()=>{
    document.body.innerHTML = ''
    document.write(htmlDocumentContent)
})

it('should add an error paragraph to the id="errors" element',()=>{
    showError('test')

    const errorsEl = document.getElementById('errors')
    const errorParagraph = errorsEl.firstChild

    expect(errorParagraph).not.toBeNull()
})

it('should add an error paragraph to the id="errors" element',()=>{
    const errorsEl = document.getElementById('errors')
    const errorParagraph = errorsEl.firstChild

    expect(errorParagraph).toBeNull()
})

it('should output the provided message in the error paragraph', ()=>{
    const testErrorMessage = 'Test'

    showError(testErrorMessage)

    const errorsEl = document.getElementById('errors')
    const errorParagraph = errorsEl.firstElementChild

    expect(errorParagraph.textContent).toBe(testErrorMessage)
})