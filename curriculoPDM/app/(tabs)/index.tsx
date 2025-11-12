import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph, Chip, useTheme, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { personalData, skills } from '../../constants/data';

export default function HomeScreen() {
  const theme = useTheme();
  const [skillIndex, setSkillIndex] = useState(0);

  const handleNextSkill = () => {
    setSkillIndex((prev) => (prev + 1) % skills.length);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}> 
      <View style={styles.header}>
        <Image 
          source={{ uri: personalData.foto }} 
          style={styles.profileImage}
        />
        <Title style={styles.name}>{personalData.nome}</Title>
        <Paragraph style={styles.title}>{personalData.titulo}</Paragraph>
      </View>

      <Card style={styles.card} mode="elevated">
        <Card.Content>
          <Title>Contato</Title>
          <View style={styles.contactItem}>
            <Ionicons name="mail" size={20} color={theme.colors.primary} />
            <Paragraph style={styles.contactText}>{personalData.email}</Paragraph>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="call" size={20} color={theme.colors.primary} />
            <Paragraph style={styles.contactText}>{personalData.telefone}</Paragraph>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="logo-linkedin" size={20} color={theme.colors.primary} />
            <Paragraph style={styles.contactText}>{personalData.linkedin}</Paragraph>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="logo-github" size={20} color={theme.colors.primary} />
            <Paragraph style={styles.contactText}>{personalData.github}</Paragraph>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card} mode="elevated">
        <Card.Content>
          <Title>Habilidades</Title>
          <View style={styles.skillsContainer}>
            <Chip style={styles.chip} mode="outlined">
              {skills[skillIndex]}
            </Chip>
            <Button mode="contained" style={{ marginLeft: 8 }} onPress={handleNextSkill}>
              Descubra Minhas Habilidades
            </Button>
          </View>
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
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    opacity: 0.7,
  },
  card: {
    marginBottom: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  contactText: {
    marginLeft: 12,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  chip: {
    margin: 4,
  },
});
