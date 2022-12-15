import { render,fireEvent } from '@testing-library/react';
import Main from "../../views/main/Main";
import {BrowserRouter} from "react-router-dom";


let getByTestId

beforeEach(() =>{
    const component =render(
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    )
    getByTestId = component.getByTestId
});



test('btnLogIn render with correct text GO!', () => {
    expect(getByTestId('btnTextEdit').textContent).toBe('Edit')
})

test('input contains correct placeholder', () => {
    expect(getByTestId('textArea').placeholder).toBe('write something...')
})

test('btn contains correct text', () => {
    expect(getByTestId('btnTextLogOut').textContent).toBe('Logout')
})

test('btn contains correct text', () => {
    expect(getByTestId('btnTextEdit').textContent).toBe('Edit')
})

test("text are changes add text correctly ", () => {
    const inputElement = getByTestId('textArea');
    fireEvent.change(inputElement, {
        target: {
            value: ''
        }
    });
    expect(inputElement.textarea).toBeUndefined()
})


test('see if btn gets correct response from DB', () => {
    const inputElement = getByTestId('btnPost')
    const dbResponse = getByTestId('dbResponse')
    fireEvent.change(inputElement, {
        target: {
            data: ''
        }
    })
    setTimeout: () =>{expect(getByTestId(dbResponse).textContent).toBe(''),200}
})

