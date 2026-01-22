import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function IconButton() {
  return (
    <Button
      variant="contained"
      color="success"
      endIcon={<SendIcon />}
    >
      Send
    </Button>
  );
}