function Navbar() {
    return (
      <div className="generalContainer">
        <div>
          <img
            className="logo"
            src="https://4.bp.blogspot.com/-8ZUuncM3-qE/U8p1s-hn2FI/AAAAAAAALis/gQ5Ho5nTDpA/s1600/Elder+Sign.png"
            alt=""
          ></img>
        </div>
        <div className="sections">
          <ol>
            <li>
              <a href="#">Great Ones</a>
            </li>
            <li>
              <a href="#">Outer Gods</a>
            </li>
            <li>
              <a href="#">Elder Gods</a>
            </li>
          </ol>
        </div>
        <div class="enroll">
          Become a <span>cultist</span>!
        </div>
      </div>
    );
  }
  
  function Card1() {
    return (
      <div id="card">
        <img
          className="photo"
          src="https://i.pinimg.com/originals/d7/70/d9/d770d9d10878c4bcfcfb046ed6506fab.jpg"
          alt=""
        />
      </div>
    );
  }
  
  function Card2() {
    return (
      <div id="card">
        <img
          class="photo"
          src="https://ih0.redbubble.net/image.346546992.9119/flat,550x550,075,f.jpg"
          alt=""
        />
      </div>
    );
  }
  
  function Card3() {
    return (
      <div id="card">
        <img
          class="photo"
          src="https://i.pinimg.com/originals/c7/be/72/c7be7267aecd054d7cc61049060d53a5.jpg"
          alt=""
        />
      </div>
    );
  }
  
  function Card4() {
    return (
      <div id="card">
        <img
          class="photo"
          src="https://i.pinimg.com/originals/39/4f/86/394f86053a7681d14b5ace9617d26e28.jpg"
          alt=""
        />
      </div>
    );
  }
  
  function Card5() {
    return (
      <div id="card">
        <img
          class="photo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.h7X2HFE_Gx6SYlOeNOBx-gHaGa%26pid%3DApi&f=1&ipt=4dea072e29048dc6dc4b05417e2f25088ebdc1ec8426a056326b4504bd0596e1&ipo=images"
          alt=""
        />
      </div>
    );
  }
  
  function Card6() {
    return (
      <div id="card">
        <img
          class="photo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.unFIkXw0Z9BAp1595r62uwAAAA%26pid%3DApi&f=1&ipt=ac7fe15472b343b2fe7808df62fc0b9aa3e2b325d820e119adab471ad3c2f947&ipo=images"
          alt=""
        />
      </div>
    );
  }
  
  function Center() {
    return (
      <div id="center">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
      </div>
    );
  }
  
  function Footer() {
    return (
      <div id="footer">
        <h3>Created by Claudio</h3>
      </div>
    );
  }
  
  export function MyApp() {
    return (
      <div>
        <Navbar />
        <Center />
        <Footer />
      </div>
    );
  }
  