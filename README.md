# Mock notifications app
A mock notifications app displaying the basic usage of `state` and `FlatList` in a React Native app.

## Features
- Add new notification by pressing the button. Message is randomized with built-in random text generator.
- Press each notification to delete it from the list.

## Limitations
- Text generator's words are hard coded, therefore the quality is not at its best.
- List are not saved throughout session.
- Despite the fact that the project is called mock notification app, it does not show real notification in the device.

## Setup
### Clone repository
Download the project files from Github,

or clone the repository via github Desktop

or via github CLI `gh repo clone anditandev/mock-notifications`

### Install depedencies
Install the depedencies required by the projects by running `npm install` in the root directory of the project.

For more information, please open [this link](https://reactnative.dev/docs/environment-setup) here.

## Installing

### Installing to emulator/device
Make sure the device you are trying to install to is connected and run:

`npx react-native run-android` for android devices. \
`npx react-native run-ios` for iOS devices.

For more information, please open [this link](https://reactnative.dev/docs/running-on-device) here.

### Generating debug apk for Android devices
Before we proceed, please make sure the `assets` folder exist in the `mock-notifications/android/app/src/main` directory. 

Otherwise, please create a folder named `assets` in `mock-notifications/android/app/src/main`, like shown below,

![image](https://user-images.githubusercontent.com/97089422/191223047-be2ee576-9ec6-413c-8d52-0dc535d3fcaa.png)

From the root directory, run this script below via terminal,

`
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
`

After the process is done, go to android directory from the terminal with ,

`cd android`

and run

`gradlew assembleDebug`

The debug apks will be generated in `mock-notifications/android/app/build/outputs/apk/debug/` folder splitted into each CPU architecture
