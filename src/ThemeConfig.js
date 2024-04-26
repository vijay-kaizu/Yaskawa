// MUI
import {createTheme} from "@mui/material";
import {blue, green, purple, orange, red, deepOrange, brown, grey} from '@mui/material/colors';

export const themeDef = {
    "kiku-blue": {
        "primaryColor": blue["500"],
        "primaryColor11": blue["100"],
        "primaryColor22": blue["200"],
        "primaryColor33": blue["300"],
        "primaryColor66": blue["500"],
        "sectionColor": blue["100"],
        "scrollColor": blue["100"],
        "selectedColor": blue["50"],
        "selectedColorDark": blue["900"],
    },
    "kiku-green": {
        "primaryColor": green["600"],
        "primaryColor11": green["100"],
        "primaryColor22": green["200"],
        "primaryColor33": green["300"],
        "primaryColor66": green["500"],
        "sectionColor": green["100"],
        "scrollColor": green["100"],
        "selectedColor": green["50"],
        "selectedColorDark": green["900"],
    },
    "kiku-purple": {
        "primaryColor": purple["600"],
        "primaryColor11": purple["100"],
        "primaryColor22": purple["200"],
        "primaryColor33": purple["300"],
        "primaryColor66": purple["500"],
        "sectionColor": purple["100"],
        "scrollColor": purple["100"],
        "selectedColor": purple["50"],
        "selectedColorDark": purple["900"],
    },
    "kiku-orange": {
        "primaryColor": deepOrange["800"],
        "primaryColor11": deepOrange["100"],
        "primaryColor22": deepOrange["200"],
        "primaryColor33": deepOrange["300"],
        "primaryColor66": deepOrange["500"],
        "sectionColor": deepOrange["100"],
        "scrollColor": deepOrange["100"],
        "selectedColor": deepOrange["50"],
        "selectedColorDark": deepOrange["900"],
    },
    "kiku-brown": {
        "primaryColor": brown["400"],
        "primaryColor11": brown["50"],
        "primaryColor22": brown["200"],
        "primaryColor33": brown["300"],
        "primaryColor66": brown["500"],
        "sectionColor": brown["100"],
        "scrollColor": brown["100"],
        "selectedColor": brown["50"],
        "selectedColorDark": brown["900"],
    },
    "kiku-grey": {
        "primaryColor": grey["400"],
        "primaryColor11": grey["50"],
        "primaryColor22": grey["200"],
        "primaryColor33": grey["300"],
        "primaryColor66": grey["500"],
        "sectionColor": grey["100"],
        "scrollColor": grey["100"],
        "selectedColor": grey["50"],
        "selectedColorDark": grey["900"],
    },
    /*
      "kiku-blue"   :      {"primaryColor": blue["500"],      "sectionColor": blue["100"],      "scrollColor":blue["100"],      "headerColor":blue["200"],      },
      "kiku-green"  :      {"primaryColor": green["600"],     "sectionColor": green["100"],     "scrollColor":green["100"],     "headerColor":green["200"],     },
      "kiku-purple" :      {"primaryColor": purple["600"],    "sectionColor": purple["100"],    "scrollColor":purple["100"],    "headerColor":purple["200"],    },
      "kiku-deep-orange" : {"primaryColor": deepOrange["800"],"sectionColor": deepOrange["100"],"scrollColor":deepOrange["100"],"headerColor":deepOrange["200"],},
      "kiku-yellow"  :     {"primaryColor": yellow["700"],    "sectionColor": yellow["100"],    "scrollColor":yellow["100"],    "headerColor":yellow["200"],    },
    */
};

//const primaryColor = {"":blue["500"],"Reporter":green["600"],"Standard":blue["600"],"Administrator":purple["600"]};

//const sectionColor = {"":blue["100"],"Reporter":green["100"],"Standard":blue["100"],"Administrator":purple["100"]};

