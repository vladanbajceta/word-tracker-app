import { Box, Paper, Typography, Grid, Divider } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

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
});

const ResultHistory = ({ result, onDelete, onSave }) => {
    const classes = useStyles();

    return (
        <div>
            <Box p={1}>
                <Paper>
                    <Box p={3}>
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

export default ResultHistory;
