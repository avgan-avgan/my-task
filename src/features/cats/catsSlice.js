import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'cats',
  initialState: {
    value: 0,
    catsId: 1,
    cats: [],
    categories: [],
    moreCats: []
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    getCats: (state, action)=>{
      // console.log(action)
      state.cats = action.payload
    },
    getCategories: (state, action)=>{
      // console.log(action)
      state.categories = action.payload
    },
    getMoreCats: (state, action)=>{
      console.log(action)
      state.moreCats = action.payload
    }
  },
});

export const { getCats, getCategories, getMoreCats } = slice.actions;

export const fetchCats = data =>dispatch=>{
  dispatch(getCats(data))
}

export const fetchCategories = data => dispatch => {
  dispatch(getCategories(data))
}

export const fetchMoreCats = data => dispatch => {
  dispatch(getMoreCats(data))
}

export const selectCount = state => state.cats.value;

export const selectCats = state=> state.cats.cats

export const selectCategories = state => state.cats.categories

export const selectMoreCats = state => state.cats.moreCats

export default slice.reducer;
