import { TileComponent } from "../components";
import { shuffle } from "../utils";

export function shuffleTiles(tiles: TileComponent[] = []): void {
    const numbers = tiles.map(({ index }) => index);
    const shuffleNumbers = shuffle(numbers);
  
    tiles.forEach((tileComponent: TileComponent, index: number) =>
        tileComponent.index = shuffleNumbers[index]
    );
}
  
export function sortTiles(tiles: TileComponent[] = []): void {
    tiles.forEach((itemComponent: TileComponent, index: number) =>
        itemComponent.index = index + 1
    );
}