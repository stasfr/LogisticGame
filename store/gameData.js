import { defineStore } from 'pinia';

const state = () => {
  return {
    scene: []
  };
};

const getters = {};

const actions = {};

export const useGameDataStore = defineStore('gameDataStore', {
  state,
  getters,
  actions
});
