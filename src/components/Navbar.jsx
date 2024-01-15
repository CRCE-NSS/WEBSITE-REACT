// src/components/Navbar.jsx
// import React, { useState ,useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// function Navbar() {
//   const [isTeamsDropdownVisible, setTeamsDropdownVisible] = useState(false);
//   const [isEventsDropdownVisible, setEventsDropdownVisible] = useState(false);
//   // const [isMenuOpen, setMenuOpen] = useState(false);
//   // const navigate = useNavigate();

//   const toggleTeamsDropdown = () => {
//     setTeamsDropdownVisible(!isTeamsDropdownVisible);
//   };

//   const toggleEventsDropdown = () => {
//     setEventsDropdownVisible(!isEventsDropdownVisible);
//   };

//   const handleLinkClick = (url) => {
//     // Close all dropdowns
//     toggleTeamsDropdown();
//     toggleEventsDropdown(); // Add more toggles if needed for other dropdowns
  
//     // Navigate to the specified URL
//     window.location.href = url;
//   };

//   // const MyComponent = () => {
//   //   const navigate = useNavigate();
  
//   //   const handleClick = (url) => {
//   //     // Close all dropdowns
//   //     toggleTeamsDropdown();
//   //     toggleEventsDropdown(); // Add more toggles if needed for other dropdowns
    
//   //     // Navigate to the specified URL without a full page reload
//   //     navigate(url);
//   //   };
//   // }
  
//   // const handleClick = () => {
//   //   document.getElementById("nav-list").style.width="0";
//   // }

//   // const handleToggleMenu = () => {
//   //   setMenuOpen(!isMenuOpen);
//   // };

//   // const handleLinkClick = (url) => {
//   //   // Close all dropdowns and the menu
//   //   setTeamsDropdownVisible(false);
//   //   setEventsDropdownVisible(false);
//   //   setMenuOpen(false);

//   //   // Navigate to the specified URL without a full page reload
//   //   navigate(url);
//   //};

//   // useEffect(() => {
//   //   const closeMenuOnOutsideClick = (event) => {
//   //     const sidebar = document.getElementById('nav-list');
//   //     const menuIcon = document.getElementById('check');

//   //     if (sidebar && menuIcon && !sidebar.contains(event.target) && event.target !== menuIcon) {
//   //       setMenuOpen(false);
//   //     }
//   //   };

//   //   document.addEventListener('click', closeMenuOnOutsideClick);

//   //   return () => {
//   //     document.removeEventListener('click', closeMenuOnOutsideClick);
//   //   };
//   // }, []);

  

//   return (
//     <header className="header" id='header'>
//       {/* NSS logo */}
//       <a className="nss-logo" href="https://nsscrce.org/">
//         <img src="/images/logos/nss-logo.svg" alt="NSS Logo" />
//       </a>
//       {/* FRCRCE logo */}
//       <a className="father-logo">
//         <img src="/images/logos/father-logo.svg" alt="Father Logo" />
//       </a>
//       <a className="crce-logo" href="http://frcrce.ac.in/">
//         <img src="/images/logos/crce-logo.svg" alt="CRCE Logo" />
//       </a>
//       {/* Page title */}
//       <div className="nss-title animate__animated animate__heartBeat animate__slower animate__repeat-2">
//         <a href="#"><h1>NSS CRCE</h1></a>  
//         {/* removed site link */}
//       </div>

//       <input type='checkbox' id='check' /*checked={isMenuOpen} onClick={toggleTeamsDropdown}*//>
//       <label for="check" className="icon" >
//         <i className='fa fa-bars' id="menu-icon"></i>
//         <i className='fa fa-close' id='close-icon'></i>
//       </label>  

//       <ul id="nav-list" /*className={isMenuOpen ? 'open' : ''}*/>
        
