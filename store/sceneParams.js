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
      startDot: {},
      finishDot: {}
    }
  };
};

const getters = {};

const actions = {
  buildBuilding(name, tabSize, blockId) {
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
      return element.id === blockId;
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

  addLine(startDot, finishDot) {
    const blockId = startDot.blockId;

    let id = 0;

    let x1 = startDot.x;
    let y1 = startDot.y;

    let x2 = finishDot.x;
    let y2 = finishDot.y;

    if (this.sceneBlocks[blockId].lines.length === 0) {
      id = 0;
    } else {
      id = this.sceneBlocks[blockId].lines.at(-1).id + 1;
    }

    this.sceneBlocks[blockId].lines.push({
      id,
      x1,
      y1,
      x2,
      y2
    });
  },

  setPointToLine(x, y, tabId, dotId, blockId) {
    if (this.addLineProps.lineOrder === 1) {
      this.addLineProps.startDot = {
        x,
        y,
        tabId,
        dotId,
        blockId
      };

      this.addLineProps.lineOrder = 2;
    } else {
      this.addLineProps.finishDot = {
        x,
        y,
        tabId,
        dotId,
        blockId
      };

      this.addLineProps.lineOrder = 1;

      this.addLine(this.addLineProps.startDot, this.addLineProps.finishDot);
    }
  },

  deleteLine(blockId, lineId) {
    this.sceneBlocks[blockId].lines.splice(
      this.sceneBlocks[blockId].lines.findIndex(element => {
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
