import { createSlice } from "@reduxjs/toolkit";


const counter = createSlice({
    initialState: {
        count: 0,
        cartList: []
    },
    name: 'counter',
    reducers: {
        incrementFunction: (state, action) => {
            state.cartList.find((item) => {
                if (item.id === action.payload) {
                    return state.cartList.push(item.count++)
                }
            })
        },
        decrementFunction: (state, action) => {
            state.cartList.find((item) => {
                if (item.id === action.payload) {
                    return state.cartList.push(item.count--)
                }
            })
        },
        addToCart: (state, action) => {
            state.cartList.find((item) => {
                if (item.id === action.payload.id) {
                    return item.count++
                }
            })
            state.cartList.push({ ...action.payload, count: 1 })
        }
    }
})


export const { decrementFunction, incrementFunction, addToCart } = counter.actions;

export default counter.reducer;