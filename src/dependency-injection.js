var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.getData = function () {
        return "Data";
    };
    return Service;
}());
var Controller = /** @class */ (function () {
    function Controller(service) {
        this.service = service;
    }
    Controller.prototype.fetchData = function () {
        return this.service.getData();
    };
    return Controller;
}());
var service = new Service();
var controller = new Controller(service);
