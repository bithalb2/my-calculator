import React, { Component } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      resultText: ""
    }
  }

  /* let rows = []
  for(let i = 0; i < 4; i++) {
    let row = []
    for(int j = )
  } 
  
 */

  calculateResult() {
    const text = this.state.resultText
  }
  onButtonPressed(text) {
    console.log(text);
    if(text === '=') {
      calculateResult(this.state.resultText)
    }

    this.setState({
      resultText: this.state.resultText+text
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>121</Text>
        </View>
        <View style={styles.buttons}>
        <View style={styles.operations}>
            <View style={styles.column}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>Del</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>/</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.opernText}>+</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <TouchableOpacity onPress={()=>this.onButtonPressed('7')} style={styles.btn}>
                <Text style={styles.btnText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.onButtonPressed('8')} style={styles.btn}>
                <Text style={styles.btnText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.onButtonPressed('9')} style={styles.btn}>
                <Text style={styles.btnText}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
            <TouchableOpacity onPress={()=>this.onButtonPressed('4')} style={styles.btn}>
                <Text style={styles.btnText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.onButtonPressed('5')} style={styles.btn}>
                <Text style={styles.btnText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.onButtonPressed('6')} style={styles.btn}>
                <Text style={styles.btnText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
            <TouchableOpacity onPress={()=>this.onButtonPressed('1')} style={styles.btn}>
                <Text style={styles.btnText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.onButtonPressed('2')} style={styles.btn}>
                <Text style={styles.btnText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.onButtonPressed('3')} style={styles.btn}>
                <Text style={styles.btnText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
            <TouchableOpacity onPress={()=>this.onButtonPressed('.')} style={styles.btn}>
                <Text style={styles.btnText}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.onButtonPressed('0')} style={styles.btn}>
                <Text style={styles.btnText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.onButtonPressed('=')} style={styles.btn}>
                <Text style={styles.btnText}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  resultText: {
    fontSize: 40,
    color: 'gray'
  },
  calculation: {
    flex: 2,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculationText: {
    fontSize: 30,
    color: 'black'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 30
  },
  numbers: {
    flex: 3,
    backgroundColor: 'gray'
  },
  operations: {
    flex: 1
  },
  column: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'white'
  }
})