import React, { useEffect, useRef, useState } from 'react'

import {
  StyleSheet,
  View,
  Platform,
  TouchableHighlight,
  Text,
} from 'react-native'
import { ArViewerView } from 'react-native-ar-viewer'
import RNFS from 'react-native-fs'

const AR = () => {
  const [localModelPath, setLocalModelPath] = useState(null)
  const [showArView, setShowArView] = useState(true)
  const ref = useRef()

  const loadPath = async () => {
    const modelSrc =
      Platform.OS === 'android'
        ? 'https://github.com/riderodd/react-native-ar/blob/main/example/src/dice.glb?raw=true'
        : 'https://developer.apple.com/augmented-reality/quick-look/models/cupandsaucer/cup_saucer_set.usdz?raw=true'
        // : 'https://github.com/MAZE-Inc/A-MAZE-MOBILE-APP/blob/choiji/app/assets/cup.usdz?raw=true'
    const modelPath = `${ RNFS.DocumentDirectoryPath }/model.${ Platform.OS === 'android' ? 'glb' : 'usdz' }`
    const exists = await RNFS.exists(modelPath)
    console.log(312312312, modelPath)
    console.log(3123, exists)
    if(!exists) {
      await RNFS.downloadFile({
        fromUrl: modelSrc,
        toFile: modelPath,
        discretionary: true,
        cacheable: true,
      }).promise
    }

    setLocalModelPath(modelPath)
  }

  useEffect(() => {
    // console.log('load????')
    loadPath()
  }, [])

  // const takeSnapshot = () => {
  //   ref.current?.takeScreenshot().then(async (base64Image) => {
  //     const date = new Date()
  //     const filePath = `${
  //       RNFS.CachesDirectoryPath
  //     }/arscreenshot-${ date.getFullYear() }-${ date.getMonth() }-${ date.getDay() }-${ date.getHours() }-${ date.getMinutes() }-${ date.getSeconds() }.jpg`
  //     await RNFS.writeFile(filePath, base64Image, 'base64')
  //     console.log('Screenshot written to ' + filePath)
  //   })
  // }

  // const reset = () => {
  //   ref.current?.reset()
  // }

  // const rotate = () => {
  //   ref.current?.rotate(0, 25, 0)
  // }

  // const mountUnMount = () => setShowArView(!showArView)

  return (
    <View style={ styles.container }>
      { localModelPath && (
        <ArViewerView
          model={ localModelPath }
          style={ styles.arView }
          lightEstimation
          disableInstantPlacement
          manageDepth
          allowRotate
          allowScale
          allowTranslate
          onStarted={ () => console.log('started') }
          onEnded={ () => console.log('ended') }
          onModelPlaced={ () => console.log('model displayed') }
          onModelRemoved={ () => console.log('model not visible anymore') }
          ref={ ref }
        />
      ) }
      {/* <View style={ styles.footer }>
        <TouchableHighlight onPress={ takeSnapshot } style={ styles.button }>
          <Text>Take Snapshot</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ mountUnMount } style={ styles.button }>
          <Text>{ showArView ? 'Unmount' : 'Mount' }</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ reset } style={ styles.button }>
          <Text>Reset</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ rotate } style={ styles.button }>
          <Text>Rotate</Text>
        </TouchableHighlight>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  arView: {
    flex: 2,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  button: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
  },
})

export default AR