import React from 'react';
import { Header, Menu, Container, Dropdown, Button, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Chat from './Chat';
import avatar from '../assets/avatars.json';
import chats from '../assets/chats.json';
import Modal from '../components/modal';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = {
      activeItem: 'editorials',
      avatar: avatar[0],
      author: 'Guest'
    };
  }

  onClickHandler(avatarPath) {
    const newAuthor = prompt('이름을 입력해주세요', '>>>이름을 입력하세요<<');
    this.setState({
      avatar: avatarPath,
      author: newAuthor
    });
  }
  handleItemClick(e, { name }) {
    this.setState({
      activeItem: name
    });
  }
  render() {
    return (
        <div>
          {console.log(this.state.author)}
          <Header as="h1">
            <Menu>
              <Menu.Item
                name="editorials"
                active = { this.state.activeItem === 'editorials' }
                onClick = { this.handleItemClick }
              >
                채팅
              </Menu.Item>

              <Menu.Item
                  name="reviews"
                  active = { this.state.activeItem === 'reviews' }
                  onClick = { this.handleItemClick }
              >
                기타
              </Menu.Item>

              <Menu.Item
                  name="upcomingEvents"
                  active = { this.state.activeItem === 'upcomingEvents' }
                  onClick = { this.handleItemClick }
              >
                등등
              </Menu.Item>

              <Menu.Item
                  name="modal"
                  active = { this.state.activeItem === 'modal' }
                  onClick = { this.handleItemClick }
              >
                <Modal
                  avatar = { this.state.avatar }
                />
              </Menu.Item>
              <Menu.Menu position="right">
                <Dropdown item trigger = { <Image src = { this.state.avatar } /> }>
                  <Dropdown.Menu>
                    {avatar.map(v => (
                        <Dropdown.Item
                            key = {v}
                            onClick = {e => this.onClickHandler(v)}
                        >
                          <Image src = {v} />
                        </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item>
                  <Button primary>로그인</Button>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Header>
          <Container text style = {{ display: this.state.activeItem === 'editorials' ? 'block' : 'none' }}>
            <Chat
                avatar = { this.state.avatar }
                author = { this.state.author}
            />
          </Container>
          <Container text style={{ display: this.state.activeItem === 'reviews' ? 'block' : 'none' }}>
            <Header as='h2'>reviews</Header>
            <p>Lorem reviews do</p>
            <p>Lorem reviews do</p>
          </Container>
          <Container text style={{ display: this.state.activeItem === 'upcomingEvents' ? 'block' : 'none' }}>
            <Header as='h2'>upcomingEvents</Header>
            <p>Lorem ipsum do upcomingEvents</p>
            <p>Lorem ipsum do upcomingEvents</p>
          </Container>
          <Container text style={{ display: this.state.activeItem === 'modal' ? 'block' : 'none' }}>
            <Chat
                avatar = { this.state.avatar }
                author = { this.state.author}
            />
          </Container>

        </div>
    );
  }
}