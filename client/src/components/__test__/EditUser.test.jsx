import {fireEvent, render} from '@testing-library/react';
import EditMessage from "../editUser/EditUser";

let getByTestId

beforeEach(() =>{
    const component = render(<EditMessage/>)
    getByTestId = component.getByTestId
})


test('Text title render with correct text ', () => {
    expect(getByTestId('editProfile').textContent).toBe('Edit Profile')
})

test('TextPassword title render with correct text ', () => {
    expect(getByTestId('textPassword').textContent).toBe('Password:')
})


test("change text area of message works correctly ", () => {
    const inputElement = getByTestId('inputEditUser');
    fireEvent.change(inputElement, {
        target: {
            value: ''
        }
    });
    expect(inputElement.placeholder).toBe('')
})

test('btn update render with correct text Cancel', () => {
    expect(getByTestId('btnCancel').textContent).toBe('Cancel')
})

test('btn update render with correct text Save', () => {
    expect(getByTestId('btnEditSave').textContent).toBe('Save')
})

test('input contains correct placeholder in password section', () => {
    expect(getByTestId('textInputPassword').placeholder).toBe('*****')
})