//         <li ><Link to="/" style={{ color: 'blue' }} onClick={() => handleLinkClick('/')} >Home</Link></li>
//         <li ><Link to="/vol_data" style={{ color: 'blue' }} onClick={() => handleLinkClick('/vol_data')} >Vol.Data</Link></li>
//         <li  className="dropdown">
//           <div className="dropdown-button" onClick={toggleTeamsDropdown}>
//             <button className={`dropbtn${isTeamsDropdownVisible ? ' active' : ''}`}>
//               Teams ▼ {/* Inverted triangle icon */}
//             </button>
//           </div>
//           {isTeamsDropdownVisible && (
//             <div className="dropdown-content">
//               <Link to="/team_2023_24" onClick={() => handleLinkClick('/team_2023_24')}>Team 2023-24</Link>
//             </div>
//           )}
//         </li>
//         <li className="dropdown">
//           <div className="dropdown-button" onClick={toggleEventsDropdown}>
//             <button className={`dropbtn${isEventsDropdownVisible ? ' active' : ''}`}>
//               Events ▼ {/* Inverted triangle icon */}
//             </button>
//           </div>
//           {isEventsDropdownVisible && (
//             <div className="dropdown-content">
//               <Link to="/events_2023_24" onClick={() => handleLinkClick('/events_2023_24')}>Events 2023-24</Link>
//             </div>
//           )}
//         </li>
        
        
//         {/* Add more navigation links */}
//       </ul>
      
      
//     </header>
    
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  Drawer,
  List,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Navbar() {
  const [teamsAnchorEl, setTeamsAnchorEl] = useState(null);
  const [eventsAnchorEl, setEventsAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = (type, event) => {
    type === "teams"
      ? setTeamsAnchorEl(event.currentTarget)
      : setEventsAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (type) => {
    type === "teams" ? setTeamsAnchorEl(null) : setEventsAnchorEl(null);
  };

  const handleMobileMenuToggle = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleMobileMenuClose = () => setMobileMenuOpen(false);

  const handleLinkClick = () => {
    handleMenuClose("teams");
    handleMenuClose("events");
    handleMobileMenuClose();
  };

  const renderMenu = (label, anchorEl, handleClose, items) => (
    <>
      <Button
        color="inherit"
        onClick={(event) => handleMenuClick(label.toLowerCase(), event)}
        aria-controls={`${label.toLowerCase()}-menu`}
      aria-haspopup="true"
      >
      {label}
      <ExpandMoreIcon />
    </Button>
      <Menu
        id={`${label.toLowerCase()}-menu`}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map((item, subIndex) => (
          <MenuItem
            key={subIndex}
            component={NavLink} // Use NavLink directly for menu items
            to={item.to}
            onClick={handleLinkClick}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const Logo = ({ index }) => (
    <img
      src={`/images/logos/${["nss-logo", "father-logo", "crce-logo"][index]
        }.svg`}
      alt={`${["NSS Logo", "Father Logo", "CRCE Logo"][index]}`}
style = {{
  width: [30, 30, 50][index],
    height: [30, 25, 45][index],
      marginRight: [30, 38, 10][index],
        transform: "scale(3)",
          transition: "transform 0.5s",
      }}
/>
  );

const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "Vol.Data", to: "/vol_data" },
  {
    label: "Teams",
    renderMenu: renderMenu("Teams", teamsAnchorEl, handleMenuClose, [
      { label: "Team 2023-24", to: "/team_2023_24" },
    ]),
  },
  {
    label: "Events",
    renderMenu: renderMenu("Events", eventsAnchorEl, handleMenuClose, [
      { label: "Events 2023-24", to: "/events_2023_24" },
    ]),
  },
  // { label: "Tree Tag", to: "/tree_tag_main" },
 // { label: "Contact Us", to: "/contactus" },
];

return (
  <AppBar className="animate_animated animate_fadeInDown">
    <Toolbar className="animate_animated animate_fadeIn">
      <Box
        sx={{
          display: { xs: "flex", md: "flex" },
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        {[...Array(3)].map((_, i) => (
          <Logo key={i} index={i} />
        ))}
      </Box>

      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        NSS CRCE
      </Typography>

      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={handleMobileMenuToggle}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <MenuIcon />
      </IconButton>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {navigationLinks.map((link, index) =>
          link.renderMenu ? (
            <React.Fragment key={index}>{link.renderMenu}</React.Fragment>
          ) : (
            <NavLink
              key={index}
              color="inherit"
              to={link.to}
              onClick={handleLinkClick}
            >
              <Button endIcon={link.endIcon} style={{ color: "white" }}>
                {link.label}
              </Button>
            </NavLink>
          )
        )}
      </Box>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
        PaperProps={{
          style: {
            color: "blue",
            backgroundColor: "rgba(255,255,255,0.6)",
          },
        }}
      >
        <List sx={{ display: "flex", flexDirection: "column" }}>
          {navigationLinks.map((link, index) =>
            link.renderMenu ? (
              <React.Fragment key={index}>{link.renderMenu}</React.Fragment>
            ) : (
              <NavLink
                key={index}
                color="inherit"
                to={link.to}
                onClick={() => {
                  handleLinkClick();
                  handleMobileMenuClose();
                }}
              >
                <Button endIcon={link.endIcon} style={{ color: "blue" }}>
                  {link.label}
                </Button>
              </NavLink>
            )
          )}
        </List>
      </Drawer>
    </Toolbar>
  </AppBar>
);
}

export default Navbar;