import { defineStore } from 'pinia';

const state = () => {
  return {
    sceneBlocks: [
      {
        id: 0,
        tabs: [],
        lines: []
      }
    ],
    addLineProps: {
      lineOrder: 1,
      firstDotCoords: [0, 0],
      firstDotId: [0, 0],
      secondDotCoords: [0, 0],
      secondDotId: [0, 0]
    }
  };
};

const getters = {};

const actions = {
  buildBuilding(name, tabSize) {
    let id = 0;
    let width = 0;
    let height = 0;
    let x = 100;
    let y = 100;

    if (tabSize === 'small') {
      width = 200;
      height = 100;
    }

    const blockIndex = this.sceneBlocks.findIndex(element => {
      return element.id === 0;
    });

    if (this.sceneBlocks[blockIndex].tabs.length === 0) {
      id = 0;
    } else {
      id = this.sceneBlocks[blockIndex].tabs.at(-1).id + 1;
    }

    this.sceneBlocks[blockIndex].tabs.push({
      id,
      name,
      width,
      height,
      x,
      y
    });
  },

  addLine({ firstDotCoords, secondDotCoords, firstDotId, secondDotId }) {
    let id = 0;
    let x1 = firstDotCoords[0];
    let y1 = firstDotCoords[1];

    let x2 = secondDotCoords[0];
    let y2 = secondDotCoords[1];

    const blockIndex = this.sceneBlocks.findIndex(element => {
      return element.id === 0;
    });

    if (this.sceneBlocks[blockIndex].lines.length === 0) {
      id = 0;
    } else {
      id = this.sceneBlocks[blockIndex].lines.at(-1).id + 1;
    }

    this.sceneBlocks[blockIndex].lines.push({
      id,
      x1,
      y1,
      x2,
      y2,
      firstDotId,
      secondDotId
    });
  },

  setPointToLine(x, y, tabId, dotId) {
    if (this.addLineProps.lineOrder === 1) {
      this.addLineProps.firstDotCoords = [x, y];
      this.addLineProps.firstDotId = [tabId, dotId];
      this.addLineProps.lineOrder = 2;
    } else {
      this.addLineProps.secondDotCoords = [x, y];
      this.addLineProps.secondDotId = [tabId, dotId];
      this.addLineProps.lineOrder = 1;
      this.addLine(this.addLineProps);
    }
  },

  deleteLine(blockId, lineId) {
    const blockIndex = this.sceneBlocks.findIndex(element => {
      return element.id === 0;
    });

    this.sceneBlocks[blockIndex].lines.splice(
      this.sceneBlocks[blockIndex].lines.findIndex(element => {
        return element.id === lineId;
      }),
      1
    );
  }
};

export const useSceneParamsStore = defineStore('sceneParamsStore', {
  state,
  getters,
  actions
});
