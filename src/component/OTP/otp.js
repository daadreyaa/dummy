import React, { useState } from 'react';
import AuthCode from 'react-auth-code-input';
import '../../index.css';
import '../../asset/css/otp.css'
import Otp_dialog from "./dialog";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";


const otp = Math.floor(Math.random() * 100000 + 100000)

const queryParams = new URLSearchParams(window.location.search);

const email = queryParams.get('email')
const domainName = queryParams.get('domainName')
const newUser = queryParams.get('newUser') == 1 ? true : false
const puzzleId = queryParams.get('puzzleId')
const toUpdate = queryParams.get('toUpdate') || 0

const Otp = (props) => {
    const navigate = useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [result, setResult] = useState();
    const handleOnChange = (res: string) => {
        setResult(res);
    };

    function handleClickOpen() {
        if (result == otp) {
            window.location.replace("http://192.168.43.201:3000/1?toUpdate=1&domainName=" + domainName + "&email=" + email + "&puzzleId=1")
        } else {
            alert('Wrong OTP')
        }
    }

    return (
        <div className='full-screen bg-home'>
            <div className='main'>
                {/*<p>One-time password (OTP)</p>*/}
                <div>
                    <div>
                        <h1>
                            One-time password (OTP)
                        </h1>
                        <AuthCode
                            onChange={handleOnChange}
                            containerClassName='container'
                            inputClassName='input'
                        />
                        <p>
                            A verification code has been sent to <br />
                            your devices. Enter the code to continue.
                        </p>
                        {/*<p>Code: {result}</p>*/}

                        <Grid container spacing={0}>
                            <Grid xs={6}>
                                <Otp_dialog otp={otp} email={"boundlessbloggers@gmail.com"}></Otp_dialog>
                            </Grid>
                            <Grid xs={6}>
                                <Button variant="outlined" color="success" onClick={handleClickOpen} style={{ marginLeft: "10px" }}>
                                    Verify
                                </Button>
                            </Grid>
                        </Grid>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Otp;