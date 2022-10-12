import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import fieldApi from "../../api/fieldApi";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";

import "./Navbar.css";
import { SearchBar } from "../SearchBar/SearchBar";

function Navbar(props) {
    //props

    // handle logout
    const navigate = useNavigate();
    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    // MUI dropdown menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Lấy suggest từ api
    const [suggests, setSuggests] = useState([]);
    useEffect(() => {
        const Data = async () => {
            try {
                const res = await fieldApi.get5Row();
                setSuggests(res.data);
            } catch (error) {
                console.log("Không lấy được dữ liệu từ API");
            }
        };
        Data();
    }, []);

    return (
        <div className="navbar">
            <div className="navbar__left">
                <a href="/">
                    <img
                        src={require("../../assets/images/logo.gif")}
                        alt=""
                        className="navbar__logo-img"
                    />
                </a>
                <a href="/" className="navbar__logo-name">
                    <h1 className="navbar__logo-name">Bookly</h1>
                </a>
            </div>

            <SearchBar />
            <div className="navbar__middle">
                <div className="navbar__middle-suggest">
                    {suggests.map((item, index) => (
                        <Link
                            to={`/field/${item?.fieldID}`}
                            className="navbar__middle-suggest-item"
                            key={index}
                        >
                            <p>{item.fieldName}</p>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="navbar__right">
                {user?.displayName ? (
                    <React.Fragment>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? "account-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                            >
                                <Avatar src={user?.photoURL} sx={{ width: 40, height: 40 }}>
                                    M
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: "visible",
                                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                    mt: 1.5,
                                    "& .MuiAvatar-root": {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    "&:before": {
                                        content: '""',
                                        display: "block",
                                        position: "absolute",
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: "background.paper",
                                        transform: "translateY(-50%) rotate(45deg)",
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: "right", vertical: "top" }}
                            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                        >
                            <Link to="/profile" className="navbar__right-menu-item">
                                <MenuItem
                                    sx={{
                                        marginBottom: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Avatar src={user?.photoURL} /> Profile
                                </MenuItem>
                            </Link>
                            <Divider />

                            <MenuItem
                                onClick={handleSignOut}
                                className="navbar__right-menu-item"
                                sx={{ fontSize: "1.6rem", marginTop: "8px" }}
                            >
                                <ListItemIcon>
                                    <Logout fontSize="large" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </React.Fragment>
                ) : (
                    <Link to="/signIn" className="navbar__right-login-text">
                        Sign in
                    </Link>
                )}
                <a href="/#" className="navbar__right-cart">
                    <FiShoppingCart className="navbar__right-cart-logo" />
                    <i className="fa-solid fa-"></i>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
