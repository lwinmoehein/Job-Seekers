
export function getHeaders(){
  const  HEADERS = {
    "headers":{
      'Content-Type': 'application/json',
    }
  };
  return HEADERS;
}

export function getLoggedInHeaders(){
  const LOGGED_IN_HEADERS= {
    "headers":{
      'Content-Type': 'application/json',
      "Authorization":`Bearer ${getToken()}`
    }
  };
  return LOGGED_IN_HEADERS;
}

export function storeUser(data:any){
  localStorage.setItem('user',JSON.stringify(data));
}

export function logOutUser(){
  localStorage.removeItem('user');
}

export function  getToken(){
  let user =JSON.parse(localStorage.getItem("user")||"{}");
  return user.token;
}

export function getUser(){
  let user =JSON.parse(localStorage.getItem("user")||"{}");
  return user;
}
