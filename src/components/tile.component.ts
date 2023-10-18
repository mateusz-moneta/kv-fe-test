import { calculateGridColumn, calculateGridRow, getOddOrEven } from "../utils";

export class TileComponent {
    private element: HTMLElement | null = null;
    private _gridColumn = 1;
    private _gridRow = 1;
    private _index = 1;

    readonly value: number;

    set index(value: number) {
        this._index = value;
        this.gridColumn = calculateGridColumn(value);
        this.gridRow = calculateGridRow(value);

        if (this.element) {
            this.element.classList.remove('even', 'odd');
            this.element.classList.add(getOddOrEven(this._gridRow, this._gridColumn));
        }
    }

    get index(): number {
        return this._index;
    }

    private set gridColumn(value: number) {
        this._gridColumn = value;

        if (this.element) {
            this.element.style.gridColumn = value.toString();
        }
    }

    private set gridRow(value: number) {
        this._gridRow = value;
      
        if (this.element) {
            this.element.style.gridRow = value.toString();
        }
    }

    constructor(value: number) {
        this.index = value;
        this.value = value;
    }

    render(): HTMLElement {
        this.element = document.createElement('div');
        this.element.classList.add('tile');
        this.element.innerText = this.value.toString();
        this.element.classList.add(getOddOrEven(this._gridRow, this._gridColumn));

        const decoration = document.createElement('div');
        decoration.classList.add('decoration');
        this.element.appendChild(decoration);

        return this.element;
    }
}
