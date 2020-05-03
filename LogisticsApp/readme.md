# React Native Logistics App


### Getting started

Setup the development environment by using the following guide:
```shell
https://reactnative.dev/docs/environment-setup
```

### To start local development

after cloning the repo to your machine, go to the project folder and do the following in the terminal:

Install all dependencies & libraries
```shell
npm install
```

To start local Android development
```shell
npx react-native run-android
```


### To build Debug APK

In the terminal, go to the project folder and do the following:

1. Build assets bundle
```shell
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```

2. Create Debug APK
```shell
cd android/
./gradlew assembleDebug
```

3. APK can be found in 
```shell
cd app/build/outputs/apk/
```
