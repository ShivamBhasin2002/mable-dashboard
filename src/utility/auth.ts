import axios from 'axios';
const API_URL = undefined;

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL || 'bff.dev.mable.ai'}/auth/login`, {
      email,
      password
    });
    // saving the token in local storage
    localStorage.setItem('token', response.data.token);

    // Call the auth me API and store the data in the local storage

    const authMe = await axios.get(`${API_URL || 'bff.dev.mable.ai'}/auth/me`, {
      headers: {
        Authorization: `${response.data.token}`
      }
    });

    //   Saving the userId in local storage
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userId', authMe.data.payload.userId);

    // const shopDomain = await getShopDomain(authMe.data.payload.userId);

    //   Saving the details in the local storage
    // localStorage.setItem("domain", shopDomain.domain);
    // localStorage.setItem("domainPrefix", shopDomain.domainPrefix);
    // localStorage.setItem("shop", shopDomain.shop);

    window.alert('You are logged in');
    window.location.href = '/dashboard';

    return response.data;
  } catch (error) {
    window.alert('Invalid credentials');
    console.log(error);
    return null;
  }
};

const register = async (email: string, password: string, firstName: string, lastName: string) => {
  try {
    const response = await axios.post(`${API_URL || 'bff.dev.mable.ai'}/auth/register`, {
      email,
      password,
      firstName,
      lastName
    });

    // check the output from this query and update the window.alert
    window.alert('You are signed up');
    window.location.href = '/auth/login';

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const isAuthenticated = async () => {
  try {
    const response = await axios.get(`${API_URL || 'bff.dev.mable.ai'}/auth/me`, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`
      }
    });

    return response.data.auth;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const logout = () => {
  console.log('logout');
  try {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('domain');
    localStorage.removeItem('domainPrefix');
    localStorage.removeItem('shop');
    localStorage.setItem('isAuthenticated', 'false');
    window.alert('You are logged out');
    window.location.href = '/auth/login';
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { login, register, isAuthenticated, logout };
