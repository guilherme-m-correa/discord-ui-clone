import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { 
  Container, 
  Messages, 
  InputContainer, 
  Input, 
  InputIcon,
 } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div){
      div.scrollTop = div.scrollHeight;
    }

  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map(n => (
          <ChannelMessage 
            key={n}
            author="Guilherme Corrêa"
            date="16/08/2020"
            content="Isto é uma mensagem."
          />            
        ))}

        <ChannelMessage 
          hasMention
          isBot
          author="Guilherme Corrêa"
          date="16/08/2020"
          content={
            <>
              <Mention>@Guilherme Corrêa</Mention> Isto é uma mensagem com uma menção.
            </>
          }
        />    
      </Messages>
      

      <InputContainer>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />

      </InputContainer>
    </Container>
  );
}

export default ChannelData;