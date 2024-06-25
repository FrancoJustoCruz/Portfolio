import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import emailjs from 'emailjs-com';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);
  const el = React.useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nnn4i6j', 'template_bqq536q', form.current, 'MXNxncB0ztI6vMDY0')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again');
      });
  };

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [ 'Desarrollador Full Stack'],
      typeSpeed: 90,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  useEffect(() => {
    const menuIcon = menuIconRef.current;
    const navbar = navbarRef.current;

    if (menuIcon && navbar) {
      if (menuOpen) {
        menuIcon.classList.add('bx-x');
        navbar.classList.add('active');
      } else {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
      }
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav a');
      const header = document.querySelector('header');

      let top = window.scrollY;

      sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
          });
        }
      });

      header.classList.toggle('sticky', top > 100);

      if (menuOpen) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
  }, []);

  return (
    <>
      <header className='header'>
        <a href="#" className='logo'>Portfolio</a>
        <i className='bx bx-menu' id='menu-icon' ref={menuIconRef} onClick={toggleMenu}></i>
        <nav className='navbar' ref={navbarRef}>
          <a href="#home" className='active'>Inicio</a>
          <a href="#about">Acerca de</a>
          <a href="#services">Mis habilidades</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contactame</a>
        </nav>
      </header>
      <section className='home' id='home'>
        <div className='home-content'>
          <h3>Hola!</h3>
          <h1>Soy Franco Justo Cruz</h1>
          <h3>y soy un  <span ref={el}/></h3>
          <p>Soy un desarrollador web junior con mucha pasión y ganas de aprender. Estoy entusiasmado por crecer profesionalmente y contribuir en proyectos innovadores. Estoy listo para enfrentar desafíos y aportar con mi dedicación y entusiasmo a su equipo.</p>
          <div className='social-media'>
            <a href="https://github.com/FrancoJustoCruz" target="_blank"><i className='bx bxl-github'></i></a>
            <a href="https://www.linkedin.com/in/edgar-franco-justo-cruz/" target="_blank"><i className='bx bxl-linkedin'></i></a>
          </div>
          <a href="../public/Edgar-Franco-Justo-Cruz-CV.pdf" className="btn" download="mi_cv.pdf">Descargar CV</a>
        </div>
        <div className='home-img'>
          <img src="/foto.png" alt="Foto de Franco Justo" />
        </div>
      </section>
      <section className='about' id='about'>
        <div className='about-img'>
          <img src="/foto.png" alt="Foto de Franco Justo" />
        </div>
        <div className='about-content'>
          <h2 className='heading'>Acerca de <span>mi!</span></h2>
          <h3>Full Stack developer</h3>
          <p>Soy un desarrollador web junior con formación académica en Funval y la Universidad Nacional de San Agustín, donde adquirí fundamentos sólidos en desarrollo web. Además, soy autodidacta y constantemente busco expandir mis conocimientos explorando nuevas tecnologías y resolviendo problemas creativos. Estoy motivado por el aprendizaje continuo y emocionado por aplicar mis habilidades en proyectos desafiantes y enriquecedores.</p>
          <a href="#" className='btn'>Read more</a>
        </div>
      </section>
      <section className='services' id='services'>
        <h2 className='heading'>Mis <span>Habilidades</span></h2>
        <div className='services-container'>
          <div className='services-box'>
          <i className='bx bxl-javascript'></i>
            <h3>JavaScript</h3>
            <p>Competente en el uso de JavaScript para desarrollar funcionalidades interactivas y dinámicas en aplicaciones web.</p>
            <a href="#" className='btn' >Read more</a>
          </div>
          <div className='services-box'>
          <i className='bx bxl-tailwind-css' ></i>
            <h3>Tailwind CSS</h3>
            <p>Familiarizado con el framework de CSS utility-first Tailwind CSS para estilizar aplicaciones web de manera eficiente y escalable.</p>
            <a href="#" className='btn' >Read more</a>
          </div>
          <div className='services-box'>
          <i className='bx bxl-mongodb' ></i>
            <h3>MongoDB</h3>
            <p>Experiencia en el manejo de MongoDB para almacenar y gestionar datos no relacionales de forma efectiva en aplicaciones backend.</p>
            <a href="#" className='btn' >Read more</a>
          </div>
          <div className='services-box'>
          <i className='bx bxl-html5' ></i>
            <h3>HTML</h3>
            <p>Proficiente en el uso de HTML para estructurar el contenido de las páginas web de manera semántica y accesible.</p>
            <a href="#" className='btn' >Read more</a>
          </div>
          <div className='services-box'>
          <i className='bx bxl-css3' ></i>
            <h3>CSS</h3>
            <p>Habilidad en la creación de estilos atractivos y responsivos utilizando CSS para mejorar la presentación y la experiencia del usuario en aplicaciones web.</p>
            <a href="#" className='btn' >Read more</a>
          </div>
          <div className='services-box'>
          <i className='bx bxl-nodejs'></i>
            <h3>NodeJS</h3>
            <p>Conocimientos en Node.js para construir aplicaciones backend escalables y rápidas, utilizando JavaScript en el servidor.</p>
            <a href="#" className='btn' >Read more</a>
          </div>
          <div className='services-box'>
          <i className='bx bxl-react'></i>
            <h3>React</h3>
            <p>Capacidad para desarrollar interfaces de usuario interactivas y eficientes utilizando React, haciendo uso de componentes reutilizables y estado gestionado.</p>
            <a href="#" className='btn' >Read more</a>
          </div>
          <div className='services-box'>
          <i className='bx bxl-bootstrap' ></i>
            <h3>Bootstrap</h3>
            <p>Familiarizado con el framework de CSS Bootstrap para el desarrollo rápido y adaptable de interfaces web y aplicaciones móviles.</p>
            <a href="#" className='btn' >Read more</a>
          </div>
        </div>
      </section>
      <section className='portfolio' id='portfolio'>
        <h2 className='heading'>Latest<span>Project</span></h2>
        <div className='portfolio-container'>
          <div className='portfolio-box'>
            <img src="/public/ToDoapp.png" alt="Portfolio 1" />
            <div className='portfolio-layer'>
              <h4>To Do List</h4>
              <p>Pequeña web donde se puede tener una lista de tareas, marcarlas y eliminarlas.</p>
              <a href="https://todo-web-franco.netlify.app/" target='_blank'><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className='portfolio-box'>
            <img src="/public/shopStore.png" alt="Portfolio 2" />
            <div className='portfolio-layer'>
              <h4>ShopStore</h4>
              <p>Presentacion de producto de tienda virtual, con diseño responsive.</p>
              <a href="https://shop-store-franco.netlify.app/" target='_blank'><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className='portfolio-box'>
            <img src="/public/WeatherApp.png" alt="Portfolio 3" />
            <div className='portfolio-layer'>
              <h4>Weather App</h4>
              <p>Web que nos brinda el pronostico del clima, de cinco dias segun locacion.</p>
              <a href="https://pf3-weather.netlify.app/" target='_blank'><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className='portfolio-box'>
            <img src="/public/AirBNBapp.png" alt="Portfolio 4" />
            <div className='portfolio-layer'>
              <h4>AirBNB</h4>
              <p>Web de busqueda de AirBNB con barra de busqueda con filtro de ciudad y huespedes</p>
              <a href="https://airbnb-franco.netlify.app/" target='_blank'><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className='portfolio-box'>
            <img src="/public/CalculadoraApp.png" alt="Portfolio 5" />
            <div className='portfolio-layer'>
              <h4>Tip Calculator</h4>
              <p>Calculadora para propinas.</p>
              <a href="https://calculadora-franco.netlify.app/" target='_blank'><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className='portfolio-box'>
            <img src="/public/BlogApp.png" alt="Portfolio 6" />
            <div className='portfolio-layer'>
              <h4>Blog Informativo</h4>
              <p>Blog con diseño responsive</p>
              <a href="https://blog-responsive-franco.netlify.app/" target='_blank'><i className='bx bx-link-external'></i></a>
            </div>
          </div>
        </div>
      </section>
      <section className='contact' id='contact'>
      <h2 className='heading'>Escribeme un<span>mensaje!</span></h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className='input-box'>
          <input type="text" name="fullName" placeholder='Nombre completo' required />
          <input type="email" name="email" placeholder='Direccion de correo' required />
        </div>
        <div className='input-box'>
          <input type="number" name="mobile" placeholder='Numero telefonico' required />
          <input type="text" name="subject" placeholder='Nombre de preferencia' required />
        </div>
        <textarea name="message" cols="30" rows="10" placeholder='Tu mensaje' required></textarea>
        <input type="submit" value="Enviar mensaje" className='btn' />
      </form>
    </section>
      <footer className='footer'>
        <div className='footer-text'>
        </div>
        <div className='footer-iconTop'>
          <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
        </div>
      </footer>
    </>
  );
}

export default App;