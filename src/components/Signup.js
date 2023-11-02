import React, { useState } from 'react';
import { Button, TextField, Container, Grid, Paper,Typography, Link } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signup } from '../actions/authAction';
import { Link as RouterLink ,useNavigate} from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSignup = async () => {
    try {
      await dispatch(signup(formData));
      navigate('/dashboard'); 
    } catch (error) {
      
    }
  };

  return (
    <Container component="main" maxWidth="xs">
    <Paper elevation={3} style={{ padding: '2rem', textAlign: 'center' }}>
      <Typography component="h1" variant="h5">
        Signup 
      </Typography>
            <form>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
               <TextField
                label="Email-id"
                type='email'
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSignup}
              >
                Signup
              </Button>
            </form>
          
          <Typography variant="body2" style={{ marginTop: '1rem' }}>
          Already registered? <Link component={RouterLink} to="/login">Login</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Signup;
