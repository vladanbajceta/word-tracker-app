import "./App.css";

import SwipeableRoutes from "react-swipeable-routes";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import ResultsHistory from "./components/ResultsHistory";
import Data from "./components/data.js";
import ReviewPage from "./components/ReviewPage";

import { AppBar, Tabs, Tab, Paper, Box, Divider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const useStyles = makeStyles({
    root: {
        paddingTop: "2em",
        display: "flex",
        justifyContent: "center",
    },
    mainWindow: {
        width: 700,
        minHeight: 800,
    },
});

function App() {
    const [tab, setValue] = useState(0);
    const [results, setResultList] = useState(Data);
    const [cycleStatus, setCycle] = useState(false);
    const [items, setReviewItems] = useState(["Press play", ""]);
    const [shuffleStatus, setShuffle] = useState(false);

    let i = 0;

    const cycle = async (data) => {
        if (cycleStatus === false) {
            while (i < data.length) {
                setReviewItems([data[i].text, data[i].response]);
                await sleep(500);
                if (i === data.length - 1) {
                    if (
                        window.confirm("Do you want to start again?") === true
                    ) {
                        i = 0;
                    } else {
                        setCycle(false);
                        setReviewItems(["Press play", ""]);
                        break;
                    }
                } else {
                    i++;
                }
            }
        } else {
            return;
        }
    };

    const onPlay = () => {
        if (shuffleStatus === false) {
            cycle(results);
        } else {
            const shuffledArray = shuffleArray(results);
            cycle(shuffledArray);
        }
    };

    const onShuffle = () => {
        setShuffle(!shuffleStatus);
    };

    const shuffleArray = (data) => {
        return [...data].sort(() => Math.random() - 0.5);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();

    const deleteResponse = (id) => {
        setResultList(results.filter((result) => result.id !== id));
    };

    return (
        <div className={classes.root}>
            <Router>
                <Paper>
                    <Box className={classes.mainWindow}>
                        <AppBar position="static" color="default">
                            <Tabs
                                value={tab}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                                aria-label="action tabs"
                            >
                                <Tab
                                    label="Translate"
                                    button
                                    component={Link}
                                    to={"/"}
                                />
                                <Tab
                                    label="Search history"
                                    button
                                    component={Link}
                                    to={"/search_history"}
                                />
                                <Tab
                                    label="Review"
                                    button
                                    component={Link}
                                    to={"/review"}
                                />
                            </Tabs>
                        </AppBar>
                        <SwipeableRoutes>
                            <Route
                                path="/"
                                exact
                                render={(props) => {
                                    return (
                                        <>
                                            <SearchBar />
                                            <Divider />
                                            <Results
                                                results={results}
                                                onDelete={deleteResponse}
                                            />
                                        </>
                                    );
                                }}
                            />

                            <Route
                                path="/search_history"
                                exact
                                render={(props) => {
                                    return (
                                        <>
                                            <ResultsHistory
                                                results={results}
                                                onDelete={deleteResponse}
                                            />
                                        </>
                                    );
                                }}
                            />
                            <Route
                                path="/review"
                                exact
                                render={(props) => {
                                    return (
                                        <>
                                            <ReviewPage
                                                ItemDE={items[0]}
                                                ItemENG={items[1]}
                                                onPlay={onPlay}
                                                onShuffle={onShuffle}
                                                shuffleStatus={shuffleStatus}
                                            />
                                        </>
                                    );
                                }}
                            />
                        </SwipeableRoutes>
                    </Box>
                </Paper>
            </Router>
        </div>
    );
}

export default App;
