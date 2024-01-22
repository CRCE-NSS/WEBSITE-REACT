import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import plantData from './tree-pages/PlantData';
import PlantCard from './PlantCard';
import { Card, CardActions, CardContent, CardHeader, Grid, Icon } from '@mui/material';
import Box from '@mui/material/Box';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import Typewriter from "typewriter-effect";
import StairsIcon from '@mui/icons-material/Stairs';

function Tree_Main() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Function to filter plants based on the selected category
    const getFilteredPlants = () => {
        if (!selectedCategory) {
            return plantData;
        }

        const filteredPlants = plantData
            .filter((plant) => {
                const locations = plant.campusLocation.split(',').map((location) => location.trim());
                return locations.includes(selectedCategory);
            });

        console.log('Filtered Plants:', filteredPlants);

        return filteredPlants;
    };

    useEffect(() => {
        setSelectedCategory(null);
    }, []);


    return (
        <div className="Tree-main" style={{
            textAlign: 'center',
            // position: 'relative',
            // backgroundImage: 'url("/images/logos/plantBackground.svg")',
            // backgroundPosition: 'center',
            // backgroundSize: 'cover',

            // height: '100vh', // Set a fixed height or adjust as needed
            // display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'center',
            // alignItems: 'center',


        }}>
            <Box sx={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                // width: 'fit-content',
                height: '100%',
                backgroundImage: 'url("/images/logos/plantBackground.svg")',
                //backgroundImage: 'url("https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: ' blur(0.95px)',
                zIndex: '-1', /* Place the background layer behind the content */
            }}></Box>
            <Box sx={{
                position: 'relative',
                marginTop: '140px'
            }} >
                {/* <div className="page-about"> */}
                <Stack
                    className="page-about"
                    direction="column"
                    alignItems="center"
                    spacing={2}
                    sx={{
                        zIndex: 2,
                        textAlign: 'center',
                        '@media (max-width: 480px)': {
                            marginTop: '140px'
                        }

                    }}
                >
                    {/* <Typography variant="h4" color="#09340B" className='Treehead'>What is this page about?</Typography> */}
                    <div className='typewriter' >
                        {/* <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("What is this Page About?")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("What is this Page About?")
                                    .start();
                            }}

                        /> */}
                        <Typewriter
                            options={{
                                strings: ['What is this Page About?'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>


                    {/* <p>
                    So this page is the project undertaken by NSS-CRCE under the guidance of Principal of CRCE Dr. Surendra Singh Rathod. Out motive is to educate the students about various Trees which are there in the college campus. For this we are using QR Codes through which the students can scan it and get the basic information of that particular Tree. The information contains the Botanical Name, About it, Location in Campus etc.
                </p> */}
                    <Typography variant="h8" align="justify" color="black" paragraph className='para'
                        sx={{ margin: '20px' }}
                    >
                        So this page is the project undertaken by NSS-CRCE under the guidance of Principal of CRCE Dr. Surendra Singh Rathod. Our motive is to educate the students about various Trees which are there in the college campus. For this we are using QR Codes through which the students can scan it and get the basic information of that particular Tree. The information contains the Botanical Name, About it, Location in Campus etc.
                    </Typography>

                    {/* </div> */}
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 3, sm: 2, md: 4 }}
                    justifyContent="center"
                    margin={{ xs: '10px 0', sm: '10px 0', md: '20px 0' }}
                >
                    <Box>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => {
                                setSelectedCategory('Stairs');
                                console.log('Selected Category:', selectedCategory); // Log the selected category
                            }}>
                            Stairs <ArrowDropDownIcon />
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => {
                                setSelectedCategory('Old Canteen');
                                console.log('Selected Category:', selectedCategory); // Log the selected category
                            }}>
                            Canteen <ArrowDropDownIcon />
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => setSelectedCategory('Church')} >
                            Church <ArrowDropDownIcon />
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => {
                                setSelectedCategory('School Hall');
                                console.log('Selected Category:', selectedCategory); // Log the selected category
                            }}>
                            School Hall <ArrowDropDownIcon />
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => {
                                setSelectedCategory('Basketball Court');
                                console.log('Selected Category:', selectedCategory); // Log the selected category
                            }}>
                            BasketBall Court <ArrowDropDownIcon />
                        </Button>
                    </Box>
                </Stack>


                {/* Render PlantCard for each plant in the selected category */}
                {selectedCategory && (<Grid container spacing={2} justifyContent="center" alignItems="center">
                    {getFilteredPlants().map((plant, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}
                            style={{
                                margin: '0 20px'
                            }}
                        >
                            <PlantCard plant={plant} />
                        </Grid>
                    ))}
                </Grid>
                )}
            </Box>
        </div >
    );
}


export default Tree_Main;





