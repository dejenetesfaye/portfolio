import { React } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import myPhoto from '../img/myPhoto.jpg';

function ScrollToABOUT(id) {
  var element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
export default function SideBarMin() {
  return (
    <div id="SideBarMin">
      <div class="image-container">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <div class="nav-item" onClick={() => ScrollToABOUT('ABOUT')}>
                ABOUT
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div class="nav-item" onClick={() => ScrollToABOUT('EXPERIANCE')}>
                EXPERIANCE
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div class="nav-item" onClick={() => ScrollToABOUT('EDUCATION')}>
                EDUCATION
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div class="nav-item" onClick={() => ScrollToABOUT('SKILLS')}>
                SKILLS
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div class="nav-item" onClick={() => ScrollToABOUT('INTERESTS')}>
                INTERESTS
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div class="nav-item" onClick={() => ScrollToABOUT('AWARDS')}>
                AWARDS
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
