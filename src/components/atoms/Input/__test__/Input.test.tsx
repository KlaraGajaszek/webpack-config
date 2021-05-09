import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Formik, Form } from 'formik'

import { InputDefault } from '../Input'

const wrapper = ({ children }: any) => (
    <Formik
        onSubmit={() => console.log('test')}
        initialValues={{
            name: '',
            description: '',
            image: '',
            tags: [''],
            price: '',
        }}
    >
        <Form>{children}</Form>
    </Formik>
)

describe('Input', () => {
    it('render without crash', () => {
        render(
            <InputDefault
                placeholder="description"
                radius="5px"
                width="5px"
                name="description"
            />,
            { wrapper }
        )
    })
    // it('called change event without crash', () => {
    //     const onChange = jest.fn()
    //     render(<InputDefault name="description" onChange={onChange} />, {
    //         wrapper,
    //     })
    //     const input = screen.getByTestId('fieldID')
    //     expect(input).toBeInTheDocument()
    //     userEvent.type(input, 'test')
    //     expect(onChange).toHaveBeenCalledWith('test')
    // })
})
