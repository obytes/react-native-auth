import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { AuthProvider, useAuth } from './Auth';


const LogOutButton = () => {
  const { signOut } = useAuth();
  return <Button title="Log Out" onPress={signOut} />;
};

const LogInButton = () => {
  const { signIn } = useAuth();
  return <Button title="Log IN" onPress={() => signIn('my_token')} />;
};
const Main = () => {
  const { status, userToken } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>status : {status}</Text>
      <Text style={styles.text}>
        userToken : {userToken ? userToken : 'null'}
      </Text>
      <View style={styles.actions}>
        <LogInButton />
        <LogOutButton />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    margin: 24,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  text: {
    textAlign: 'center',
  },
});
