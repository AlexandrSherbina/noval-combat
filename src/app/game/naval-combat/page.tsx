"use client";
import React, { useState } from "react";
import FiledGame from "./FiledGame/FiledGame";
import GameSettings from "@/app/components/GameSettings/GameSettings";

export default function NavalCombat() {
  const [columns, setColumns] = useState(10);
  const [rows, setRows] = useState(10);
  const handleApplySettings = ({
    columns,
    rows,
  }: {
    columns: number;
    rows: number;
  }) => {
    // Логика для создания нового поля
    console.log("Новый размер поля:", { columns, rows });
    setColumns(columns);
    setRows(rows);
  };
  return (
    <div className="md:container md:mx-auto md:mt-5">
      <h1 className="text-2xl text-center">Naval Combat</h1>
      <div className="flex flex-col gap-3 border-4 p-4 game-container">
        <h2>Panel Game</h2>
        <div className="border-2 p-2 panel-game">
          <GameSettings onApply={handleApplySettings} />
        </div>
        <h2> Game Board</h2>
        <div className="flex flex-row gap-2 game-board">
          <div className="border-2 p-2 game-board-player">
            <h3>Player 1</h3>
            <FiledGame rowsCount={rows} colsCount={columns}></FiledGame>
          </div>
          <div className="border-2 p-2 game-board-player">
            <h3>Player 2</h3>
          </div>
          <div className="border-2 p-2 game-board-player">
            <h3>Player Enemy</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
