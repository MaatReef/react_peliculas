import './App.css'
import {MyRoutes} from "./routers/routes"

export function Header() {
  return (
    <div>
      <header>
        <h1 className='title'>🎬 Peliculas </h1>
      </header>
      <MyRoutes/>
    </div>
  )
}
