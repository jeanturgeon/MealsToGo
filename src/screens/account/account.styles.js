import styled from "styled-components/native";
import { colors } from "../../UI/theme/colors";
import { Text } from "../../UI/text.component";
import { TextInput } from "react-native-paper";




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

export const Title = styled(Text)`
    fontSize: ${props => props.theme.fontSizes.h4}
`;

export const AccountContainer = styled.View`
    backgroundColor: rgba(255,255,255, 0.4);
    padding: ${(props) => props.theme.space[4]};
    marginTop: ${(props) => props.theme.space[2]};
    position: relative;    
    justifyContent: center;
    alignItems: center;
`;

export const ButtonContainer = styled.View`    
    borderRadius: 5px;
    backgroundColor: ${colors.brand.primary};
    width:140px;
    padding: ${(props) => props.theme.space[2]};    
`;

export const AuthTextInput = styled(TextInput)`
    width: 250px;
`;

export const ErrorContainer = styled.View`
    maxWidth: 250px;
    alignItems: center;
    alignSelf: center;
    marginTop: ${props => props.theme.space[2]};
    marginBottom: ${props => props.theme.space[2]};
`;


