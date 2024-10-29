import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { deleteCar, fetchDatas } from "../carapi";
import { Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import AddCar from "./AddCar";
import EditCar from "./EditCar";

export default function Carlist() {
  const [cars, setCars] = useState([]);
  const [open, setOpen] = useState(false);

  const [columnDefs] = useState([
    { field: "brand", filter: true, floatingFilter: true },
    { field: "model", filter: true, floatingFilter: true },
    { field: "color", filter: true, floatingFilter: true, flex: true },
    { field: "fuel", filter: true, floatingFilter: true, flex: true },
    { field: "modelYear", filter: true, floatingFilter: true, flex: true },
    { field: "price", filter: true, floatingFilter: true, flex: true },
    {
      cellRenderer: (params) => (
        <EditCar data={params.data} handleFetch={handleFetch} />
      ),
      width: 150,
    },
    {
      cellRenderer: (params) => (
        <Button
          color="error"
          size="small"
          onClick={() => handleDelete(params.data._links.self.href)}
        >
          Delete
        </Button>
      ),
      width: 150,
    },
  ]);

  const handleDelete = (url) => {
    if (window.confirm("Are you sure?")) {
      deleteCar(url)
        .catch((err) => console.error(err))
        .then(() => {
          handleFetch();
          setOpen(true);
        });
    }
  };

  const handleFetch = () => {
    fetchDatas()
      .then((data) => setCars(data._embedded.cars))
      .catch((error) => console.error(error.message));
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <AddCar handleFetch={handleFetch} />
      <div
        className="ag-theme-material"
        style={{ width: "100%", height: "700px" }}
      >
        <AgGridReact
          rowData={cars}
          columnDefs={columnDefs}
          pagination={true}
          paginationAutoPageSize={true}
          suppressCellFocus={true}
        />
      </div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Car deleted"
      />
    </>
  );
}
