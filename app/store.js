import {createStore } from 'redux'
import { daysInThisMonth } from './utils/helpers'

const days = new Array(daysInThisMonth()).fill({})
const initialState = {}

days.forEach((day, index) => initialState[index] = { title: '' })

export const addEvent = (index, title) => {
  return { type: 'ADD_EVENT', payload: { index, title } }
}

export const deleteEvent = (index) => {
  return { type: 'DELETE_EVENT', payload: index }
}

const reducer = (state, action) => {
  const { type, payload } = action

  switch(type) {
    case 'ADD_EVENT': {
      return {
        ...state,
        [payload.index]: {
          ...state[payload.index],
          title: payload.title
        }
      }
    }
    case 'DELETE_EVENT': {
      return {
        ...state,
        [payload]: {
          ...state[payload],
          title: ''
        }
      }
    }
    default: return state
  }
}

export const store = createStore(reducer, initialState)