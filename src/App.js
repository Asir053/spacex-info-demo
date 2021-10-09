import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Missions from './components/missions';
import './App.css';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Missions />
    </Provider>
  );
};

export default App;
