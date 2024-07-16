import React from "react";
import "./blogcontainer.css";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Avatar } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import PublishIcon from "@mui/icons-material/Publish";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Label } from "@mui/icons-material";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right"
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0"
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        )
      }
    }
  }
}));

export default function BlogContainer() {
  const [anchorEls, setAnchorEls] = React.useState({});

  const handleClick = (event, index) => {
    setAnchorEls((prev) => ({ ...prev, [index]: event.currentTarget }));
  };

  const handleClose = (index) => {
    setAnchorEls((prev) => ({ ...prev, [index]: null }));
  };

  const renderMenu = (index) => (
    <StyledMenu
      id={`demo-customized-menu-${index}`}
      MenuListProps={{
        "aria-labelledby": `demo-customized-button-${index}`
      }}
      anchorEl={anchorEls[index]}
      open={Boolean(anchorEls[index])}
      onClose={() => handleClose(index)}
    >
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        All(1)
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Published(0)
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Draft(0)
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Scheduled(0)
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Bin(0)
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
    </StyledMenu>
  );

  const renderMoreMenu = (index) => (
    <StyledMenu
      id={`demo-customized-menu-${index}`}
      MenuListProps={{
        "aria-labelledby": `demo-customized-button-${index}`
      }}
      anchorEl={anchorEls[index]}
      open={Boolean(anchorEls[index])}
      onClose={() => handleClose(index)}
    >
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        <DeleteIcon />
        Discard
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        <Label />
        Apply Label
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        <PublishIcon />
        Publish
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
    </StyledMenu>
  );

  return (
    <div className="content container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="LYKI7">
                <div className="LYKI7-left">
                  <Button
                    id="demo-customized-button-0"
                    aria-controls={
                      anchorEls[0] ? "demo-customized-menu-0" : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={anchorEls[0] ? "true" : undefined}
                    variant="contained"
                    color="success"
                    disableElevation
                    onClick={(event) => handleClick(event, 0)}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    All
                  </Button>
                  {renderMenu(0)}
                </div>

                <div className="LYKI7-right">
                  <div className="LYKI7-chield">
                    <Button
                      id="demo-customized-button-0"
                      aria-controls={
                        anchorEls[0] ? "demo-customized-menu-0" : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={anchorEls[0] ? "true" : undefined}
                      variant="contained"
                      color="success"
                      disableElevation
                    >
                      <FilterAltIcon />
                    </Button>
                    {renderMenu(0)}
                  </div>
                  <div className="LYKI7-chield">
                    <Button
                      id="demo-customized-button-1"
                      aria-controls={
                        anchorEls[1] ? "demo-customized-menu-1" : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={anchorEls[1] ? "true" : undefined}
                      variant="contained"
                      color="success"
                      disableElevation
                    >
                      Manage
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body blogcontainer-divide">
              <div className="bottom-dropdown-left">
                <div className="blogcontainer-img">
                  <h1>U</h1>
                </div>
                <div className="blogcontainer-detail-img">
                  <p>(United)</p>
                  <p>
                    <span>Draft</span>16 July
                  </p>
                </div>
              </div>
              <div className="bottom-dropdown-right">
                <div className="bottom-dropdown-right-left">
                  <ul>
                    <li className="hide">
                      <PublishIcon />
                    </li>
                    <li className="hide">
                      <FilterAltIcon />
                    </li>
                    <li className="hide">
                      <DeleteIcon />
                    </li>
                    <li className="hide">
                      <PreviewIcon />
                    </li>
                    <li className="show">dnd</li>
                    <li>
                      {" "}
                      <Avatar className="avatar" />
                    </li>
                  </ul>
                </div>
                <div className="bottom-dropdown-right-left-mobile-view">
                  <Button
                    id="demo-customized-button-0"
                    aria-controls={
                      anchorEls[1] ? "demo-customized-menu-0" : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={anchorEls[1] ? "true" : undefined}
                    variant="contained"
                    color="success"
                    disableElevation
                    onClick={(event) => handleClick(event, 1)}
                    // endIcon={<KeyboardArrowDownIcon />}
                  >
                    <MoreVertIcon />
                  </Button>
                  {renderMoreMenu(1)}
                </div>
                <div className="bottom-dropdown-right-left">
                  <ul>
                    <li>
                      0 <CommentIcon />
                    </li>
                    <li>
                      0 <ViewSidebarIcon />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
