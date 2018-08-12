import { createElement, Component, render } from "rax";
import View from "rax-view";
import Text from "rax-text";
import moment from "moment";
import MoneyService from "../services/Money.js";
import Image from "rax-image";
import centerImage from "./assets/center-card-picture.png";

// let image = {
//   uri:"https://wx3.sinaimg.cn/large/006P0MECly1fpflxjkgfdj30fa0jjjr9.jpg"
// };

let date = moment(new Date()).format("YYYY年MM月DD日");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: null,
      time: date
    };
  }

  componentWillMount() {
    let option = {};
    let money;
    // option.userId = Cookie.getCookie("userId");
    option.userId = 2016214322;

    MoneyService.getMoney(option).then(res => {
      money = res.model.balance;
      this.setState({ money });
    });
  }

  render() {
    return (
      <View style={styles.App}>
        <Image
          style={styles.centerPicture}
          source={centerImage}
          resizeMode="contain"
        />
        <View style={styles.center}>
          <Text style={styles.warnWord}>您的校园卡余额是为</Text>
          <Text style={styles.Money}>{this.state.money}元</Text>
          <Text style={styles.Date}>截止至{this.state.time}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  App: {
    backgroundColor: "rgb(239,239,244)",
    // width:750,
    // height:1334,
    flex: 1,
    alignItems: "center"
  },

  centerPicture: {
    width: 550,
    height: 703,
    marginTop: 140
  },
  center: {
    marginTop: -703,
    width: 550,
    height: 703,
    alignItems: "center"
  },
  warnWord: {
    fontSize: 34,
    color: "rgb(67,67,67)",
    marginTop: 190
  },
  Money: {
    fontSize: 74,
    color: "rgb(254,183,90)",
    marginTop: 80
  },
  Date: {
    fontSize: 24,
    color: "rgb(142,142,147)",
    marginTop: 160,
    marginLeft: 64
  }
};
export default App;

// import {createElement, Component, render} from 'rax';
// import Chart, {Bar, Axis} from 'rax-charts';

// class BarDemo extends Component {
//   render() {
//     const barData = [
//       {tem: 10, city: 'tokyo'},
//       {tem: 4, city: 'newYork'},
//       {tem: 3, city: 'berlin'}
//     ];

//     return <Chart style={{
//       width: 750,
//       height: 350
//     }} data={barData} config={{
//       tem: {
//         tickCount: 5
//       }
//     }}>
//       <Axis name="city" grid={null} />
//       <Axis name="tem" />
//       <Bar position="city*tem" color="city" />
//     </Chart>;
//   }
// }

// // render(<BarDemo />);
// export default BarDemo;
// import {createElement, Component, render} from 'rax';
// import Canvas from 'rax-canvas';
// import View from 'rax-view';

// class CanvasSample extends Component {
//   componentDidMount() {
//     console.log(this.refs.raxCanvasDemo.getContext())
//     const context = this.refs.raxCanvasDemo.getContext();
//     context.fillStyle = 'red';
//     context.fillRect(0, 0, 100, 100);
//     // then((context) => {
//     //   context.fillStyle = 'red';
//     //   context.fillRect(0, 0, 100, 100);
//     // });
//   }

//   render() {
//     return <Canvas style={{
//       width: 750,
//       height: 750
//     }} ref="raxCanvasDemo" />;

//   }
// }

// import {createElement, Component, render} from 'rax';
// import Canvas from 'rax-canvas';

// class CanvasSample extends Component {
//   componentDidMount() {
//     const contextPromise = this.refs.raxCanvasDemo.getContext();
//     contextPromise.then((context) => {
//       context.fillStyle = 'red';
//       context.fillRect(0, 0, 100, 100);
//     });
//   }

//   render() {
//     return <Canvas style={{
//       width: 750,
//       height: 750
//     }} ref="raxCanvasDemo" />;
//   }
// }

// export default CanvasSample;
