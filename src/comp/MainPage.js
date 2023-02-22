import { React } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';
import frontend from '../img/frontend certificate.PNG';

import SideBarMin from '../comp/SideBarMin';

export default function MainPage() {
  return (
    <div id="MainPage">
      <div>
        <Container id="Container">
          <Row id="ABOUT" style={{ paddingTop: '10%', paddingLeft: '3%' }}>
            <p class="name">
              DEJENE <span style={{ color: '#bd5d38' }}>TESFAYE</span>
            </p>
            <p class="address">
              3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
              <span style={{ color: '#bd5d38' }}> deju1921@email.com</span>
            </p>
          </Row>

          <Row
            style={{ paddingTop: '2%', paddingLeft: '3%', paddingRight: '10%' }}
          >
            <p class="intro">
              I am experienced in leveraging agile frameworks to provide a
              robust synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
            </p>
          </Row>
          <Row class="p-3 border bg-light" style={{ paddingLeft: '4%' }}>
            {' '}
            <SocialIcon
              className="SocialIcon"
              url="https://twitter.com/jaketrent"
            />
            <SocialIcon
              className="SocialIcon"
              url="https://facebook.com/teth"
            />
            <SocialIcon
              className="SocialIcon"
              url="https://github.com/jaketrent"
            />
            <SocialIcon className="SocialIcon" url="https://linkedin.com/" />
          </Row>
        </Container>
        {/* Experiance */}
        <Container id="Container">
          <hr />
          <Row id="EXPERIANCE" style={{ paddingLeft: '3%' }}>
            <p class="title">Experiance</p>
            <p class="address">Senior Web Developer</p>
          </Row>

          <Row
            style={{ paddingTop: '2%', paddingLeft: '3%', paddingRight: '10%' }}
          >
            <p class="intro">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
            </p>
          </Row>

          <Row style={{ paddingLeft: '3%' }}>
            <p class="address">Senior Web Developer</p>
          </Row>

          <Row
            style={{ paddingTop: '2%', paddingLeft: '3%', paddingRight: '10%' }}
          >
            <p class="intro">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
            </p>
          </Row>

          <Row style={{ paddingLeft: '3%' }}>
            <p class="address">Senior Web Developer</p>
          </Row>

          <Row
            style={{ paddingTop: '2%', paddingLeft: '3%', paddingRight: '10%' }}
          >
            <p class="intro">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
            </p>
          </Row>
        </Container>
        {/* Education */}
        <Container id="Container">
          <hr />
          <Row id="EDUCATION" style={{ paddingLeft: '3%' }}>
            <p class="title">Education</p>
            <p class="address">Senior Web Developer</p>
          </Row>

          <Row
            style={{ paddingTop: '2%', paddingLeft: '3%', paddingRight: '10%' }}
          >
            <p class="intro">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
            </p>
          </Row>

          <Row style={{ paddingLeft: '3%' }}>
            <p class="address">Senior Web Developer</p>
          </Row>

          <Row
            style={{ paddingTop: '2%', paddingLeft: '3%', paddingRight: '10%' }}
          >
            <p class="intro">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
            </p>
          </Row>

          <Row style={{ paddingLeft: '3%' }}>
            <p class="address">Senior Web Developer</p>
          </Row>

          <Row
            style={{ paddingTop: '2%', paddingLeft: '3%', paddingRight: '10%' }}
          >
            <p class="intro">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
            </p>
          </Row>
        </Container>
        {/* Skills */}
        <Container id="Container">
          <hr />
          <Row id="SKILLS" style={{ paddingLeft: '3%' }}>
            <p class="title">Skills</p>
          </Row>
          <Row
            style={{ paddingTop: '2%', paddingLeft: '3%', paddingBottom: '3%' }}
          >
            <Col lg={6} md={12} sm={12}>
              <p class="address">Programming Languages & Tools</p>

              <p
                style={{
                  paddingTop: '2%',
                  paddingLeft: '3%',
                }}
              >
                System Programming
              </p>
              <Row
                style={{
                  paddingTop: '2%',
                  paddingLeft: '3%',
                  paddingRight: '10%',
                  paddingBottom: '1%',
                }}
              >
                {/* python */}
                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                </i>
                {/* jupyter */}
                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" />
                </i>
                {/* C */}
                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                </i>
                {/* C++ */}
                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg" />
                </i>
              </Row>

              <p
                style={{
                  paddingTop: '2%',
                  paddingLeft: '5%',
                }}
              >
                Frontend Programming
              </p>

              <Row
                style={{
                  paddingTop: '2%',
                  paddingLeft: '3%',
                  paddingRight: '20%',
                  paddingBottom: '1%',
                }}
              >
                {/* HTML */}
                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                </i>
                {/* css */}
                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                </i>
                {/* javascript */}
                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                </i>
                {/* react */}
                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                </i>
              </Row>

              <p
                style={{
                  paddingTop: '2%',
                  paddingLeft: '5%',
                }}
              >
                backend Programming
              </p>

              <Row
                style={{
                  paddingTop: '2%',
                  paddingLeft: '3%',
                  paddingRight: '20%',
                  paddingBottom: '1%',
                }}
              >
                {/* node */}
                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                </i>

                {/* PHP */}

                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" />
                </i>
                {/* codeigniter */}

                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain-wordmark.svg" />
                </i>
                {/* django */}
                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" />
                </i>
              </Row>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Row style={{ paddingTop: '2%' }}>
                <p class="address">Adminstration Skill</p>
                <p style={{ paddingTop: '2%', paddingLeft: '3%' }}>
                  Leadership Skill
                </p>
              </Row>

              <Row
                style={{
                  paddingTop: '2%',
                  paddingRight: '10%',
                }}
              >
                <p class="intro">
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution. User generated
                  content in real-time will have multiple touchpoints for
                  offshoring.
                </p>
                <p class="intro">
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution. User generated
                  content in real-time will have multiple touchpoints for
                  offshoring.
                </p>
              </Row>
            </Col>
          </Row>
        </Container>

        {/* Interests */}
        <Container id="Container">
          <hr />
          <Row id="INTERESTS" style={{ paddingLeft: '3%' }}>
            <p class="title">INTERESTS</p>
            <p class="address">Senior Web Developer</p>
          </Row>

          <Row
            style={{ paddingTop: '2%', paddingLeft: '3%', paddingRight: '10%' }}
          >
            <p class="intro">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
            </p>
          </Row>

          <Row style={{ paddingLeft: '3%' }}>
            <p class="address">Senior Web Developer</p>
          </Row>

          <Row
            style={{ paddingTop: '2%', paddingLeft: '3%', paddingRight: '10%' }}
          >
            <p class="intro">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
            </p>
          </Row>

          <Row style={{ paddingLeft: '3%' }}>
            <p class="address">Senior Web Developer</p>
          </Row>

          <Row
            style={{ paddingTop: '2%', paddingLeft: '3%', paddingRight: '10%' }}
          >
            <p class="intro">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
            </p>
          </Row>
        </Container>
        {/* Certificates */}
        <Container id="ContainerCertificates">
          <hr />
          <Row id="CERTIFICATES" style={{ paddingLeft: '3%' }}>
            <p class="title">CERTIFICATES</p>
            <img id="frontend" src={frontend} alt="myPhoto" style={{}} />
          </Row>
        </Container>

        {/* AWARDS */}
        <Container id="ContainerCertificates">
          <hr />
          <Row id="AWARDS" style={{ paddingLeft: '3%' }}>
            <p class="title">AWARDS</p>
            <img id="frontend" src={frontend} alt="myPhoto" style={{}} />
          </Row>
        </Container>
      </div>
    </div>
  );
}
