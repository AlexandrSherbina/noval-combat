"use client";
import React, { useEffect, useState } from "react";
import styles from "./FiledGame.module.scss";

interface CustomStyle extends React.CSSProperties {
  "--count-cols"?: number;
  "--count-rows"?: number;
}

function rangeFn(from: number = 1, to: number = 1) {
  const resultArr: number[] = [];
  for (let i = from; i <= to; i++) {
    resultArr.push(i);
  }
  return resultArr;
}
const singleCharArrGen = (char: string | number, amount: number) =>
  Array.from(char.toString().repeat(amount).split(""));

export default function FiledGame({ colsCount = 10, rowsCount = 10 }) {
  const START_CODE_CHAR = 97;
  const END_CODE_CHAR = START_CODE_CHAR + (colsCount - 1);
  const sizeField = colsCount * rowsCount;
  const rangeCodeForLetters = rangeFn(START_CODE_CHAR, END_CODE_CHAR);
  const rangeAxisX = String.fromCodePoint(...rangeCodeForLetters).split("");
  const rangeAxisY = rangeFn(1, rowsCount);
  const [fieldGame, setFieldGame] = useState<string[]>(
    singleCharArrGen(0, sizeField)
  );
  const [scaleX, setScaleX] = useState<string[]>(rangeAxisX);
  const [scaleY, setScaleY] = useState<number[]>(rangeAxisY);
  useEffect(() => {
    setScaleX(rangeAxisX);
  }, [colsCount]);
  useEffect(() => {
    setScaleY(rangeAxisY);
  }, [rowsCount]);
  useEffect(() => {
    setFieldGame(singleCharArrGen(0, sizeField));
  }, [sizeField]);

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
        <div
          className={`grid 
          ${styles["grid-dynamic-cols"]}             
           ${styles["scale-x"]}`}
        >
          {scaleX.map((letter) => (
            <div
              className="flex items-center justify-center  w-8 h-8"
              key={letter}
            >
              {letter}
            </div>
          ))}
        </div>
        <div
          className={`container-sm grid  ${styles["grid-dynamic-cols"]}  ${styles["grid-dynamic-rows"]} border border-indigo-600 ${styles["field-player"]}`}
        >
          {fieldGame.map((cell, i) => {
            return (
              <div
                className="flex items-center justify-center w-8 h-8 border border-indigo-600 hover:bg-cyan-50 cursor-pointer"
                key={i + "key"}
              >
                {""}
              </div>
            );
          })}
        </div>
        <div
          className={`grid ${styles["grid-dynamic-rows"]} ${styles["scale-y"]}`}
        >
          {scaleY.map((number) => {
            return (
              <div
                className="flex items-center justify-center  w-8 h-8"
                key={number}
              >
                {number}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
