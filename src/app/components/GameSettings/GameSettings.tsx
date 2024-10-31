import { useState } from "react";
interface GameSettingsProps {
  onApply: (size: { columns: number; rows: number }) => void; // Пропс onApply
}
const GameSettings: React.FC<GameSettingsProps> = ({ onApply }) => {
  const [columns, setColumns] = useState<number>(10); // Начальное значение для колонок
  const [rows, setRows] = useState<number>(10); // Начальное значение для строк

  const handleApply = () => {
    onApply({ columns, rows }); // Функция для применения настроек
  };

  return (
    <div className="flex flex-col items-start space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800">
        Game field settings
      </h2>

      <div className="flex flex-row gap-3">
        <div className="flex flex-col space-y-2 ">
          <label className="text-sm font-medium text-gray-700">Columns:</label>
          <input
            type="number"
            min="1"
            max="20"
            value={columns}
            onChange={(e) => setColumns(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter cols"
          />
        </div>

        <div className="flex flex-col space-y-2 ">
          <label className="text-sm font-medium text-gray-700">Rows:</label>
          <input
            type="number"
            min="1"
            max="20"
            value={rows}
            onChange={(e) => setRows(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter rows"
          />
        </div>
      </div>

      <button
        onClick={handleApply}
        className=" px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Change field size
      </button>
    </div>
  );
};

export default GameSettings;
