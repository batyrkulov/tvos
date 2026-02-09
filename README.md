First, create Apple TV and android TV simulators using xcode and android studio.

Open the created simulators.

Commands to run the app:
yarn
cd ios
pod install
cd ..
yarn start

- and then on a new terminal window run:
yarn android

To run on Apple TV simulator use Xcode.
Open Xcode
Open ios/TVTest.xcworkspace
Select an Apple TV simulator from the simulator list
Click the Build button in Xcode