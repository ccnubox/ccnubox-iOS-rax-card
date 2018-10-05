import { createElement, Component, render } from "rax";
import View from "rax-view";
import Text from "rax-text";
import moment from "moment";
import MoneyService from "../services/Money.js";
import Image from "rax-image";
const native = require("@weex-module/test");
import centerImage from "./assets/center-card-picture.png";
import { parseSearchString } from "./box-ui/util";
import { confirm } from "./box-ui/common/modal";
import Notification from "./box-ui/common/notification";

const date = moment(new Date()).format("YYYY年MM月DD日");

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
    let qd = {};

    // 获取查询参数
    if (window.location.search) {
      qd = parseSearchString(window.location.search);
    } else {
      alert("参数缺失错误");
    }

    option.userId = qd.sid[0];

    this.getBalance(option);
  }

  getBalance(option) {
    let money;
    return MoneyService.getMoney(option)
      .then(res => {
        native.reportInsightApiEvent("getCardInfo", "success", "null");
        money = res.model.balance;
        this.setState({ money });
        native.changeLoadingStatus(true);
      })
      .catch(err => {
        native.changeLoadingStatus(true);
        confirm(`服务端错误: ${err.status || err}`, "重试", "取消").then(
          val => {
            native.reportInsightApiEvent(
              "getCardInfo",
              "error",
              JSON.stringify(err)
            );
            if (val > 0) {
              native.changeLoadingStatus(false);
              this.getBalance(option);
            }
          }
        );
      });
  }

  render() {
    return (
      <View style={styles.App}>
        <Notification
          pageId="com.muxistudio.card"
          style={{
            width: 750
          }}
        />
        <View style={styles.container}>
          <Image
            style={styles.centerPicture}
            source={centerImage}
            resizeMode="contain"
          />
          <View style={styles.center}>
            <View style={styles.warnWordContainer}>
              <Text style={styles.warnWord}>您的校园卡余额为</Text>
            </View>

            <View style={styles.MoneyContainer}>
              <Text style={styles.Money}>{this.state.money}元</Text>
            </View>
            <View style={styles.DateContainer}>
              <Text style={styles.Date}>截止至{this.state.time}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  App: {
    backgroundColor: "rgb(239,239,244)",
    flex: 1,
    alignItems: "center"
  },
  container: {
    width: 555,
    height: 703,
    position: "relative"
  },

  centerPicture: {
    width: 555,
    height: 703,
    marginTop: 140
  },
  center: {
    position: "absolute",
    top: 140,
    left: 77,
    width: 400,
    height: 703,
    display: "flex",
    alignItems: "center"
  },
  warnWordContainer: {
    color: "rgb(67,67,67)",
    marginTop: 190,
    width: 400,
    display: "flex"
  },
  MoneyContainer: {
    color: "rgb(254,183,90)",
    marginTop: 80,
    width: 400,
    alignItems: "center"
  },
  DateContainer: {
    color: "rgb(142,142,147)",
    marginTop: 150,
    width: 400,
    display: "flex",
    alignItems: "flex-end"
  },
  warnWord: {
    fontSize: 34,
    color: "rgb(67,67,67)"
  },
  Money: {
    fontSize: 74,
    fontWeight: 500,
    color: "rgb(254,183,90)"
  },
  Date: {
    fontSize: 24,
    color: "rgb(142,142,147)"
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
