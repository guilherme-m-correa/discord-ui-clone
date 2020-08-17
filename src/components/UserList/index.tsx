import React from 'react';

import { Container , Role, User, Avatar } from './styles';

interface UserRowProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserRowProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Guilherme Corrêa"/>
      <Role>Offline - 18</Role>
      <UserRow nickname="Guilherme Superbot" isBot/>
      <UserRow nickname="Guilherme 1"/>
      <UserRow nickname="Guilherme 2"/>
      <UserRow nickname="Guilherme 3"/>
      <UserRow nickname="Guilherme 4"/>
      <UserRow nickname="Guilherme 5"/>
      <UserRow nickname="Guilherme 6"/>
      <UserRow nickname="Guilherme 7"/>
      <UserRow nickname="Guilherme 8"/>
      <UserRow nickname="Guilherme 9"/>
      <UserRow nickname="Guilherme 10"/>
      <UserRow nickname="Guilherme 11"/>
      <UserRow nickname="Guilherme 12"/>
      <UserRow nickname="Guilherme 13"/>
      <UserRow nickname="Guilherme 14"/>
      <UserRow nickname="Guilherme 15"/>
      <UserRow nickname="Guilherme 16"/>
      <UserRow nickname="Guilherme 17"/>
      <UserRow nickname="Guilherme 18"/>
    </Container>
  );
}

export default UserList;