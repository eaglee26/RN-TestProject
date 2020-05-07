import { ADD_ID, REMOVE_ID } from './types';

export const addItem = (data) => {
    return {
        type: ADD_ID,
        payload: data,
    }
};

export const removeItem = (data) => {
    return {
        type: REMOVE_ID,
        payload: data,
    }
};