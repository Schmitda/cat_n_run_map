export class SelectElement{
    private label:string;
    private value: string;


    constructor(label: string, value: string) {
        this.label = label;
        this.value = value;

        return {
            label: this.label,
            value: this.value
        };
    }
}