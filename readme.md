<div align="center">
  <img src="static/logo_with_text_teal.svg" width="400">
  
  [https://boostnote.io/](https://boostnote.io/)
</div>

![uiimage](./static/img_ui.svg)

<h2 align='center'>A Polished Notes App with Github Flavored Markdown</h2>
<h3 align="center">for macOS, Windows, Linux, iOS and Android</h5>

BoostNote.next is a renewal of [Boostnote app](https://github.com/BoostIO/Boostnote).

## Latest releases

- [Web app (note.boostio.co)](https://note.boostio.co)
- [Desktop app (macOS, Windows, Linux)](https://github.com/BoostIO/BoostNote.next/releases/latest)
- [iOS app in App Store](https://apps.apple.com/us/app/boostnote-mobile/id1498182749)
- [Android app in Play Store](https://play.google.com/store/apps/details?id=com.boostio.boostnote)

## Roadmap

- Browser app (Dec 2019)
- Desktop app(Windows, mac and Linux) (Dec 2019)
- Cloud storage (Dec 2019)
- Mobile app(Android and iOS) (Feb 2020)
- File system based storage (June 2020)

## Authors & Maintainers

- [Rokt33r](https://github.com/rokt33r)
- [ZeroX-DG](https://github.com/ZeroX-DG)
- [Flexo](https://github.com/Flexo013)

## Community

- [Facebook Group](https://www.facebook.com/groups/boostnote/)
- [Twitter](https://twitter.com/boostnoteapp)
- [Slack Group](https://join.slack.com/t/boostnote-group/shared_invite/zt-cun7pas3-WwkaezxHBB1lCbUHrwQLXw)
- [Blog](https://medium.com/boostnote)
- [Reddit](https://www.reddit.com/r/Boostnote/)

## Developmenet

### Folder structure

- `android` : Android app project. Please open with Android Studio.
- `dist` : Bundled electron app stuff. All executable and installable of the electron app are generated in this folder. You can generate this by `npm run prepack`, `npm run pack` and `npm run release` scripts.
- `compiled` : Compiled web app resources from `npm run build` script. The resources are for deploying the web app.
- `electron` : Compiled electron resources from `npm run build:electron` script. You can run it by `npm start` script. The resources are for packaging the electron app.
- `ios` : iOS app project. Please open with XCode.
- `src` : Source code.

### Build

Don't forget to create a file named `.env` in the root of the project directory, or the build will fail.

#### Web app

```sh
# Install deps
npm i

# Run webpack and open browser
npm run dev
```

#### Electron app

```sh
# Install deps
npm i

# Run webpack
npm run dev:webpack

# Run electron(You have to open another terminal to run this)
npm run dev:electron
```

#### Mobile app

TBA

## License

[GPL-3.0 © 2020 BoostIO](./LICENSE.md)
