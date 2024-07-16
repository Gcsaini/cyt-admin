import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./blogs.css";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "@mui/material/Divider";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TextField from "@mui/material/TextField";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import SettingsIcon from "@mui/icons-material/Settings";
import SaveIcon from "@mui/icons-material/Save";

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

export default function Blog() {
  const navigate = useNavigate();
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
        <VisibilityIcon />
        Preview Post
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        <FileCopyIcon />
        Save
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
    </StyledMenu>
  );

  const renderFont = (index) => (
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
        Add more fonts
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Default font
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Arial
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Courier
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Georgia
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Helvetica
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Times
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Trebuchet
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Verdana
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
    </StyledMenu>
  );

  const renderFontSize = (index) => (
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
        Smallest
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Small
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Normal
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Medium
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Large
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Largest
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
    </StyledMenu>
  );

  const renderNormal = (index) => (
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
        Major heading
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Heading
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Sub-heading
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Minor heading
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Paragraph
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Normal
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
    </StyledMenu>
  );

  const renderInsertPhotoIcon = (index) => (
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
        Upload from computer
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Photos
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Blogger
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        By url
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
    </StyledMenu>
  );

  const renderAliegn = (index) => (
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
        <FormatAlignJustifyIcon />
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        <FormatAlignLeftIcon />
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        <FormatAlignRightIcon />
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
    </StyledMenu>
  );

  const renderMoreIcon = (index) => (
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
        <FormatListBulletedIcon />
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        <FormatListNumberedIcon />
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        <FormatQuoteIcon />
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        <MultipleStopIcon />
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
    </StyledMenu>
  );

  const renderSetting = (index) => (
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
        Published on
      </MenuItem>
      <MenuItem onClick={() => handleClose(index)} disableRipple>
        Location
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
    </StyledMenu>
  );

  const handleSaveIcon = () => {
    navigate("/blogContainer");
  };

  return (
    <div className="content container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="LYKI7">
                <div className="LYKI7-left">
                  <TextField
                    style={{ width: "250px" }}
                    className="textfield"
                    id="standard-basic"
                    label="Title ..."
                    variant="standard"
                  />
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
                      onClick={(event) => handleClick(event, 0)}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      Preview
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
                      Publish
                    </Button>
                  </div>
                </div>
              </div>

              <div className="MJkged">
                <div className="Ics6Hc">
                  <ul>
                    <li>
                      <div className="LYKI7-chield">
                        <Button
                          id="demo-customized-button-2"
                          aria-controls={
                            anchorEls[2] ? "demo-customized-menu-2" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={anchorEls[2] ? "true" : undefined}
                          variant="contained"
                          color="success"
                          disableElevation
                        >
                          <UndoIcon />
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="LYKI7-chield">
                        <Button
                          id="demo-customized-button-3"
                          aria-controls={
                            anchorEls[3] ? "demo-customized-menu-3" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={anchorEls[3] ? "true" : undefined}
                          variant="contained"
                          color="success"
                          disableElevation
                        >
                          <RedoIcon />
                        </Button>
                        {renderMenu(3)}
                      </div>
                    </li>
                    <li>
                      <div className="LYKI7-chield">
                        <Button
                          id="demo-customized-button-4"
                          aria-controls={
                            anchorEls[4] ? "demo-customized-menu-4" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={anchorEls[4] ? "true" : undefined}
                          variant="contained"
                          color="success"
                          disableElevation
                          onClick={(event) => handleClick(event, 4)}
                          endIcon={<KeyboardArrowDownIcon />}
                        >
                          <FontDownloadIcon />
                        </Button>
                        {renderFont(4)}
                      </div>
                    </li>
                    <li>
                      <div className="LYKI7-chield">
                        <Button
                          id="demo-customized-button-5"
                          aria-controls={
                            anchorEls[5] ? "demo-customized-menu-5" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={anchorEls[5] ? "true" : undefined}
                          variant="contained"
                          color="success"
                          disableElevation
                          onClick={(event) => handleClick(event, 5)}
                          endIcon={<KeyboardArrowDownIcon />}
                        >
                          <FormatSizeIcon />
                        </Button>
                        {renderFontSize(5)}
                      </div>
                    </li>
                    <li>
                      <div className="LYKI7-chield">
                        <Button
                          id="demo-customized-button-5"
                          aria-controls={
                            anchorEls[5] ? "demo-customized-menu-5" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={anchorEls[5] ? "true" : undefined}
                          variant="contained"
                          color="success"
                          disableElevation
                          onClick={(event) => handleClick(event, 5)}
                          endIcon={<KeyboardArrowDownIcon />}
                        >
                          Normal
                        </Button>
                        {renderNormal(5)}
                      </div>
                    </li>
                    <li>
                      <div className="LYKI7-chield">
                        <Button
                          id="demo-customized-button-5"
                          aria-controls={
                            anchorEls[5] ? "demo-customized-menu-5" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={anchorEls[5] ? "true" : undefined}
                          variant="contained"
                          color="success"
                          disableElevation
                          // onClick={(event) => handleClick(event, 5)}
                          // endIcon={<KeyboardArrowDownIcon />}
                        >
                          <FormatBoldIcon />
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="LYKI7-chield">
                        <Button
                          id="demo-customized-button-5"
                          aria-controls={
                            anchorEls[5] ? "demo-customized-menu-5" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={anchorEls[5] ? "true" : undefined}
                          variant="contained"
                          color="success"
                          disableElevation
                          // onClick={(event) => handleClick(event, 5)}
                          // endIcon={<KeyboardArrowDownIcon />}
                        >
                          <FormatItalicIcon />
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="LYKI7-chield">
                        <Button
                          id="demo-customized-button-5"
                          aria-controls={
                            anchorEls[5] ? "demo-customized-menu-5" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={anchorEls[5] ? "true" : undefined}
                          variant="contained"
                          color="success"
                          disableElevation
                          // onClick={(event) => handleClick(event, 5)}
                          // endIcon={<KeyboardArrowDownIcon />}
                        >
                          <FormatUnderlinedIcon />
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="LYKI7-chield">
                        <Button
                          id="demo-customized-button-5"
                          aria-controls={
                            anchorEls[5] ? "demo-customized-menu-5" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={anchorEls[5] ? "true" : undefined}
                          variant="contained"
                          color="success"
                          disableElevation
                          // onClick={(event) => handleClick(event, 5)}
                          // endIcon={<KeyboardArrowDownIcon />}
                        >
                          <FormatStrikethroughIcon />
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="LYKI7-chield">
                        <Button
                          id="demo-customized-button-5"
                          aria-controls={
                            anchorEls[5] ? "demo-customized-menu-5" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={anchorEls[5] ? "true" : undefined}
                          variant="contained"
                          color="success"
                          disableElevation
                          // onClick={(event) => handleClick(event, 5)}
                          // endIcon={<KeyboardArrowDownIcon />}
                        >
                          <FormatColorTextIcon />
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="LYKI7-chield">
                        <Button
                          id="demo-customized-button-5"
                          aria-controls={
                            anchorEls[6] ? "demo-customized-menu-5" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={anchorEls[6] ? "true" : undefined}
                          variant="contained"
                          color="success"
                          disableElevation
                          onClick={(event) => handleClick(event, 6)}
                          endIcon={<KeyboardArrowDownIcon />}
                        >
                          <InsertPhotoIcon />
                        </Button>
                        {renderInsertPhotoIcon(6)}
                      </div>
                    </li>
                    <li>
                      <div className="LYKI7-chield">
                        <Button
                          id="demo-customized-button-5"
                          aria-controls={
                            anchorEls[7] ? "demo-customized-menu-5" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={anchorEls[7] ? "true" : undefined}
                          variant="contained"
                          color="success"
                          disableElevation
                          onClick={(event) => handleClick(event, 7)}
                          endIcon={<KeyboardArrowDownIcon />}
                        >
                          <FormatAlignCenterIcon />
                        </Button>
                        {renderAliegn(7)}
                      </div>
                    </li>
                    <li>
                      <div className="LYKI7-chield">
                        <Button
                          id="demo-customized-button-5"
                          aria-controls={
                            anchorEls[7] ? "demo-customized-menu-5" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={anchorEls[7] ? "true" : undefined}
                          variant="contained"
                          color="success"
                          disableElevation
                          // onClick={(event) => handleClick(event, 7)}
                          // endIcon={<KeyboardArrowDownIcon />}
                        >
                          <FormatIndentIncreaseIcon />
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="LYKI7-chield">
                        <Button
                          id="demo-customized-button-5"
                          aria-controls={
                            anchorEls[7] ? "demo-customized-menu-5" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={anchorEls[7] ? "true" : undefined}
                          variant="contained"
                          color="success"
                          disableElevation
                          // onClick={(event) => handleClick(event, 7)}
                          // endIcon={<KeyboardArrowDownIcon />}
                        >
                          <FormatIndentDecreaseIcon />
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="LYKI7-chield">
                        <Button
                          id="demo-customized-button-5"
                          aria-controls={
                            anchorEls[8] ? "demo-customized-menu-5" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={anchorEls[8] ? "true" : undefined}
                          variant="contained"
                          color="success"
                          disableElevation
                          onClick={(event) => handleClick(event, 8)}
                          endIcon={<KeyboardArrowDownIcon />}
                        >
                          <MoreHorizIcon />
                        </Button>
                        {renderMoreIcon(8)}
                      </div>
                    </li>
                    <li>
                      <div className="LYKI7-chield">
                        <Button
                          id="demo-customized-button-5"
                          aria-controls={
                            anchorEls[9] ? "demo-customized-menu-5" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={anchorEls[9] ? "true" : undefined}
                          variant="contained"
                          color="success"
                          disableElevation
                          onClick={(event) => handleClick(event, 9)}
                          endIcon={<KeyboardArrowDownIcon />}
                        >
                          <SettingsIcon />
                        </Button>
                        {renderSetting(9)}
                      </div>
                    </li>
                    <li>
                      <div className="LYKI7-chield">
                        <Button
                          id="demo-customized-button-5"
                          aria-controls={
                            anchorEls[9] ? "demo-customized-menu-5" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={anchorEls[9] ? "true" : undefined}
                          variant="contained"
                          color="success"
                          disableElevation
                          onClick={() => handleSaveIcon()}
                          // endIcon={<KeyboardArrowDownIcon />}
                        >
                          <SaveIcon />
                          Save
                        </Button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="input-field">
            <textarea type="text" placeholder="Enter here ...." />
          </div>
        </div>
      </div>
    </div>
  );
}
