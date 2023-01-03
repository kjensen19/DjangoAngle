export class ToDo {
    name: string;
    description: string;
    priority: string;
    complete: boolean;

    constructor(name: string, description: string, priority: string, complete: boolean){
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.complete = complete;
    }
}