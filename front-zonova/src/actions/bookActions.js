import axios from 'axios';
import { GET_BOOKS, BOOKS_LOADING } from './types';

export const getBooks = () => dispatch => {
  dispatch(setBooksLoading());
  
  axios.get('http://localhost:8080/book.json').then(res =>{
    dispatch({
      type: GET_BOOKS,
      payload: res.data
    })
     //console.log(res.data);
    
  }
  );
};

export const setBooksLoading = () => {
  return {
    type: BOOKS_LOADING
  };
};
