import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Grid,
    IconButton,
    Menu,
    MenuItem,
    TextField,
    Toolbar,
    Tooltip,
    Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import {ChevronRight, FilterAlt} from "@mui/icons-material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';


const HomePage = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const favouriteProducts = [
        {key: "1001", label: "A208"},
        {key: "1002", label: "A209"},
        {key: "1001", label: "A210"},

    ]
    const knowledge = [
        {key: "101", label: "Public"},
        {key: "102", label: "BT Public"},
        {key: "103", label: "Public_2"},

    ]
    const whatsNew = [
        {key: "11", label: "DLDT_10005"},
        {key: "12", label: "DLDT_ 10006"},
        {key: "13", label: "DLDT_10007"},

    ]
    const savedSearches = [
        {key: "1", label: "Products"},
        {key: "2", label: "Document Types"},
        {key: "3", label: "Options"},

    ]

    const ContentCardWithImage = ({imageUrl, title, description, isButton}) => {
        return (
            <Grid item xs={3}>
                <Card sx={{
                    height: "100%", borderRadius: "8px",
                    borderColor: "#E5E7EB", borderWidth: '1px', borderStyle: 'solid',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, .1)'
                }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="216px"
                            src={imageUrl}
                            alt="Content Image"
                        />
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            height: '100%'
                        }}>
                            <div>
                                <Typography gutterBottom variant="h5" component="div" sx={{
                                    fontFamily: 'Inter',
                                    fontSize: '30px',
                                    fontWeight: '800',
                                    lineClamp: "38px",
                                    color: "#111928",
                                }} textAlign={'left'}>
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign={'left'}
                                            sx={{
                                                fontFamily: 'Inter',
                                                fontSize: '16px',
                                                fontWeight: '400',
                                                lineClamp: "24px",
                                                color: "#111928",
                                            }}
                                >
                                    {description}
                                </Typography>
                            </div>
                            {isButton && (
                                <Button
                                    variant="contained"
                                    sx={{
                                        textTransform: "none",
                                        alignSelf: 'flex-start',
                                        mt: "8px",
                                        bgcolor: "#0056B5",
                                        borderRadius: "8px"
                                    }}
                                    endIcon={<ArrowForwardIcon sx={{height: "16px", width: "16px", color: "white"}}/>}
                                >
                                    <Typography sx={{
                                        color: "white",
                                        fontFamily: 'Inter',
                                        fontSize: '12px',
                                        fontWeight: '500',
                                    }}>Read more</Typography>
                                </Button>
                            )}
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        );
    };
    const ContentCard = ({title, description}) => {
        return (
            <Grid item xs={6}>
                <Card sx={{
                    borderRadius: "8px",
                    p: "20px",
                    borderColor: "#E5E7EB",
                    borderWidth: '1px',
                    borderStyle: 'solid', display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, .1)',
                }}>
                    <React.Fragment>
                        <CardContent>
                            <Typography sx={{
                                fontFamily: 'Inter',
                                fontSize: '30px',
                                fontWeight: '800',
                                lineClamp: "38px",
                                color: "#111928", mt: -1
                            }} variant={'h4'}
                                        textAlign={'left'}>{title}</Typography>
                            <Typography sx={{
                                fontFamily: 'Inter',
                                fontSize: '18px',
                                fontWeight: '400',
                                color: "#6B7280",
                                lineClamp: "27px"
                            }} textAlign={'left'}>{description}</Typography>
                        </CardContent>
                        <Button sx={{
                            width: "150px",
                            textTransform: "none",
                            mt: -2,
                            ml: -.5
                        }}
                                endIcon={<ChevronRight sx={{
                                    color: "#1C64F2"
                                }}/>}>
                            <Typography sx={{
                                color: "#1C64F2",
                                fontFamily: 'Inter',
                                fontSize: '16px',
                                fontWeight: '500',
                            }}>Learn more</Typography>

                        </Button>
                    </React.Fragment>
                </Card>
            </Grid>
        )
    }
    const SelectWithAutoComplete = ({options, label}) => {
        return (<Grid item xs={6}>
                <TextField
                    size="small"
                    variant="outlined"
                    fullWidth
                    label={
                        <Typography variant="body1" style={{
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '17px',
                            color: "#6B7280"
                        }}>
                            {label}
                        </Typography>
                    } select
                    InputProps={{
                        sx: {
                            borderRadius: "8px",
                        }
                    }}
                    SelectProps={{
                        IconComponent: KeyboardArrowDownIcon,
                    }}
                >
                    {options.map(option => (
                        <MenuItem key={option.key} value={option.key}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        )
    }
    return (
        <div>
            <AppBar position="static" sx={{bgcolor: 'white', height: "64px"}}>
                <Container maxWidth="100%">
                    <Toolbar disableGutters>
                        <Button sx={{p: 2}}>
                            <img src={`/img/yaskawa.png`} alt="Yaskawa Logo" style={{height: "23px", width: "216px"}}/>
                        </Button>
                        <div style={{flexGrow: 1}}></div>
                        <IconButton>
                            <Tooltip title={"Help"}>
                                <HelpIcon sx={{width: "20px", height: '20px'}}/>
                            </Tooltip>
                        </IconButton>
                        <IconButton>
                            <Tooltip title={"Help"}>
                                <NotificationsIcon sx={{width: "20px", height: '20px'}}/>
                            </Tooltip>
                        </IconButton>
                        <IconButton onClick={handleClick}>
                            <Box
                                sx={{
                                    width: 24,
                                    height: 24,
                                    bgcolor: 'background.paper',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    '&:hover': {
                                        bgcolor: 'background.default',
                                    },
                                }}
                            >
                                <img
                                    src="/img/avatar.png"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                    }}
                                    alt={"Profile"}/>
                            </Box>
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
            <div style={{padding: '15px'}}>
                <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    <Box sx={{display: 'flex', alignItems: 'center', mt: "30px", gap: "10px", ml: "8px"}}>
                        <TextField
                            size="small"
                            placeholder={"Search Mockups, Logos..."}
                            sx={{
                                width: "1147px",
                                height: "40px",
                                paddingLeft: "16px",
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                sx: {
                                    borderRadius: "8px",
                                    backgroundColor: "#F9FAFB",
                                },
                                startAdornment: (
                                    <SearchIcon
                                        style={{height: "16px", width: "16px", border: "1px", color: "#6B7280"}}/>
                                ),
                                endAdornment: (
                                    <MicIcon style={{
                                        height: "16px", width: "16px", border: "1px", color: "#6B7280"
                                    }}/>
                                ),
                            }}
                        />
                        <Button
                            sx={{
                                height: '40px',
                                width: '109px',
                                padding: '2.5,5,2.5,5',
                                borderRadius: '8px',
                                textTransform: 'none',
                                marginLeft: '10px',
                                justifyContent: 'center',
                                bgcolor: "#0056B5"
                            }}
                            startIcon={<SearchIcon sx={{height: "16px", width: "16px", color: "white"}}/>}
                            variant={'contained'} size={'small'}>
                            <Typography variant="body2" sx={{
                                fontFamily: 'Inter',
                                fontSize: '14px',
                                fontWeight: '500', width: "47px", height: '21px', color: "white"
                            }}>Search</Typography>
                        </Button>
                        <Button
                            sx={{
                                height: '40px',
                                width: '96px',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: '10px',
                                borderColor: "#E5E7EB",
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                textTransform: 'none'
                            }}
                            size={'small'}
                            startIcon={<FilterAlt sx={{
                                height: "14px",
                                width: "14px",
                                top: "1.75px",
                                left: "1.75px",
                                border: "2px",
                                color: "#111928"
                            }}/>}
                        >
                            <Typography variant="body2" sx={{
                                fontFamily: 'Inter',
                                fontSize: '14px',
                                fontWeight: '500',
                                width: "34px",
                                height: '21px',
                                color: "#111928"
                            }}>Filter</Typography>
                        </Button>

                        <Button
                            sx={{
                                height: '40px',
                                width: '150px',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: '10px',
                                borderColor: "#E5E7EB",
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                textTransform: 'none',
                            }}
                            size={'small'}
                            startIcon={<MicIcon sx={{
                                height: "14px",
                                width: "14px",
                                border: "2px",
                                color: "#111928"
                            }}/>}
                        >
                            <Typography variant="body2" sx={{
                                fontFamily: 'Inter',
                                fontSize: '14px',
                                fontWeight: '500', width: "88px", height: '21px',
                                color: "#111928"
                            }}>Voice Search</Typography>
                        </Button>
                    </Box>
                    <SelectWithAutoComplete label={"My Favourite Knowledges"} options={knowledge}/>
                    <SelectWithAutoComplete label={"Saved Searches"} options={savedSearches}/>
                    <SelectWithAutoComplete label={"Whats New"} options={whatsNew}/>
                    <SelectWithAutoComplete label={"My Favourite Products"} options={favouriteProducts}/>
                    <ContentCard
                        title="Powering innovation & trust at 200,000+ companies worldwide"
                        description={"Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast."}
                    />
                    <ContentCard
                        title="Powering innovation & trust at 200,000+ companies worldwide"
                        description={"Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast."}
                    />
                    <ContentCardWithImage
                        imageUrl="/img/content.png"
                        title="Test document (20126_draft)"
                        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        isButton={false}

                    />
                    <ContentCardWithImage
                        imageUrl="/img/content2.png"
                        title="Noteworthy technology acquisitions 2021"
                        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        isButton={true}
                    />
                    <ContentCardWithImage
                        imageUrl="/img/content.png"
                        title="Test document (20126_draft)"
                        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        isButton={false}
                    />
                    <ContentCardWithImage
                        imageUrl="/img/content2.png"
                        title="Noteworthy technology acquisitions 2021"
                        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        isButton={true}
                    />
                </Grid>
            </div>
        </div>
    );
};

export default HomePage;
