import styled from 'styled-components'

const Square = styled.div`
    width:60px;
    height:60px;
    background-color: #4e6bff;
    opacity:0.7;
    position:absolute;
    top:800px;
    left:-60px;
    z-index:-1;
    animation: square 25s linear alternate infinite;

    @keyframes square{
        to{
            transform: translate(100vw, 80vh)
        }
    }
`;

const Rectangular = styled.div`
    width:50px;
    height:100px;
    background-color: crimson;
    opacity:0.7;
    position:absolute;
    top:1200px;
    right:-50px;
    z-index:-1;
    animation: rectangular 25s linear alternate infinite;

    @keyframes rectangular{
        to{
            transform: translate(-100vw, -55vh)
        }
    }
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square/>
      <Rectangular/>
    </>
  
  )
}

export default AnimatedShapes