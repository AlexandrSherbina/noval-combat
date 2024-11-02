"use client";
import React, { useMemo } from "react";
import styles from "./FiledGame.module.scss";
import { filedGameService } from "../services/field-game.service";

interface CustomStyle extends React.CSSProperties {
  "--count-cols"?: number;
  "--count-rows"?: number;
}

interface FiledGameProps {
  colsCount?: number;
  rowsCount?: number;
}

const FiledGame: React.FC<FiledGameProps> = ({
  colsCount = 10,
  rowsCount = 10,
}) => {
  const START_CODE_CHAR = 97; // ASCII code for 'a'

  // Генерация шкал X и Y, мемоизация для производительности
  const rangeAxisX = useMemo(() => {
    const END_CODE_CHAR = colsCount;
    return filedGameService.rangeChars(START_CODE_CHAR, END_CODE_CHAR);
  }, [colsCount]);

  const rangeAxisY = useMemo(
    () => filedGameService.rangeFn(1, rowsCount),
    [rowsCount]
  );

  const battleFiledMatrix = useMemo(
    () => filedGameService.createBattlefieldMatrix(colsCount, rowsCount),
    [colsCount, rowsCount]
  );

  console.log("battleFiledMatrix: ", battleFiledMatrix);
  return (
    <>
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
        {/* <div
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
        </div> */}
        {/* Refactor battle filed*/}
        <div
          className={`container-sm grid ${styles["grid-dynamic-cols"]} ${styles["grid-dynamic-rows"]} 
        border border-indigo-600 ${styles["field-player"]}`}
        >
          {battleFiledMatrix.map((row, i) => {
            return row.map((col, j) => {
              return (
                <div
                  id={`cell-${i}-${j}`}
                  className="text-xs  flex items-center justify-center w-8 h-8 border border-indigo-600 hover:bg-cyan-50 cursor-pointer"
                  key={j}
                >
                  {`(${i},${col})`}
                </div>
              );
            });
          })}
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
    </>
  );
};

export default FiledGame;
