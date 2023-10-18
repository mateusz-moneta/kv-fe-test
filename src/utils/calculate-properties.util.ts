export function calculateGridColumn(value: number): number {
    if (window.innerWidth > 768) {
        const result = value % 3;

        return result === 0 ? 3 : result;
    }
    
    return 1;
}

export function calculateGridRow(value: number): number {
    if (window.innerWidth > 768) {
        if (value > 0 && value <= 3) {
            return 1;
        }

        if (value > 3 && value <= 6) {
            return 2;
        }

        return 3;
    }

    return value;
}

export function getOddOrEven(row: number, column: number) {
    const sum = row + column;

    if (sum % 2 === 0) {
      return "even";
    }

    return "odd";
}
