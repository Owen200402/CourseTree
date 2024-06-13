import { Box, Grid } from "@mui/material";
import "./App.css";
import CourseTree from "./components/CourseTree";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      <Heading>Click on Courses for More Information</Heading>

      <Grid container spacing={2}>
        <Grid item xs={4}>


        </Grid>

        <Grid item xs={8} padding="1rem">
          <Box
            height="100"
            width="80"
            display="flex"
            alignItems="center"
            sx={{
              border: "1px solid #cccccc",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
            }}
          >
            <CourseTree />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
