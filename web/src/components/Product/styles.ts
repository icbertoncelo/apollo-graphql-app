import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f4ede8;
  color: #232129;
  border-radius: 4px;

  padding: 8px;

  div {
    display: flex;

    p {
      font-size: 2rem;
    }

    strong {
      font-size: 2.4rem;
      margin-left: auto;
    }
  }

  span {
    margin-top: 16px;
  }

  button {
    margin-top: 8px;
    height: 32px;
    padding: 8px 16px;
    margin: 0 auto;
    background: #ff3030;
    border-radius: 4px;
    border: none;
    color: #f4ede8;
  }
`;
