


import {createElement, Component, render} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
//import date from './dateFormatter';
// import styles from './App.css';
import MoneyService from '../services/Money.js';
import Image from 'rax-image';
 const stylechange = 0.56;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      money : '500.00',
      time : '2018年3月14日',
    }
  }
  componentWillMount(){
    let option = {};
   // option.userId = Cookie.getCookie("userId");
     option.userId = 2016214322;
     MoneyService.getMoney(option)
     .then((res)=>{
       let money = res[0].outMoney;
       console.log("money:"+money);
       this.setState({money});
     })
    
   
  }

  render() {
    return (
     
      <View   style={styles.App}>
     
      <Image  style={styles.centerPicture} source={require('./assets/center-card-picture.png')}
        resizeMode="contain"
      />
      {/* <View style={styles.centerPicture}></View> */}
      <Text style={styles.warnWord}>您的校园卡余额是为</Text>
      <Text style={styles.Money}>{this.state.money}元</Text>
      <Text style={styles.Date}>截止至{this.state.time}</Text>
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
    height:704,
    marginTop: 137,
    //backgroundColor:'black'
  },
  warnWord:{
    fontSize:34,
    color:'rgb(67,67,67)',
    position:'absolute',
    top:324,
    left:172,
    
  },
  Money:{
    fontSize:74,
    color:'rgb(254,183,90)',
    position:'absolute',
    top:440,
    left:210,
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
