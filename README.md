# Awesome Mix Vol. 1

## Overview

Welcome to the Awesome Mix Vol. 1 playlist generator! This README will guide you through understanding how to use the code provided to generate personalized playlists for each Guardian of the Galaxy based on their preferred music genre.

## Contents

1. [Introduction](#introduction)
2. [Usage](#usage)
3. [Functionality](#functionality)
4. [Additional Information](#additional-information)

---

## Introduction

The provided code is designed to generate playlists for each member of the Guardians of the Galaxy team. Each Guardian has their own preferred music genre, and the code creates playlists consisting of songs that belong to that genre.

## Usage

To utilize this playlist generator:

1. Ensure you have the latest version of the code.
2. Update the `songs` array with your favorite songs, ensuring each entry includes the `title`, `artist`, and `genre`.
3. Specify the preferred genre for each Guardian in the `guardians` object.
4. Run the `generatePlaylist()` function, passing in the `guardians` object and the `songs` array.
5. Display the generated playlists for each Guardian.

## Functionality

The code contains the following components:

- **`songs` Array**: Contains information about various songs including their title, artist, and genre.

- **`guardians` Object**: Specifies the preferred music genre for each Guardian.

- **`generatePlaylist()` Function**: Generates playlists for each Guardian based on their preferred music genre. It filters songs from the `songs` array according to the Guardian's genre preference and creates a playlist for each Guardian.

- **Playlist Display**: The generated playlists are displayed dynamically in the HTML document. Each Guardian's playlist is presented with their name and a list of songs along with their respective artists.

## Additional Information

- You can customize the playlist display further by modifying the CSS styles or HTML structure in the provided code.

- Feel free to add more songs to the `songs` array or update the genre preferences for each Guardian in the `guardians` object to create diverse and personalized playlists.

---
