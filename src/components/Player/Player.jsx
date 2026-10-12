import React from "react";
import { PlayerWrapper, AvatarWrapper } from "./Player.styled";
import Avatar, { genConfig } from "react-nice-avatar";
import { Text } from "../../styles/General.styled";

function Player({ player, isPlayerActive }) {
 

  const updatedAvatarConfig = {
    ...player.avatarConfig,
  }
  return (
    <PlayerWrapper >
      <AvatarWrapper isPlayerActive={isPlayerActive ?? false}>
        <Avatar {...updatedAvatarConfig} />
      </AvatarWrapper>

      <Text>
        {player.name} ({player.choice.toUpperCase()})
      </Text>
      <Text style={{fontSize : "20px" , fontWeight : "200"}}>{player.score}</Text>
    </PlayerWrapper>
  );
}

export default Player;
