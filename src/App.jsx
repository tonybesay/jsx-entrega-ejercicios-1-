import { Routes, Route, Link} from "react-router-dom"
import "./index.css";
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Jsx_ejercicio_1 from "./pages/jsx_ejercicio_1";
import Jsx_ejercicio_2 from "./pages/Jsx_ejercicio_2";
import Jsx_ejercicio_3 from "./pages/Jsx_ejercicio_3";
import Jsx_ejercicio_4 from "./pages/Jsx_ejercicio_4";
import Jsx_ejercicio_5 from "./pages/Jsx_ejercicio_5";
import Jsx_ejercicio_6 from "./pages/Jsx_ejercicio_6";
import Jsx_ejercicio_7 from "./pages/Jsx_ejercicio_7";


const EJERCICIOS = [
  { id: 1, titulo: "Cambiador de Color de Fondo"},
  { id: 2, titulo: "Contador de Clicks"},
  { id: 3, titulo: "Lista Dinámica"},
  { id: 4, titulo: "Filtro de Búsqueda en Tiempo Real"},
  { id: 5, titulo: "Calculadora Sencilla"},
  { id: 6, titulo: "Temporizador con Inicio, Pausa y Reinicio"},
  { id: 7, titulo: "Generador de Contraseñas Aleatorias"},
  { id: 8, titulo: "Contador de Palabras y Caracteres"},
  { id: 9, titulo: "Lista de Tareas con LocalStorage"},
]

function Ejercicio({numero}){
  return (
    <div>
      <header>
        <h1 className="text-2xl text-red-500">Ejercicio{numero}</h1>
        <p>Contenido del ejercicio {numero} (aquí lo implementaremos).</p>
      </header>

      <div>
        <Link to='/'>
          Volver al índice
        </Link>
      </div>

      <section>
        <p>Placeholder. En el siguiente paso implementamos el ejercicio {numero}.</p>
      </section>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home ejercicios={EJERCICIOS}/>} />
      <Route path="/ejercicio/1" element={< Jsx_ejercicio_1/>} />
      <Route path="/ejercicio/2" element={< Jsx_ejercicio_2 />} />
      <Route path="/ejercicio/3" element={< Jsx_ejercicio_3 />} />
      <Route path="/ejercicio/4" element={< Jsx_ejercicio_4 />} />
      <Route path="/ejercicio/5" element={< Jsx_ejercicio_5 />} />
      <Route path="/ejercicio/6" element={< Jsx_ejercicio_6 />} />
      <Route path="/ejercicio/7" element={< Jsx_ejercicio_7 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}