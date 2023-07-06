import { defineStore } from 'pinia';

const state = () => {
  return {
    buildMenuItems: [
      {
        id: 1,
        name: 'logger',
        price: {
          coins: 100
        },
        tabSize: 'small'
      },
      {
        id: 2,
        name: 'logger',
        price: {
          coins: 100
        },
        tabSize: 'small'
      },
      {
        id: 3,
        name: 'logger',
        price: {
          coins: 100
        },
        tabSize: 'small'
      },
      {
        id: 4,
        name: 'logger',
        price: {
          coins: 100
        },
        tabSize: 'small'
      },
      {
        id: 5,
        name: 'logger',
        price: {
          coins: 100
        },
        tabSize: 'small'
      },
      {
        id: 6,
        name: 'logger',
        price: {
          coins: 100
        },
        tabSize: 'small'
      },
      {
        id: 7,
        name: 'logger',
        price: {
          coins: 100
        },
        tabSize: 'small'
      },
      {
        id: 8,
        name: 'logger',
        price: {
          coins: 100
        },
        tabSize: 'small'
      },
      {
        id: 9,
        name: 'logger',
        price: {
          coins: 100
        },
        tabSize: 'small'
      },
      {
        id: 10,
        name: 'logger',
        price: {
          coins: 100
        },
        tabSize: 'small'
      },
      {
        id: 11,
        name: 'logger',
        price: {
          coins: 100
        },
        tabSize: 'small'
      },
      {
        id: 12,
        name: 'logger',
        price: {
          coins: 100
        },
        tabSize: 'small'
      },
      {
        id: 13,
        name: 'logger',
        price: {
          coins: 100
        },
        tabSize: 'small'
      }
    ]
  };
};

const getters = {};

const actions = {};

export const useBuildStore = defineStore('buildStore', {
  state,
  getters,
  actions
});
