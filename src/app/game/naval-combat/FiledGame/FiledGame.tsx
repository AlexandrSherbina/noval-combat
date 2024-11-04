"use client";
import React, { useMemo } from "react";
import styles from "./FiledGame.module.scss";
import { filedGameService } from "../services/field-game.service";
import { shipService } from "../services/ship.service";
import { shipDecks } from "./../services/ship.service";
import { ships } from "@/app/game/naval-combat/services/ship.service";

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

  const handleClickCell = (
    event: React.MouseEvent<HTMLDivElement>,
    row: number,
    col: number
  ) => {
    const valueCell = 4;
    const target = event.currentTarget;
    const id = target.id.split("-")[1];
    console.log("id", id);
    target.classList.toggle("bg-sky-600");
    target.textContent = valueCell.toString();
    filedGameService.updateBattleField([[row, col]], valueCell);
    filedGameService.loggerBattleField("after");

    shipService.updateMaxCount(shipDecks.DOUBLE);
    shipService.loggedShips();
  };
  // Генерация шкал X и Y, мемоизация для производительности
  const rangeAxisX = useMemo(() => {
    const END_CODE_CHAR = colsCount;
    return filedGameService.rangeChars(START_CODE_CHAR, END_CODE_CHAR);
  }, [colsCount]);

  const rangeAxisY = useMemo(
    () => filedGameService.rangeFn(1, rowsCount),
    [rowsCount]
  );

  const battleFiledMatrix = useMemo(() => {
    shipService.setShips(ships);
    const columns = filedGameService.singleCharacterArray(0, colsCount);
    filedGameService.createBattlefieldMatrix(rowsCount, columns);
    return filedGameService.getBattleField();
  }, [rowsCount, colsCount]);

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
        <div
          className={`container-sm grid ${styles["grid-dynamic-cols"]} ${styles["grid-dynamic-rows"]} 
        border border-indigo-600 ${styles["field-player"]}`}
        >
          {battleFiledMatrix.map((_row, i) => {
            return _row.map((_col, j) => {
              const coord = rangeAxisX[j] + i;
              return (
                <div
                  id={`cell-${coord}`}
                  className="text-xs  flex items-center justify-center w-8 h-8 border border-indigo-600 hover:bg-cyan-50 cursor-pointer"
                  key={j}
                  onClick={(e) => handleClickCell(e, i, j)}
                >
                  {`
                   ${_col}`}
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
