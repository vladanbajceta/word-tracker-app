import { Box, Paper, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    text1: {
        color: "#cccccc",
        fontSize: 18,
    },
});

const ResultDisplay = ({ ItemDE, ItemENG }) => {
    const classes = useStyles();
    return (
        <>
            <Box mt={5} mx={2}>
                <Paper>
                    <Box
                        m={2}
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.text1}
                    >
                        <Typography
                            bgcolor="#cccccc"
                            variant="p"
                            color="initial"
                        >
                            DE
                        </Typography>
                    </Box>
                    <Box
                        m={2}
                        minHeight={70}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="h4" color="initial">
                            {ItemDE}
                        </Typography>
                    </Box>
                </Paper>

                <Paper>
                    <Box
                        m={2}
                        display="flex"
                        justifyContent="flex-end"
                        className={classes.text1}
                    >
                        <Typography
                            bgcolor="#cccccc"
                            variant="p"
                            color="initial"
                        >
                            ENG
                        </Typography>
                    </Box>
                    <Box
                        m={2}
                        minHeight={70}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="h4" color="initial">
                            {ItemENG}
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </>
    );
};

export default ResultDisplay;
