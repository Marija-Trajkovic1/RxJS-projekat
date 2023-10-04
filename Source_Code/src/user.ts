export class User {
    _name: string;
    email: string;
    constructor(name:string, email: string){
        this._name=name;
        this.email=email;
    }

    set name(newName:string){
        this._name=newName;
    }
}