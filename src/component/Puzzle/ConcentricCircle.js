import React, { Component } from 'react';
import '../../concentricCircle.css';
import classnames from 'classnames';
import '../../asset/css/otp.css'
import Button from "@mui/material/Button";
import SubmitButton from '../SubmitButton';
// import {Button} from '@mui/material';

const queryParams = new URLSearchParams(window.location.search);

const email = queryParams.get('email')
const domainName = queryParams.get('domainName')
const newUser = queryParams.get('newUser') == 1 ? true : false
const puzzleId = queryParams.get('puzzleId')
const toUpdate = queryParams.get('toUpdate') || 0



let solution = []
var count1 = 0, count2 = 0, count3 = 0;
var arr = []


class HalfCircle extends Component {

    render() {
        return (
            <div className="App-logo half-circle" alt="logo">
            </div>
        );
    }
}

class Circleone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentAngle: 120,
            anglePerClick: 120,
        }
        this.rotateCircle = this.rotateCircle.bind(this);
    }
    c_i(x) {
        {
            count1 = count1 + 1
        }
    }
    rotateCircle() {
        const { currentAngle, anglePerClick } = this.state;
        this.setState({
            currentAngle: currentAngle + anglePerClick
        })
    }
    render() {
        const circleStyle = {
            transform: `rotateZ(${this.state.currentAngle}deg)`
        }

        return (
            <div className="App-logo small-logo"
                alt="logo"
                style={circleStyle}
                onClick={this.rotateCircle}>
                {this.c_i(count1)}
                <div className="little-circle one rose"></div>
                <div className="little-circle two green"></div>
                <div className="little-circle three meroon"></div>
            </div>
        );
    }
}

class Circletwo extends Component {
    c_i(x) {
        {
            count2 = count2 + 1
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            currentAngle: 120,
            anglePerClick: 120,
        }
        this.rotateCircle = this.rotateCircle.bind(this);
    }
    rotateCircle() {
        const { currentAngle, anglePerClick } = this.state;
        this.setState({
            currentAngle: currentAngle + anglePerClick
        })
    }
    render() {
        const circleStyle = {
            transform: `rotateZ(${this.state.currentAngle}deg)`
        }
        return (
            <div className="App-logo big-logo"
                style={circleStyle}
                onClick={this.rotateCircle} >
                {this.c_i(count2)}
                <div className="little-circle2 un react"></div>
                <div className="little-circle2 dos angular"></div>
                <div className="little-circle2 tres vue"></div>

            </div>
        );
    }
}

class Circlethree extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentAngle: 120,
            anglePerClick: 120,
        }
        this.rotateCircle = this.rotateCircle.bind(this);
    }
    c_i(x) {
        { count3 = count3 + 1 }
    }
    rotateCircle() {
        const { currentAngle, anglePerClick } = this.state;
        this.setState({
            currentAngle: currentAngle + anglePerClick
        })
    }
    render() {
        const circleStyle = {
            transform: `rotateZ(${this.state.currentAngle}deg)`,

        }
        return (
            <div className="App-logo biggest-logo" alt="logo" style={circleStyle}
                onClick={this.rotateCircle}>
                {this.c_i(count3)}
                <div className="little-circle ein yellow"></div>
                <div className="little-circle zwei pink"></div>
                <div className="little-circle drei grey"></div>
            </div>
        );
    }
}

class ClawCircle extends Component {
    render() {
        return (
            <div
                className={classnames('App-logo', 'claw-circle', this.props.styleName)}
                alt="logo" >
            </div>
        );
    }
}


class ConcentricCircle extends Component {

    color() {
        if (count1 == 1) {
            arr.push("rose")
        }
        if (count1 == 2) {
            arr.push("meroon")
        }
        if (count1 == 3) {
            arr.push("green")
        }
        if (count2 == 1) {
            arr.push("react")
        }
        if (count2 == 2) {
            arr.push("angular")
        }
        if (count2 == 3) {
            arr.push("vue")
        }
        if (count2 == 4) {
            arr.push("blast")
        }
        if (count2 == 5) {
            arr.push("saturn")
        }
        if (count3 == 1) {
            arr.push("yellow")
        }
        if (count3 == 2) {
            arr.push("grey")
        }
        if (count3 == 3) {
            arr.push("pink")
        }
        console.log(arr)
        arr = []
    }
    render() {

        const imagesAvailable = ['angular', 'vue', 'react']
        const imageChoosen = imagesAvailable[2]
        return (
            <div className='full-screen bg-home3'>
                <div className="App">

                    <header className="App-header">

                        <Circleone />
                        <Circletwo />
                        <Circlethree />
                        <ClawCircle styleName={imageChoosen} />
                        <HalfCircle />

                    </header>
                    <div className='btn2'>
                        {/* <button className="lock" onClick={this.color} >Submit</button> */}
                        {/* <Button
                            onClick={this.color}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Submit
                        </Button> */}
                        <SubmitButton password={this.color.toString()} newUser={newUser} email={email} domainName={domainName} toUpdate={toUpdate} puzzleId={puzzleId} />

                    </div>
                </div>
            </div>
        );
    }
}

export default ConcentricCircle;