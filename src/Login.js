import React from 'react';
import {Card, CardContent, CardMedia, Divider, Link, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import {ArrowRight} from "@mui/icons-material";
import GoogleIcon from '@mui/icons-material/Google';

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Set outer div height to full viewport height
            backgroundColor: '#F9FAFB',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F9FAFB',
                gap: 50
            }}>

                <Card style={{height: '490px', width: '576px', borderRadius: '8px', padding: '8px', gap: '5px'}}>
                    <CardContent style={{
                        // display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                    }}>
                        <img src={'/img/yaskawa.png'} alt="Logo" style={{height: '27px', marginBottom: '16px'}}/>
                        <Stack spacing={4}>
                            <Stack spacing={2}>
                                <Typography style={{
                                    fontWeight: '700',
                                    fontSize: '24px'
                                }}>
                                    Welcome back
                                </Typography>
                                <Typography className={'text-sm/font-medium'}>
                                    Start your website in seconds. Don’t have an account? <Link to="/"
                                                                                                style={{cursor: 'pointer'}}>Sign
                                    up</Link>
                                </Typography>
                            </Stack>
                            <Stack spacing={4}>
                                <Stack direction={'row'} spacing={2}>
                                    <Stack alignItems={'start'} height={'71px'}>
                                        <label style={{
                                            fontFamily: 'Inter',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '21px',
                                            color: "#111928",
                                            textAlign: 'start'
                                        }}>Email</label>
                                        <TextField variant="outlined" placeholder={"name@example.com"} style={{
                                            width: '246px',
                                            height: '42px',
                                            borderRadius: '8px',
                                            gap: '2.5px',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '21px',
                                            color: "#F9FAFB",
                                            border: "1px #D1D5DB"
                                        }}/>
                                    </Stack>
                                    <Stack alignItems={'start'} height={'71px'}>
                                        <label style={{
                                            fontFamily: 'Inter',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '21px',
                                            color: "#111928",
                                            textAlign: 'start'
                                        }}>Password</label>
                                        <TextField type={'password'} variant="outlined" placeholder={"••••••••••"}
                                                   style={{
                                                       width: '246px',
                                                       height: '42px',
                                                       borderRadius: '8px',
                                                       gap: '2.5px',
                                                       fontWeight: '500',
                                                       fontSize: '14px',
                                                       lineHeight: '21px',
                                                       color: "#F9FAFB",
                                                       border: "1px #D1D5DB"
                                                   }}/>
                                    </Stack>
                                </Stack>
                                <Divider style={{width: '512px', height: '24px', gap: '6'}}> or </Divider>
                                <Button variant={"outlined"} startIcon={<GoogleIcon/>} style={{
                                    width: '512px',
                                    height: '41px',
                                    borderRadius: '8px',
                                    padding: '2.5px 5px 2.5px 5px',
                                    fontWeight: '500',
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    color: "#F9FAFB",
                                    borderColor: "#E5E7EB",
                                    gap: '2px'
                                }}>
                                    <Typography>
                                        Sign up with Google
                                    </Typography>
                                </Button>
                                <Stack direction={'row'} alignItems={"center"} justifyContent="space-between">
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <input
                                            type="checkbox"
                                            id="rememberMe"
                                            checked={false}
                                            onChange={(e) => {
                                            }}
                                        />
                                        <label htmlFor="rememberMe"> Remember me</label>
                                    </div>
                                    <Typography variant="subtitle1" align="start" color={"#1C64F2"}>
                                        <Link to="/" style={{cursor: 'pointer'}}>Forgot password?</Link>
                                    </Typography>
                                </Stack>
                                <Button variant="contained" style={{backgroundColor: '#0056B5'}} onClick={() => {
                                    navigate('/home')
                                }} fullWidth>
                                    <Typography color={'white'}>Sign in</Typography>
                                </Button>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>


                <div>
                    <Card>
                        <CardContent style={{padding: '0'}}>
                            <CardMedia
                                component="img"
                                width='617px'
                                height="617px"
                                src={`/img/loginLogo.png`}
                                alt="green iguana"
                                style={{backgroundColor: '#F9FAFB'}}
                            />
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );

}
export default LoginPage;
