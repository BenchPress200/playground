import styled from 'styled-components';

const Container = styled.div`
  width: 100%; 
  background-color: #f0f0f0; 
  margin: 0 auto; 
`;

const Text = styled.div`
  width: 50%; 
  background-color: #ddd; 
  text-align: center; 
`;

function Home() {
    return (
        <Container>
            <Text>Hello world!</Text>
        </Container>
    );
}

export default Home;