import { BoardComponent, NavComponent, TileComponent } from "./components";
import { sortTiles } from "./utils";

import "./styles/main.scss";

(function init() {
  const board = new BoardComponent().render();
  document.body.appendChild(board);

  const tiles = Array.from(Array(9).keys())
    .map((value: number) => new TileComponent(value + 1));

  tiles.forEach((tileComponent: TileComponent) => board.appendChild(tileComponent.render()));

  window.addEventListener('resize', () => sortTiles(tiles));

  document.body.appendChild(new NavComponent(tiles).render());
}());