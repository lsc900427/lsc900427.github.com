import React from 'react';
import { Button, Icon, Image, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Link from '../components/Link';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function warning(event) {
  console.log(event);
}

function onChangeHandler(e) {
  console.log(e.target.value);
}

export default function App() {
  return (
    <div>
      <Header>
        <SearchBar onChange={onChangeHandler} />
      </Header>
      <Card>
        <Image src="https://s.pstatic.net/static/www/mobile/edit/2017/0614/mobile_145213971775.jpg" />
        <Card.Content>
          <Card.Header>
            Matthew
          </Card.Header>
          <Card.Meta>
            <span className="date">
              Joined in 2015
            </span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
      <Button secondary onClick={warning}>검색!!!!!</Button>
      <Button primary>search</Button>
      <Button size="large">하하하하</Button>
      <Button
        color="red"
        content="Like"
        icon="heart"
        label={{ basic: true, color: 'red', pointing: 'right', content: '2,048' }}
      />
      <Link to="http://www.naver.com">
        naver
      </Link>
      <Link to="http://www.daum.net">
        daum
      </Link>
    </div>
  );
}
