import React from 'react';
import Colors from '../../styles/colors';
import * as Style from './styles';

const Home = () => {
  return (
    <Style.Container>
      <Style.ContainerForm>
        <Style.UserName>
          Welcome, <Style.Bold>Wagner</Style.Bold>
        </Style.UserName>
        <Style.Input
          placeholderTextColor={Colors.gray}
          placeholder="Insira aqui seu cu"
        />
        <Style.ButtonSubmit>
          <Style.ButtonSubmitText>Add</Style.ButtonSubmitText>
        </Style.ButtonSubmit>
      </Style.ContainerForm>
      <Style.Content>
        <Style.ContentTitle>My Skills</Style.ContentTitle>
      </Style.Content>
    </Style.Container>
  );
};

export default Home;
