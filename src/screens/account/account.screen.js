import React from 'react';
import { Button } from "react-native-paper";



import { AccountBackground,
        AccountCover,
        AccountContainer,
        ButtonContainer,
        Title,
        AnimationView} from './account.styles';



export const AccountScreen = ({navigation}) => {

    return (
        <AccountBackground>
            <AccountCover />            
            <AnimationView 
                key='animation'
                autoPlay
                loop
                resizeMode='cover'
                source={require('../../../assets/watermelon.json')}
            />
            <Title>Meals To Go</Title>
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
                            icon='email'                    
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