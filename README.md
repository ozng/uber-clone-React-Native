# Uber Clone App

![SVID_20220829_134212_1](https://user-images.githubusercontent.com/93818025/187193637-4f2bf6f4-23bc-4297-a940-00e9eda43097.gif)

## Setting up the development environment

---

Assuming that you have Node 14 LTS or greater installed, you can use npm to install the Expo CLI command line utility:

```
npm install -g expo-cli
```

Then run the following commands to install dependencies:

```
npm install

npm start # you can also use: expo start
```

This will start a development server for you.

You also need Google API key for the services below;

1. Distance Matrix API
2. Places API
3. Direction API

Create .env file

```
GOOGLE_API_KEY = YOUR_API_KEY
```

## Technologies & Services

- React Native [docs](https://reactnative.dev/docs/getting-started)
- Expo [docs](https://docs.expo.dev/)
- React Navigation [docs](https://reactnavigation.org/docs/getting-started/)
- Redux [docs](https://redux.js.org/introduction/getting-started)
- React-redux [docs](https://react-redux.js.org/introduction/getting-started)
- Google Distance Matrix API [docs](https://developers.google.com/maps/documentation/distance-matrix/overview)
- Google Direction API [docs](https://developers.google.com/maps/documentation/directions/?hl=en_US)
- Google Places API [docs](https://developers.google.com/maps/documentation/?hl=en_US#places)
