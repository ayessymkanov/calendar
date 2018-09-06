// simple functions to simulate auth actions
// not ideal solution but does the job
export const login = ({ email, password }) => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user.email === email && user.password === password) {
    localStorage.setItem('loggedIn', true);
    return true;
  }
  return false;
}