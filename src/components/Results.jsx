import { Box, Typography } from "@material-ui/core";

import Result from "./Result";

const Results = ({ results, onDelete }) => {
    return (
        <>
            {" "}
            <Box m={2} p={1} overflow="auto" maxHeight={450}>
                <Box ml={2} mb={2} mt={1}>
                    <Typography variant="h6">Responses</Typography>
                </Box>
                {results.map((result, index) => {
                    return (
                        <Result
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

export default Results;
