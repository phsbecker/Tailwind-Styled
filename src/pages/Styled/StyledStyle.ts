import styled from "styled-components";

const Container = styled.div
  `display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;`
;

const Menu = styled.div
  `display: flex;
  flex-direction: column;
  padding: 1.5rem;
  align-items: center;
  background-color: #e5e7eb;
  border-radius: 0.9rem;
  border: 5px solid black;
  max-width: 35rem;`
;

const UserAvatar = styled.img
  `width: 11rem;
  height: 11rem;
  border-radius: 100px;
  border: 5px solid black;`
;

const UserNome = styled.p
  `font-weight: bold;
  color: black;
  font-size: 2.5rem;`
;

const UserId = styled.p
  `color: black;
  font-size: 1.5rem; 
  margin-bottom: 1rem;`
;

const UserBio = styled.p
  `color: black;
  font-size: 1.8rem; 
  margin-bottom: 2.5rem;`
;

const Button = styled.button
  `background-color: black;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.5rem; 
  font-weight: bold;
  padding: 1rem;
  cursor: pointer;`
;

export {Container, Menu, UserBio, UserNome, UserId, UserAvatar, Button}