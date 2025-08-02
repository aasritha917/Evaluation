// RouteStrategy Interface
interface RouteStrategy {
    calculateRoute(from: string, to: string): string;
}

// Fastest Route Strategy
class FastestRoute implements RouteStrategy {
    calculateRoute(from: string, to: string): string {
        return `Fastest route from ${from} to ${to}: via Highway | 200km | 4 hours`;
    }
}

// Scenic Route Strategy
class ScenicRoute implements RouteStrategy {
    calculateRoute(from: string, to: string): string {
        return `Scenic route from ${from} to ${to}: via Countryside | 250km | 6 hours`;
    }
}

// Shortest Distance Route Strategy
class ShortestDistanceRoute implements RouteStrategy {
    calculateRoute(from: string, to: string): string {
        return `Shortest route from ${from} to ${to}: via City Roads | 180km | 5 hours`;
    }
}

// RoutePlanner Context
class RoutePlanner {
    private strategy: RouteStrategy;

    constructor(strategy: RouteStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: RouteStrategy): void {
        this.strategy = strategy;
    }

    planRoute(from: string, to: string): void {
        console.log(this.strategy.calculateRoute(from, to));
    }
}

// ✅ Choose one route strategy to print single line output:
const planner = new RoutePlanner(new FastestRoute()); // 👈 change strategy here if needed
planner.planRoute("Delhi", "Jaipur");
