class FieldGameService {
  rangeFn(from: number, to: number): number[] {
    return Array.from({ length: to - from + 1 }, (_, i) => from + i);
  }

  singleCharArrGen(char: string | number, amount: number): string[] {
    return Array.from({ length: amount }, () => char.toString());
  }

  createBattlefieldMatrix(cols: number = 10, rows: number = 10, start_code_char: number = 97): string[][] {
    const matrix: string[][] = Array.from({ length: rows }, () =>
      String.fromCodePoint(
        ...filedGameService.rangeFn(start_code_char, start_code_char + cols - 1)
      ).split("")
    );
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



