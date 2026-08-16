import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import "../App.css";

import logo from "../images/klimalogo.png";
import CloseIcon from '@mui/icons-material/Close';

function MUIAppbar() {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const menuItems = [
        {
            name: "Anasayfa",
            path: "/"
        },
        {
            name: "Hakkımızda",
            path: "/hakkimizda"
        },
        {
            name: "Kategoriler",
            subItems: [
                {
                    name: "Klima Bakımı",
                    path: "/klima-bakimi"
                },
                {
                    name: "Kombi Bakımı",
                    path: "/kombi-bakimi"
                },
                {
                    name: "Petek Temizleme",
                    path: "/petek-bakimi"
                },
                {
                    name: "Beyaz esya tamiri",
                    path: "/beyaz-esya-tamiri"
                },
                {
                    name: "Arıza onarımı parça değişimi",
                    path: "/ariza-onarim-parca-degisimi"
                }
            ]
        },

    ];

    const DrawerList = (
        <Box
            sx={{ width: 320, fontWeight: 'bold' }}
            role="presentation"
        >

            {/* Drawer Logo */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    cursor: 'pointer',
                    padding: "15px"
                }}
            >
                <CloseIcon onClick={toggleDrawer(false)} />
            </Box>

            {/* Menü */}
            <List>

                {menuItems.map((item) => (

                    <React.Fragment key={item.name}>

                        <ListItem disablePadding>

                            <ListItemButton
                                onClick={() => {

                                    if (item.name === "Kategoriler") {

                                        setCategoryOpen(!categoryOpen);

                                    } else {

                                        navigate(item.path);
                                        setOpen(false);

                                    }

                                }}
                            >

                                <ListItemText primary={item.name} />

                                {item.name === "Kategoriler" &&
                                    (categoryOpen
                                        ? <ExpandLess />
                                        : <ExpandMore />
                                    )
                                }

                            </ListItemButton>

                        </ListItem>


                        {/* Kategori Alt Menüleri */}
                        {item.name === "Kategoriler" && (

                            <Collapse
                                in={categoryOpen}
                                timeout="auto"
                                unmountOnExit
                            >

                                <List
                                    component="div"
                                    disablePadding
                                >

                                    {item.subItems.map((subItem) => (

                                        <ListItemButton
                                            key={subItem.name}
                                            sx={{ pl: 4 }}
                                            onClick={() => {
                                                navigate(subItem.path);
                                                setOpen(false);
                                            }}
                                        >

                                            <ListItemText
                                                primary={subItem.name}
                                            />

                                        </ListItemButton>

                                    ))}

                                </List>

                            </Collapse>

                        )}

                    </React.Fragment>

                ))}

            </List>

        </Box>
    );

    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>

                <AppBar
                    position="static"
                    sx={{ backgroundColor: "#232323" }}
                >

                    <Toolbar>

                        <IconButton
                            onClick={toggleDrawer(true)}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>


                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                display: "flex",
                                flexGrow: 1,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >

                            <img
                                style={{
                                    cursor: "pointer",
                                    width: '50px',
                                    height: '50px'
                                }}
                                src={logo}
                                alt="Site Logo"
                            />

                        </Typography>


                        <Button
                            color="inherit"
                            href="tel:+905464895158"
                        >
                            Bizi Arayın
                        </Button>

                    </Toolbar>

                </AppBar>

            </Box>


            {/* Drawer */}
            <Drawer
                open={open}
                onClose={toggleDrawer(false)}
            >
                {DrawerList}
            </Drawer>

        </div>
    );
}

export default MUIAppbar;