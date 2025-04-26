import { useState } from "react"
import { useNavigate } from "react-router"

export default function Home(){
    const navigate = useNavigate()
    const [userNome, setUserNome] = useState("")

    return(
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex flex-col p-6 items-center bg-gray-200 rounded-xl border-black border-5">
                <input value={userNome}
                onChange={(element) => setUserNome(element.target.value)}
                placeholder="Nome do usuário"
                className="text-black border-5 border-black rounded-xl text-2xl text-center p-2 mb-6 bg-gray-300"/>
                
                <button className="bg-black rounded-lg text-white text-2xl font-bold p-4 cursor-pointer mb-2"
                onClick={()=>{navigate(`/Tailwind/${userNome}`)}}>Tailwind CSS</button>
                
                <button className="bg-black rounded-lg text-white text-2xl font-bold p-4 cursor-pointer" 
                onClick={()=>{navigate(`/Styled/${userNome}`)}}>Styled-Components</button>
            </div>
        </div>
    )
}