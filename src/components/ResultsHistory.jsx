import { Box, Typography } from "@material-ui/core";

import ResultHistory from "./ResultHistory";

const ResultsHustory = ({ results, onDelete }) => {
    return (
        <>
            {" "}
            <Box m={2} p={1} overflow="auto" maxHeight={700}>
                <Box ml={2} mb={2} mt={1}>
                    <Typography variant="h6">History</Typography>
                </Box>
                {results.map((result, index) => {
                    return (
                        <ResultHistory
                            key={index}
                            result={result}
                            onDelete={onDelete}
                        />
                    );
                })}
            </Box>
        </>
    );
};

export default ResultsHustory;
