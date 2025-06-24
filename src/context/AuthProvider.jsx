import { createContext, useState, useEffect, useContext } from 'react';
import { fetchData } from '../utils/rapidapi';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [value, setValue] = useState('New');

  const fetchAllData = (query) => {
    setLoading(true);
    setError(null);
    fetchData(`search/?q=${query}`)
      .then((contents) => {
        // Defensive: setData to items array or empty array
        setData(contents?.contents || []);
      })
      .catch((err) => {
        setError('Failed to fetch data');
        setData([]);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchAllData(value);
  }, [value]);

  return (
    <AuthContext.Provider value={{ data, loading, error, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);