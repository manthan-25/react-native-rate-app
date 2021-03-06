
# react-native-app-rater

## Getting started

`$ npm install react-native-app-rater --save`

### Mostly automatic installation

`$ react-native link react-native-app-rater`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-app-rater` and add `RNRateApp.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNRateApp.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.shellmonger.reactnative.RNRateAppPackage;` to the imports at the top of the file
  - Add `new RNRateAppPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-app-rater'
  	project(':react-native-app-rater').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-app-rater/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-app-rater')
  	```

## Usage
```javascript
import RNRateApp from 'react-native-app-rater';

const storeLink = Platform.select({	// To redirect users to the respective app store to rate app
  ios: 'App-Store-Link'
  android: 'Play-Store-Link'
})

export class RateApp extends Component {
  render() {
		<RNRateApp
			type={1}
			storeLink={storeLink}
		/>
	}
}
```
## Props and Usage
Prop | Description | Type | Default
------ | ------ | ------ | ------
 **`type`** | Rating Type: either `0`, `1` or `2` - 0 - Not Displayed, 1 - Ratings with Stars, 2 - Ratings with Emojis | number | 0
 **`noOfDays`** | Show Ratings next after 'noOfDays' Days | number | 90
 **`shouldAlwaysShow`** | When true the ratings will always be shown regardless of the noOfDays passed | boolean | `false`
 **`thanksScreenTimeout`** | timeout (in ms) after which the Thank You Screen will be closed (automatically) | number | 3000 (3s)
 **`onDismiss`** | A function called when Ratings is closed | function | (none)
 **`onBlur`** | A function called when Ratings is not displayed (as Days Passed < `noOfDays` or Previously 5 star Ratings were given) | function | (none)
 **`sendEvent`** | function to handle GA-Events Call **params** : Object - `keys`: type (required), ratingsType (optional), feedback (optional)| function | (none)
