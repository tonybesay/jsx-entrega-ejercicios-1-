// 6. Temporizador con Inicio, Pausa y Reinicio
// Objetivo del ejercicio: Practicar manejo de eventos, funciones de temporización y manipulación del DOM.
// Ejercicio:
// Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar” y “Reiniciar”
// Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas.
// “Pausar” detiene el conteo pero mantiene el tiempo actual.
// “Reiniciar” pone el temporizador en 00:00:00.

import { useState, useRef } from "react";
import Layout from "../components/Layout";

export default function Jsx_ejercicio_6(){
    const [segundos, setSegundos] = useState(0)
    const intervalRef = useRef(null)
    
 
    function startTimer(){
        if(intervalRef.current !== null) return

        intervalRef.current = setInterval(() => (
            setSegundos(prev => prev + 1)
        ), 1000);   
    }
    
    
    function pauseTimer() {
        if(intervalRef.current === null) return
        
        clearInterval(intervalRef.current)
        intervalRef.current = null
    }
    
    function resetTimer() {
        pauseTimer()
        setSegundos(0)
    }
    
    const hh = (String(Math.floor(segundos / 3600)).padStart(2, "0"))
    const mm = (String(Math.floor((segundos % 3600) / 60)).padStart(2, "0"))
    const ss = (String(segundos % 60).padStart(2, "0"))

    return (
        <Layout>
            <section className="mt-10 flex flex-col gap-6 items-center m-auto p-10 bg-slate-200 text-slate-900 rounded min-w-[50%] shadow-lg">
                <h2 className="text-3xl font-semibold">
                    Temporizador con Inicio, Pausa y Reinicio
                </h2>

                <div>
                    <p className="text-6xl font-light">
                        {`${hh}:${mm}:${ss}`}
                    </p>
                    <div className="flex justify-between mt-10">
                        <button
                            type="button"
                            onClick={startTimer}
                            className="bg-green-800 hover:bg-green-700 text-slate-200 px-2 py-1 rounded"
                        >
                                Iniciar
                        </button>
                        <button
                            type="button"
                            onClick={pauseTimer}
                            className="bg-orange-600 hover:bg-orange-500 text-slate-200 px-2 py-1 rounded"
                        >
                                Pausar
                        </button>
                        <button
                            type="button"
                            onClick={resetTimer}
                            className="bg-red-600 hover:bg-red-500 text-slate-200 px-2 py-1 rounded"
                        >
                                Reiniciar
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}