// Import Material UI components
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper
} from '@mui/material'

// Import React hook
import { useState } from 'react'

function App() {

  // State for form fields
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // State for validation errors
  const [errors, setErrors] = useState({})

  // Validate form inputs
  const validate = () => {
    let temp = {}

    // Email validation
    if (!email.includes('@')) {
      temp.email = 'Please enter a valid email'
    }

    // Password validation
    if (password.length < 6) {
      temp.password = 'Password must be at least 6 characters'
    }

    // Update errors
    setErrors(temp)

    // Return true if no errors
    return Object.keys(temp).length === 0
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    if (validate()) {
      alert('Login successful!')
    }
  }

  return (
    // Page container
    <Container maxWidth="sm" sx={{ mt: 8 }}>

      {/* Card layout using Paper */}
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>

        {/* Form heading */}
        <Typography variant="h5" align="center" gutterBottom>
          🔐 Login Form
        </Typography>

        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Enter your credentials to continue
        </Typography>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Email field */}
          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />

          {/* Password field */}
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />

          {/* Submit button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.2,
              fontSize: '16px'
            }}
          >
            Login
          </Button>

        </form>

      </Paper>
    </Container>
  )
}

export default App
