import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { hot } from 'react-hot-loader';

import {
  Grommet, Header, Main, Text, Card, CardBody, CardFooter, Button,
} from 'grommet';
import { grommet } from 'grommet/themes';

const AppContainer = styled.div`
  color: red;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;

const App = () => (
  <Grommet theme={grommet}>
    <GlobalStyle />
    <Header background="light-4" pad="small">
      <Text size="small">Header</Text>
    </Header>
    <Main pad="small">

      <Card pad="small" gap="medium">
        <CardBody>
          Let`s start the hacking!
          <AppContainer>Hello Fucking world!</AppContainer>
        </CardBody>
        <CardFooter>
          <Button
            primary
            label="Hack it!"
            active
            onClick={() => {}}
          />
        </CardFooter>
      </Card>
    </Main>
  </Grommet>
);

export default hot(module)(App);
