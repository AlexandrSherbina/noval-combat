interface Ship {
    type: string; // Например, "Однопалубный", "Двухпалубный" и т.д.
    maxCount: number; // Максимальное количество кораблей этого типа
    size: number; // Размер корабля в клетках
}
export const shipDecks = {
    SINGLE: "Single-deck",
    DOUBLE: "Double-deck",
    THREE: "Three-deck",
    FOUR: "Four-deck",
}

export const ships: Ship[] = [
    { type: shipDecks.SINGLE, maxCount: 4, size: 1 },
    { type: shipDecks.DOUBLE, maxCount: 3, size: 2 },
    { type: shipDecks.THREE, maxCount: 2, size: 3 },
    { type: shipDecks.FOUR, maxCount: 1, size: 4 },]


class ShipService {
    #ships: Ship[];
    constructor() {
        this.#ships = []
    }

    getShips() {
        return this.#ships;
    }
    setShips(newShips: Ship[]) {
        this.#ships = newShips
    }

    updateMaxCount(nameShip: string) {
        const currentShips = this.getShips();
        return currentShips.map((ship) => {
            if (ship.type === nameShip) {
                return { ...ship, maxCount: --ship.maxCount }
            }
            return ship;
        })
    }

    loggedShips(msg: string = '') {
        return console.log(`Ships ${msg}:`, this.getShips())
    }
}

export const shipService = new ShipService();