export default class CallData {

  getListData = () => {
    return $.getJSON("./../data/Data.json");
  };
}
