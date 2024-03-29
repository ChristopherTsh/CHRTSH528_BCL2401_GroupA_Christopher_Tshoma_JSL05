// Define an array of songs with each song represented as an object containing title, artist, and genre
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
  // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock", 
  "Gamora": "Pop",
  "Drax" : "R&B",
  "Rocket":"Rock",
  "Groot":"Pop"
  // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  // Initialize an empty object to store playlists for each Guardian
  const playlists = {};

  // Iterate over each Guardian
  Object.keys(guardians).forEach(guardian => {
      // Get the preferred genre for the current Guardian
      const preferredGenre = guardians[guardian];
      
      // Filter songs based on the preferred genre
      const playlist = songs.filter(song => song.genre === preferredGenre);
      
      // Store the playlist for the current Guardian
      playlists[guardian] = playlist.map(song => song.title); // Only storing song titles in the playlist
  });

  // Return the playlists object
  return playlists;
}

// Call generatePlaylist and display the playlists for each Guardian

// Call generatePlaylist function passing in the guardians object and songs array, store the result in playlists variable
const playlists = generatePlaylist(guardians, songs);

// Display the playlists for each Guardian dynamically in the HTML document
const playlistsDiv = document.getElementById('playlists');
// Iterate over each Guardian in the playlists object
Object.keys(playlists).forEach((guardian) => {
// Create a container for each playlist
const playlistContainer = document.createElement("div");
playlistContainer.classList.add("playlist");

// Create a title for the playlist with the Guardian's name
const playlistTitle = document.createElement("h1");
playlistTitle.textContent = `${guardian}'s Playlist:`;
playlistContainer.appendChild(playlistTitle);

// Create a list to hold the songs in the playlist
const playlistList = document.createElement("ul");
// Iterate over each song in the playlist
playlists[guardian].forEach((song) => {
  // Create a list item for each song
  const listItem = document.createElement("li");
  // Create a span element to display the song title
  const songTitle = document.createElement("span");
  songTitle.textContent = song;
  songTitle.style.textDecoration = "underline"; 
  songTitle.style.color = "yellow"; 
  songTitle.style.fontWeight = "bold"; 
  listItem.appendChild(songTitle); 
  listItem.classList.add("song"); 

  // Find the artist of the current song from the songs array
  const songArtist = document.createElement("span");
  const artistName = songs.find((s) => s.title === song).artist;
  songArtist.textContent = " by " + artistName; // Display the artist name with "by" prefix
  // Append the artist name to the list item
  listItem.appendChild(songArtist);

  // Append the list item to the playlist list
  playlistList.appendChild(listItem);
});
// Append the playlist list to the playlist container
playlistContainer.appendChild(playlistList);

// Append the playlist container to the playlists div in the HTML document
playlistsDiv.appendChild(playlistContainer);
});
