import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { addCar } from "../carapi";

export default function AddCar({ handleFetch }) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    color: "",
    fuel: "",
    modelYear: "",
    price: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleAddCar = () => {
    addCar(car)
      .then(() => {
        handleFetch();
        handleClose();
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Car
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Car</DialogTitle>
        <DialogContent>
          <TextField
            value={car.brand}
            margin="dense"
            name="brand"
            label="Brand"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            value={car.model}
            margin="dense"
            name="model"
            label="Model"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            value={car.color}
            margin="dense"
            name="color"
            label="Color"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            value={car.fuel}
            margin="dense"
            name="fuel"
            label="Fuel"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            value={car.modelYear}
            margin="dense"
            name="modelYear"
            label="Model Year"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            value={car.price}
            margin="dense"
            name="price"
            label="Price"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddCar}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
