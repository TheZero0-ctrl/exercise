import React, { useEffect, useState } from 'react';
import { Box, Stack, Button, TextField, Typography } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({bodyPart, setBodyPart, setExercises}) => {
  const [search, setSearch] = useState("")

  const bodyParts = ['biceps', 'chest', 'forearms', 'neck', 'lower_back', 'middle_back']

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises', exerciseOptions);
      const searchedExercises = exercisesData.filter((exercise) => (
        exercise.name.toLowerCase().includes(search) || exercise.type.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||  exercise.muscle.toLowerCase().includes(search)
      ))
      setSearch('');
      setExercises(searchedExercises);
      console.log(searchedExercises)
    }
  }

  return (
    <Stack
      alignItems="center"
      mt="37px"
      justifyContent="center"
      p="20px"
    >
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box
        position="relative"
        mb="72px"
      >
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: '#fff',
            borderRadius: '40px'

          }}
          height="76px"
          value={search}
          onChange={(e) => { setSearch(e.target.value.toLowerCase())}}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className='search-btn'
          sx={{
            bgcolor: '#FF2625',
            color: '#FFF',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: "20px", xs: "14px" },
            height: '56px',
            position: 'absolute',
            right: "0px"
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{ position: 'relative', width: '100%', padding: '20px'}}
      >
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} bodyParts={bodyParts} />
      </Box>
    </Stack>
  )
}

export default SearchExercises