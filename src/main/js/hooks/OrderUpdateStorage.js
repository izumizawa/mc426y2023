import Observable from "../patterns/Observable";

export default class OrderUpdateStorage {
    static instance = null;
    observable = null;

    static getInstance() {
        if (OrderUpdateStorage.instance == null) {
            OrderUpdateStorage.instance = new OrderUpdateStorage();
        }

        return this.instance;
    }

    getObservable() {
        if (this.observable == null) {
            this.observable = new Observable();
        }
        return this.observable;
    }
}
