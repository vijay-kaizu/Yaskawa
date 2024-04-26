import React, {useState} from 'react';
import {
    AppBar,
    Box, Card, CardActionArea, CardContent, CardHeader, CardMedia,
    Container, Grid,
    IconButton, InputAdornment,
    Menu,
    MenuItem, Select,
    Stack,
    TextField,
    Toolbar, Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import {ArrowRight, ChevronRight, FilterAlt} from "@mui/icons-material";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const HomePage = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position="static" sx={{height: "64px"}}>
                <Container maxWidth="100%">
                    <Toolbar disableGutters>
                        <Button sx={{p: 0}} onClick={handleClick}>
                            <img src={`/img/yaskawa.png`} alt="Yaskawa Logo" style={{height: "23px", width: "216px"}}/>
                        </Button>
                        <div style={{flexGrow: 1}}></div>
                        <IconButton onClick={handleClick}>
                            <Box
                                sx={{
                                    width: 24,
                                    height: 24,
                                    bgcolor: 'background.paper',
                                    '&:hover': {
                                        bgcolor: 'background.default',
                                        borderRadius: '50%',
                                    },
                                }}
                            />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            getContentAnchorEl={null}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </Toolbar>
                </Container>
            </AppBar>
            <Stack direction={'row'} alignItems={'center'}>
                <TextField
                    size="small"
                    placeholder={"Search"}
                    sx={{
                        width: "1147px",
                        height: "41px",
                        borderRadius: "8px",
                        padding: 2,
                        '& .MuiInputBase-input': {
                            paddingLeft: '32px',
                            paddingRight: '32px',
                        },
                        '& .MuiInputAdornment-root': {
                            position: 'absolute',
                        },
                        '& .MuiInputAdornment-positionStart': {
                            left: '8px',
                        },
                        '& .MuiInputAdornment-positionEnd': {
                            right: '8px',
                        },
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        startAdornment: (
                            <SearchIcon style={{height: "16px", width: "16px", border: "1px"}} color="disabled"/>
                        ),
                        endAdornment: (
                            <MicIcon color="disabled"/>
                        ),
                    }}
                />
                <Button
                    sx={{
                        height: '40px',
                        width: '109px',
                        padding: '2.5,5,2.5,5',
                        borderRadius: '3px',
                    }}
                    variant={'contained'} size={'small'}>
                    <Typography sx={{height: '21px'}}>Search</Typography>
                </Button>
                <Button
                    sx={{
                        height: '40px',
                        width: '96px',
                        padding: '8px',
                        borderRadius: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: 2,
                        borderColor: "#E5E7EB",
                        borderWidth: '1px',
                        borderStyle: 'solid',
                    }}
                    size={'small'}
                    startIcon={<FilterAlt/>}
                >
                    <Typography variant="body2" sx={{height: '21px'}}>Filter</Typography>
                </Button>
                <Button
                    sx={{
                        height: '40px',
                        width: '150px',
                        padding: '8px',
                        borderRadius: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: 2,
                        borderColor: "#E5E7EB",
                        borderWidth: '1px',
                        borderStyle: 'solid',
                    }}
                    size={'small'}
                    startIcon={<MicIcon/>}
                >
                    <Typography variant="body2" sx={{height: '21px'}}>Voice Search</Typography>
                </Button>
            </Stack>
            <div style={{padding: '15px'}}>
                <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    <Grid item xs={6}>
                        <Select
                            size="small"
                            sx={{
                                width: "100%",
                                height: "42px",
                                padding: 2
                            }}
                            startAdornment={
                                <InputAdornment position="start">
                                    <PeopleAltIcon color={"disabled"}/>
                                </InputAdornment>
                            }
                        >
                            <MenuItem>

                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            size="small"
                            sx={{
                                width: "100%",
                                height: "42px",
                                padding: 2
                            }}
                            startAdornment={
                                <InputAdornment position="start">
                                    <PeopleAltIcon color={"disabled"}/>
                                </InputAdornment>
                            }
                        >
                            <MenuItem>

                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            size="small"
                            sx={{
                                width: "100%",
                                height: "42px",
                                padding: 2
                            }}
                            startAdornment={
                                <InputAdornment position="start">
                                    <PeopleAltIcon color={"disabled"}/>
                                </InputAdornment>
                            }
                        >
                            <MenuItem>

                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            size="small"
                            sx={{
                                width: "100%",
                                height: "42px",
                                padding: 2
                            }}
                            startAdornment={
                                <InputAdornment position="start">
                                    <PeopleAltIcon color={"disabled"}/>
                                </InputAdornment>
                            }
                        >
                            <MenuItem>

                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{
                            height: "261px", borderColor: "#E5E7EB",
                            borderWidth: '1px',
                            borderStyle: 'solid', display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                            <Typography variant={'h4'} textAlign={'left'}>Powering innovation & trust at 200,000+
                                companies
                                worldwide</Typography>
                            <Typography textAlign={'left'}>Empower Developers, IT Ops, and business teams to collaborate
                                at
                                high velocity.
                                Respond to changes and deliver great customer and employee service experiences
                                fast.</Typography>
                            <Button sx={{width: "150px", height: "24px"}}
                                    endIcon={<ChevronRight/>}
                            >
                                Learn more

                            </Button>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{
                            height: "261px", borderColor: "#E5E7EB",
                            borderWidth: '1px',
                            borderStyle: 'solid',
                        }}>
                            <Typography variant={'h4'} textAlign={'left'}>Powering innovation & trust at 200,000+
                                companies
                                worldwide</Typography>
                            <Typography textAlign={'left'}>Empower Developers, IT Ops, and business teams to collaborate
                                at
                                high velocity.
                                Respond to changes and deliver great customer and employee service experiences
                                fast.</Typography>
                            <Button sx={{width: "150px", height: "24px"}}
                                    endIcon={<ChevronRight/>}
                            >
                                Learn more

                            </Button>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{
                            height: "433px", borderColor: "#E5E7EB",
                            borderWidth: '1px',
                            borderStyle: 'solid',
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="216px"
                                    src={`/img/content.png`}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" textAlign={'left'}>
                                        Test document (20126_draft)
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={'left'}>
                                        Here are the biggest enterprise technology acquisitions of 2021 so far, in
                                        reverse
                                        chronological order.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{
                            height: "433px", borderColor: "#E5E7EB",
                            borderWidth: '1px',
                            borderStyle: 'solid',
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="216px"
                                    src={`/img/content2.png`}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" textAlign={'left'}>
                                        Noteworthy technology acquisitions 2021
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={'left'}>
                                        Here are the biggest enterprise technology acquisitions of 2021 so far, in
                                        reverse
                                        chronological order.
                                    </Typography>
                                    <Button variant={"contained"}
                                            sx={{width: "150px", height: "41px"}}
                                            endIcon={<ArrowRight/>}
                                    >
                                        Read more

                                    </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{
                            height: "433px", borderColor: "#E5E7EB",
                            borderWidth: '1px',
                            borderStyle: 'solid',
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="216px"
                                    src={`/img/content.png`}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" textAlign={'left'}>
                                        Test document (20126_draft)
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={'left'}>
                                        Here are the biggest enterprise technology acquisitions of 2021 so far, in
                                        reverse
                                        chronological order.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{
                            height: "433px", borderColor: "#E5E7EB",
                            borderWidth: '1px',
                            borderStyle: 'solid',
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="216px"
                                    src={`/img/content2.png`}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" textAlign={'left'}>
                                        Noteworthy technology acquisitions 2021
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={'left'}>
                                        Here are the biggest enterprise technology acquisitions of 2021 so far, in
                                        reverse
                                        chronological order.
                                    </Typography>
                                    <Button variant={"contained"}
                                            sx={{width: "150px", height: "41px"}}
                                            endIcon={<ArrowRight/>}
                                    >
                                        Read more

                                    </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default HomePage;
