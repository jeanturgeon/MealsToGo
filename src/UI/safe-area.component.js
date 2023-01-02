import styled from "styled-components/native";
import { StatusBar, SafeAreaView } from "react-native";


export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  marginTop: ${StatusBar.currentHeight + 5}px;
`;
