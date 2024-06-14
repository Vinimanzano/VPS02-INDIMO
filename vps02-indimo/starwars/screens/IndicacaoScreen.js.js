import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IndicacaoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Indicações</Text>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Matrix</Text>
        <Text style={styles.movieDescription}>Um jovem hacker descobre a verdadeira natureza da realidade e sua luta contra as máquinas que controlam o mundo.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>O Poderoso Chefão</Text>
        <Text style={styles.movieDescription}>A saga de uma família mafiosa italiana nos Estados Unidos, liderada por Don Vito Corleone, o "Poderoso Chefão".</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Interestelar</Text>
        <Text style={styles.movieDescription}>Um grupo de exploradores espaciais embarca em uma jornada através de um buraco de minhoca em busca de um novo lar para a humanidade.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Cidade de Deus</Text>
        <Text style={styles.movieDescription}>A vida em uma favela do Rio de Janeiro ao longo de várias décadas, com foco nas histórias de dois jovens que seguem caminhos diferentes.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>O Senhor dos Anéis</Text>
        <Text style={styles.movieDescription}>Uma jornada épica de um hobbit relutante para destruir um anel mágico e salvar a Terra Média da escuridão.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Harry Potter</Text>
        <Text style={styles.movieDescription}>Um jovem bruxo enfrenta as forças das trevas em uma escola de magia.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8B4513',
  },
  movie: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFE4C4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#8B4513',
  },
  movieDescription: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#333',
  },
});

export default IndicacaoScreen;
