# MovieApp
MovieApp final project for Mobile development internship 2024

---

MovieApp is a mobile application built using React Native that allows users to browse, search, and manage movies. It provides features such as viewing movie details, adding favorites, managing subscriptions, and more.

## Features

- **Home**: Landing screen providing an overview or featured content.
  
- **List of Movies**: View a list of movies with options for sorting and filtering.

- **Favorites**: Mark movies as favorites for quick access.

- **Subscriptions**: Manage user subscriptions or notifications.

- **Settings/Profile**: User settings and profile management.

- **Search**: Search for movies by name, character, genre, or any other relevant criteria.

- **Update a Movie**: Ability to update details of a movie (e.g., synopsis, cast, etc.).

- **Remove a Movie**: Delete a movie from the app's database.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/samueltexa/MovieApp.git
   cd MovieApp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Run the application:

   ```bash
   npm start
   ```

   This will start the Metro bundler. You can then use an emulator or scan the QR code with the Expo Go app on your device to run the application.

## Technologies Used

- React Native
- Redux (or Context API for state management)
- React Navigation
- API integration (for fetching movie data)
- Expo (optional, depending on your setup)

## Folder Structure

```
MovieApp/
├── assets/              # Images, fonts, and other static assets
├── components/          # React components
│   ├── HomeScreen.js
│   ├── MovieList.js
│   ├── FavoritesScreen.js
│   ├── SubscriptionsScreen.js
│   ├── SettingsScreen.js
│   ├── SearchScreen.js
│   ├── MovieDetailScreen.js
│   └── ...
├── screens/             # Screen components
│   ├── MainTabNavigator.js
│   ├── MovieStack.js
│   ├── ProfileStack.js
│   └── ...
├── navigation/          # Navigation setup
│   ├── AppNavigator.js
│   ├── RootNavigator.js
│   └── ...
├── redux/               # Redux setup (if used)
│   ├── actions/
│   ├── reducers/
│   └── store.js
└── ...
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. For major updates, please open an issue first to discuss the proposed changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---