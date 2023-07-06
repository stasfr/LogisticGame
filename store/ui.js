import { defineStore } from 'pinia';

const state = () => {
  return {
    isShowWindow: false,
    windowType: ''
  };
};

const getters = {};

const actions = {};

export const useUIStore = defineStore('uiStore', {
  state,
  getters,
  actions
});
