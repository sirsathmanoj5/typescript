"use strict";
class Service {
    getData() {
        return "Data";
    }
}
class Controller {
    constructor(service) {
        this.service = service;
    }
    fetchData() {
        return this.service.getData();
    }
}
const service = new Service();
const controller = new Controller(service);
