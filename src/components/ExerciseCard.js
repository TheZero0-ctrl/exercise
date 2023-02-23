import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
import { borderRadius, fontSize } from '@mui/system'

import Deku from '../assets/images/giphy.gif'

const ExerciseCard = ({ exercise, index }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${index}`}>
      <img src={Deku} alt="exercise" loading='lazy' />
      <Stack direction="row">
        <Button sx={{
          ml: '21px',
          color: '#FFF',
          background: '#FFA9A9',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize'
        }}>
          {exercise.muscle}
        </Button>
        <Button sx={{
          ml: '21px',
          color: '#FFF',
          background: '#FCC757',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize'
        }}>
          {exercise.type}
        </Button>
      </Stack>
      <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="22px">
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard