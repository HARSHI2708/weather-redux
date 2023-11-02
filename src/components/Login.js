import React, { useState } from 'react';
import { Button, TextField, Container, Grid, Paper, Typography, Link } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authAction';
import { Link as RouterLink,useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      await dispatch(login(formData));
      
      navigate('/dashboard');
    } catch (error) {
    
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '2rem', textAlign: 'center' }}>
        <Typography component="h1" variant="h5">
          Login
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
                onClick={handleLogin}
              >
                Login
              </Button>
            </form>
            <Typography variant="body2" style={{ marginTop: '1rem' }}>
          Don't have an account? <Link component={RouterLink} to="/signup">Sign up</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
