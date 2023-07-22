# Jammming Spotify Playlist Manager

This project is a Spotify playlist manager application that allows you to search for tracks, create playlists, and save them to your Spotify account. It utilizes the Spotify API to perform search operations and interact with the user's Spotify account.

## Installation

1. Clone the repository to your local machine:

git clone https://github.com/johnnyyangdiamond/jammming.git

2. Navigate to the project directory:

cd spotify-playlist-manager

3. Install the project dependencies using a package manager like npm or yarn:

npm install or yarn install

4. Start the development server:

npm start or yarn start

5. Open the application locally in your web browser through `http://localhost:3000/`.

## Usage

1. **Authorization**: Upon accessing the application, you need to authorize it to access your Spotify account. Click on the "LOGIN WITH SPOTIFY" button and follow the authentication process.

2. **Search**: Use the search bar to search for tracks by entering a song title or artist name. Press the "SEARCH" button or hit Enter to perform the search.

3. **Search Results**: The application will display a list of search results based on your query. Each track will show the track name, artist, and album information.

4. **Add Tracks**: To add a track to your playlist, click the "+" button next to the track. It will be added to the playlist on the right-hand side.

5. **Remove Tracks**: If you want to remove a track from the playlist, click the "-" button next to the track. It will be removed from the playlist.

6. **Playlist Name**: You can update the name of your playlist by modifying the input field above the playlist tracks.

7. **Save Playlist**: To save your playlist to your Spotify account, click the "SAVE TO SPOTIFY" button. It will prompt you to confirm the action.

## Known Issues

### No Audio Preview On Some Tracks

Description: Some tracks dont play sound because the spotify api did not fetch an audio preview for that specific track

Steps to Reproduce:

1. Search a song
2. Click on all the songs and there will be a few that don't have audio

### Search Does Not Work The First Time

Description: The first time a song is searched, the tracks will show for a split second and disappear. The search works fine after that.

Steps to Reproduce:

1. Refresh browser
2. Search a song

## Technologies Used

- React: JavaScript library for building user interfaces.
- Spotify API: Allows interaction with the Spotify music streaming service.
- HTML: Markup language for creating the web application's structure.
- CSS: Styling language for designing the application's appearance.

## Contributing

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, please submit them as GitHub issues or create a pull request.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or need support, feel free to contact the project maintainer at johnnyyangdiamond@gmail.com

Thank you for using the Jammming Spotify Playlist Manager!
