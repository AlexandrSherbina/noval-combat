class FieldGameService {
  rangeFn(from: number, to: number): number[] {
    return Array.from({ length: to - from + 1 }, (_, i) => from + i);
  }

  singleCharArrGen(char: string | number, amount: number): string[] {
    return Array.from({ length: amount }, () => char.toString());
  }

  rangeChars(start_code_char: number = 97, countChars: number = 10) {
    const end_code_char = start_code_char + countChars - 1;
    return String.fromCodePoint(
      ...filedGameService.rangeFn(start_code_char, end_code_char)
    ).split("");
  }
  createBattlefieldMatrix(cols: number = 10, rows: number = 10, start_code_char: number = 97): string[][] {
    const arrChars = this.rangeChars(start_code_char, cols);
    const matrix: string[][] = Array.from({ length: rows }, () => arrChars);
    return matrix;
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



