import styled from "styled-components";

export const Container = styled.div`
  background-color: #19181b;
  height: 100vh;
  padding: 1rem;

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -o-font-smoothing: antialiased;
    -webkit-appearance: none;
    appearance: antialiased;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 4rem;
    align-items: center;
  }
`;

export const Content = styled.div`

  max-width: 700px;
  min-width: 21.87rem;
  height: 100%;
  background-color: #232225;
  border-radius: var(--border-r-12);
  padding: 1rem;
  position: relative;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12.5px;
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      margin-top: 2rem;
    }
    img {
      width: 23rem;
      min-width: 10rem;
    }
  }

  form {
    margin: 0 auto;
  }
`;