export const getTheme = (key, darkMode) => {
    return createTheme({
        typography: {
//      fontFamily: ["Kosugi Maru","Roboto","Noto Sans JP","Helvetica","Arial","sans-serif"].join(','),
            fontFamily: ["Poppins", "Kosugi Maru", "Roboto", "Noto Sans JP", "Helvetica", "Arial", "sans-serif"].join(','),
            //fontFamily: ["Roboto Mono","Kosugi Maru","Roboto","Noto Sans JP","Helvetica","Arial","sans-serif"].join(','),
            fontSize: 12,
            /*
            fontWeightLight: 300,
            fontWeightRegular: 300,
            fontWeightMedium: 500,
            fontWeightBold: 700,*/
            button: {
                textTransform: "none"
            },
        },
        palette: {
            primary: {
                main: themeDef[key].primaryColor,
            },
            low: {
                main: blue["500"],
            },
            normal: {
                main: orange["500"],
            },
            high: {
                main: red["500"],
            },
            foreground: {
                main: "#FFFFFF",
            },
            background: {
                main: darkMode ? "#000000" : "#EEEEEE",
                dark: "#000000"
            },
            mode: darkMode ? "dark" : "light",
        },
        mixins: {
            toolbar: {
                minHeight: 64
            }
        },
        components: {
            MuiTypography: {
                defaultProps: {
                    color: darkMode ? "#FFFFFF" : "#4d5156"
                }
            },
            MuiList: {
                defaultProps: {
                    dense: false
                }
            },
            MuiTable: {
                defaultProps: {
                    size: "small"
                }
            },
            MuiPaper: {
                defaultProps: {
                    //variant: "outlined",
                    // variant: "outlined" //, elevation: 0,
                    //variant: "elevation", elevation: 3,
                    variant: "elevation",
                    elevation: 0,
                },
                styleOverrides: {
                    root: {
                        "&.Mui-selected": {
                            backgroundColor: darkMode ? themeDef[key].selectedColorDark : themeDef[key].selectedColor
                        }
                    },
                }
            },
            MuiMenu: {
                defaultProps: {
                    elevation: 10,
                },
            },
            MuiDialog: {
                defaultProps: {
                    variant: "elevation",
                    elevation: 10,
                },
            },
            MuiAccordionSummary: {
                defaultProps: {
                    sx: {
                        // borderRadius: '0px 0px 0px 0px',
                        backgroundColor: '#fff',
                    }
                },
                styleOverrides: {
                    root: {
                        minHeight: "40px",
                        borderTop: darkMode ? "solid 1px #494949" : "solid 1px #eee",
                        '&.Mui-expanded': {
                            // minHeight: "40px",
                            borderBottom: darkMode ? "solid 1px #494949" : "solid 1px #eee",
                        }
                    },
                    content: {
                        marginTop: "8px",
                        marginBottom: "8px",
                        // '&.Mui-expanded': {
                        //   marginTop: "6px",
                        //   marginBottom: "6px",
                        // }
                    }
                }
            },
            MuiAccordionDetails: {
                defaultProps: {
                    sx: {m: 0, p: 0}
                }
            },

            MuiCssBaseline: {
                styleOverrides: {
                    '.wrapperClassName': {
                        backgroundColor: themeDef[key].primaryColor11,
                        borderColor: themeDef[key].primaryColor
                    },
                    '.tabbar': {
                        margin: '10px',
                        borderRadius: '0em 0.5em 0 0',
                        backgroundColor: themeDef[key].primaryColor11
                    },
                    '.tabbar br': {
                        display: 'none'
                    },
                    '.bold-icon': {
                        stroke: themeDef[key].primaryColor33,
                        strokeWidth: 3,
                    },
                    '.bold-add-icon': {
                        stroke: themeDef[key].primaryColor33,
                        strokeWidth: 3,
                    },
                    '.color-icon': {
                        stroke: themeDef[key].primaryColor33,
                    },
                    '.color-text-icon': {
                        stroke: "white",
                        strokeWidth: 2,
                    },
                    '.kiku-document-area-link-green': {
                        color: themeDef[key].primaryColor,
                        textDecoration: 'none'
                    },
                    '.kiku-document-area-link-red': {
                        color: 'red',
                        textDecoration: 'none'
                    },

                    '.kiku-filter-item-hidden': {
                        display: 'none'
                    },

                    '.kiku-filter-item-default': {
                        padding: '5px',
                        marginBottom: '8px',
                        marginRight: '8px',
                        borderRadius: '3px',
                        display: 'flex',
                        color: 'lightgray',
                        border: '1px solid transparent',
                    },

                    '.kiku-filter-item-default .start-icon': {
                        color: themeDef[key].primaryColor11,
                        marginRight: '5px'
                    },
                    '.kiku-filter-item-selected': {
                        padding: '5px',
                        marginBottom: '8px',
                        marginRight: '8px',
                        borderRadius: '3px',
                        color: themeDef[key].primaryColor66,
                        borderWidth: '1px',
                        borderColor: themeDef[key].primaryColor66,
                        display: 'flex'
                    },
                    '.kiku-filter-item-selected .start-icon': {
                        color: themeDef[key].primaryColor66,
                        marginRight: '5px'
                    },
                    '.kiku-meta-data-item': {
                        display: 'inline-block',
                        padding: '5px',
                        backgroundColor: themeDef[key].primaryColor66,
                        margin: '5px 5px 5px 0px',
                        borderRadius: '5px',
                        color: 'white'
                    },
                    '.kiku-meta-data-hidden': {
                        display: 'none'
                    },
                    '.kiku-meta-data-default': {
                        padding: '5px',
                        marginBottom: '8px',
                        borderRadius: '3px'
                    },
                    '.kiku-meta-data-selected': {
                        padding: '5px',
                        marginBottom: '8px',
                        borderRadius: '3px',
                        color: 'white',
                        backgroundColor: themeDef[key].primaryColor66
                    },
                    '.kiku_page': {
                        backgroundColor: darkMode ? "#313131" : themeDef[key].selectedColor,
                    },
                    '.tree_selection_row': {
                        "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.08) !important"
                        }
                    },
                    '.input-file input[type="file" i]::-webkit-file-upload-button': {
                        display: 'inline-block',
                        backgroundColor: themeDef[key].primaryColor,
                        borderColor: 'transparent',
                        color: '#fff',
                        padding: '4px 8px',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginRight: '20px',
                    },
                    '::-webkit-scrollbar': {width: "8px", height: "8px", display: "inline"},
                    '::-webkit-scrollbar-track': {backgroundColor: "rgba(0, 0, 0, 0.03)"},
                    '::-webkit-scrollbar-thumb': {backgroundColor: themeDef[key].scrollColor, borderRadius: "8px"},
                    '::-webkit-scrollbar-corner': {backgroundColor: "background.main"},
                    ':hover': {
                        '::-webkit-scrollbar': {
                            display: "inline"
                        }
                    },
                }
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        '& .MuiContainer-root': {
                            minHeight: "45px",
                            paddingLeft: "0px",
                            paddingRight: "4px",
                            backgroundColor: "white"
                            // themeDef[key].headerColor ? themeDef[key].headerColor : themeDef[key].primaryColor
                        },
                    },
                }
            },
            MuiTabs: {
                styleOverrides: {
                    root: {
                        '& .MuiTab-root': {
                            backgroundColor: darkMode ? 'transparent' : '#FFFFFF'
                        },
                    },
                }
            },
            // MuiToggleButton: {
            //   styleOverrides: {
            //     root: {
            //       '&.Mui-selected, &.Mui-selected:hover': {
            //         color: /*key.indexOf('kiku')===-1*/true?"white":themeDef[key].primaryColor,
            //       },
            //     },
            //   }
            // },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        // '& .MuiChip-sizeSmall': {
                        //   height: '19px'
                        // },
                    },
                }
            },
            ContentViewerContainer: {
                styleOverrides: {
                    root: {
                        //backgroundColor: 'aliceblue',
                    },
                }
            },
            MuiLink: {
                styleOverrides: {
                    root: {
                        fontFamily: "inherit",
                    },
                }
            }
        },
    });
};
