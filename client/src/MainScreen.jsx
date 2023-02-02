import React, {useState} from 'react'
import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';
import {teams} from './teams'
import { useApplicationState } from '../config/state';
import { setNewMatch } from '../services/services';

const inputDate = (props) => (
  <input type = 'date' {...props}/>
)

const MainScreen = () => {
  const {user} = useApplicationState();

  const [visibleForm, setVisibleForm] = useState(false);
  const initialValues = {
    email: user.email,
    playVersus: '',
    matchDay: '',
  }

  const teamsNames = teams.map((el, ind) => {
    return el.strTeam;
  })

  const setMatch = async (matchData) => {
    try {
      const response = await setNewMatch(matchData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <button onClick = {() => setVisibleForm(!visibleForm)}>Añadir partido</button>

      {visibleForm ? 
      <Formik
        initialValues={initialValues}
        onSubmit = {(values) => {
          console.log(values)
          setMatch(values)
        }}
      >
        {() => (
          <Form style={{display: 'flex', flexDirection: 'column'}}>
          <label>Contra quién jugó tu equipo?</label>
          <Field as = 'select' name = 'playVersus'>
            {teamsNames.map((el, ind) => <option key = {ind}>{el}</option>)}
          </Field>

          <label htmlFor='matchDay'>En que fecha?</label>
          <Field as = {inputDate} name = 'matchDay'/>

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