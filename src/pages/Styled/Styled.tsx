import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import {Container, Menu, UserBio, UserNome, UserId, UserAvatar, Button} from "./StyledStyle"
import axios from 'axios'

export default function Styled(){
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
        <Container>
            <Menu>
                <UserAvatar src={userAvatar} />
                <UserNome>{userNome}</UserNome>
                <UserId>{userId}</UserId>
                <UserBio>{userBio}</UserBio>
                <Button onClick={() => navigate(-1)}>Retornar</Button>
            </Menu>
        </Container>
    )
}