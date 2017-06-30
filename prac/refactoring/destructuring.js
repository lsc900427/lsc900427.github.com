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
  const serverState = window.fromServerState;

  dispatch(setStepInitialize({
    token: serverState.config.token,
    mallKey: serverState.config.mallKey,
    authKey: serverState.config.authKey,
    isMember: serverState.config.isMember,
    isEnable: serverState.config.isEnable
  }));
}

var fromServerState = {
  /**
   * initializeConfig 함수를 근거로 이 객체의 구조를 만들어라
    */
};

console.log(initializeConfig());