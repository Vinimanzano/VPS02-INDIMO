import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function BuscaScreen() {
  const [query, setQuery] = useState('');
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(null);

  const fetchMovieInfo = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f8dc2553&t=${query}`);
      const data = await response.json();
      if (data.Response === "False") {
        setError(data.Error);
      } else {
        setMovieInfo(data);
        setError(null);
      }
    } catch (error) {
      console.error("Error fetching movie info:", error);
      setError("Erro ao buscar informações do filme. Por favor, tente novamente.");
      setMovieInfo(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busca de Filmes</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o título do filme"
        onChangeText={text => setQuery(text)}
        value={query}
      />
      <Button
        title="Buscar"
        onPress={fetchMovieInfo}
        color="#8B4513"
      />
      {error && <Text style={styles.error}>{error}</Text>}
      {movieInfo && (
        <View style={styles.movieInfo}>
          <Text style={styles.infoTitle}>{movieInfo.Title}</Text>
          <Text>Ano: {movieInfo.Year}</Text>
          <Text>Gênero: {movieInfo.Genre}</Text>
          <Text>Diretor: {movieInfo.Director}</Text>
          <Text>Atores: {movieInfo.Actors}</Text>
          <Text>Sinopse: {movieInfo.Plot}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8B4513',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#8B4513',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  movieInfo: {
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#8B4513',
  },
});
