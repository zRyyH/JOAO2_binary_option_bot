import styles from './index.module.css'
import Dashboard from '../components/dashboard';
import useApp from '../hooks/useApp';
import Login from '../components/login';



function App() {
  const { isAuthenticated } = useApp()
  
  return (
    <div className={styles.master}>
      {isAuthenticated ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;