import { shuffleTiles, sortTiles } from "../utils";
import { TileComponent } from "./tile.component";

import ShuffleIcon from '../icons/shuffle.svg';
import SortIcon from '../icons/sort.svg';

export class NavComponent {
    private shuffleButton: HTMLElement | null = null;
    private sortButton: HTMLElement | null = null;

    constructor(private tiles: TileComponent[]) {}

    render(): HTMLElement {
        const nav = document.createElement('nav');

        this.shuffleButton = this.createButton();
        this.shuffleButton.innerHTML = `
            <img src="${ShuffleIcon}" />
            <span>Shuffle</span>
        `;
        this.shuffleButton.addEventListener('click', () => shuffleTiles(this.tiles));
        nav.appendChild(this.shuffleButton);

        this.sortButton = this.createButton();
        this.sortButton.innerHTML = `
            <img src="${SortIcon}" />
            <span>Sort</span>
        `;
        this.sortButton.addEventListener('click', () => sortTiles(this.tiles));
        nav.appendChild(this.sortButton);

        return nav;
    }

    private createButton(): HTMLElement {
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        
        return button;
    }
}