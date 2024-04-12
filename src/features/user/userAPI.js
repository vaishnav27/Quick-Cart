// export function fetchLoggedInUserOrders(userId) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8080/orders/user/" + userId);
//     const data = await response.json();
//     resolve({ data });
//   });
// }
// export function fetchLoggedInUser() {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8080/users/own");
//     const data = await response.json();
//     resolve({ data });
//   });
// }
// export function updateUser(update) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8080/users/" + update.id, {
//       method: "PATCH",
//       body: JSON.stringify(update),
//       headers: { "content-type": "application/json" },
//     });

//     const data = await response.json();
//     resolve({ data });
//   });
// }

export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        "http://localhost:8080/orders/user/" + userId
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user orders");
      }
      const data = await response.json();
      resolve({ success: true, data });
    } catch (error) {
      reject(error);
    }
  });
}

export function fetchLoggedInUser() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8080/users/own");
      if (!response.ok) {
        throw new Error("Failed to fetch logged-in user");
      }
      const data = await response.json();
      resolve({ success: true, data });
    } catch (error) {
      reject(error);
    }
  });
}

export function updateUser(update) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8080/users/" + update.id, {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "content-type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to update user");
      }
      const data = await response.json();
      resolve({ success: true, data });
    } catch (error) {
      reject(error);
    }
  });
}
