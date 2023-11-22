import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Container component="footer" style={{ marginTop: '40px', backgroundColor: '#d3d6d9', padding: '20px 0' }}>
      <Typography variant="body2" color="text.secondary" align="center">
      <b> Reunion: Where Dreams Find a Home</b> <br /> 
        All rights reserved. © 2023 
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        <Link color="inherit" href="" target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={{ marginRight: '4px', color: '#0366d6' }} />
          View Source Code on GitHub
        </Link>
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        Connect with me on LinkedIn:{' '}
        <Link color="inherit" href="" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={{ fontSize: '20px', verticalAlign: 'middle', marginLeft: '4px', color: '#0077b5' }} />
          Anuj Goyal
        </Link>
      </Typography>
    </Container>
  );
};

export default Footer;
