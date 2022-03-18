import './App.css';
import background from './PlayerOne.png';
import cpuIcon from './cpuiconsquared.png';
import gpuIcon from './1132938-200.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Clock from 'react-live-clock';
import {CircularProgressbar,buildStyles} from "react-circular-progressbar";
import ChangingProgressProvider from "./ChangingProgressProvider";
import 'react-circular-progressbar/dist/styles.css';

function App() {
  return (
    <div className="App p-3" style={{backgroundImage: `url(${background})`}}>
      <Container>
        <Row>
          <Col md={{span:5,offset:0}}>
            <Card className="CpuCard" style={{ width: '10rem', height:'20.9rem'}}>
              <Card.Img variant="top" src={cpuIcon} />
              <Card.Body>
                <ProgressBar className="CpuProgress" variant="warning" now={20} label={'20%'}/>
                <ChangingProgressProvider values={[0,20,40,60,80,100]}>
                  {value => (
                    <CircularProgressbar
                      className = "p-3"
                      value={value}
                      text={`${value}%`}
                      circleRatio={0.75}
                      styles={buildStyles({
                        rotation: 1 / 2 + 1/8,
                        strokeLinecap: "round",
                        pathColor: '#7900ff',
                        textColor: '#7900ff'
                      })}
                    />
                  )}
                </ChangingProgressProvider>
              </Card.Body>
            </Card>
          </Col>
          <Col className="ClockColumn mr-4" md={{span:3,offset:1}}>
              <Clock format="h:mm:ss" ticking={true}/>
          </Col>
          <Col md={{span:1,offset:1}}>
            <Card className="GpuCard" style={{ width: '10rem'}}>
              <Card.Img variant="top" src={gpuIcon} />
              <Card.Body>
                <ProgressBar className="GpuProgress" variant="warning" now={20} label={'20%'}/>
                <ChangingProgressProvider values={[0,20,40,60,80,100]}>
                  {value => (
                    <CircularProgressbar
                      className = "p-3"
                      value={value}
                      text={`${value}%`}
                      circleRatio={0.75}
                      styles={buildStyles({
                        rotation: 1 / 2 + 1/8,
                        strokeLinecap: "round",
                        pathColor: '#3e98c7',
                        textColor: '#3e98c7'
                      })}
                    />
                  )}
                </ChangingProgressProvider>
              </Card.Body>
            </Card>
          </Col>
        </Row>    
      </Container>
    </div>
  );
}

export default App;
