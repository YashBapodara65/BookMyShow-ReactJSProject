import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddForm from '../pages/AddForm'
import EditForm from '../pages/EditForm'

function MainRoute() {
  return (
    <>
    <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/addForm"} element={<AddForm/>}></Route>
        <Route path={"/editForm/:id"} element={<EditForm/>}></Route>
    </Routes>
    </>
  )
}

export default MainRoute