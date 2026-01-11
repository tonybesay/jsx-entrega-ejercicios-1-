import { useRef, useState } from "react";
import Layout from "../components/Layout";

const minusculas = 'abcdefghijklmnopqrstuvwxyz'
const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numeros = '0123456789'
const especiales = 'ºª!·$%&/()=?¿^*¨Ç;:_|@#¢÷[]{}+ç.-'
const variablesPass = [minusculas, mayusculas, numeros, especiales]

export default function Jsx_ejercicio_7(){
    const [randomPass, setRandomPass] = useState("")
    const [error, setError] = useState("")
    const [input, setInput] = useState("")
    const inputRef = useRef(null)
    
    function handleSubmit(event){
        event.preventDefault()
        generatePassword()
    }

    function checkPassLength() {
        if (input < 4) {
            setError('La longitud debe ser mayor o igual a 4')
            return true
        }else if (input > 100) {
            setError('La longitud es demasiado larga escriba un número del 4 al 100')
            return true
        }
        return false
    }

    function shuffleArray(arr) {
        const copy = [...arr]
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[copy[i], copy[j]] = [copy[j], copy[i]]
        }
        return copy
    }

    function generatePassword(){
        inputRef.current.focus()
        if (checkPassLength()) return

        setError("")
        let pass = []
        //Insertamos un caracter de cada tipo
        for (let i = 0; i < 4; i++) {
            const caracter = Math.floor(Math.random() * variablesPass[i].length)
            pass.push(variablesPass[i][caracter])
        }

        // Agregamos el resto de caracteres aleatoriamente segun la logitud del input
        for (let i = 0; i < input-4; i++) {
            const tipoVar = Math.floor(Math.random() * 4);
            const caracter = Math.floor(Math.random() * variablesPass[tipoVar].length)
            pass.push(variablesPass[tipoVar][caracter])
        }

        // Mezclamos la contraseña y la seteamos
        pass = shuffleArray(pass).join("")
        setRandomPass(pass)
    }

    return (
        <Layout>
            <section className="mt-10 flex flex-col gap-6 items-center m-auto p-10 bg-slate-200 text-slate-900 rounded min-w-[50%] shadow-lg">
                <h2 className="text-3xl font-semibold">
                Generador de contraseñas seguras
                </h2>
                <form 
                    onSubmit={handleSubmit}
                    action=""
                    className="flex flex-col gap-5 items-center">
                    <label 
                        htmlFor="input"
                        className="text-slate-800">
                        Introduce la longitud de la contraseña a generar
                    </label>
                    <input
                        ref={inputRef}
                        type="number"
                        name="input"
                        value={input}
                        onChange={(event) => setInput(Number(event.target.value))}
                        min={4}
                        max={100}
                        placeholder="Número del 4 al 100"
                        className="w-2/3 text-sm px-2 py-1 rounded"
                    />
                    <button
                        type="submit"
                        className="w-2/3 px-2 py-1 text-white bg-blue-700 hover:bg-blue-600 rounded shadow"
                    >
                        Generar contraseña        
                    </button>
                </form>
                {error && <p className="text-red-600">{error}</p>}
                {randomPass && 
                    <p 
                    className="font-mono break-all bg-slate-300 px-2 py-1 rounded">
                        {randomPass}</p>}
            </section>
        </Layout>
    )
}