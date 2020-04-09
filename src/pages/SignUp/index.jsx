import React from 'react';
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import logo from '~/assets/logo.svg'

const schema = Yup.object().shape({
  name: Yup.string().required('Insira seu nome'),
  email: Yup.string().email('Insira um e-mail válido').required('Insira seu e-mail'),
  password: Yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Insira sua senha')
})

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data)
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha secreta" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
