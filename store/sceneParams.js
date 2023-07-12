import { defineStore } from 'pinia';

const state = () => {
  return {
    scene: [],
    sceneLines: [{ id: 1, M: [402, 224], Q: [553, 233.5, 704, 243] }]
  };
};

const getters = {};

const actions = {
  buildBuilding(name, tabSize) {
    let id = 0;
    let width = 200;
    let height = 100;
    let x = 100;
    let y = 100;

    if (tabSize === 'small') {
      width = 200;
      height = 100;
    }

    if (this.scene.length === 0) {
      id = 1;
    } else {
      id = this.scene[this.scene.length - 1].id + 1;
    }

    this.scene.push({
      id,
      name,
      width,
      height,
      x,
      y
    });
  }
};

export const useSceneParamsStore = defineStore('sceneParamsStore', {
  state,
  getters,
  actions
});
