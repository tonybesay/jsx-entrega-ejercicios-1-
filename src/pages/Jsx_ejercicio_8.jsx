import { useRef, useState } from "react";
import Layout from "../components/Layout";

export default function Jsx_ejercicio_8() {
    const [nLetters, setNLetters] = useState(0)
    const [nWords, setNWords] = useState(0)

    const textRef = useRef(null)

    function counter(){
        // Count Letters
        setNLetters(textRef.current.value.replaceAll(" ", "").length)

        // Count Words
        const words = textRef.current.value.split(" ")
        const filteredWords = words.filter(word => word.trim() !== "")
        setNWords(filteredWords.length)
    }

    return (
        <Layout>
            <section
                className="flex flex-col mt-10 gap-6 items-center p-10 m-auto bg-slate-200 text-slate-900 rounded min-w-[50%] shadow-lg"
            >
                <h2 className="text-2xl font-semibold">
                    Contador de Palabras y Caracteres
                </h2>

                <textarea 
                    name="textarea"
                    cols="40"
                    rows="6"
                    placeholder="Escribe aquí tu texto..."
                    className="rounded text-sm p-2 text-slate-900"
                    ref={textRef}
                    onChange={counter}
                >
                </textarea>
                <div
                    className="flex flex-col gap-3 text-slate-900  p-2"
                >
                    <p className="flex gap-5">
                        Números de letras escritas:
                        <span className="font-semibold">
                            {nLetters}
                        </span>
                    </p>
                    <p className="flex gap-2">
                        Numero de palabras escritas:
                        <span className="font-semibold">
                            {nWords}
                        </span>
                    </p>
                </div>

            </section>
        </Layout>
    )
}