namespace Utils{
    export class Parent{
        name;
        setName(name){
            return this.name=name;
        }
    }
    export interface userType{
        getName();
    }
}