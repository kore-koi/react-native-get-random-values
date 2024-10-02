# Getting started

To get started with the development of the module a couple steps are necessary:

1. `yarn` / `yarn install` on the root of the project to install both the dependencies for the module and for the example app
2. Provide compiled sources for `libsodium` in `./Clibsodium.xcframework` and `libsodium-android`
3. Into `example/ios` run `pod install` to install the pods
4. By running `npm run start` in the `example` folder you should now be able to start the Example App
5. Open `example/ios` in Xcode to start screwing around the native module and the native code.
