import { defineStore } from 'pinia';

const state = () => {
  return {
    scene: []
  };
};

const getters = {};

const actions = {};

export const useSceneParamsStore = defineStore('sceneParamsStore', {
  state,
  getters,
  actions
});
