"use strict";

const getCanvas = () => {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas");

  return canvas;
};

export { getCanvas };
