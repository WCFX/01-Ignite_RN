import styled from 'styled-components/native';
import Colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.primary};
`;

export const Title = styled.Text`
  color: ${Colors.black};
  font-size: 18px;
`;
