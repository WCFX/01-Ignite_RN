import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
`;

export const ContainerForm = styled.View`
  margin: 20px;
`;

export const UserName = styled.Text`
  color: ${Colors.black};
  font-size: 18px;
`;
export const Bold = styled.Text`
  font-weight: bold;
`;

export const Input = styled.TextInput`
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-left-width: ${StyleSheet.hairlineWidth}px;
  border-right-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${Colors.black};
  border-radius: 8px;
  margin-top: 10px;
  padding: 10px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: ${Colors.purple};
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 8px;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonSubmitText = styled.Text`
  color: ${Colors.tag};
  font-weight: bold;
  align-self: center;
`;

export const Content = styled.View`
  margin: 0 20px;
`;

export const ContentTitle = styled.Text`
  padding: 10px;
  font-size: 22px;
  font-weight: 500;
  color: ${Colors.black};
`;
