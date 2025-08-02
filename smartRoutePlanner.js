// Fastest Route Strategy
var FastestRoute = /** @class */ (function () {
    function FastestRoute() {
    }
    FastestRoute.prototype.calculateRoute = function (from, to) {
        return "Fastest route from ".concat(from, " to ").concat(to, ": via Highway | 200km | 4 hours");
    };
    return FastestRoute;
}());
// Scenic Route Strategy
var ScenicRoute = /** @class */ (function () {
    function ScenicRoute() {
    }
    ScenicRoute.prototype.calculateRoute = function (from, to) {
        return "Scenic route from ".concat(from, " to ").concat(to, ": via Countryside | 250km | 6 hours");
    };
    return ScenicRoute;
}());
// Shortest Distance Route Strategy
var ShortestDistanceRoute = /** @class */ (function () {
    function ShortestDistanceRoute() {
    }
    ShortestDistanceRoute.prototype.calculateRoute = function (from, to) {
        return "Shortest route from ".concat(from, " to ").concat(to, ": via City Roads | 180km | 5 hours");
    };
    return ShortestDistanceRoute;
}());
// RoutePlanner Context
var RoutePlanner = /** @class */ (function () {
    function RoutePlanner(strategy) {
        this.strategy = strategy;
    }
    RoutePlanner.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    RoutePlanner.prototype.planRoute = function (from, to) {
        console.log(this.strategy.calculateRoute(from, to));
    };
    return RoutePlanner;
}());
// ✅ Choose one route strategy to print single line output:
var planner = new RoutePlanner(new FastestRoute()); // 👈 change strategy here if needed
planner.planRoute("Delhi", "Jaipur");
