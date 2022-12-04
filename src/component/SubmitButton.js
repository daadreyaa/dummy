import React from "react";
import Button from '@mui/material/Button';
import axios from "axios";
import { valueToPercent } from "@mui/base";
import bcrypt from 'bcryptjs'

const SubmitButton = (props) => {

    console.log(props.email)
    console.log(props.domainName)

    async function saveUserPassword() {
        console.log('save')
        const salt = await bcrypt.genSaltSync(10)

        const hashedPassword = await bcrypt.hash(props.password, salt)

        axios.post('http://192.168.43.201:5000/user/storePassword', {
            email: props.email,
            domainName: props.domainName,
            password: hashedPassword,
        })
            .then((res) => {
                console.log(`Status: ${res.status}`);
                console.log('Body: ', res.data);
                window.location.replace('http://192.168.43.162:8000/user/signup_successful/' + props.puzzleId + '/' + props.email)
                // res.json({ message: response.data })
            }).catch((err) => {
                console.error(err);
            });
    }

    async function verifyUserPassword() {
        console.log('verify')
        axios.post('http://192.168.43.201:5000/user/puzzleSolution', {
            email: props.email,
            domainName: props.domainName,
            password: props.password
        })
            .then((value) => {
                console.log(value)
                if (value.data.message == 1) window.location.replace('http://192.168.43.162:8000/user/auth_success/')
                else window.location.replace('http://192.168.43.162:8000/user/auth_failure/')
            })
            .catch((err) => console.log(err))
    }

    async function updatePassword() {
        console.log('inside update')
        const salt = await bcrypt.genSaltSync(10)

        const hashedPassword = await bcrypt.hash(props.password, salt)

        const data = {
            email: props.email,
            domainName: props.domainName,
            password: hashedPassword,
        }

        axios.post('http://192.168.43.201:5000/user/updatePassword', data)
            .then((res) => {
                console.log(`Status: ${res.status}`);
                console.log('Body: ', res.data);
                // res.json({ message: response.data })
                window.location.replace('http://192.168.43.162:8000/user/login_redirect')
            }).catch((err) => {
                console.error(err);
            });
    }

    function OnPress() {
        props.toUpdate == 1 ? updatePassword() : props.newUser ? saveUserPassword() : verifyUserPassword()
    }

    // function OnPress() {
    //     props.newUser ? saveUserPassword() : verifyUserPassword()
    // }

    return (
        <>
            <Button variant="outlined" color="success" className="m-4" onClick={OnPress} >Click</Button>

        </>
    );

}


SubmitButton.defaultProps = {
    isUpdate: false
}


export default SubmitButton;