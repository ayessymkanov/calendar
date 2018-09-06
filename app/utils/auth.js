import { users } from '../db'

// simple functions to simulate auth actions
// not ideal solution but does the job
export const login = ({ email, password }) => {
  let loggedIn = false;
  Object.keys(users).forEach(userId => {
    if(users[userId].email === email && users[userId].password === password) {
      console.log('true', users[userId])
      localStorage.setItem('user', JSON.stringify({ email, loggedIn: true }));
      loggedIn = true;
    }
  })
  console.log(loggedIn)
  return loggedIn;
}