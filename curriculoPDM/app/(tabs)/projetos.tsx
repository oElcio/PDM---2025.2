import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, useTheme, Chip, Button, IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { projetos } from '../../constants/data';

export default function ProjetosScreen() {
  const theme = useTheme();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleGithubPress = (url: string) => {
    Linking.openURL(url).catch(err => console.error('Erro ao abrir URL:', err));
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Ionicons name="code-slash" size={48} color={theme.colors.primary} />
        <Title style={styles.headerTitle}>Meus Projetos</Title>
        <Paragraph style={styles.subtitle}>
          Confira alguns dos projetos que desenvolvi
        </Paragraph>
      </View>

      {projetos.map((projeto, index) => (
        <Card key={index} style={styles.card} mode="elevated">
          <Card.Cover source={{ uri: projeto.imagem }} />
          <Card.Content style={styles.cardContent}>
            <View style={styles.titleRow}>
              <Title style={styles.projectTitle}>{projeto.nome}</Title>
              <IconButton
                icon={expandedIndex === index ? "chevron-up" : "chevron-down"}
                size={24}
                onPress={() => toggleExpand(index)}
              />
            </View>
            
            <Paragraph 
              style={styles.descricao}
              numberOfLines={expandedIndex === index ? undefined : 2}
            >
              {projeto.descricao}
            </Paragraph>

            {(expandedIndex === index || true) && (
              <>
                <View style={styles.tecnologiasContainer}>
                  <Paragraph style={styles.tecnologiasLabel}>
                    <Ionicons name="construct" size={14} /> Tecnologias:
                  </Paragraph>
                  <View style={styles.chipsContainer}>
                    {projeto.tecnologias.map((tech, techIndex) => (
                      <Chip 
                        key={techIndex} 
                        style={styles.chip}
                        mode="outlined"
                        compact
                      >
                        {tech}
                      </Chip>
                    ))}
                  </View>
                </View>

                {projeto.github && (
                  <Button
                    mode="contained"
                    icon="github"
                    onPress={() => handleGithubPress(projeto.github!)}
                    style={styles.githubButton}
                  >
                    Ver no GitHub
                  </Button>
                )}
              </>
            )}
          </Card.Content>
        </Card>
      ))}

      {projetos.length === 0 && (
        <Card style={styles.card} mode="elevated">
          <Card.Content>
            <View style={styles.emptyState}>
              <Ionicons name="folder-open-outline" size={64} color={theme.colors.outline} />
              <Title style={styles.emptyTitle}>Nenhum projeto ainda</Title>
              <Paragraph style={styles.emptyText}>
                Adicione seus projetos no arquivo Data.ts
              </Paragraph>
            </View>
          </Card.Content>
        </Card>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  subtitle: {
    textAlign: 'center',
    opacity: 0.7,
    marginTop: 4,
  },
  card: {
    marginBottom: 16,
    overflow: 'hidden',
  },
  cardContent: {
    paddingTop: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  descricao: {
    lineHeight: 22,
    marginVertical: 12,
  },
  tecnologiasContainer: {
    marginTop: 12,
  },
  tecnologiasLabel: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 4,
  },
  githubButton: {
    marginTop: 16,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  emptyTitle: {
    marginTop: 16,
    fontSize: 18,
  },
  emptyText: {
    marginTop: 8,
    textAlign: 'center',
    opacity: 0.7,
  },
});
