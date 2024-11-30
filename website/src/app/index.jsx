import styles from './index.module.css'
import useApp from '../hooks/useApp';
import Login from '../components/login';
import Dashboard from '../components/dashboard';


function App() {
  const { isAuthenticated } = useApp();

  return (
    <div className={styles.master}>
      {isAuthenticated ? <Dashboard /> : <Login />}
    </div>
  );
}


export default App;