import styled from "styled-components/native";
import { colors } from "../../UI/theme/colors";




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
`;

export const ButtonContainer = styled.View`    
    borderRadius: 5px;
    backgroundColor: ${colors.brand.primary};
    width:130px;
    padding: ${(props) => props.theme.space[1]};
    marginTop: ${(props) => props.theme.space[3]};
`;


