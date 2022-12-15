import {fireEvent, render} from '@testing-library/react';
import LoginPage from "../loginPage/LoginPage";
import {BrowserRouter} from "react-router-dom";


let getByTestId

beforeEach(() =>{
    const component =render(
        <BrowserRouter>
            <LoginPage/>
        </BrowserRouter>
    )
    getByTestId = component.getByTestId
});


test('btnLogIn render with correct text GO!', () => {
    expect(getByTestId('btnLogInTest').textContent).toBe('Go!')
})

test('input contains correct placeholder', () => {
    expect(getByTestId('textUser').placeholder).toBe('Username')
})

test("change input area text works correctly ", () => {
    const inputElement = getByTestId('inputPassword');
    fireEvent.change(inputElement, {
        target: {
            value: 'Password'
        }
    });
    expect(inputElement.placeholder).toBe('Password')
})