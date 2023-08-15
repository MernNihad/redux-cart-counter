import { createSlice } from "@reduxjs/toolkit";


const counter = createSlice({
    initialState:{
        count : 0,
        cartList:[]
    },
    name:'counter',
    reducers:{
        incrementFunction:(state,action)=>{
            console.log(action.payload,'action');
            state.cartList.find((item)=> {
                if(item.id === action.payload){
                    return state.cartList.push(item.count++)
                }else{
                    state.cartList.push({id:action.payload,counter:1})
                }
            }  )
        },
        decrementFunction:(state,action)=>{
            state.count --
        }
    }
})


export const { decrementFunction,incrementFunction  } = counter.actions;

export default counter.reducer;