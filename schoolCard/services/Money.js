import request from  "../box-ui/util/request";

const MoneyService ={
    getMoney(option){
        return request({
            method:"GET",
            url:"console.ccnu.edu.cn/ecard/getTrans?userId="+option.userId+"&days=1&startNum=0&num=200"
        })
        // return fetch('http://console.ccnu.edu.cn/ecard/getTrans?userId="+option.userId+"&days=1&startNum=0&num=200', {
        //     //mode: 'same-origin',
        //     dataType: 'json',
        //     method: 'GET'
        //   })
        //   .then((response) => {
        //     return response.json();
        //   })
        //   .then((data) => {
        //     console.log(data);
        //   })
        //   .catch((err) => {
        //     // handle exception
        //   });
    }
}
export default MoneyService;