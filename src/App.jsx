import './App.css';

function App() {
  return (
    <>
      <header className='header'>
        <a href="#" className='logo'>Portfolio</a>

        <i className='bx bx-menu' id='menu-icon'></i>

        <nav className='navbar'>
          <a href="#home" className='active'>Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section className='home' id='home'>
        <div className='home-content'>
          <h3>Hello its me</h3>
          <h1>Franco Justo</h1>
          <h3>and I am a <span>Full Stack Developer</span></h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, voluptas fuga. Reiciendis quidem similique quod nulla exercitationem.</p>
          <div className='social-media'>
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
            <a href="#"><i className='bx bxl-instagram-alt'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
          </div>
          <a href="#" className='btn'>Download CV</a>
        </div>
        <div className='home-img'>
          <img src="../public/home.png" alt="" />
        </div>

      </section>
      <section className='about' id='about'>
        <div className='about-img'>
          <img src="../public/about.png" alt="" />
        </div>
        <div className='about-content'>
          <h2 className='heading'>About <span>me</span></h2>
          <h3>Full Stack developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit quod molestias recusandae iusto ut? Dolores deleniti similique quia reiciendis. Placeat dolor nobis dolores odio vel?</p>
          <a href="#" className='btn'>Read more</a>
        </div>
      </section>
      <section className='services' id='services'>
        <h2 className='heading'>Our <span>Services</span></h2>
        <div className='services-container'>
          <div className='services-box'>
            <i className='bx bx-code-alt'></i>
            <h3>Web development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In excepturi perferendis reprehenderit aspernatur veniam minima velit ut natus quod nemo.</p>
            <a href="#" className='btn' >Read more</a>
          </div>

          <div className='services-box'>
            <i className='bx bxs-paint'></i>
            <h3>Graphic Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In excepturi perferendis reprehenderit aspernatur veniam minima velit ut natus quod nemo.</p>
            <a href="#" className='btn' >Read more</a>
          </div>

          <div className='services-box'>
            <i className='bx bx-bar-chart-alt'></i>
            <h3>Digital marketing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In excepturi perferendis reprehenderit aspernatur veniam minima velit ut natus quod nemo.</p>
            <a href="#" className='btn' >Read more</a>
          </div>
        </div>
      </section>

      <section className='portfolio' id='portfolio'>
        <h2 className='heading'>Latest<span>Project</span></h2>
        <div className='portfolio-container'>

          <div className='portfolio-box'>
            <img src="../public/portfolio1.jpg" alt="" />
            <div className='portfolio-layer'>
              <h4>Web design</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil quos at necessitatibus ea eos!</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>

          <div className='portfolio-box'>
            <img src="../public/portfolio2.jpg" alt="" />
            <div className='portfolio-layer'>
              <h4>Web design</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil quos at necessitatibus ea eos!</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>

          <div className='portfolio-box'>
            <img src="../public/portfolio3.jpg" alt="" />
            <div className='portfolio-layer'>
              <h4>Web design</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil quos at necessitatibus ea eos!</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>

          <div className='portfolio-box'>
            <img src="../public/portfolio4.jpg" alt="" />
            <div className='portfolio-layer'>
              <h4>Web design</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil quos at necessitatibus ea eos!</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>

          <div className='portfolio-box'>
            <img src="../public/portfolio5.jpg" alt="" />
            <div className='portfolio-layer'>
              <h4>Web design</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil quos at necessitatibus ea eos!</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>

          <div className='portfolio-box'>
            <img src="../public/portfolio6.jpg" alt="" />
            <div className='portfolio-layer'>
              <h4>Web design</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil quos at necessitatibus ea eos!</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>
        </div>
      </section>

      <section className='contact' id='contact'>
        <h2 className='heading'>Contact<span>Me!</span></h2>
        
        <form action="#">
          <div className='input-box'>
            <input type="text" placeholder='Full Name' />
            <input type="email" placeholder='Email Address' />
          </div>
          <div className='input-box'>
            <input type="number" placeholder='Mobile' />
            <input type="text" placeholder='Email Subject' />
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder='Your message'></textarea>
          <input type="submit" value="Send Message" className='btn' />
        </form>
      </section>

      <footer className='footer'>
        <div className='footer-text'>
          <p>Copyright</p>
        </div>
        <div className='footer-iconTop'>
          <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
        </div>
      </footer>

    </>
  );
}

export default App;