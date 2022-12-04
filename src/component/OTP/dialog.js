import * as React from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import axios from 'axios';


export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
    otp: string;
    email: String;
}

function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, selectedValue, open, otp } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value: string) => {
        onClose(value);
        console.log(props.otp, props.email)
        axios.post('http://192.168.43.201:5000/user/otpThroughMail', {
            otp: props.otp,
            toEmail: props.email
        })
            .then((value) => { console.log(value); alert('OTP Sent') })
            .catch((err) => console.log(err))
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Choose your method</DialogTitle>
            <List sx={{ pt: 0 }}>
                <ListItem autoFocus button onClick={() => handleListItemClick('sms')}>
                    <ListItemText primary="Send via SMS" />
                </ListItem>
                <ListItem autoFocus button onClick={() => handleListItemClick('email')}>
                    <ListItemText primary="Send via email" />
                </ListItem>
            </List>
        </Dialog>
    );
}

export default function Otp_dialog(props) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            {/*<Typography variant="subtitle1" component="div">*/}
            {/*    Selected: {selectedValue}*/}
            {/*</Typography>*/}
            {/*<br />*/}
            <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
                Get OTP
            </Button>
            {/*<Button variant="outlined" color="success" onClick={handleClickOpen} style={{marginLeft:"10px"}}>*/}
            {/*    Verify*/}
            {/*</Button>*/}
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
                otp={props.otp}
                email={props.email}
            />
        </div>
    );
}
