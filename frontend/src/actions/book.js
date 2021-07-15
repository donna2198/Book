import * as api from '../api/index.js';

export const getBook = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBook();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createBook = (post) => async (dispatch) => {
  try {
    const { data } = await api.createBook(post);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateBook = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateBook(id, post);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteBook = (id) => async (dispatch) => {
  try {
    await api.deleteBook(id);

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error.message);
  }
};