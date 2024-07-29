import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image, Modal } from 'react-native';
// import Video from 'react-native-video';

const FavoritesScreen = () => {
  const [movieData, setMovieData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovieData = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?s=batman&apikey=3a40af28");
      const data = await response.json();
      if (data.Response === "True") {
        setMovieData(data.Search);
      } else {
        console.error('Error fetching data:', data.Error);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({ item}:{item:any} ) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => setSelectedMovie(item)}>
        <Image
          source={{ uri: item.Poster }}
          style={styles.poster}
        />
        <Text style={styles.title}>{item.Title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={fetchMovieData} style={styles.button}>
        <Text style={styles.buttonText}>Fetch Movies</Text>
      </TouchableOpacity>
      <FlatList
        data={movieData}
        renderItem={renderItem}
        keyExtractor={(item) => item.imdbID}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Modal
        visible={!!selectedMovie}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setSelectedMovie(null)}
      >
        {/* <View style={styles.modalContainer}>
          {selectedMovie && (
            <Video
              source={{ uri: 'https://path/to/your/video.mp4' }} // Replace with the actual video URL
              style={styles.video}
              controls={true}
              resizeMode="contain"
            />
          )}
          <TouchableOpacity onPress={() => setSelectedMovie(null)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View> */}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  itemContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  title: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  video: {
    width: '90%',
    height: '80%',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#FF0000',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FavoritesScreen;
