import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  width: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 8, 2);
`
export const LoginLogo = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 15px;
`
export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`
export const LoginButton = styled.button`
  background-color: #4f46e5;
  border: none;
  width: 100%;
  color: #ffffff;
  margin-top: 20px;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 15px;
  height: 30px;
`
export const SubmitError = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
`
export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: #475569;
  font-weight: 500;
`
export const UserInput = styled.input`
  border: 1px solid #94a3b8;
  width: 100%;
  color: #475569;
  padding: 8px;
  outline: none;
  margin-top: 5px;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 15px;
`
export const CheckboxContainer = styled.div`
    display: flex;
    margin: 12px
    flex-direction: row;
    align-items: center;
`
export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 5px;
`
export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
`
