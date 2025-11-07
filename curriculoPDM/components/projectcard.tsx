import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, Chip } from 'react-native-paper';

interface ProjectCardProps {
  nome: string;
  descricao: string;
  imagem: string;
  tecnologias: string[];
  onPress?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  nome,
  descricao,
  imagem,
  tecnologias,
  onPress,
}) => {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Cover source={{ uri: imagem }} />
      <Card.Content>
        <Title>{nome}</Title>
        <Paragraph numberOfLines={2}>{descricao}</Paragraph>
        <View style={styles.chipsContainer}>
          {tecnologias.map((tech, index) => (
            <Chip key={index} style={styles.chip} compact>
              {tech}
            </Chip>
          ))}
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  chip: {
    margin: 4,
  },
});
