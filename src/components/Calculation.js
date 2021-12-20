import React, { useState } from 'react';
import styled from 'styled-components';
import { Select, InputLabel, MenuItem, TextField, Button, FormControl, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse, Typography, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';


function Calculation() {
    const [weight, setWeight] = useState('');
    const [level, setLevel] = useState('');
    const [bench, setBench] = useState(false);

    const handleChange = (event) => {
        setLevel(event.target.value);
    };

    function getWeight(val) {
        setWeight(val.target.value);
    }

    function computeData() {
        setBench(Math.floor(weight * level));
    }

    function createData(exerciseName, exerciseSets, oneRepMax, ratio, protein, price) {
        return {
            exerciseName,
            exerciseSets,
            oneRepMax,
            ratio,
            protein,
            price,
            workingSet: [
                {
                    sets: 1,
                    exerciseWeight: Math.floor(weight * level * 0.30 * ratio),
                    exerciseReps: 12,
                },
                {
                    sets: 2,
                    exerciseWeight: Math.floor(weight * level * 0.50 * ratio),
                    exerciseReps: 10,
                },
                {
                    sets: 3,
                    exerciseWeight: Math.floor(weight * level * 0.80 * ratio),
                    exerciseReps: 8,
                },
                {
                    sets: 4,
                    exerciseWeight: Math.floor(weight * level * 0.90 * ratio),
                    exerciseReps: 4,
                },
            ],
        };
    }

    function createDataPower(exerciseName, exerciseSets, oneRepMax, ratio, protein, price) {
        return {
            exerciseName,
            exerciseSets,
            oneRepMax,
            ratio,
            protein,
            price,
            workingSet: [
                {
                    sets: 1,
                    exerciseWeight: Math.floor(weight * level * 0.30 * ratio),
                    exerciseReps: 12,
                },
                {
                    sets: 2,
                    exerciseWeight: Math.floor(weight * level * 0.50 * ratio),
                    exerciseReps: 10,
                },
                {
                    sets: 3,
                    exerciseWeight: Math.floor(weight * level * 0.74 * ratio),
                    exerciseReps: 8,
                },
                {
                    sets: 4,
                    exerciseWeight: Math.floor(weight * level * 0.85 * ratio),
                    exerciseReps: 4,
                },
                {
                    sets: 5,
                    exerciseWeight: Math.floor(weight * level * 0.90 * ratio),
                    exerciseReps: 2,
                },
            ],
        };
    }

    function createDataHyper(exerciseName, exerciseSets, oneRepMax, ratio, protein, price) {
        return {
            exerciseName,
            exerciseSets,
            oneRepMax,
            ratio,
            protein,
            price,
            workingSet: [
                {
                    sets: 1,
                    exerciseWeight: Math.floor(weight * level * 0.30 * ratio),
                    exerciseReps: 12,
                },
                {
                    sets: 2,
                    exerciseWeight: Math.floor(weight * level * 0.40 * ratio),
                    exerciseReps: 10,
                },
                {
                    sets: 3,
                    exerciseWeight: Math.floor(weight * level * 0.60 * ratio),
                    exerciseReps: 8,
                },
                {
                    sets: 4,
                    exerciseWeight: Math.floor(weight * level * 0.50 * ratio),
                    exerciseReps: 'To Failure',
                },
            ],
        };
    }

    function createDataDumbbell(exerciseName, exerciseSets, oneRepMax, ratio, protein, price) {
        return {
            exerciseName,
            exerciseSets,
            oneRepMax,
            ratio,
            protein,
            price,
            workingSet: [
                {
                    sets: 1,
                    exerciseWeight: Math.floor(weight * level * 0.30 * ratio) + ' per dumbbell',
                    exerciseReps: 12,
                },
                {
                    sets: 2,
                    exerciseWeight: Math.floor(weight * level * 0.50 * ratio) + ' per dumbbell',
                    exerciseReps: 10,
                },
                {
                    sets: 3,
                    exerciseWeight: Math.floor(weight * level * 0.80 * ratio) + ' per dumbbell',
                    exerciseReps: 8,
                },
                {
                    sets: 4,
                    exerciseWeight: Math.floor(weight * level * 0.90 * ratio) + ' per dumbbell',
                    exerciseReps: 4,
                },
            ],
        };
    }

    function Row(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);

        return (
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell align="left">
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                            sx={{ color: '#1976d2' }}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.exerciseName}
                    </TableCell>
                    <TableCell align="right">{row.exerciseSets}</TableCell>
                    <TableCell align="right">{row.oneRepMax}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div" fontStyle={'italic'}>
                                    Workout Plan
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold' }}>Set</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold' }}>Weight&nbsp;(lbs)</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold' }} align="left">Reps</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.workingSet.map((workingSetRow) => (
                                            <TableRow key={workingSetRow.sets}>
                                                <TableCell component="th" scope="row">
                                                    {workingSetRow.sets}
                                                </TableCell>
                                                <TableCell>{workingSetRow.exerciseWeight}</TableCell>
                                                <TableCell align="left">{workingSetRow.exerciseReps}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment >
        );

    }

    Row.propTypes = {
        row: PropTypes.shape({
            exerciseSets: PropTypes.number.isRequired,
            ratio: PropTypes.number.isRequired,
            oneRepMax: PropTypes.any.isRequired,
            workingSet: PropTypes.arrayOf(
                PropTypes.shape({
                    exerciseReps: PropTypes.any.isRequired,
                    exerciseWeight: PropTypes.any.isRequired,
                    sets: PropTypes.number.isRequired,
                }),
            ).isRequired,
            exerciseName: PropTypes.string.isRequired,
            price: PropTypes.any,
            protein: PropTypes.any,
        }).isRequired,
    };

    const chest = [
        createDataPower('Bench Press', 5, Math.floor(bench), 1),
        createDataDumbbell('Incline Dumbbell Bench Press', 4, 'NA', .4),
        createDataHyper('Machine Chest Fly', 4, 'NA', .6),
    ];

    const shoulders = [
        createDataDumbbell('Dumbbell Shoulder Press', 4, 'NA', .3),
        createDataDumbbell('Dumbbell Lateral Raise', 4, 'NA', .1),
        createDataHyper('Machine Rear Delt Fly', 4, 'NA', .5),
    ];

    const arms = [
        createDataDumbbell('Dumbbell Bicep Curls', 4, 'NA', .1),
        createDataHyper('Tricep Pushdown', 4, 'NA', .3),
        createData('Dumbbell Wrist Curl', 4, 'NA', .1),
    ];

    const back = [
        createDataPower('Deadlift', 5, Math.floor(bench * 1.4), 1.45),
        createDataHyper('Lat Pulldown', 4, 'NA', 1.5),
        createData('Seated Cable Row', 4, 'NA', .5),
    ];

    const legs = [
        createDataPower('Squat', 5, Math.floor(bench * 1.25), 1.2),
        createDataHyper('Leg Extension', 4, 'NA', .5),
        createDataHyper('Machine Calf Raise', 4, 'NA', .3),
    ];

    return (
        <Container>
            <Menu>
                <Fade top>
                    <h1>Do Better, Be Better.</h1>
                </Fade>
                <Calc>
                    <Fade bottom>
                        <h1>Start your program!</h1>
                    </Fade>
                    <HeightWeight>
                        <Fade>
                            <h2>Body Weight</h2>
                        </Fade>
                        <TextField id="outlined-basic" label="lbs" variant="outlined" onChange={getWeight} />
                        <Fade>
                            <h2>Experience Level</h2>
                        </Fade>
                        <Box>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="experience-level">Level</InputLabel>
                                <Select
                                    labelId="experience-level"
                                    id="select-level"
                                    value={level}
                                    label="Level"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0.46}>Beginner</MenuItem>
                                    <MenuItem value={0.74}>Novice</MenuItem>
                                    <MenuItem value={1.11}>Intermediate</MenuItem>
                                    <MenuItem value={1.55}>Advance</MenuItem>
                                    <MenuItem value={2.03}>Elite</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Fade>
                            <Button variant="contained" onClick={() => computeData()}>Calculate Routine</Button>
                        </Fade>
                    </HeightWeight>
                </Calc>
            </Menu>
            <BottomMenu>
                <Fade top>
                    <h1>Results</h1>
                </Fade>
                <Fade bottom>
                    <TableContainer
                        component={Paper}
                        elevation={16}
                        sx={{ marginBottom: '40px' }}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        fontSize: 20
                                    }}>CHEST</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Exercise&nbsp;(s)</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }} align="right">Sets</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }} align="right">One Rep Max (lbs)</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {chest.map((row) => (
                                    <Row key={row.exerciseName} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Fade>
                <Fade bottom>
                    <TableContainer
                        component={Paper}
                        elevation={16}
                        sx={{ marginBottom: '40px' }}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        fontSize: 20
                                    }}>SHOULDERS</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Exercise&nbsp;(s)</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }} align="right">Sets</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }} align="right">One Rep Max (lbs)</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {shoulders.map((row) => (
                                    <Row key={row.exerciseName} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Fade>
                <Fade bottom>
                    <TableContainer
                        component={Paper}
                        elevation={16}
                        sx={{ marginBottom: '40px' }}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        fontSize: 20
                                    }}>ARMS</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Exercise&nbsp;(s)</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }} align="right">Sets</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }} align="right">One Rep Max (lbs)</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {arms.map((row) => (
                                    <Row key={row.exerciseName} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Fade>
                <Fade bottom>
                    <TableContainer
                        component={Paper}
                        elevation={16}
                        sx={{ marginBottom: '40px' }}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        fontSize: 20
                                    }}>BACK</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Exercise&nbsp;(s)</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }} align="right">Sets</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }} align="right">One Rep Max (lbs)</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {back.map((row) => (
                                    <Row key={row.exerciseName} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Fade>
                <Fade bottom>
                    <TableContainer
                        component={Paper}
                        elevation={16}
                        sx={{ marginBottom: '2px' }}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        fontSize: 20
                                    }}>LEGS</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Exercise&nbsp;(s)</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }} align="right">Sets</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }} align="right">One Rep Max (lbs)</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {legs.map((row) => (
                                    <Row key={row.exerciseName} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Fade>
            </BottomMenu>
        </Container >
    )
}

export default Calculation

const Container = styled.div`
    height: auto;
    width: 100vw;
    background-color: white;
    overflow: hidden;
    
    h1 {
        text-align: center;
        color: white;
        font-style: italic;
        font-weight: 200;
        font-size: 3em;
    }
`

const Menu = styled.div`
    background-color: white;
    width: auto;
    padding: 0px 10vw;
    padding-top: 160px;
    padding-bottom: 80px;
    text-align: center;
    position: relative;
    align-content: center;
    justify-items: center;
    background-image: url('https://s3.amazonaws.com/nikeinc/assets/80354/JustDoItHQ_20180620-JDIHQ-036_hd_1600.jpg?1529593278');
    background-position: top;

    h1 {
        margin-top: 0px;
        text-align: center;
    }
`
const Calc = styled.div`
    height: auto;
    width: 60vw;
    border-color: #f8f8f8;
    border-style: solid;
    border-radius: 5px;
    border-width: 5px;
    margin: 0 auto;
    margin-top: 40px;
    padding-bottom: 34px;
    background-color: #f8f8f8;
    
    button {
        margin-top: 20px;
        font-size: 18px;

    }

    h1 {
        color: black;
        padding-top: 20px;
        font-style: normal;
        font-size: 2em;
        font-weight: 400;
    }
`

const HeightWeight = styled.div`
    height: auto;
    width: auto;
    background-color: #f8f8f8;
    text-align: center;
    justify-content: center;

    h2 {
        margin-right: 20px;
        margin-left: 20px;
        font-size: 16px;
    }

    input {
        margin-right: 20px;
    }
`

const BottomMenu = styled.div`
    background-color: #f8f8f8;
    width: auto;
    padding: 0px 10vw;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    position: relative;
    align-content: center;
    justify-items: center;

    h1 {
        margin-top: 0px;
        text-align: left;
        color: black;
        font-weight: 700;
        font-size: 2.5em;
    }
`