import React from 'react';
import {render} from "@testing-library/react"
import AddNew from "../addNew"

it('should add new products',()=>{
    const mockAddProduct = jest.fn()
    const {debug}=render(<AddNew addproduct={mockAddProduct}/>)
    debug()
})

