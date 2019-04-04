import { observable, action, computed } from "mobx";

class HomeController {
  @observable
  state;

  @observable
  isSelected = 0;

  styles = [
    { name: "Tipo 1", style: "LIST", type: 0 },
    { name: "Tipo 2", style: "GRID", type: 1 },
    { name: "Tipo 3", style: "CARROCEL", type: 2 }
  ];

  @action
  changeStyle(value: any) {
    this.isSelected = value;
    this.changeState(value);
  }

  @action
  changeState(value: any) {
    this.state = this.styles[value];
  }
}

export default new HomeController();
