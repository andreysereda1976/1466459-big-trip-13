import Observer from "../utils/observer.js";
import {FilterType} from "../utils/const.js";

export default class FilterModel extends Observer {
  constructor() {
    super();
    this._activeFilter = FilterType.EVERYTHING;
  }

  setFilter(updateType, filter) {
    console.log(filter);
    this._activeFilter = filter;
    this._notify(updateType, filter);
  }

  getFilter() {
    return this._activeFilter;
  }
}
