import {useEffect} from 'react'
import '@fontsource/roboto/400.css';
import './App.css'
import {useAppDispatch} from "./hooks/useAppDispatch.ts";
import {connect} from "./store/slices/webSockets/webSocket.slice.ts";
import {MainPage} from "./pages/Main/Main.tsx";

function App() {
  // const [count, setCount] = useState(0)

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(connect())
  }, [])

  return (
      <MainPage />
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
