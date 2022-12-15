import { render } from '@testing-library/react';
import CommentCard from "../commentCard/CommentCard";

let getByTestId

beforeEach(() =>{
    const component = render(<CommentCard/>)
    getByTestId = component.getByTestId
})


test('btnCard render with correct text SEND!', () => {
    expect(getByTestId('btnSendCard').textContent).toBe('Send')
})

