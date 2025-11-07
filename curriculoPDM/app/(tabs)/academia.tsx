import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, useTheme, Chip, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { academica } from '../../constants/data';

export default function AcademicaScreen() {
  const theme = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Ionicons name="school" size={48} color={theme.colors.primary} />
        <Title style={styles.headerTitle}>Formação Acadêmica</Title>
      </View>

      {academica.map((item, index) => (
        <Card key={index} style={styles.card} mode="elevated">
          <Card.Content>
            <View style={styles.cardHeader}>
              <View style={styles.timeline}>
                <View style={[styles.dot, { backgroundColor: theme.colors.primary }]} />
                {index < academica.length - 1 && (
                  <View style={[styles.line, { backgroundColor: theme.colors.outline }]} />
                )}
              </View>
              <View style={styles.content}>
                <Title style={styles.instituicao}>{item.instituicao}</Title>
                <Paragraph style={styles.curso}>{item.curso}</Paragraph>
                <View style={styles.periodoContainer}>
                  <Ionicons name="calendar-outline" size={16} color={theme.colors.primary} />
                  <Paragraph style={styles.periodo}>{item.periodo}</Paragraph>
                </View>
                <Divider style={styles.divider} />
                <Paragraph style={styles.descricao}>{item.descricao}</Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card>
      ))}
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
  instituicao: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  curso: {
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
});
