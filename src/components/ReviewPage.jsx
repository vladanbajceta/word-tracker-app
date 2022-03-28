//import { Box, Paper, Typography, Button, Grid } from "@material-ui/core";

import ResultDisplay from "./ResultDisplay";
import TrackPad from "./TrackPad";

const ReviewPage = ({ ItemDE, ItemENG, onPlay, onShuffle, shuffleStatus }) => {
    return (
        <>
            <ResultDisplay ItemDE={ItemDE} ItemENG={ItemENG} />
            <TrackPad
                onPlay={onPlay}
                onShuffle={onShuffle}
                shuffleStatus={shuffleStatus}
            />
        </>
    );
};

export default ReviewPage;
