import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, List, useTheme, Switch, Text, Chip } from 'react-native-paper';
import { tecnologiasUsadas } from '../../constants/data';

export default function SobreScreen() {
  const theme = useTheme();
  // FUNCIONALIDADE EXTRA: Modo de exibição compacto/expandido
  const [modoCompacto, setModoCompacto] = useState(false);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card style={styles.card} mode="elevated">
        <Card.Content>
          <Title>Sobre o Aplicativo</Title>
          <Paragraph style={styles.paragraph}>
            Este aplicativo foi desenvolvido como projeto acadêmico para demonstrar
            habilidades em desenvolvimento mobile utilizando React Native e Expo.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card} mode="elevated">
        <Card.Content>
          <View style={styles.headerRow}>
            <Title>Tecnologias Utilizadas</Title>
            <View style={styles.switchContainer}>
              <Text>Compacto</Text>
              <Switch value={modoCompacto} onValueChange={setModoCompacto} />
            </View>
          </View>
          
          {tecnologiasUsadas.map((tech, index) => (
            modoCompacto ? (
              <Chip key={index} style={styles.chip} mode="outlined">
                {tech.nome}
              </Chip>
            ) : (
              <List.Item
                key={index}
                title={tech.nome}
                description={tech.descricao}
                left={props => <List.Icon {...props} icon="check-circle" />}
              />
            )
          ))}
        </Card.Content>
      </Card>

      <Card style={styles.card} mode="elevated">
        <Card.Content>
          <Title>Funcionalidade Extra</Title>
          <Paragraph style={styles.paragraph}>
            • Modo de visualização compacto/expandido para tecnologias{'\n'}
            • Animações suaves entre telas{'\n'}
            • Tema dark personalizado{'\n'}
            • Layout responsivo
          </Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  paragraph: {
    marginTop: 8,
    lineHeight: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  chip: {
    margin: 4,
  },
});
