import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';
import {teams} from './teams'
import { getUser, setNewMatch } from '../services/services';
import { myContext } from '../context/AuthProvider';
import MatchCard from './MatchCard';
import LogoutButton from './LogoutButton';

const inputDate = (props) => (
  <input type = 'date' {...props}/>
)

const MainScreen = () => {
  const {auth} = myContext();
  const [matches, setMatches] = useState([])
  const [visibleForm, setVisibleForm] = useState(false);
  const email = auth.userLog.userInfo.email;

  const initialValues = {
    email,
    playVersus: '',
    matchDay: '',
  }

  const teamsNames = teams.map((el, ind) => {
    return el.strTeam;
  })

  const getMatches = async () => {
    try {
      const response = await getUser(email);
      setMatches(response.matches)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMatches()
  },[])

  const setMatch = async (matchData) => {
    try {
      const response = await setNewMatch(matchData);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <LogoutButton/>
      <div style = {{display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '24px', gap: '16px'}}>
      {matches ? matches.map((el, ind) => <MatchCard key = {ind} clubOne={el.playVersus} clubTwo = {el.playVersus} date = {el.matchDay}/>) : null}
      </div>

      {visibleForm ? 
      <Formik
        initialValues={initialValues}
        onSubmit = {async (values) => {
          await setMatch(values)
          await getMatches()
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

      <button onClick = {() => setVisibleForm(!visibleForm)}>Añadir partido</button>

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  backdrop-filter: blur(10px);
  width: 100vw;
  height: 100vh;
  background-color: #01010110
`

export default MainScreen