class Service {
    getData() {
        return "Data";
    }
}

class Controller {
    constructor(private service: Service) {}
    
    fetchData() {
        return this.service.getData();
    }
}

const service = new Service();

const controller = new Controller(service);
