import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [state, setState] = useState({ isAuth: false, user: {} });
  const [isAppLoading, setIsAppLoading] = useState(true);
  const fetchProfile = useCallback(async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setState({ isAuth: false, user: {} });
      setIsAppLoading(false);
      return;
    }
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/user/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setState({ isAuth: true, user: res.data.user });
    } catch (err) {
      if (err?.response?.status === 401 || err?.response?.status === 403) {
        localStorage.removeItem("authToken");
      }
      setState({ isAuth: false, user: {} });
    } finally {
      setIsAppLoading(false);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setState({ isAuth: false, user: {} });
  };
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  if (isAppLoading) return <div>Loading...</div>;
  return (
    <AuthContext.Provider value={{ fetchProfile, ...state, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
