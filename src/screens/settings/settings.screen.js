import React, {useContext, useReducer} from 'react';
import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';

import { AuthenticationContext } from '../../services/auth/authentication.context';
import { Text } from '../../UI/text.component';
import { Spacer } from '../../UI/spacer.component';


const SettingsItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
    alignItems: center;
    marginTop: 10px;
`;


export const SettingsScreen = ({navigation}) => {

    const {onLogout, user} = useContext(AuthenticationContext);

    return (
        <>
            <AvatarContainer>
                <Avatar.Icon size={100} icon='human' backgroundColor='#2182BD'/>                      
                <Spacer position= 'top' size='large'>
                    <Text variant='label'>{user.email}</Text>
                </Spacer>
            </AvatarContainer>  
            <List.Section>
                <SettingsItem                   
                  title="Favourites"
                  description="View your favourites"
                  left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                  onPress={() => navigation.navigate("Favourites")}
                />
                <SettingsItem                     
                    title='Logout'
                    onPress={onLogout}
                    left={props => <List.Icon {...props} color="black" icon="door" />}
                />
            </List.Section>
        </>
    );
}

