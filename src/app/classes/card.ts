export class Card {
    constructor(
        public id: string,
        public name: string,
        public cmc: number,
        public colors: string[],
        public mana_cost: string,
        public oracle_text: string,
        public type_line: string
        ) {}

    static fromJson(json: any): Card {
        return new Card(
            json._id,
            json.name,
            json.cmc,
            json.colors,
            json.mana_cost,
            json.oracle_text,
            json.type_line
        )
    }
}
