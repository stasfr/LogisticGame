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
    dots: {},
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

    this.dots[blockId] ??= {};
    this.dots[blockId][id] = {};
    this.dots[blockId][id][1] = [];
    this.dots[blockId][id][2] = [];

    console.log(this.dots);

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
    const getDotCoords = (dotId, width) => {
      if (dotId === 1) {
        return 0;
      } else {
        return width;
      }
    };

    const blockId = startDot.blockId;

    let id = 0;

    const startTab = this.sceneBlocks[blockId].tabs[startDot.tabId];
    const finishTab = this.sceneBlocks[blockId].tabs[finishDot.tabId];

    const x1 = startTab.x + getDotCoords(startDot.dotId, startTab.width);
    const y1 = startTab.y + startTab.height * 0.3;

    const x2 = finishTab.x + getDotCoords(finishDot.dotId, finishTab.width);
    const y2 = finishTab.y + finishTab.height * 0.3;

    if (this.sceneBlocks[blockId].lines.length === 0) {
      id = 0;
    } else {
      id = this.sceneBlocks[blockId].lines.at(-1).id + 1;
    }

    this.dots[blockId][startDot.tabId][startDot.dotId].push({ id, coords: 1 });
    this.dots[blockId][finishDot.tabId][finishDot.dotId].push({
      id,
      coords: 2
    });

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

      if (
        this.addLineProps.startDot.tabId != this.addLineProps.finishDot.tabId
      ) {
        this.addLine(this.addLineProps.startDot, this.addLineProps.finishDot);
      }
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
