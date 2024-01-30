import apiBaseUrl from "../../apiConfig";


export function fetchSignedInUserOrders() {
  return new Promise(async (resolve) => {
    const response = await fetch(`${apiBaseUrl}/orders/own`);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchSignedInUser() {
  return new Promise(async (resolve) => {
    const response = await fetch(`${apiBaseUrl}/orders/own`);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${apiBaseUrl}/orders` + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}
