// export function addToCart(item) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8080/cart", {
//       method: "POST",
//       body: JSON.stringify(item),
//       headers: { "content-type": "application/json" },
//     });

//     const data = await response.json();
//     resolve({ data });
//   });
// }

// export function updateCart(update) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8080/cart/" + update.id, {
//       method: "PATCH",
//       body: JSON.stringify(update),
//       headers: { "content-type": "application/json" },
//     });

//     const data = await response.json();
//     resolve({ data });
//   });
// }
// export function deleteItemFromCart(itemId) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8080/cart/" + itemId, {
//       method: "DELETE",
//       // body: JSON.stringify(itemId),
//       headers: { "content-type": "application/json" },
//     });

//     const data = await response.json();
//     resolve({ data: { id: itemId } });
//   });
// }
// export function fetchItemsByUserId() {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8080/cart");

//     const data = await response.json();
//     resolve({ data });
//   });
// }
// export function resetCart() {
//   return new Promise(async (resolve) => {
//     const response = await fetchItemsByUserId();
//     const items = response.data;

//     for (const item of items) {
//       await deleteItemFromCart(item.id);
//     }
//     resolve({ status: "success" });
//   });
// }
export function addToCart(item) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8080/cart", {
        method: "POST",
        body: JSON.stringify(item),
        headers: { "content-type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      const data = await response.json();
      resolve({ success: true, data });
    } catch (error) {
      reject(error);
    }
  });
}

export function updateCart(update) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8080/cart/" + update.id, {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "content-type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to update cart item");
      }

      const data = await response.json();
      resolve({ success: true, data });
    } catch (error) {
      reject(error);
    }
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8080/cart/" + itemId, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to delete item from cart");
      }

      const data = await response.json();
      resolve({ success: true, data: { id: itemId } });
    } catch (error) {
      reject(error);
    }
  });
}

export function fetchItemsByUserId() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8080/cart");

      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }

      const data = await response.json();
      resolve({ success: true, data });
    } catch (error) {
      reject(error);
    }
  });
}

export function resetCart() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetchItemsByUserId();
      const items = response.data;

      for (const item of items) {
        await deleteItemFromCart(item.id);
      }
      resolve({ success: true, status: "success" });
    } catch (error) {
      reject(error);
    }
  });
}
