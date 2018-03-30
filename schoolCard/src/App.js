import {createElement, Component, render} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import moment from "moment"
import MoneyService from '../services/Money.js';
import Image from 'rax-image';

const stylechange = 0.56;


let image = {
  uri:"https://wx3.sinaimg.cn/large/006P0MECly1fpflxjkgfdj30fa0jjjr9.jpg"
};

let date = moment(new Date()).format("YYYY年MM月DD日"); 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      money : '0.00',
      time : date,
    }
  }
 
  componentWillMount(){
    let option = {};
   // option.userId = Cookie.getCookie("userId");
     option.userId = 2016214322;
    //  MoneyService.getMoney(option)
    //  .then((res)=>{
    //    let money = res[0].outMoney;
    //    this.setState({money});
    //  })
  }
  

  render() {
    return (
     
      <View   style={styles.App}>
     
      <Image  style={styles.centerPicture} source={image}
        resizeMode="contain"
      />
      <View style = {styles.center}>
      <Text style={styles.warnWord}>您的校园卡余额是为</Text>
      <Text style={styles.Money}>{this.state.money}元</Text>
      <Text style={styles.Date}>截止至{this.state.time}</Text>
      </View>
      </View>
    );
  }
}

const styles={

  App:{
   
    backgroundColor:"rgb(239,239,244)",
    width:750,
    height:1334,
    alignItems: 'center'
  },
  
  centerPicture:{
    width:550,
    height:703,
    marginTop: 140,
   
  },
  center:{
    backgroundColor:"rgb(22,22,22)",
    marginTop:-703,
    width:550,
    height:703,
    alignItems: 'center'
  },
  warnWord:{
    fontSize:34,
    color:'rgb(67,67,67)',
    marginTop:324,
   
    
  },
  Money:{
    fontSize:74,
    color:'rgb(254,183,90)',
    marginTop:440,
    
  },
  Date:{
    fontSize:24,
    color:'rgb(142,142,147)',
    position:'absolute',
    top:672,
    left:280,
  }
}
 export default App;
