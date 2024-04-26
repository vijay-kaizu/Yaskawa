import React, {useState} from "react";
import {Box, Grid, IconButton, TextField, Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import {SelectWithAutoComplete} from "./HomePage";
import InfoIcon from '@mui/icons-material/Info';

function RadioButtonWithLabel({label, onClick}) {
    return <FormControlLabel
        value="option1"
        control={<Radio
            color="default"/>}
        label={
            <Typography variant="body1" style={{
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '17px',
                color: "#111928"
            }}
                        onClick={onClick}
            >
                {label}
            </Typography>
        }
    />;
}

function LabelWithSelect({label, options}) {
    return <div style={{width: '100%'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography
                variant="body3"
                style={{
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '21px',
                    color: '#111928',
                }}
            >
                {label}
            </Typography>
            <IconButton>
                <InfoIcon sx={{color: "#9CA3AF", width: "18px", height: "18px"}}/>
            </IconButton>
        </div>
        <SelectWithAutoComplete label={""} options={options}/>
    </div>
}

const SearchOptions = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const favouriteProducts = [
        {key: "1001", label: "A208"},
        {key: "1002", label: "A209"},
        {key: "1001", label: "A210"},

    ]

    return (
        <div>
            <Box sx={{display: 'flex', alignItems: 'center', mt: "20px", gap: "10px"}}>
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
                        width: '130px',
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
            </Box>
            <RadioGroup value={selectedValue} onChange={handleChange}>
                <Stack direction={'row'} alignItems={'center'} sx={{ml: 2, mt: 2}}>
                    <RadioButtonWithLabel label={"Whole"}/>
                    <RadioButtonWithLabel label={"Title Only"}/>
                    <RadioButtonWithLabel label={"Knowledge ID"}/>
                </Stack>
            </RadioGroup>
            <Stack sx={{ml: 2, mt: 2}}>
                <Typography variant="body3" style={{
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '21px',
                    color: "#111928"
                }}
                >
                    Publication Status
                </Typography>
                <SelectWithAutoComplete label={""} options={favouriteProducts}/>
                <RadioGroup value={selectedValue} onChange={handleChange}>
                    <Stack direction={'row'} alignItems={'center'} sx={{mt: 2}}>
                        <RadioButtonWithLabel label={"Not Specified"}/>
                        <RadioButtonWithLabel label={"Published Date"}/>
                        <RadioButtonWithLabel label={"Modified Date"}/>
                    </Stack>
                </RadioGroup>
                <Grid container>
                    <Grid xs={6}>
                        <LabelWithSelect label={"Publication Status"} options={favouriteProducts}/>
                    </Grid>
                    <Grid xs={6}>
                        <LabelWithSelect label={"Publication Status"} options={favouriteProducts}/>
                    </Grid>
                    <Grid xs={6}>
                        <LabelWithSelect label={"Publication Status"} options={favouriteProducts}/>
                    </Grid>
                    <Grid xs={6}>
                        <LabelWithSelect label={"Publication Status"} options={favouriteProducts}/>
                    </Grid>
                    <Grid xs={6}>
                        <LabelWithSelect label={"Publication Status"} options={favouriteProducts}/>
                    </Grid>
                    <Grid xs={6}>
                        <LabelWithSelect label={"Publication Status"} options={favouriteProducts}/>
                    </Grid>
                </Grid>
            </Stack>
        </div>
    )

}

export default SearchOptions;