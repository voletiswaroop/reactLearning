import React, { Component } from 'react'
import './stopWatch.scss'

export default class stopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: '', milisec: 0, sec: 0, min: 0, hour: 0, miliSecOut: 0, secOut: 0, minOut: 0, hourOut: 0, startstop: 0, noOfLaps: 0
    }
    this.startStopCounter = this.startStopCounter.bind(this)
    this.startCounter = this.startCounter.bind(this)
    this.stopCounter = this.stopCounter.bind(this)
    this.counter = this.counter.bind(this)
    this.checkTime = this.checkTime.bind(this)
    this.createLaps = this.createLaps.bind(this)
    this.resetCounter = this.resetCounter.bind(this)
    this.detectSpacePressed = this.detectSpacePressed.bind(this)
  }

  startStopCounter() {
    this.state.startstop = this.state.startstop + 1;
    if (this.state.startstop === 1) {
      this.startCounter();
      document.getElementById("start").innerHTML = "Stop";
    } else if (this.state.startstop === 2) {
      document.getElementById("start").innerHTML = "Start";
      this.setState({
        startstop: 0
      })
      this.stopCounter();
    }
  }

  startCounter() {
    this.setState({
      timer: setInterval(this.counter, 10)
    })
  }

  stopCounter() {
    clearInterval(this.state.timer);
  }

  counter() {
    this.setState({
      miliSecOut: this.checkTime(this.state.milisec),
      secOut: this.checkTime(this.state.sec),
      minOut: this.checkTime(this.state.min),
      hourOut: this.checkTime(this.state.hour),
      milisec: ++this.state.milisec
    })
    if (this.state.milisec === 100) {
      this.setState({
        milisec: 0,
        sec: ++this.state.sec
      })
    }
    if (this.state.sec === 60) {
      this.setState({
        sec: 0,
        min: ++this.state.min
      })
    }
    if (this.state.min === 60) {
      this.setState({
        min: 0,
        hour: ++this.state.hour
      })
    }

    document.getElementById("hour").innerHTML = this.state.hourOut;
    document.getElementById("min").innerHTML = this.state.minOut;
    document.getElementById("sec").innerHTML = this.state.secOut;
    document.getElementById("milisec").innerHTML = this.state.miliSecOut;
  }

  checkTime(inc) {
    if (inc < 10) {
      inc = "0" + inc;
    }
    return inc;
  }
  createLaps() {
    this.state.noOfLaps = this.state.noOfLaps + 1
    let lapsData = document.createElement('div');
    lapsData.innerHTML = `<span>${this.state.noOfLaps} Lap</span> <span>${this.state.hour}</span> <span>${this.state.min}</span> <span>${this.state.sec}</span> <span>${this.state.milisec}</span>`;
    document.getElementsByClassName('laps-wrapper')[0].appendChild(lapsData);
  }

  resetCounter() {
    this.setState({
      hour: 0, min: 0, sec: 0, milisec: 0
    })
    document.getElementById("milisec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hour").innerHTML = "00";
  }

  detectSpacePressed = (e) => {
    if (e.keyCode == 32) {
      console.log('i');

    }
  }
  render() {
    return (
      <div className='stopwatch-wrapper'>
        <div className="stopwatch-container">
          <div className="stopwatch">
            <span id="hour">00</span> : <span id="min">00</span> : <span id="sec">00</span> : <span id="milisec">00</span>
          </div>
          <button onClick={this.startStopCounter} id="start">Start</button>
          <button onClick={this.createLaps} id="lap" onKeyPress={this.detectSpacePressed}>Lap</button>
          <button onClick={this.resetCounter}>Reset</button>
        </div>
        <div className="laps-wrapper">
          <div><span>Laps Count</span><span>Hours</span><span>Mins</span><span>Sec</span><span>Millisec</span></div>
        </div>
      </div>
    )
  }
}