import { React } from 'react';
import myPhoto from '../img/myPhoto.jpg';

export default function SideBar() {
  function ScrollToABOUT(id) {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div id="SideBar">
      <div class="image-container">
        <img id="myPhoto" src={myPhoto} alt="myPhoto" />
      </div>
      <div>
        <div class="nav-item" onClick={() => ScrollToABOUT('ABOUT')}>
          ABOUT
        </div>
        <div class="nav-item" onClick={() => ScrollToABOUT('EDUCATION')}>
          EDUCATION
        </div>
        <div class="nav-item" onClick={() => ScrollToABOUT('EXPERIANCE')}>
          EXPERIANCE
        </div>

        <div class="nav-item" onClick={() => ScrollToABOUT('SKILLS')}>
          SKILLS
        </div>
        <div class="nav-item" onClick={() => ScrollToABOUT('INTERESTS')}>
          INTERESTS
        </div>
        <div class="nav-item" onClick={() => ScrollToABOUT('CERTIFICATES')}>
          CERTIFICATES
        </div>
        <div class="nav-item" onClick={() => ScrollToABOUT('AWARDS')}>
          AWARDS
        </div>
      </div>
    </div>
  );
}
