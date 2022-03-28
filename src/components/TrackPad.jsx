import { IconButton, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ShuffleIcon from "@material-ui/icons/Shuffle";

const useStyles = makeStyles({
    play: {
        color: "#999999",
        width: "2em",
        minHeight: "2em",
    },

    shuffleOff: {
        color: "#999999",
        width: "2em",
        minHeight: "2em",
    },
    shuffleOn: {
        color: "#4F958D",
        width: "2em",
        minHeight: "2em",
    },
});

const TrackPad = ({ onPlay, onShuffle, shuffleStatus }) => {
    const classes = useStyles();
    return (
        <>
            <Box mt={5}>
                <Box display="flex" justifyContent="center">
                    {" "}
                    <IconButton aria-label="play" size="large" onClick={onPlay}>
                        <PlayArrowIcon
                            className={classes.play}
                            fontSize="inherit"
                        />
                    </IconButton>{" "}
                    <IconButton
                        aria-label="play"
                        size="large"
                        onClick={onShuffle}
                    >
                        <ShuffleIcon
                            fontSize="inherit"
                            className={
                                shuffleStatus
                                    ? classes.shuffleOn
                                    : classes.shuffleOff
                            }
                        />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};

export default TrackPad;
