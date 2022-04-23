import './App.css';
import Tracker from './components/Tracker';

export default function App() {
  const table = [];
  const form = {
    id: '',
    date: '',
    distance: '',
  };
  return (
      <div className="App">
        <Tracker className="Tracker" initTable={table} initForm={form} />
      </div>
  );
}