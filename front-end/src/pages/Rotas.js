import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './Home'
import Cadastro from './Cadastro'
import Login from './Login'
import LoginAdm from './Login/adm'
import AreaAdm from './Adm'
import Feed from './Feed'
import Cursos from './Feed/cursos'
import Curso from './Feed/curso'
import Vagas from './Feed/vagas'
import Mentoria from './Feed/mentoria'

const Rotas = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='cadastrar' element={<Cadastro />} />
        <Route path='login-adm' element={<LoginAdm />} />
        <Route path='area-adm' element={<AreaAdm />} />
        <Route path='feed' element={<Feed />} />
        <Route path='cursos' element={<Cursos />} />
        <Route path='curso' element={<Curso />} />
        <Route path='vagas' element={<Vagas />} />
        <Route path='mentoria' element={<Mentoria />} />
      </Routes>
  )
}

export default Rotas
