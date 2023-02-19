var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    //   constructor(parameters) {}
    Vehicle.prototype.drive = function () {
        console.log("chuga");
    };
    return Vehicle;
}());
var vehicle = new Vehicle();
vehicle.drive();
