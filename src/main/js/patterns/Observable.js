export default class Observable {
    constructor() {
        this.observadores = [];
    }

    subscribe(observador) {
        this.observadores.push(observador);
    }

    unsubscribe(observador) {
        this.observadores = this.observadores.filter(o => o !== observador);
    }

    notify() {
        this.observadores.forEach(observador => observador());
    }
}
