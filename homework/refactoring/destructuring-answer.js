function dispatch(action){
  return action + '완료';
}
function setStepInitialize(auth){
  console.log(auth+'를 처리했다 치고');
  return auth;
}

/**
 * Destructuring
 */
function initializeConfig() {
  const {token, mallKey, authKey, isMember, isEnable} = window.fromServerState.config;

  dispatch(setStepInitialize({
    token, mallKey, authKey, isMember, isEnable
  }));
}

var fromServerState = {
  config: {
    token: 'abcdefg',
    mallKey: '123-fef-11',
    authKey: 'befadbbeeaaaefgthbewefwef',
    isMember: true,
    isEnable: true
  }
};

console.log(initializeConfig());