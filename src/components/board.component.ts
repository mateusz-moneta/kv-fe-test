export class BoardComponent {
    render(): HTMLElement {
        const board = document.createElement('div');
        board.classList.add('board');

        return board;
    }
}
