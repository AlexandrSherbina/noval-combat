//

"use client";
import React, { useMemo } from "react";
import styles from "./FiledGame.module.scss";

interface CustomStyle extends React.CSSProperties {
  "--count-cols"?: number;
  "--count-rows"?: number;
}

interface FiledGameProps {
  colsCount?: number;
  rowsCount?: number;
}

function rangeFn(from: number, to: number): number[] {
  return Array.from({ length: to - from + 1 }, (_, i) => from + i);
}

function singleCharArrGen(char: string | number, amount: number): string[] {
  return Array.from({ length: amount }, () => char.toString());
}

const FiledGame: React.FC<FiledGameProps> = ({
  colsCount = 10,
  rowsCount = 10,
}) => {
  const sizeField = colsCount * rowsCount;
  const START_CODE_CHAR = 97; // ASCII code for 'a'

  // Генерация шкал X и Y, мемоизация для производительности
  const rangeAxisX = useMemo(() => {
    const END_CODE_CHAR = START_CODE_CHAR + colsCount - 1;
    return String.fromCodePoint(
      ...rangeFn(START_CODE_CHAR, END_CODE_CHAR)
    ).split("");
  }, [colsCount]);

  const rangeAxisY = useMemo(() => rangeFn(1, rowsCount), [rowsCount]);
  const fieldGame = useMemo(() => singleCharArrGen(0, sizeField), [sizeField]);

  return (
    <div
      style={
        {
          "--count-cols": colsCount,
          "--count-rows": rowsCount,
        } as CustomStyle
      }
      className={`grid ${styles["wrap-field-player"]}`}
    >
      {/* Шкала X */}
      <div
        className={`grid ${styles["grid-dynamic-cols"]} ${styles["scale-x"]}`}
      >
        {rangeAxisX.map((letter) => (
          <div
            className="flex items-center justify-center w-8 h-8"
            key={letter}
          >
            {letter}
          </div>
        ))}
      </div>

      {/* Игровое поле */}
      <div
        className={`container-sm grid ${styles["grid-dynamic-cols"]} ${styles["grid-dynamic-rows"]} 
                    border border-indigo-600 ${styles["field-player"]}`}
      >
        {fieldGame.map((_, i) => (
          <div
            className="flex items-center justify-center w-8 h-8 border border-indigo-600 hover:bg-cyan-50 cursor-pointer"
            key={i}
          >
            {""}
          </div>
        ))}
      </div>

      {/* Шкала Y */}
      <div
        className={`grid ${styles["grid-dynamic-rows"]} ${styles["scale-y"]}`}
      >
        {rangeAxisY.map((number) => (
          <div
            className="flex items-center justify-center w-8 h-8"
            key={number}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiledGame;
