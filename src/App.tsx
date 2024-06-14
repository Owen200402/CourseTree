import {
  Box,
  Card,
  CircularProgress,
  Grid,
  Link,
  Skeleton,
  Typography,
} from "@mui/material";
import "./App.css";
import CourseTree from "./components/CourseTree";
import Heading from "./components/Heading";
import useCourses, { Course } from "./hooks/useCourses";
import { useState } from "react";
import Particle from "./components/Particle";
import CourseCard from "./components/CourseCard";

function App() {
  const { courses, isLoading } = useCourses();
  const [course, setCourse] = useState<Course>();
  const [clicked, setClicked] = useState(false);

  const popUpInfo = (node: any) => {
    const courseCode = node.name.toUpperCase();
    setClicked(true);
    setCourse(courses.find((c) => c.code === courseCode));
  };

  const [animationClass, setAnimationClass] = useState("");

  const handleClick = () => {
    setAnimationClass("animate__animated animate__fadeInLeft"); // Set the desired animation class
    setTimeout(() => {
      setAnimationClass("");
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="wrapper">
        <Typography variant="body1">Fetching from the server...</Typography>
        <Typography variant="body1">This will take about 5 seconds.</Typography>

        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <Particle />
      <div className="main-content">
        <Heading>Click on Courses for More Information</Heading>

        <Grid container spacing={2}>
          <Grid item xs={4} ml={4}>
            {course && <CourseCard course={course} animationClass={animationClass}></CourseCard>}
          </Grid>

          <Grid item xs={7.5} padding="1rem">
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
              <CourseTree
                onNodeSelect={(node) => {
                  popUpInfo(node);
                  handleClick();
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
