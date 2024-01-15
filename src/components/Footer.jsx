// src/components/Footer.jsx
import { Grid, Typography, Stack, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

import React from "react";
<link rel="stylesheet" href="../../public/style.css" />;
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';


function LastUpdated() {
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    // Replace 'owner' and 'repo' with your GitHub username and repository name.
    fetch('https://api.github.com/repos/CRCE-NSS/WEBSITE-REACT')
      .then((response) => response.json())
      .then((data) => {
        const lastUpdatedDate = new Date(data.pushed_at);
        const formattedDate = `${lastUpdatedDate.getDate()} ${lastUpdatedDate.toLocaleString(
          'default',
          { month: 'short' }
        )} ${lastUpdatedDate.getFullYear()}`;
        setLastUpdated(formattedDate);
      });
  }, []);

  return <p id="last-updated" >Last Updated: {lastUpdated}</p>;
}



function Footer() {
  return (
    <section className="footer">
      <Grid container spacing={3} sx={{ bgcolor: '#1976d2', color: "white" , display: { xs: "flex", md: "flex" } ,
      '@media (max-width: "336px")': {
           marginRight : "100px" 
      }
    }} >
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Stack
            direction="column"
            spacing={3}>
            <Stack
              direction="row"
              spacing={5}
              alignItems="center"
              justifyContent="center"
            >
              <Box >
                <img
                  className="nss-logo"
                  alt="NSS Logo"
                  src="/images/logos/nss-logo.svg"
                  style={{
                    width: '50px',
                    height: '50px',
                    transform: 'scale(2)',
                    transition: 'transform 0.2s',
                  }}
                />
              </Box>
              <Typography variant="h4" color="white" sx={{ marginTop: '30' }}>
                {/* National Service Scheme */}
                NSS CRCE
              </Typography>
            </Stack>
            {/* <Stack
              direction="row"
              spacing={5}

            >
              <Stack sx={{ marginTop: '100px' }}
                direction="row"
                spacing={1} >

                <img
                  className="father-logo"
                  alt="Father Logo"
                  src="/images/logos/father-logo.svg"
                  style={{
                    width: '50px',
                    height: '50px',
                    transform: 'scale(2.5)',
                    transition: 'transform 0.2s',
                    lineHeight: '20px',
                    marginLeft: '20px',
                  }}
                /> */}
            {/* <img
                  className="crce-logo"
                  alt="CRCE Logo"
                  src="/images/logos/crce-logo.svg"
                  style={{
                    width: '50px',
                    height: '50px',
                    transform: 'scale(3)',
                    transition: 'transform 0.2s',
                    marginLeft: '50px',
                  }} */}
            {/* /> */}
            {/* </Stack>
              <Typography variant="h5" color="darkBlue" sx={{ marginTop: '20' }}>
                Fr. Conceicao Rodrigues College of Engineering
              </Typography> */}
            {/* </Stack> */}
          </Stack>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Typography variant="h5" color="white" component="div">
            Contact Info
          </Typography>
          <List
           sx={{ 
            marginLeft: '0px',
            '@media (max-width: 900px)': {
              
              marginLeft: '10%',
            },
          }}
          >
            <ListItem >
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText style={{ color: "white" }}
                primary="+91 99204 14062" secondary="Ratan Singh(President)" secondaryTypographyProps={
                  { color: "white", fontSize: "15px" }
                }>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText style={{ color: "white" }}
                primary="+91 93266 65726" secondary="Krishna Soni(Vice President)" secondaryTypographyProps={
                  { color: "white", fontSize: "15px" }
                }>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText style={{ color: "white" }} classname="link"
                primary="+91 99693 54409" secondary="Aarush Wasnik(Senior Web-Master)" secondaryTypographyProps={
                  { color: "white", fontSize: "15px" }
                }>
              </ListItemText>
            </ListItem>
            <ListItem component="a" href="mailto:crce.nss@gmail.com" >
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText style={{ color: "white", textTransform: "lowercase" }}
                primary={("crce.nss@gmail.com").toLowerCase()}  >
              </ListItemText>
            </ListItem>
            <ListItem component="a" href="https://www.google.com/maps/place/Fr.+Conceicao+Rodrigues+College+of+Engineering/@19.044333,72.8203705,15z/data=!4m5!3m4!1s0x0:0x111b63353dbbce01!8m2!3d19.044333!4d72.8203705">
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText style={{ color: 'white' }}
                primary="Fr. Conceicao Rodrigues College of Enginnering, Father Agnel Ashram, Bandstand Promenade, Mount Mary, Bandra West, Mumbai, Maharashtra.">
              </ListItemText>
            </ListItem>
          </List>

        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} >
          <Grid container spacing={3} sx={{ alignItem: "center", justifyContent: "center", marginTop: "-20px" }}>
            <Grid item >
              <Typography variant="h5" color="white" textAlign={"center"}>
                {/* Feel free to follow us on our social media handles */}
                Stay Connected
              </Typography>
            </Grid>
            <Grid item container spacing={2} sx={{ alignItems: "center", justifyContent: "center" }}>
              <Grid item className="share" >
                <Stack spacing={
                  { xs: 0.75, md: 3 }} direction={{ xs: 'row', md: 'column' }} >
              
                    <MDBBtn
                      floating
                      className='m-1'
                      style={{ backgroundColor: 'white'  , borderRadius: "40px"}}
                      href='https://www.facebook.com/NssCrce/'
                      role='button'
                    >
                      <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn
                      floating
                      className='m-1'
                      style={{ backgroundColor: 'white', borderRadius: "40px" }}
                      href='https://twitter.com/nssCRCE'
                      role='button'
                    >
                      <MDBIcon fab icon='twitter' style={{ color: "#1E90FF"}} />
                    </MDBBtn>
                    <MDBBtn
                      floating
                      className='m-1'
                      style={{ backgroundColor: 'white' , borderRadius: "40px"}}
                      href='https://www.instagram.com/nss.crce/'
                      role='button'
                      
                    >
                      <MDBIcon fab icon='instagram' style={{ color: "magenta"}}/>
                    </MDBBtn>

                    <MDBBtn
                      floating
                      className='m-1'
                      style={{ backgroundColor: 'white', borderRadius: "40px" }}
                      href='https://www.linkedin.com/in/nss-crce-0a44951b0/'
                      role='button'
                    >
                      <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>
                    <MDBBtn
                      floating
                      className='m-1'
                      style={{ backgroundColor: 'white', borderRadius: "40px" }}
                      href='https://www.youtube.com/@nsscrce502/videos'
                      role='button'
                    >
                      <MDBIcon fab icon='youtube' style={{ color: "red"}}/>
                    </MDBBtn>

                
                </Stack >
              </Grid>
            </Grid>
          </Grid>

        </Grid>


        <Grid item xs={12} md={12}>
          <Typography variant="h6" sx={{ bgcolor: '#00008B', paddingTop: "30px" }} color="white">
            Copyright © 2023 NSS-CRCE. DESIGN & DEVELOPMENT BY
            <a href="/web_card_list" style={{ color: "white" }}> NSS-CRCE WEB TEAM</a>
            <LastUpdated />
          </Typography>

        </Grid>
      </Grid>

    </section>

  );
}

export default Footer;