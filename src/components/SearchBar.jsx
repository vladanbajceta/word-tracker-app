import { Box, TextField, Button, Grid } from "@material-ui/core";

import { useState } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    de: {
        color: "#ebba34",
    },
    eng: {
        color: "#eb4034",
    },
});

const SearchBar = () => {
    const classes = useStyles();
    const [label, setLabel] = useState(true);

    return (
        <>
            {/*             <Paper> */}
            <Box p={2} pt={2} mt={2}>
                <Grid container>
                    <Grid item xs={6}>
                        <Box mb={2}>
                            {" "}
                            <Button variant="outlined" color="primary">
                                TRANSLATE
                            </Button>
                        </Box>
                    </Grid>{" "}
                    <Grid item xs={6}>
                        <Box mb={2} display="flex" flexDirection="row-reverse">
                            {" "}
                            <Button
                                variant="outlined"
                                onClick={() => {
                                    setLabel(!label);
                                }}
                                className={label ? classes.eng : classes.de}
                            >
                                {label ? "English" : "Deutsch"}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                <TextField
                    inputProps={{
                        style: {
                            padding: "10px",
                        },
                    }}
                    InputLabelProps={{
                        style: { fontSize: "1em" },
                    }}
                    id="input Field"
                    label="Please enter text"
                    size="medium"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                />
            </Box>
            {/* </Paper> */}
        </>
    );
};

export default SearchBar;
