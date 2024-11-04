import React from "react";
import { ships } from "@/app/game/naval-combat/services/ship.service";
// Импорт данных о кораблях

const ShipList: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">List Ships</h1>
      <ul role="list" className="list-none">
        {ships.map((ship) => (
          <li key={ship.type} className="flex flex-row gap-5">
            <span className="min-w-32">
              {ship.type}: {ship.size}
            </span>
            <span className="min-w-32">Max count: {ship.maxCount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShipList;
