export class ToDo {
    name?: string;
    description?: string;
    priority?: string;
    complete?: boolean;
    id?: any;

    constructor(id: any,name: string, description: string, priority: string, complete: boolean){
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.complete = complete;
        this.id = id
    }
}