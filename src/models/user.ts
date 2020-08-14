export class User {
    constructor(
        private name: string,
    ) { }
    public getNome() {
        return this.name;
    }
    public setNome(n) {
        this.name = n;
    }
}