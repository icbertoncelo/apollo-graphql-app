import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  max-width: 500px;

  h1 {
    color: #f4ede8;
    margin-bottom: 32px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 100%;
      height: 46px;
      background: #232129;
      border-radius: 4px;
      border: 2px solid #232129;
      color: #666360;
      padding: 16px;
      width: 100%;

      & + input {
        margin-top: 8px;
      }
    }

    button {
      margin-top: 32px;
      width: 100%;
      height: 46px;
      background: #ff9000;
      border-radius: 4px;
      border: none;
      color: #f4ede8;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  padding: 16px;
`;
