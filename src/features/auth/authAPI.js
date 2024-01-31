import apiBaseUrl from "../../apiConfig";
export function createUser(userData) {
  
  return new Promise(async (resolve) => {
    const response = await fetch(`${apiBaseUrl}/auth/signup`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function signinUser(signinInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${apiBaseUrl}/auth/signin`, {
        method: "POST",
        body: JSON.stringify(signinInfo),
        headers: { "content-type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }

    // TODO: on server it will only return some info of user (not password)
  });
}

export function checkAuth() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${apiBaseUrl}/auth/check`);

      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        // Check if the response is JSON
        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/json')) {
          // If the error response is JSON, parse it
          const errorData = await response.json();
          reject(errorData);
        } else {
          // If the error response is not JSON, treat it as a plain text error
          const error = await response.text();
          reject(error);
        }
      }
    } catch (error) {
      reject(error);
    }
  });
}


export function signOut(userId) {
  return new Promise(async (resolve) => {
    // TODO: on server we will remove user session info
    resolve({ data: "success" });
  });
}
