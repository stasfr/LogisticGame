import { defineStore } from 'pinia';

const state = () => {
  return {
    sceneTabs: [],
    sceneLines: [],
    addLineProps: {
      lineOrder: 1,
      firstDotCoords: [0, 0],
      secondDotCoords: [0, 0]
    }
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

    if (this.sceneTabs.length === 0) {
      id = 1;
    } else {
      id = this.sceneTabs[this.sceneTabs.length - 1].id + 1;
    }

    this.sceneTabs.push({
      id,
      name,
      width,
      height,
      x,
      y
    });
  },

  addLine({ firstDotCoords, secondDotCoords }) {
    let id = 0;
    let M1 = firstDotCoords[0];
    let M2 = firstDotCoords[1];

    let Q1 = secondDotCoords[0];
    let Q2 = secondDotCoords[1];

    let curve1 = (Q1 - M1) / 2 + M1;
    let curve2 = (Q2 - M2) / 2 + M2;

    if (this.sceneLines.length === 0) {
      id = 1;
    } else {
      id = this.sceneLines[this.sceneLines.length - 1].id + 1;
    }

    this.sceneLines.push({ id, M: [M1, M2], Q: [curve1, curve2, Q1, Q2] });
  },

  setPointToLine(x, y) {
    if (this.addLineProps.lineOrder === 1) {
      this.addLineProps.firstDotCoords = [x, y];
      this.addLineProps.lineOrder = 2;
    } else {
      this.addLineProps.secondDotCoords = [x, y];
      this.addLineProps.lineOrder = 1;
      this.addLine(this.addLineProps);
    }
  }
};

export const useSceneParamsStore = defineStore('sceneParamsStore', {
  state,
  getters,
  actions
});
