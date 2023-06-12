import { defineStore } from 'pinia';

const state = () => {
  return {
    currentOption: 'small',
    testOptionsSmall: [
      {
        id: 1,
        x: 100,
        y: 100,
        width: 200,
        height: 100
      },
      {
        id: 2,
        x: 350,
        y: 100,
        width: 200,
        height: 100
      },
      {
        id: 3,
        x: 600,
        y: 100,
        width: 200,
        height: 150
      },
      {
        id: 4,
        x: 850,
        y: 100,
        width: 200,
        height: 150
      }
    ],
    testOptionsBig: [
      {
        id: 1,
        x: 100,
        y: 100,
        width: 200,
        height: 100
      },
      {
        id: 2,
        x: 350,
        y: 100,
        width: 200,
        height: 200
      },
      {
        id: 3,
        x: 600,
        y: 100,
        width: 200,
        height: 250
      },
      {
        id: 4,
        x: 850,
        y: 100,
        width: 200,
        height: 300
      },
      {
        id: 5,
        x: 100,
        y: 500,
        width: 200,
        height: 350
      },
      {
        id: 6,
        x: 350,
        y: 500,
        width: 200,
        height: 400
      },
      {
        id: 7,
        x: 600,
        y: 500,
        width: 200,
        height: 450
      },
      {
        id: 8,
        x: 850,
        y: 500,
        width: 200,
        height: 500
      }
    ]
  };
};

const getters = {};

const actions = {};

export const useAdminSceneStore = defineStore('adminSceneStore', {
  state,
  getters,
  actions
});
