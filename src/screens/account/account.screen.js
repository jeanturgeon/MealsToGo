import React from 'react';
import { Button } from "react-native-paper";


import { AccountBackground, AccountCover, AccountContainer, ButtonContainer} from './account.styles';

export const AccountScreen = ({navigation}) => {
    return (
        <AccountBackground>
            <AccountCover />
                <AccountContainer>
                    <ButtonContainer>
                        <Button
                            icon='lock-open-outline'
                            color='white' 
                            onPress={() => navigation.navigate('Login')}                   
                        >
                            Login                            
                        </Button>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button
                            icon='lock-open-outline'                    
                            color='white'
                            onPress={() => navigation.navigate('Register')} 
                                               
                        >
                            Register                           
                        </Button>
                    </ButtonContainer>
                    
                </AccountContainer>
        </AccountBackground>
    )
}