import { Card, Typography } from "@mui/material";
import { Course } from "../hooks/useCourses";

interface Props {
    course: Course;
}

const CourseCard = ({course}: Props) => {
  return (
    <Card
      variant="outlined"
      sx={{ height: "15rem", width: "23rem", padding: "1rem" }}
      className="animate__animated animate__fadeIn"
    >
      <Typography variant="h5" sx={{ color: "#002145" }}>
        {course.code}
      </Typography>
      <Typography variant="subtitle1">{course.name}</Typography>
      <Typography variant="body2" color="text.secondary">
        {course.desc}
      </Typography>
      <Typography
        variant="caption"
        color="text.primary"
        sx={{ display: "block" }}
      >
        <i>
          Prerequisites:{" "}
          {course.prer ? course.prer : course.preq ? course.preq : "None"}
        </i>
      </Typography>
      <Typography
        variant="caption"
        color="text.primary"
        sx={{ display: "block" }}
      >
        <i>
          Corequisites:{" "}
          {course.crer
            ? course.crer
            : course.creq.length !== 0
            ? course.creq
            : "None"}
        </i>
      </Typography>
      <Typography
        variant="caption"
        color="text.primary"
        sx={{ display: "block" }}
      >
        <i>Credit: {course.cred}</i>
      </Typography>
    </Card>
  );
};

export default CourseCard;