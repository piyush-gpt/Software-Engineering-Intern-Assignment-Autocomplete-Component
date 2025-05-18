import Autocomplete from './components/Autocomplete'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Product Search
        </h1>
        <Autocomplete />
      </div>
    </div>
  )
}

export default App
