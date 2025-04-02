import { showAlert } from "../../Utils/showAlert";

export async function API({ method = 'GET', isJson = false, endpoint, body }) {
  try {
    const headers = {
      ...(isJson && { 'Content-Type': 'application/json' })
    };

    const options = {
      method: method,
      headers,
      body: isJson ? JSON.stringify(body) : body,
      credentials: 'include'
    };
    console.log(options);

    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(`${import.meta.env.VITE_URL_BASE}/${endpoint}`, options);
    const res = await response.json();
    if (!response.ok) {
      throw res.message;
    }

    return res;
  } catch (error) {
    throw error;
  }
}
