import React from 'react';
import { hot } from 'react-hot-loader';
import { Flex } from 'grid-styled';
import { Input, Button, TextField } from '@material-ui/core';

import {
  Background,
  RegistrationText,
  SponsorText,
  Title,
  SubtitleOne,
  SubtitleTwo,
} from './app_styles.js';

import './app.css';

const App = () => (
  <Background>
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      css={{ width: '100vw', height: '100vh' }}
    >
      <div>
        <Flex>
          <Title>tamuhack</Title>
        </Flex>
        <Flex>
          <Flex>
            <SubtitleOne>JAN. 26-27, 2019 &nbsp;</SubtitleOne>
          </Flex>
          <Flex>
            <SubtitleTwo> • TEXAS A&M UNIVERSITY</SubtitleTwo>
          </Flex>
        </Flex>
        <Flex>
          <RegistrationText>Registration opens October 24th, 2018.</RegistrationText>
        </Flex>

        <Flex flexDirection="row">
          <Flex alignItems="center" justifyContent="center" css={{ width: '80%' }}>
            <TextField
              fullWidth
              label="Sign up for updates!"
              placeholder="myemail@gmail.com"
              margin="normal"
            />
          </Flex>
          <Flex
            css={{ marginTop: '28px', height: '36px' }}
            alignItems="center"
            justifyContent="center"
          >
            <Button>Submit</Button>
          </Flex>
        </Flex>

        <Flex>
          <SponsorText>
            Interested in
            <a href="https://app.tamuhack.com"> sponsoring?</a>
          </SponsorText>
        </Flex>
      </div>
    </Flex>
  </Background>
);

export default hot(module)(App);
