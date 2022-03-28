import { Box, Paper, Typography, Grid, Divider } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

import { useState } from "react";

import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
    closeButton: {
        color: "red",
        cursor: "pointer",
    },
    saveButton: {
        color: "#9999",
        cursor: "pointer",
    },
    savedResponese: {
        color: "#1a812b",
    },
});

const Result = ({ result, onDelete, onSave }) => {
    const classes = useStyles();
    const [saved, setSaved] = useState(false);

    return (
        <div>
            <Box p={1}>
                <Paper /* className={saved ? classes.savedResponese : ""} */>
                    <Box
                        p={3}
                        borderLeft={saved ? 10 : ""}
                        className={saved ? classes.savedResponese : ""}
                    >
                        <Grid container justify="space-evenly">
                            <Grid item xs={5}>
                                <Box display="flex" justifyContent="center">
                                    {" "}
                                    <Typography variant="body2" color="initial">
                                        {result.text}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item xs={5}>
                                <Box display="flex" justifyContent="center">
                                    {" "}
                                    <Typography variant="body2" color="initial">
                                        {result.response}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={1}>
                                <Box display="flex" justifyContent="flex-end">
                                    <Box component="span">
                                        <SaveIcon
                                            className={classes.saveButton}
                                            onClick={() => {
                                                setSaved(!saved);
                                            }}
                                        />
                                    </Box>{" "}
                                    <Box component="span" pl="2em"></Box>
                                    <CloseIcon
                                        className={classes.closeButton}
                                        onClick={(id) => onDelete(result.id)}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Box>
        </div>
    );
};

export default Result;
