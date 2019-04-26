import Konva from "konva";

const stage = new Konva.Stage({
  container: "mainCanvas",
  width: 200,
  height: 200,
});

const layer = new Konva.Layer();

layer.add(new Konva.Circle({
  x: 50,
  y: 50,
  width: 100,
  height: 100,
  radius: 70,
  fill: 'red',
}));

stage.add(layer);
