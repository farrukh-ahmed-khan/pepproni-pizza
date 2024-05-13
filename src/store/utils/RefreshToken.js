const RefreshToken = ({refreshToken}) =>{
    console.log("refreshToken",refreshToken)
    return({
    type: 'Barrier',
    value: refreshToken,
  })};
  
  export default RefreshToken;
  