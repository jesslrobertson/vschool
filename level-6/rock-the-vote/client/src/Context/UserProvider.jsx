import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props){
  const initState = { 
    user: JSON.parse(localStorage.getItem("user")) || {}, 
    token: localStorage.getItem("token") || "", 
    posts: []
  }

  const [userState, setUserState] = useState(initState)

  function signup(credentials){
      axios.post("/auth/signup", credentials)
        .then(res => {
          const {user, token } = res.data
          localStorage.setItem("token", token)
          localStorage.setItem("user", JSON.stringify(user))
          setUserState(prevUserState => ({
            ...prevUserState, 
            user,
            token
          }))
        })
        .catch(err => console.log(err.response.data.errMsg))
  }

  function login(credentials){
    axios.post("/auth/login", credentials)
        .then(res => {
          const {user, token } = res.data
          localStorage.setItem("token", token)
          localStorage.setItem("user", JSON.stringify(user))
          getUserPosts()
          setUserState(prevUserState => ({
            ...prevUserState, 
            user,
            token
          }))
        })
        .catch(err => console.log(err.response.data.errMsg))
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      posts:[]
    })
  }

  function getUserPosts(){
    userAxios.get("/api/post/user")
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          posts: res.data 
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addPost(newpost){
    userAxios.post("/api/post", newPost)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          posts: [...prevState.posts, res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }


  return(
    <UserContext.Provider
      value = {{
        ...userState,
        signup, 
        login, 
        logout, 
        addPost
      }}
    >
      { props.children }
    </UserContext.Provider>
  )
}