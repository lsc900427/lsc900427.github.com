class App extends React.Component {
           constructor() {
               super();
               this.state = {
                   todos : [
                       {
                           text : 'hungry',
                           isDone : false,
                           id : 1000
                       },
                       {
                           text : 'rice',
                           isDone : false,
                           id : 1001
                       },
                       {
                           text : 'sleep',
                           isDone : false,
       const deleteIndex = newTodos.findIndex(v => v.id === id);
       newTodos.splice(deleteIndex, 1)
       this.setState({
           todos: newTodos
       });


constructor란 생성자를 초기화 시켜주는 메서드이다.
앱이라는 객체가 있고 컨스트럭터가 앱이란 객체를 초기화 시킨다.
그러나 앱이 리액트컴포넌트를 상속받았기 때문에
리액트컴포넌트의 속성들도 기본 속성으로 받기 위해서
super란 함수를 실행시켜서 그안에있는 속성들 모두를 같이 초기화 기본 속성으로 추가한다.
그렇기에 setState같은 메서드들을 사용할 수 있는 것이다.
super란 부모
