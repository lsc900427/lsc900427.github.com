import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Comment, Form, Header, Icon, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import chats from '../assets/chats.json';

// export default function App() {
//   const List = chats.map(v => (
//       <Comment.Group key={v.id}>
//         <Comment >
//           <Comment.Avatar src={v.avatar} />
//           <Comment.Content>
//           <Comment.Author as='a'>{v.author}</Comment.Author>
//               <Comment.Metadata>
//                 <div>Today at 5:42PM {v.faves}</div>
//               </Comment.Metadata>
//           <Comment.Text>{v.text}</Comment.Text>
//           <Comment.Actions>
//           <Comment.Action>Reply</Comment.Action>
//           </Comment.Actions>
//           </Comment.Content>
//         </Comment>
//       </Comment.Group>
//       )
//   );
//   return (
//       <div>
//         {List}
//       </div>
//   );
// }

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.state = {
      text: '',
      chats
    };
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  onChangeHandler(e) {
    this.setState({
      text: e.target.value
    });
  }
  onKeyUpHandler(e) {
    if (!e.target.value) return;
    if (e.keyCode === 13) {
      this.setState({
        text: '',
        chats: [...this.state.chats, {
          id: this.state.chats[this.state.chats.length - 1].id + 1,
          author: this.props.author,
          avatar: this.props.avatar,
          text: e.target.value,
          faves: 10,
          date: Date.now()
        }]
      });
      this.scrollToBottom();
    }
  }
  scrollToBottom() {
    const element = ReactDOM.findDOMNode(this);
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }
  render() {
    console.log('render');
    return (
        <div style = {{ height: '600px', overflowY: 'scroll'}} >
          {console.log(this.props.author)}
          <Comment.Group>
            {this.state.chats.map(v => (
                <Comment key={v.id}>
                  <Comment.Avatar src={v.avatar} />
                  <Comment.Content>
                    <Comment.Author as='a'>{v.author}</Comment.Author>
                    <Comment.Metadata>
                      <div>{new Date(v.date).toUTCString()}</div>
                      <div>
                        <icon name="star" />
                        {v.faves} Faves
                      </div>
                    </Comment.Metadata>
                    <Comment.Text>
                      {v.text}
                    </Comment.Text>
                  </Comment.Content>
                </Comment>
            ))}
          </Comment.Group>
          <Input
              style = {{ position: 'fixed', bottom: 0 }}
              action = '전송'
              placeholder = '할말'
              onChange = { this.onChangeHandler}
              onKeyUp = { this.onKeyUpHandler }
              value = { this.state.text }
          />
        </div>
    );
  }


}