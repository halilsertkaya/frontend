This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

```
tarotbasic
├─ .bundle
│  └─ config
├─ .eslintrc.js
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ main
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ b5356d9cdaf06aa234c8a63f4aeb234825643f
│  │  ├─ 07
│  │  │  └─ 9a682ca280af9c4c7a207159a59ded94fbd807
│  │  ├─ 08
│  │  │  └─ d714dfcbf3acdbcde7779d9f8e18ae98274f37
│  │  ├─ 09
│  │  │  └─ 67ef424bce6791893e9a57bb952f80fd536e93
│  │  ├─ 0a
│  │  │  └─ 47864b2c4a266696368cf15b39ff589ecf570b
│  │  ├─ 10
│  │  │  └─ 9f494bd6f654f5301cd9ebafd4a3257fc1351f
│  │  ├─ 11
│  │  │  ├─ 5a4c768a20c9e13185c17043f4c4d12dd4632a
│  │  │  ├─ b025724a3f7a4a3685bbcd27da16440749f5e8
│  │  │  └─ c4844ebd9cd3a7c92f8b67806668498caddd70
│  │  ├─ 12
│  │  │  ├─ 470c30ecb5a2dba694ea638163fa6ec177646d
│  │  │  └─ 5fe1b98eb3befb478c2723fa79457e741fb083
│  │  ├─ 18
│  │  │  └─ 7894b6af25ee34da3116166b4eeffaa07b622a
│  │  ├─ 1b
│  │  │  └─ 523998081149a985cef0cdf89045b9ed29964a
│  │  ├─ 25
│  │  │  └─ da30dbdeee93f6eaceea674c3b635de168ce06
│  │  ├─ 29
│  │  │  ├─ 6b11fe0e7d1bd29ccb25c0d959bf31667b816d
│  │  │  └─ f93d37d40b886edffd9fe6bce448d5ff2920e2
│  │  ├─ 2a
│  │  │  └─ 7ce357c5b2aba6fdab0f13a86af514b550567b
│  │  ├─ 2b
│  │  │  └─ 540746a7575ead7fe308f2c78e38ca316b2382
│  │  ├─ 2d
│  │  │  └─ 92bd53fdb2223e4d23bf1fb6c134fe72931116
│  │  ├─ 30
│  │  │  └─ 4ab4e2d83d0252ca10441b130d1239e1d0be74
│  │  ├─ 34
│  │  │  └─ 93430715eec5ea2ed7b79af003b619700c9ae5
│  │  ├─ 36
│  │  │  └─ 4e105ed39fbfd62001429a68140672b06ec0de
│  │  ├─ 3b
│  │  │  └─ e7e95cb3e65f579fd5babb16391d92f182e5e2
│  │  ├─ 3d
│  │  │  └─ 5782c71568d32eec2fe71b034efcde053305f9
│  │  ├─ 41
│  │  │  └─ b8317f0652b9dafb97cd3dd3d245d0e74e1bf8
│  │  ├─ 42
│  │  │  └─ 770da44ea71464dda73825ec9bb0b92b62bf5b
│  │  ├─ 45
│  │  │  ├─ 5dcd3c37e1d72a629d5e7de35d9f0124d902b0
│  │  │  └─ 9ca609d3ae0d3943ab44cdc27feef9256dc6d7
│  │  ├─ 4a
│  │  │  └─ 58bcebee9bc5e6f2ae1a5cd146a277243e3876
│  │  ├─ 4c
│  │  │  └─ 19a13c239cb67b8a2134ddd5f325db1d2d5bee
│  │  ├─ 50
│  │  │  └─ 9d3babf81caf2a8bff8cce2168ae2e6afee2bf
│  │  ├─ 5a
│  │  │  └─ b82696cb97ae643370d566cf0fc4b41208c022
│  │  ├─ 5c
│  │  │  └─ 25e728ea2ce7724bd9ef08c87ce7ee89c77103
│  │  ├─ 5d
│  │  │  └─ 2808256ca079f1592e258ae13d12d15381f2c5
│  │  ├─ 63
│  │  │  └─ 2ca257463b654f5bada89a18406c353d86d5b3
│  │  ├─ 6e
│  │  │  └─ 878281f34f3548d727f8ce185f8b4ea0350b7f
│  │  ├─ 6f
│  │  │  └─ 7a6eb33e809897344f2d326d3d6ed7869cb39a
│  │  ├─ 77
│  │  │  ├─ 4a8a130733f05c2dc7aa24e874a7443c6a51ba
│  │  │  ├─ 7af357f7fae7cb5ec62024381eab7df9a01cd0
│  │  │  └─ ce5c50e98f7a2c23f726f5e5e2180b333c4bae
│  │  ├─ 7a
│  │  │  └─ d4e1cdebe8d5b5c6433083a3450b3f8a5373ec
│  │  ├─ 7b
│  │  │  └─ a83a2ad5a2c9be2d9eb2a4211590336f28209b
│  │  ├─ 81
│  │  │  └─ 213230deb40de5b032ae0e05f5c74196cc1b07
│  │  ├─ 84
│  │  │  └─ 8943bb5274b1ec80390e731e8de3b9f5812d16
│  │  ├─ 87
│  │  │  └─ be86b32889885be9d1b9dc3c5fac93c728ca31
│  │  ├─ 8c
│  │  │  └─ a12fe024be86e868d14e91120a6902f8e88ac6
│  │  ├─ 8e
│  │  │  ├─ 19b410a1b15ff180f3dacac19395fe3046cdec
│  │  │  └─ b675e9bc68ad09ee012d1b339eddb406e292a8
│  │  ├─ 9c
│  │  │  └─ 9b2b5aedbeb997c7427a7fea7e03af345c293b
│  │  ├─ 9d
│  │  │  └─ 41685ef1bfc27dc719052a800ba021000e20ee
│  │  ├─ 9e
│  │  │  └─ ac6fbc87d2c39a36284595e7934a225fe183a6
│  │  ├─ 9f
│  │  │  └─ b15664bd5bb108e1f51b5e0c471614e1bc7e04
│  │  ├─ a2
│  │  │  └─ f5908281d070150700378b64a84c7db1f97aa1
│  │  ├─ a5
│  │  │  ├─ 15a7bdd793848f9052e0a1e984056d5f8886d7
│  │  │  └─ d8cc1c0c719ab28eea8e0fc43dbbd25e31cd95
│  │  ├─ a8
│  │  │  └─ 50d031de79119ee024e9c2fe22809c31417ab3
│  │  ├─ b6
│  │  │  └─ 277f4aa17e2c1c1b71ea5c9a7a119fd2b7f5b6
│  │  ├─ b7
│  │  │  ├─ 40cf13397ab16efc23cba3d6234ff8433403b1
│  │  │  └─ e07dec43860613a851531601c745f6f65d1501
│  │  ├─ b8
│  │  │  └─ 24ebdd48db917eea2e67a82260a100371f8a24
│  │  ├─ ba
│  │  │  └─ 72822e8728ef2951005e49b6c27a2f1da6572d
│  │  ├─ bb
│  │  │  └─ 1ac0ba4d2c70d5097401414352d66759631207
│  │  ├─ be
│  │  │  └─ cbccf1fb1165d5cc369e1af05081fdd11e18a0
│  │  ├─ bf
│  │  │  └─ ec0fb1a5ccb8ad36df11fbc68b4b2c6850223c
│  │  ├─ c1
│  │  │  └─ 39cb01928e03a6776fbabcb772e0c7b789eef2
│  │  ├─ c2
│  │  │  ├─ 77c6fac99dd3102a58d74a3a833ea9786e71d4
│  │  │  └─ ececadc21ff03b533d82b904dfffb164bc1460
│  │  ├─ c3
│  │  │  └─ 249afc565ace28458d2bf31d87adf72de8cd79
│  │  ├─ c9
│  │  │  └─ 4292248a44495cdf48eddacfcde3cd4b6958b8
│  │  ├─ d0
│  │  │  └─ f0f45a3126c7d2f8ec0ff7b578d8f25e46f3f0
│  │  ├─ d4
│  │  │  └─ 76bfe4a0e17e4acce93be3760b436f7bf6c01d
│  │  ├─ d5
│  │  │  ├─ 49f68cab7cc72620052c9985634b960eb828aa
│  │  │  ├─ 8fdba1ffb14f3025a4d77a173fdfb440184870
│  │  │  ├─ ae456695e5fc247f15a76bd0bf7fd560e2c780
│  │  │  └─ ed1e14784ad0604bc731f9ca8ecbcf763ab2fe
│  │  ├─ d6
│  │  │  └─ 45c7246c42e45510cfcdcd7a7ff584a700d4c1
│  │  ├─ dc
│  │  │  └─ d3cd8083358269d6ed7894726283bb9bcbbfea
│  │  ├─ de
│  │  │  └─ 1214b7098d6f8c0e9a376a48781df4ad3564c8
│  │  ├─ df
│  │  │  └─ 1ce4db3b1bfb2bc4c503f27515cba892392dac
│  │  ├─ e1
│  │  │  └─ 892528b8d0b0ef6af3762a86d0d764f2124eb3
│  │  ├─ e6
│  │  │  ├─ 441136f3d4ba8a0da8d277868979cfbc8ad796
│  │  │  └─ d866bd2ccdac1e3b21e6ad319c884e74c10ae5
│  │  ├─ e8
│  │  │  └─ c0589105ec64d13228c3fa71d6ac222163fd8f
│  │  ├─ eb
│  │  │  ├─ 98c01afd79a6ca551b3b638dc4a048d1315fb4
│  │  │  └─ d9272da5e063e8b094b792a1fd457769dfdac8
│  │  ├─ f2
│  │  │  └─ d86c2fa65a28c2b124f3716219adccd06ab919
│  │  ├─ f6
│  │  │  └─ 61a72262383d48110ea9c6c87ba470f66d157a
│  │  ├─ f7
│  │  │  └─ b3da3b33d1565e14c6aaf8884dc3d24c457992
│  │  ├─ fa
│  │  │  └─ 84e8aedc04e89c9c101397e6ea084138eaf973
│  │  ├─ fd
│  │  │  ├─ 656b03414503a066ddd8a3992c76f16469d566
│  │  │  └─ 7c4800b8055c61fe0ac1e2cf412a0b42206a70
│  │  ├─ ff
│  │  │  └─ 10afd6e182edb2b1a63c8f984e9070d9f950ba
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     └─ tags
├─ .gitignore
├─ .prettierrc.js
├─ .watchmanconfig
├─ .yarnrc.yml
├─ android
│  ├─ app
│  │  ├─ proguard-rules.pro
│  │  └─ src
│  │     ├─ debug
│  │     │  └─ AndroidManifest.xml
│  │     └─ main
│  │        ├─ AndroidManifest.xml
│  │        ├─ java
│  │        │  └─ com
│  │        │     └─ batakgame
│  │        │        ├─ MainActivity.kt
│  │        │        └─ MainApplication.kt
│  │        └─ res
│  │           ├─ drawable
│  │           │  └─ rn_edit_text_material.xml
│  │           ├─ mipmap-hdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-mdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-xhdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-xxhdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-xxxhdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           └─ values
│  │              ├─ strings.xml
│  │              └─ styles.xml
│  ├─ gradle
│  │  └─ wrapper
│  │     ├─ gradle-wrapper.jar
│  │     └─ gradle-wrapper.properties
│  ├─ gradle.properties
│  ├─ gradlew
│  └─ gradlew.bat
├─ app.json
├─ App.tsx
├─ babel.config.js
├─ Gemfile
├─ index.js
├─ ios
│  ├─ .xcode.env
│  ├─ BatakGame
│  │  ├─ AppDelegate.h
│  │  ├─ AppDelegate.mm
│  │  ├─ Images.xcassets
│  │  │  ├─ AppIcon.appiconset
│  │  │  │  └─ Contents.json
│  │  │  └─ Contents.json
│  │  ├─ Info.plist
│  │  ├─ LaunchScreen.storyboard
│  │  ├─ main.m
│  │  └─ PrivacyInfo.xcprivacy
│  ├─ BatakGame.xcodeproj
│  │  ├─ project.pbxproj
│  │  └─ xcshareddata
│  │     └─ xcschemes
│  │        └─ BatakGame.xcscheme
│  ├─ BatakGameTests
│  │  ├─ BatakGameTests.m
│  │  └─ Info.plist
│  └─ Podfile
├─ jest.config.js
├─ metro.config.js
├─ overflow.txt
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ assets
│  │  ├─ ads.png
│  │  ├─ background.png
│  │  ├─ button.png
│  │  ├─ cards
│  │  │  ├─ 0.png
│  │  │  ├─ 1.png
│  │  │  ├─ 10.png
│  │  │  ├─ 11.png
│  │  │  ├─ 12.png
│  │  │  ├─ 13.png
│  │  │  ├─ 14.png
│  │  │  ├─ 15.png
│  │  │  ├─ 16.png
│  │  │  ├─ 17.png
│  │  │  ├─ 18.png
│  │  │  ├─ 19.png
│  │  │  ├─ 2.png
│  │  │  ├─ 20.png
│  │  │  ├─ 21.png
│  │  │  ├─ 22.png
│  │  │  ├─ 3.png
│  │  │  ├─ 4.png
│  │  │  ├─ 5.png
│  │  │  ├─ 6.png
│  │  │  ├─ 7.png
│  │  │  ├─ 8.png
│  │  │  └─ 9.png
│  │  ├─ cloud.png
│  │  └─ sun.png
│  └─ components
│     ├─ EvScreen.tsx
│     ├─ Kart.tsx
│     ├─ OyunScreen.tsx
│     └─ WarningModal.tsx
├─ tsconfig.json
├─ yarn.lock
└─ __tests__
   └─ App.test.tsx

```