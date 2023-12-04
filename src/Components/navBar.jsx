// import React from "react";
// import { Row, Col } from "react-bootstrap";

// export default function NavBar() {
//   return (
//     <div className="nav-bar">
//       <Row>
//         <Col>
//           <h1>DEV SHAH</h1>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <h2>Web Developer</h2>
//         </Col>
//       </Row>
//     </div>
//   );
// }

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Row, Col } from "react-bootstrap";
import ProfilePhoto from "../Photos/profile-photo.jpg";
import Image from "next/image";
import Link from "next/link";

const drawerWidth = 240,
  navItems = [
    "About",
    "Technical Skills",
    "Work Experience",
    "Projects",
    "Education",
    "Interests",
  ];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false),
    handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    },
    drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Image
          src={ProfilePhoto}
          width={150}
          height={150}
          id="profile-photo"
          alt="Profile Photo"
          style={{ marginTop: "3em" }}
        />
        <Divider />
        <List className="nav-bar-hamburger">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    );

  return (
    <Box className="nav-bar" sx={{ display: "flex", textAlign: "center" }}>
      <div>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="nav-bar-vertical">
            <Image
              src={ProfilePhoto}
              width={175}
              height={175}
              id="profile-photo"
              alt="Profile Photo"
            />
            <Divider />
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                style={{
                  display: "flex",
                  "align-items": "center",
                  "justify-content": "center",
                }}
              >
                <Button
                  sx={{
                    color: "inherit",
                    margin: "0.25em 0",
                  }}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </div>
        </Toolbar>
      </div>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
