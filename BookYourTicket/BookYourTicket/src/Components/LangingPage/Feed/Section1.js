import Carousel from "react-bootstrap/Carousel";
import Image2 from "../../Images/Image1.png";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {
  Box,
  Stack,
  Typography,
  Button,
  Grid,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function Section1() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Carousel>
        <Carousel.Item>
          <img
            src={Image2}
            alt="image2"
            style={{ width: "100%", height: "100%" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Image2}
            alt="image2"
            style={{ width: "100%", height: "100%" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Image2}
            alt="image2"
            style={{ width: "100%", height: "100%" }}
          />
        </Carousel.Item>
      </Carousel>

      {isMatch ? (
        <>
          <Stack
            direction={"column"}
            spacing={2}
            sx={{
              justifyContent: "center",
              justifyItems: "center",
              alignItems: "left",
              margin: 5,
            }}
          >
            <Box>
              <Typography variant="h2">Build perfect with Rameet</Typography>
            </Box>
            <Box>
              <Box>
                <Typography variant="h6" maxWidth={"90%"} paddingBottom={4}>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur ma
                </Typography>
              </Box>
              <Box>
                <Button variant="contained" size="large">
                  Browers all
                  <IconButton>
                    <KeyboardDoubleArrowRightIcon />
                  </IconButton>
                </Button>
              </Box>
            </Box>
          </Stack>
        </>
      ) : (
        <>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-around",
              margin: 3,
              padding: 3,
            }}
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  width: "90%",
                  height: "90%",
                  justifyContent: "center",
                  maxWidth: "100%",
                  padding: 2,
                  margin: 1,
                }}
              >
                Build perfect with Rameet
              </Typography>
            </Box>
            <Grid
              container
              direction={"column"}
              sx={{
                maxWidth: "40%",
                maxHeight: "80%",
                justifyContent: "start",
                margin: 1,
                padding: 2,
              }}
            >
              <Grid
                container
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    justifyContent: "center",
                    marginBottom: 5,
                  }}
                >
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur ma
                </Typography>
                <Button variant="contained" size="large">
                  Browers all
                  <IconButton aria-label="Double Arrow">
                    <KeyboardDoubleArrowRightIcon sx={{ color: "white" }} />
                  </IconButton>
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </>
      )}
    </Box>
  );
}

export default Section1;
