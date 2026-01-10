import { useState, useRef } from "react";
import Layout from "../components/Layout";

export default function Jsx_ejercicio_5() {
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [resultado, setResultado] = useState("")

    const input1Ref = useRef(null)

    function clearInputs(){
        setInput1("")
        setInput2("")
        input1Ref.current.focus()

    }
    function calculate(operation){
        const num1 = parseFloat(input1)
        const num2 = parseFloat(input2)

        if (isNaN(num1) || isNaN(num2)) {
            setResultado("Introduce números válidos")
            return
        }

        let result
        switch (operation) {
            case "+":
                result = num1 + num2
                break
            case "-":
                result = num1 - num2
                break
            case "*":
                result = num1 * num2
                break
            case "/":
                if(num2 === 0){
                    setResultado("No se puede dividir entre 0")
                    return
                }
                result = num1 / num2
                break
            default:
                return
        }
        setResultado(result)
        clearInputs()
    }

    return (
        <Layout>
            <section className="mt-10 flex flex-col gap-6 items-center m-auto p-10 bg-slate-200 text-slate-900 rounded min-w-[50%] shadow-lg">
                <h2 className="text-3xl font-semibold">
                    Calculadora Sencilla
                </h2>

                <form>
                    <div className="flex gap-5">
                        <input 
                            ref={input1Ref}
                            type="number"
                            placeholder="Primer número"
                            className="text-sm px-2 py-1 rounded"
                            value={input1}
                            onChange={(event) => setInput1(event.target.value)}
                        />
                        <input 
                            type="number"
                            placeholder="Segundo número"
                            className="text-sm px-2 py-1 rounded"
                            value={input2}
                            onChange={(event) => setInput2(event.target.value)}
                        />
                    </div>

                    <div className="mt-6 flex justify-between">
                        {["+", "-", "*", "/"].map((op) => (
                            <button
                                key={op}
                                type="button"
                                onClick={() => calculate(op)}
                                className="w-10 h-10 text-2xl font-bold text-white bg-blue-700 hover:bg-blue-600 rounded shadow"
                                >
                                {op}
                            </button>
                        ))}
                    </div>
                </form>
                <div>
                    <p className="flex gap-2">
                        Resultado:  
                        <span className="text-xl font-bold">
                            {resultado}
                        </span>
                    </p>
                </div>

            </section>

        </Layout>
    )
}