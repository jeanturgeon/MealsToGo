import React, { useState, useContext } from 'react';
import { Button, ActivityIndicator, Colors } from 'react-native-paper';

import { AccountBackground, AccountCover, AccountContainer, AuthInput, ButtonContainer, ErrorContainer, Title} from './account.styles';
import {Spacer} from '../../UI/spacer.component'
import { Text } from  '../../UI/text.component'
import { AuthenticationContext } from '../../services/auth/authentication.context';

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

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
        <Spacer size="large">
          <AuthInput
            label="Re-enter Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"            
            onChangeText={(rp) => setRepeatedPassword(rp)}
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
                    icon='email'                    
                    color='white'                    
                    onPress={() => onRegister(email, password, repeatedPassword)}
                >
                    Register                           
                </Button>
            </ButtonContainer>
            ) : <ActivityIndicator animating={true} color={Colors.blue300} />
        }
         
      </AccountContainer>
    </AccountBackground>
  );
};