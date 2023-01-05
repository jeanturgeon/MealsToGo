import React, { useState, useContext } from "react";
import { TextInput, Button } from "react-native-paper";

import { 
    AccountBackground,
    AccountCover,
    AccountContainer,
    ButtonContainer,
    Title,
    AuthTextInput,
    ErrorContainer } from "./account.styles";
import { Spacer } from "../../UI/spacer.component";
import { Text } from "../../UI/text.component";
import { AuthenticationContext } from "../../services/auth/authentication.context";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthTextInput label="Email" value={email} textContentType="emailAddress" keyboardType="email-address" autoCapitalize="none" onChangeText={(e) => setEmail(e)} />
        <Spacer position="bottom" size="xl" />
        {error && (
          <ErrorContainer position="bottom" size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <AuthTextInput label="Password" value={password} textContentType="password" secureTextEntry secure autoCapitalize="none" onChangeText={(p) => setPassword(p)} />
        <Spacer position="top" size="large" />
        <ButtonContainer>
          <Button icon="lock-open-outline" color="white" onPress={() => onLogin(email, password)}>
            Login
          </Button>
        </ButtonContainer>
      </AccountContainer>
    </AccountBackground>
  );
};
