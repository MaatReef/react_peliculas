import './App.css'
import {MyRoutes} from "./routers/routes"

export function Header() {
  return (
    <div>
      <header>
        <h1 className='title'>🎬 Películas </h1>
      </header>
      <MyRoutes/>
    </div>
  )
}
