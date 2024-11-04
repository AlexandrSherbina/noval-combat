class FieldGameService {
  curBattleField: string[][] | number[][];
  constructor() {
    this.curBattleField = [[]];
  }
  rangeFn(from: number, to: number): number[] {
    return Array.from({ length: to - from + 1 }, (_, i) => from + i);
  }

  singleCharacterArray(value: string | number | boolean, amount: number): string[] {
    return Array(amount).fill(value);
  }

  rangeChars(start_code_char: number = 97, countChars: number = 10) {
    const end_code_char = start_code_char + countChars - 1;
    return String.fromCodePoint(
      ...filedGameService.rangeFn(start_code_char, end_code_char)
    ).split("");
  }
  createBattlefieldMatrix(rows: number = 10, arrChars: string[] = []): string[][] {
    const matrix: string[][] = Array.from({ length: rows }, () => [...arrChars]);
    this.curBattleField = matrix;
    return matrix;
  }
  getBattleField() {
    return this.curBattleField;
  }

  loggerBattleField(descry: string = '') {
    return console.log(`Matrix ${descry}: `, this.getBattleField())
  }

  updateBattleField(coords: number[][], valueCell: number | string) {
    coords.forEach((coord) => {
      const [row, col] = coord;
      this.curBattleField[row][col] = valueCell;
    })
  }
}

export const filedGameService = new FieldGameService();


export const matrixTest = [
  ['a', 'b', 'c', 'd', 'e', 'g', 'f', 'h', 'i', 'j'],
  ['a', 'b', 'c', 'd', 'e', 'g', 'f', 'h', 'i', 'j'],
  ['a', 'b', 'c', 'd', 'e', 'g', 'f', 'h', 'i', 'j'],
  ['a', 'b', 'c', 'd', 'e', 'g', 'f', 'h', 'i', 'j'],
  ['a', 'b', 'c', 'd', 'e', 'g', 'f', 'h', 'i', 'j'],
  ['a', 'b', 'c', 'd', 'e', 'g', 'f', 'h', 'i', 'j'],
  ['a', 'b', 'c', 'd', 'e', 'g', 'f', 'h', 'i', 'j'],
  ['a', 'b', 'c', 'd', 'e', 'g', 'f', 'h', 'i', 'j'],
  ['a', 'b', 'c', 'd', 'e', 'g', 'f', 'h', 'i', 'j'],
  ['a', 'b', 'c', 'd', 'e', 'g', 'f', 'h', 'i', 'j'],
  ['a', 'b', 'c', 'd', 'e', 'g', 'f', 'h', 'i', 'j'],
]



