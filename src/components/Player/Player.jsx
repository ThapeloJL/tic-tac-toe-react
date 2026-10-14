import React from "react";
import { PlayerWrapper, AvatarWrapper } from "./Player.styled";
import Avatar from "react-nice-avatar";
import { Text } from "../../styles/General.styled";

function Player({ player, isplayeractive }) {
  const updatedAvatarConfig = {
    ...player.avatarConfig,
  };
  return (
    <PlayerWrapper>
      <AvatarWrapper $isPlayerActive={isplayeractive ?? false}>
        <Avatar {...updatedAvatarConfig} />
      </AvatarWrapper>

      <Text>
        {player.name} ({player.choice.toUpperCase()})
      </Text>
      <Text style={{ fontSize: "20px", fontWeight: "200" }}>
        {player.score}
      </Text>
    </PlayerWrapper>
  );
}

export default Player;
