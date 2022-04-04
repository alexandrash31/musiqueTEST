import React, { useEffect } from "react";
import {
  PlayerActionType,
  usePlayerDispatchContext,
  usePlayerStateContext,
} from "./hooks";
import { Button, Text} from "react-native";
import TrackPlayer from "react-native-track-player";

const SongTrackContainer = () => {
  const state = usePlayerStateContext();
  const dispatch = usePlayerDispatchContext();

  useEffect(() => {
    TrackPlayer.setupPlayer().then(async () => {
      const currentTrack = await TrackPlayer.getCurrentTrack();
      if (currentTrack == null) {
        await addTrack();
      }
    });

    const playTrack = async () => {
      await TrackPlayer.play();
    };

    const pauseTrack = async () => {
      await TrackPlayer.pause();
    };

    state.isPlaying ? playTrack() : pauseTrack();
  }, [state.isPlaying]);

  const addTrack = async () => {
    await TrackPlayer.add({
      id: "1",
      url: require("./joy.mp3"),
      title: "Sunspots",
      artist: "Jeremy Blake",
    });
  };

  const setTrackTime = async (value: number) => {
    await dispatch({ type: PlayerActionType.Play });
  };

  return (
    <>
      <Text style={{ color: "#FFF" }}>{`IS PLAYING : ${state.isPlaying}`}</Text>
    </>
  );
};

export default SongTrackContainer;
