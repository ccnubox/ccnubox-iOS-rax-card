import Button from "rax-button";
import View from "rax-view";
import Text from "rax-text";
import styles from "./index.css";
import { createElement, Component } from "rax";

function BoxButton(props) {
  const customStyle = {
    container: {
      width: 375
    }
  };
  return (
    <Button
      onPress={props.onClickHandler}
      style={[styles.common, customStyle.container]}
    >
      {props.children ? props.children :
      <View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      }
    </Button>
  );
}

export default BoxButton;
