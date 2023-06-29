import React from "react";
import Typography from '@mui/material/Typography';
import { Link as LinkRouter } from "react-router-dom";

export default function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <LinkRouter to="/boasvindas/restaurantes">
          comú
        </LinkRouter>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }