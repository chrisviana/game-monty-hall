export default class DoorModel {
  #number: number;
  #haveAGift: boolean;
  #selected: boolean;
  #open: boolean;

  constructor(
    number: number,
    haveAGift = false,
    selected = false,
    open = false
  ) {
    this.#number = number;
    this.#haveAGift = haveAGift;
    this.#selected = selected;
    this.#open = open;
  }

  get number() {
    return this.#number;
  }

  get haveAGift() {
    return this.#haveAGift;
  }

  get selected() {
    return this.#selected;
  }

  get open() {
    return this.#open;
  }

  deselect() {
    const selected = false;
    return new DoorModel(this.number, this.haveAGift, selected, this.open);
  }

  toggleSelection() {
    const selected = !this.selected;
    return new DoorModel(this.number, this.haveAGift, selected, this.open);
  }

  toOpen() {
    const open = true;
    return new DoorModel(this.number, this.haveAGift, this.selected, open);
  }
}
