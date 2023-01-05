import styled from "styled-components/native";
import { colors } from "../../UI/theme/colors";
import { TextInput } from "react-native-paper";
import { Text } from "../../UI/text.component";




export const AccountBackground = styled.ImageBackground.attrs({
    source: require('../../../assets/home_bg.jpg'),
})`
    flex: 1;    
    alignItems: center;
    justifyContent: center;
`;

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    backgroundColor: rgba(255,255,255, 0.2);
    
`;

export const AccountContainer = styled.View`
    backgroundColor: rgba(255,255,255, 0.4);
    padding: ${(props) => props.theme.space[4]};
    marginTop: ${(props) => props.theme.space[2]};
    alignItems: center;
`;

export const ButtonContainer = styled.View`    
    borderRadius: 5px;
    backgroundColor: ${colors.brand.primary};
    width:130px;
    padding: ${(props) => props.theme.space[1]};
    marginTop: ${(props) => props.theme.space[3]};
`;

export const AuthInput = styled(TextInput)`
  width: 250px;
`;

export const Title = styled(Text)`
  font-size:${props => props.theme.fontSizes.h4}
`;
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;


