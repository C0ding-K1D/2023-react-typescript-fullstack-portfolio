import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import cardImgLight from "../assets/images/3d-headshot-light.jpg";
import cardImgDark from "../assets/images/3d-headshot-dark.jpg";
import "../styles/stackedImage.css";
import { useThemeContext } from "../theme/ThemeContextProvider";

function StackedImage() {
  const { mode } = useThemeContext();
  return (
    <Box className="container">
      {mode === "light" ? (
        <Paper elevation={3} className="paperLight">
          <div className="gradientCornerLeftLight"></div>
          <div className="gradientCornerRightLight"></div>
          <img
            src={cardImgLight}
            alt="Your Image"
            className="imageLight"
            width="100%" // Adjust image size as needed
            height="100%" // Adjust image size as needed
          />
        </Paper>
      ) : (
        <Paper elevation={3} className="paperDark">
          <div className="gradientCornerLeftDark"></div>
          <div className="gradientCornerRightDark"></div>
          <img
            src={cardImgDark}
            alt="Your Image"
            className="imageDark"
            width="100%" // Adjust image size as needed
            height="100%" // Adjust image size as needed
          />
        </Paper>
      )}
    </Box>
  );
}

export default StackedImage;
