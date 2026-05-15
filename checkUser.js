export const isUsernameValid = (username) => {
  return username.length >= 3 && !username.includes(' ');
}
