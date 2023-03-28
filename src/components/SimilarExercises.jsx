import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "../components/HorizontalScrollBar";
import Loader from "../components/Loader";
const SimilarExercises = ({ targetExercise, equipmentExercise }) => {
  
  return (
    <>
      <Box
        sx={{
          mt: { lg: "100px", xs: "0" },
        }}
      >
        <Typography variant="h3" mb={5}>
          Exercises that target the same Muscle group
        </Typography>
        <Stack
          direction="row"
          sx={{
            p: "2px",
            position: "relative",
          }}
        >
          {targetExercise.length ? (
            <HorizontalScrollBar data={targetExercise} />
          ) : (
            <Loader />
          )}
        </Stack>

        <Typography variant="h3" mb={5}>
          Exercises that use the same equipment
        </Typography>
        <Stack
          direction="row"
          sx={{
            p: "2px",
            position: "relative",
          }}
        >
          {equipmentExercise.length ? (
            <HorizontalScrollBar data={equipmentExercise} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Box>
    </>
  );
};

export default SimilarExercises;
