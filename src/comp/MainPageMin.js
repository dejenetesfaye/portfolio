import { React } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';
import SideBarMin from '../comp/SideBarMin';
import frontend from '../img/frontend certificate.PNG';
import cisco from '../img/cisco.jpg';
import supsi from '../img/supsi.jpg';
import cert1 from '../img/cert1.jpg';
import cert2 from '../img/cert2.jpg';

export default function MainPageMin() {
  return (
    <div>
      <div>
        <Container id="ContainerMin">
          <SideBarMin />
          <Row id="ABOUT" style={{ paddingTop: '10%', paddingLeft: '3%' }}>
            <p class="name">
              DEJENE <span style={{ color: '#bd5d38' }}>TESFAYE</span>
            </p>
            <p class="address">
              Addis ababa Ethiopia , (+251) 921335447 ·
              <span style={{ color: '#bd5d38', textTransform: 'lowercase' }}>
                {' '}
                deju1921@gmail.com
              </span>
            </p>
          </Row>

          <Row
            style={{ paddingTop: '2%', paddingLeft: '3%', paddingRight: '10%' }}
          >
            <p class="intro">
              I am experienced application software developer at INSA
              (Information Network Security Adminstration) for more that 6
              years. In the past those years i have develop security product
              like antivirus, web application firewall (WAF) and other products
              used for secure our infrastructure.
            </p>
          </Row>
          <Row class="p-3 border bg-light" style={{ paddingLeft: '4%' }}>
            {' '}
            <SocialIcon
              className="SocialIcon"
              url="https://twitter.com/deju27893715"
            />
            <SocialIcon
              className="SocialIcon"
              url="https://www.facebook.com/dejene.tesfaye.94/"
            />
            <SocialIcon
              className="SocialIcon"
              url="https://github.com/dejenetesfaye"
            />
            <SocialIcon
              url="mailto:deju1921@gmail.com"
              className="SocialIcon"
            />
          </Row>
        </Container>
        {/* Education */}
        <Container id="ContainerMin">
          <hr />
          <Row id="EDUCATION" style={{ paddingLeft: '3%' }}>
            <p class="title">Education</p>
            <p class="address">Educational background</p>
          </Row>

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">TITLE </th>
                <th scope="col">FIELD OF STUDY</th>
                <th scope="col">SCHOOL</th>
                <th scope="col">YEAR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Electrical and computer eng'g (computer eng'g)</td>
                <td>Arbaminch University</td>
                <td>2012-05-06 to 2016-06-23</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>preparatory</td>
                <td>Medhanealem preparatory school</td>
                <td>2010-09-01 to 2011-06-30</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>secondary</td>
                <td>Dilber scondary school</td>
                <td>2008-09-01 to 2009-06-30</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>primary</td>
                <td>KDS primary school</td>
                <td>2000-09-01 to 2007-06-30</td>
              </tr>
            </tbody>
          </table>
        </Container>
        {/* Experiance */}
        <Container id="ContainerMin">
          <hr />
          <Row id="EXPERIANCE" style={{ paddingLeft: '3%' }}>
            <p class="title">Experiance</p>
            <p class="address">Senior Web Developer</p>
          </Row>

          <Row style={{ paddingTop: '2%', paddingLeft: '3%' }}>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ORG.</th>
                  <th scope="col">POSITION</th>
                  <th scope="col">DATE</th>
                  <th scope="col">REMARK</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>INSA</td>
                  <td>trainee</td>
                  <td>2017-02-03 to 2017-10-05</td>
                  <td rowspan="2">
                    &nbsp;I am security software developer from started my job
                    until now with different position.
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>INSA</td>
                  <td>Application software developer</td>
                  <td>2017-10-06 to 2020-01-09</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>INSA</td>
                  <td>Application software developer</td>
                  <td>2020-01-10 to 2020-03-09</td>
                  <td rowspan="2">
                    Mainly I had been working with Anti-virus and web
                    application firewall. It gives me great opportunity to know
                    about cyber security and how to know bypass website and web
                    application through attacks like DDOS and SQL injection. As
                    well as about how to protect our products from malwares.
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>INSA</td>
                  <td>senior application programmer</td>
                  <td>2021-03-10 to 2021-08-31</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>INSA</td>
                  <td>Team leader</td>
                  <td>2021-09-01 to 2022-06-02</td>
                  <td rowspan="2">
                    The second headache in cyber world is performance. The first
                    one is security. In this area I got so many experience to
                    fix the performance.
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>INSA</td>
                  <td>Team leader</td>
                  <td>2022-06-03 to 2022-06-07</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>INSA</td>
                  <td>Team leader</td>
                  <td>2022-06-08 until NOW</td>
                  <td rowspan="2">
                    At last, now I am team leader for security application
                    products at INSA. It gives me the chance to know about many
                    things include how to manage the resources in project
                  </td>
                </tr>
              </tbody>
            </table>
          </Row>
        </Container>

        {/* Skills */}
        <Container id="ContainerMin">
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
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
                    alt=""
                  />
                </i>
                {/* jupyter */}
                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg"
                    alt=""
                  />
                </i>
                {/* C */}
                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                    alt=""
                  />
                </i>
                {/* C++ */}
                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg"
                    alt=""
                  />
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
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                    alt=""
                  />
                </i>
                {/* css */}
                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                    alt=""
                  />
                </i>
                {/* javascript */}
                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt=""
                  />
                </i>
                {/* react */}
                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                    alt=""
                  />
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
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                    alt=""
                  />
                </i>

                {/* PHP */}

                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
                    alt=""
                  />
                </i>
                {/* codeigniter */}

                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain-wordmark.svg"
                    alt=""
                  />
                </i>
                {/* django */}
                <i
                  style={{
                    height: '20%',
                    width: '20%',
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
                    alt=""
                  />
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
                  now i am team leader for secure application development for
                  almost two years. in my team we develop application that used
                  for security, like anti-virus, WAF (web application firewall),
                  DPI(deep packet inspection) and other systems.
                </p>
                <p class="intro">
                  in the past two years i got so many experiances about
                  leadership and administration. so i can manage the resource
                  around the project and the company. it include human and other
                  digital resources. i have experience to motivate and cooperate
                  the peoples for their tasks and projects.
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
        {/* Interests */}
        <Container id="ContainerMin">
          <hr />
          <Row id="INTERESTS" style={{ paddingLeft: '3%' }}>
            <p class="title">INTERESTS</p>
          </Row>

          <Row
            style={{ paddingTop: '2%', paddingLeft: '3%', paddingRight: '10%' }}
          >
            <p class="intro">
              <ul>
                <li>
                  <b>Sports</b> - and any kind of physical activity, really -
                  are known to improve brain health and your ability to do
                  everyday activities. Not only, but sports also help you
                  develop self-discipline, teamwork, leadership, and
                  interpersonal skills.{' '}
                </li>
                <br />
                <li>
                  <b>Teamwork</b> -“Behind every genius is a team,” says Murphy.
                  “When people play off each other’s skills and knowledge, they
                  can create solutions that are practical and useful.”
                </li>
                <br />
                <li>
                  <b>Leadership</b> - help ourselves and others to do the right
                  thing to move forward. To do this we have to create an
                  inspiring vision, then motivate and inspire others to achieve
                  it.
                </li>
                <br />
                <li>
                  <b>Reading</b> - Reading exercises the brain, improves the
                  ability to focus, increases general knowledge, can sharpen
                  your communication skills, and helps relieve stress.{' '}
                </li>
                <br />
                <li>
                  <b>Listening music</b> - It provides a total brain workout.
                  Research has shown that listening to music can reduce anxiety,
                  blood pressure, and pain as well as improve sleep quality,
                  mood, mental alertness, and memory.
                </li>
              </ul>
            </p>
          </Row>
        </Container>
        {/* Certificates */}
        <Container id="ContainerMin">
          <hr />
          <Row id="CERTIFICATES" style={{ paddingLeft: '3%' }}>
            <p class="title">CERTIFICATES</p>
            <img id="frontend" src={frontend} alt="myPhoto" style={{}} />
          </Row>
          <hr />
          <Row id="CERTIFICATES" style={{ paddingLeft: '3%' }}>
            <img id="frontend" src={cisco} alt="myPhoto" style={{}} />
          </Row>
          <hr />
          <Row id="CERTIFICATES" style={{ paddingLeft: '3%' }}>
            <hr />
            <img id="frontend" src={supsi} alt="myPhoto" style={{}} />
          </Row>
        </Container>
        {/* AWARDS */}
        <Container id="ContainerMin">
          <hr />
          <Row id="AWARDS" style={{ paddingLeft: '3%' }}>
            <p class="title">AWARDS</p>
            <hr />
            <img id="frontend" src={cert1} alt="myPhoto" />
            <hr />
            <img id="frontend" src={cert2} alt="myPhoto" />
          </Row>
        </Container>
      </div>
    </div>
  );
}
