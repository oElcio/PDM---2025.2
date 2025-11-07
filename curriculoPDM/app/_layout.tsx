import { Stack } from 'expo-router';
import { MD3DarkTheme, PaperProvider } from 'react-native-paper';
import { CoresEscuras } from '../constants/colors';

export default function RootLayout() {
  const temaEscuro = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      ...CoresEscuras,
    },
  };

  return (
    <PaperProvider theme={temaEscuro}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </PaperProvider>
  );
}
