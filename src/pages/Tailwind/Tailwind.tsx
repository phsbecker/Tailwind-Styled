import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import axios from 'axios'

export default function Tailwind(){
    const params = useParams()
    const [userAvatar, setUserAvatar] = useState("")
    const [userNome, setUserNome] = useState("")
    const [userId, setUserId] = useState("")
    const [userBio, setUserBio] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`https://api.github.com/users/${params.user}`).then((response)=>{
            setUserAvatar(response.data.avatar_url)
            setUserNome(response.data.login)
            setUserId(`ID: ${response.data.id}`)
            setUserBio(response.data.bio)
        })
        if(userNome == ""){
            setUserNome("Usuário não encontrado")
        }
    },[])

    return(
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex flex-col p-6 items-center bg-gray-200 rounded-xl border-black border-5 max-w-xl">
                <img className="size-45 rounded-full border-black border-5 mb-2" src={userAvatar}/>
                <p className="font-bold text-black text-4xl mb-1">{userNome}</p>
                <p className="text-black text-2xl mb-4">{userId}</p>
                <p className="text-black text-3xl mb-10">{userBio}</p>
                <button className="bg-black rounded-lg text-white text-2xl font-bold p-4 cursor-pointer"
                onClick={()=>{navigate(-1)}}>Retornar</button>
            </div>
        </div>
    )
}