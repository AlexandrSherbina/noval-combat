interface Ship {
    type: string; // Например, "Однопалубный", "Двухпалубный" и т.д.
    maxCount: number; // Максимальное количество кораблей этого типа
    size: number; // Размер корабля в клетках
}

export const ships: Ship[] = [
    { type: "Single-deck", maxCount: 4, size: 1 },
    { type: "Double-deck", maxCount: 3, size: 2 },
    { type: "Three-deck", maxCount: 2, size: 3 },
    { type: "Four-deck", maxCount: 1, size: 4 },]