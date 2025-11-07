import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, useTheme, Chip, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { profissional } from '../../constants/data';

export default function ProfissionalScreen() {
  const theme = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Ionicons name="briefcase" size={48} color={theme.colors.primary} />
        <Title style={styles.headerTitle}>Experiência Profissional</Title>
      </View>

      {profissional.map((item, index) => (
        <Card key={index} style={styles.card} mode="elevated">
          <Card.Content>
            <View style={styles.cardHeader}>
              <View style={styles.timeline}>
                <View style={[styles.dot, { backgroundColor: theme.colors.primary }]} />
                {index < profissional.length - 1 && (
                  <View style={[styles.line, { backgroundColor: theme.colors.outline }]} />
                )}
              </View>
              <View style={styles.content}>
                <Title style={styles.empresa}>{item.empresa}</Title>
                <Paragraph style={styles.cargo}>{item.cargo}</Paragraph>
                <View style={styles.periodoContainer}>
                  <Ionicons name="time-outline" size={16} color={theme.colors.primary} />
                  <Paragraph style={styles.periodo}>{item.periodo}</Paragraph>
                </View>
                <Divider style={styles.divider} />
                <Paragraph style={styles.descricao}>{item.descricao}</Paragraph>
                
                {item.tecnologias && item.tecnologias.length > 0 && (
                  <View style={styles.tecnologiasContainer}>
                    <Paragraph style={styles.tecnologiasLabel}>Tecnologias:</Paragraph>
                    <View style={styles.chipsContainer}>
                      {item.tecnologias.map((tech, techIndex) => (
                        <Chip 
                          key={techIndex} 
                          style={styles.chip}
                          mode="outlined"
                          icon="code-tags"
                        >
                          {tech}
                        </Chip>
                      ))}
                    </View>
                  </View>
                )}
              </View>
            </View>
          </Card.Content>
        </Card>
      ))}

      {profissional.length === 0 && (
        <Card style={styles.card} mode="elevated">
          <Card.Content>
            <View style={styles.emptyState}>
              <Ionicons name="document-text-outline" size={64} color={theme.colors.outline} />
              <Title style={styles.emptyTitle}>Nenhuma experiência cadastrada</Title>
              <Paragraph style={styles.emptyText}>
                Adicione suas experiências profissionais no arquivo Data.ts
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
  card: {
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
  },
  timeline: {
    alignItems: 'center',
    marginRight: 16,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginTop: 4,
  },
  line: {
    width: 2,
    flex: 1,
    marginTop: 8,
  },
  content: {
    flex: 1,
  },
  empresa: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cargo: {
    fontSize: 16,
    marginTop: 4,
    opacity: 0.8,
  },
  periodoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  periodo: {
    marginLeft: 8,
    fontStyle: 'italic',
  },
  divider: {
    marginVertical: 12,
  },
  descricao: {
    lineHeight: 22,
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
