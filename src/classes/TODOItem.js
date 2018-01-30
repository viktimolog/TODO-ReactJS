export default class TODOItem {
    note;
    checked;
    style;

    constructor(note, checked) {
        this.note = note;
        this.checked = checked;
        this.setTextDecoration();
    }

    setTextDecoration = () => {
        if (this.checked === true) {
            this.style = {
                textDecoration: "line-through"
            };
        }
        else {
            this.style = {
                textDecoration: "none"
            };
        }
    }

    changeStyle = () => {
        if (this.checked === true) {
            this.checked = false;
            this.setTextDecoration();
        }
        else {
            this.checked = true;
            this.setTextDecoration();
        }
    }
}