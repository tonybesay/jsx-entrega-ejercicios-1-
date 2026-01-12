
import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";

const STORAGE_KEY = 'Task_list'

export default function Jsx_ejercicio_9(){
    const [inputValue, setInputValue] = useState("")
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem(STORAGE_KEY)
        return savedTasks ? JSON.parse(savedTasks) : []
    })
    const inputRef = useRef(null)

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    }, [tasks])

    function handleSubmit(event){
        event.preventDefault()
        const newTask = inputValue.trim()
        if(!newTask) return

        setTasks([...tasks, { 
            id: Date.now(), 
            text: newTask, 
            completed: false 
        }])        
        inputRef.current.focus()
        setInputValue("")
    }

    function deleteItem(id){
        setTasks(tasks.filter((task) => (task.id !== id)))
    }

    function tooggleTask(id){
        setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed } : task))
    }

    function clearCompletedTasks() {
        setTasks(tasks.filter(task => !task.completed))
    }

    return(
        <Layout>
            <section className="flex flex-col mt-10 gap-6 items-center p-10 m-auto bg-slate-200 text-slate-900 rounded min-w-[50%] shadow-lg">

                <h2 className="text-2xl font-semibold">Lista de Tareas con LocalStorage</h2>
                
                <form 
                    className="flex flex-col gap-5 items-center"
                    onSubmit={handleSubmit}
                >
                    <div className="flex gap-3">
                        <input 
                            className="px-2 py-1 text-sm rounded"
                            type="text" 
                            placeholder="Nueva tarea..."
                            ref={inputRef}
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value)}
                        />
                        <button
                            className="w-2/3 px-2 py-1 text-white text-sm bg-blue-700 hover:bg-blue-600 rounded shadow"
                            type="submit"
                        >
                            Agregar
                        </button>
                        
                    </div>

                </form> 
                <ul className="space-y-2 min-w-full">
                    {tasks.map((task) =>(
                        <li 
                            className="flex justify-between items-center bg-slate-300 px-3 py-2 rounded"
                            key={task.id}
                        >
                            <div className="flex gap-6">
                                <input type="checkbox" 
                                    checked={task.completed}
                                    onChange={() => tooggleTask(task.id)}
                                    />
                                <span 
                                    className={`text-sm ${task.completed ? "text-slate-500 line-through" : ""}`}
                                >
                                    {task.text}
                                </span>
                            </div>

                            <button className="p-1 bg-red-600  hover:bg-red-500 text-white text-sm rounded"
                                    onClick={() => deleteItem(task.id)}>
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>

                {tasks.some(task => task.completed) &&
                <button
                type="button"
                onClick={clearCompletedTasks}
                className="px-2 py-1 text-sm bg-red-600 hover:bg-red-500 text-white rounded shadow"
                // className="mt-4 px-4 py-2 bg-red-400 hover:bg-red-700 text-white text-sm rounded shadow"
                >
                    Limpiar tareas completadas
                </button>
                }
            </section>

        </Layout>
    )
}