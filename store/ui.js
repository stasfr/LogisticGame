import { defineStore } from 'pinia';

const state = () => {
  return {
    isShowWindow: false
  };
};

const getters = {};

const actions = {};

export const useUIStore = defineStore('uiStore', {
  state,
  getters,
  actions
});
