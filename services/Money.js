import request from "../box-ui/util/request";

const MoneyService = {
  getMoney(option) {
    return request({
      method: "GET",
      url: `https://ccnubox.muxixyz.com/api/card/balance?sid=${option.userId}`
    });
  }
};
export default MoneyService;
