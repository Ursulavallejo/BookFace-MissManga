import {fireEvent, render} from '@testing-library/react';
import EditMessage from "../editMessage/EditMessage";

let getByTestId

beforeEach(() =>{
    const component = render(<EditMessage/>)
    getByTestId = component.getByTestId
})

test('InputMessage render with correct text to Edit Post', () => {
    expect(getByTestId('inputEditMessage').textContent).toBe('Edit your post:')
})

test("change text area of message works correctly ", () => {
    const inputElement = getByTestId('textAreaEdit');
    fireEvent.change(inputElement, {
        target: {
            value: ''
        }
    });
    expect(inputElement.placeholder).toBe('')
})

test('btn update render with correct text Done', () => {
    expect(getByTestId('btnUpdateMessage').textContent).toBe('Done')
})

