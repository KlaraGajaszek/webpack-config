import React from 'react'
import { render } from '@testing-library/react'
import { Formik, Form } from 'formik'

import { InputDefault } from '../Input'

// const wrapper = ({ children }) => (
//   <Formik
//     initialValues={{
//       name: '',
//       description: '',
//       image: '',
//       tags: [''],
//       price: '',
//     }}
//   >
//     <Form>{children}</Form>
//   </Formik>
// )

describe('Input', () => {
  // it('render without crash', () => {
  //   render(<InputDefault name="description" />, { wrapper })
  // })
  // it('called change event without crash', () => {
  //   const onChange = jest.fn();
  //   render(<InputDefault name="description" onChange={onChange} />, {
  //     wrapper,
  //   });
  //   const input = screen.getByTestId('fieldID');
  //   expect(input).toBeInTheDocument();
  //   userEvent.type(input, 'test');
  //   expect(onChange).toHaveBeenCalledWith('test');
  // });
})
