import {
  Button,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  Rating,
  FormControlLabel,
  Card,
  CardContent,
  Typography,
  Box
} from "@mui/material";

function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Card sx={{ width: 400, p: 2 }}>
        <CardContent>

          <Typography variant="h5" align="center" gutterBottom>
            UI Components Form
          </Typography>

          {/* TextField */}
          <TextField
            label="Enter Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          {/* Select */}
          <Select
            fullWidth
            displayEmpty
            defaultValue=""
            sx={{ mt: 2 }}
          >
            <MenuItem value="">Select Option</MenuItem>
            <MenuItem value="1">Option 1</MenuItem>
            <MenuItem value="2">Option 2</MenuItem>
          </Select>

          {/* Rating */}
          <Box mt={3}>
            <Typography variant="body1">Rating</Typography>
            <Rating />
          </Box>

          {/* Checkbox */}
          <Box mt={2}>
            <FormControlLabel
              control={<Checkbox />}
              label="Accept Terms & Conditions"
            />
          </Box>

          {/* Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
          >
            Submit
          </Button>

        </CardContent>
      </Card>
    </Box>
  );
}

export default App;
