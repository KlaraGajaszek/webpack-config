import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { showModal } from '../../../store/actions/setModalState'
import { ModalName } from '../../../modals/modalNames'
import { Button } from '../../atoms/FormButton/Button'
import logo from '../../../assests/logo.png'

export const Header = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleClick = (route: string) => {
        history.push(route)
    }

    const data = {
        modal: ModalName.ADD_PRODUCT_FORM as ModalName.ADD_PRODUCT_FORM,
        payload: { name: 'test' },
    }

    return (
        <div className="flex items-center justify-between px-12 h-20 ring-1 ring-pink-500 bg-pink-50">
            <button onClick={() => handleClick('/')}>
                <img className="h-16 w-18 z-10" src={logo} />
            </button>

            <div className="flex">
                <div className="mr-5">
                    <Button
                        content="Add product"
                        size="sm"
                        textColor="white"
                        bgColor="gray-500"
                        onClick={() => {
                            dispatch(showModal(data))
                        }}
                    />
                </div>
                <div className="">
                    <Button
                        content="Sign in"
                        size="sm"
                        textColor="white"
                        bgColor="gray-500"
                        onClick={() => handleClick('/signin')}
                    />
                </div>
            </div>
        </div>
    )
}
