export function fetchDatas() {
  return fetch(import.meta.env.VITE_API_URL).then((res) => {
    if (!res.ok) {
      throw new Error("Error in fetching" + res.statusText);
    }
    return res.json();
  });
}

export function deleteCar(url) {
  return fetch(url, { method: "DELETE" }).then((res) => {
    if (!res.ok) {
      throw new Error("Error in deleting:" + res.statusText);
    }

    return res.json();
  });
}

export function addCar(newCar) {
  return fetch(import.meta.env.VITE_API_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newCar),
  }).then((res) => {
    if (!res.ok) throw new Error("Error in adding: " + res.statusText);

    return res.json();
  });
}

export function editCar(editedCar, url) {
  return fetch(url, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(editedCar),
  }).then((res) => {
    if (!res.ok) throw new Error("Error in editing: " + res.statusText);

    return res.json();
  });
}
