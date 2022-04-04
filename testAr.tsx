import * as React from "react";
import { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, Button, View } from "react-native";
import { Audio } from "expo-av";

export default function Musique() {
  /* this.sound = new Audio.Sound();

const status = {
  shouldPlay:false,
};
this.sound.loadAsync(require("./musiques/joy.mp3"),status,false);
}

  playSound() {
    this.sound.playAsync();
  } */
  {
    const [sound, setSound] = React.useState<Audio.Sound | null>(null);

    async function playSound() {
      console.log("Carganding LOLILOL");
      const { sound } = await Audio.Sound.createAsync(
        require("./musiques/joy.mp3")
      );
      setSound(sound);

      console.log("pLAYING sOUND");
      await sound.playAsync();
    }

    async function PauseSound() {
      const { sound } = await Audio.Sound.createAsync(
        require("./musiques/joy.mp3")
      );
      setSound(sound);
      console.log("PAUSING sOUND");
      await sound.pauseAsync();
    }

    async function replaySound() {
      const { sound } = await Audio.Sound.createAsync(
        require("./musiques/joy.mp3")
      );
      setSound(sound);
      console.log("PAUSING sOUND");
      await sound.replayAsync();
    }

    React.useEffect(() => {
      return sound
        ? () => {
            console.log("Unloading Sound");
            sound.unloadAsync();
          }
        : undefined;
    }, [sound]);

    return (
      <View>
        <TouchableOpacity onPress={playSound}>
          <Text> PLAyyyyyy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={PauseSound}>
          <Text> PAUSE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={replaySound}>
          <Text> REPLAY</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 30,
  },
});
