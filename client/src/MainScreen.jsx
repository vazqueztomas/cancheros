import React, {useState} from 'react'
import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';
import {teams} from './teams'

const inputDate = (props) => (
  <input type = 'date' {...props}/>
)

const MainScreen = () => {
  const teamsNames = teams.map((el, ind) => {
    return el.strTeam;
  })
  const [visibleForm, setVisibleForm] = useState(false);
  const initialValues = {
    playVersus: '',
    matchDay: '',
  }
  return (
    <Container>
      <button onClick = {() => setVisibleForm(!visibleForm)}>Añadir partido</button>

      {visibleForm ? 
      <Formik
        initialValues={initialValues}
        onSubmit = {(values) => {console.log(values)}}
      >
        {() => (
          <Form style={{display: 'flex', flexDirection: 'column'}}>
          <label>Contra quién jugó tu equipo?</label>
          <Field as = 'select' name = 'playVersus'>
            {teamsNames.map((el, ind) => <option key = {ind}>{el}</option>)}
          </Field>

          <label htmlFor='matchDay'>En que fecha?</label>
          <Field as = {inputDate} name = 'matchDay'/>
          {/* <input type = 'date' name = 'matchDay'/> */}

          <button type = 'submit'>Cargar partido</button>
        </Form>
        )}
      </Formik> : null}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export default MainScreen