const BarrierAuth = ({token, accessToken, idToken, forgetToken}) =>{
  console.log("token",token)
  return({
  type: 'Barrier',
  value: token || accessToken || idToken || forgetToken,
})};

export default BarrierAuth;
