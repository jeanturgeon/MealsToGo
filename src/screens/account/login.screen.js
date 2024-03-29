import React, { useState, useContext } from 'react';
import { Button, ActivityIndicator, Colors } from 'react-native-paper';

import { AccountBackground, AccountCover, AccountContainer, AuthInput, ButtonContainer, ErrorContainer, Title} from './account.styles';
import {Spacer} from '../../UI/spacer.component'
import { Text } from  '../../UI/text.component'
import { AuthenticationContext } from '../../services/auth/authentication.context';

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"            
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer position='bottom' size="large" />
        {!isLoading ? (
          <ButtonContainer>
                <Button
                    icon='lock-open-outline'                    
                    color='white'
                    onPress={() => onLogin(email, password)}
                >
                    Login                           
                </Button>
            </ButtonContainer>
          ) : <ActivityIndicator animating={true} color={Colors.blue300} />
        }           
      </AccountContainer>
    </AccountBackground>
  );
};