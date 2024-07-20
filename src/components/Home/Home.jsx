import React from 'react'
import {  Carousel } from 'react-bootstrap'
import cyber from '../../assets/images/3820574.jpg'
import web from '../../assets/images/website-hosting-concept-with-bright-light.jpg'
import firewall from '../../assets/images/istockphoto-1126482840-2048x2048.jpg'
import { FaShieldAlt } from "react-icons/fa";
import { Card } from 'react-bootstrap'
import penetrate from '../../assets/images/html-css-collage-concept-with-hacker_23-2150061984.png';
import itsol from '../../assets/images/html-css-collage-concept-with-person_23-2150061967.png';
import itservices from '../../assets/images/businessman-using-digital-tablet_53876-108317.png'
import sercyber from '../../assets/images/technology-secure-abstract-background_23-2148348342.png'
import secfirewall from '../../assets/images/standard-quality-control-concept-m_23-2150041839.png'
import swd from '../../assets/images/programming-background-with-person-working-with-codes-computer_23-2150010125.png'
import webdev from '../../assets/images/ui-ux-representations-with-laptop_23-2150201871.png'
import thunt from  '../../assets/images/medium-shot-hacker-holding-laptop_23-2149101212.png'
import incays from '../../assets/images/programming-background-with-person-working-with-codes-computer_23-2150010118.png' 
import serpenetrate from '../../assets/images/person-working-html-computer_23-2150038860.png'
import cybersol from '../../assets/images/hand-pressing-security-button-touch-screen_1112-492.jpg'
import digital from '../../assets/images/standard-quality-control-concept-m_23-2150041859.png'
import crm from '../../assets/images/crmmanagement.png'
import itsolution from '../../assets/images/saas-concept-collage_23-2149399285.png'
import { FaStar } from "react-icons/fa";
import './home.css'

const Home = () => {

    
  return (
    <>
        <div className='hero'>
        <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cyber}
          id='c-img'
          alt="First slide "
        />
        <Carousel.Caption>
          <h1>Cybersecurity</h1>
          <button className='btn btn-secondary btn-lg'>Know more</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={web}
          id='c-img'
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>IT Services</h1>
          <button className='btn btn-secondary btn-lg'>Know more</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={firewall}
          id='c-img'
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Firewall Security</h1>
          <button className='btn btn-secondary btn-lg'>Know more</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>

        <div>
        <div className='d-flex'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className='text-left'><span className='sect'>    Sectec360   </span> <span className='icon'> <FaShieldAlt /></span><br/> 
                        enhance & safeguard your business <br/> with comprehensive <span>IT  Solutions!</span></h3>
                        <p className='mt-3'>
                            We At SecTec 360, we understand the ever-evolving threat landscape in today's digital world. 
                            That's why we're dedicated to providing a comprehensive suite of IT solutions designed to safeguard
                            your business and empower your operations.
                        </p>
                        <p className='mt-1'>
                        Our team of highly skilled and certified professionals possesses a deep understanding of cybersecurity, 
                        IT services, and penetration testing. We leverage this expertise to deliver solutions that are tailored to 
                        your specific needs and industry.
                        </p>
                        <p className='mt-1'>
                        At SecTec 360, we are constantly innovating and staying ahead of the curve. We invest heavily in research and 
                        development to ensure that our clients have access to the latest and most effective IT solutions.
                        </p>
                    </div>
                    <div className="col-md-3">
                    <img src={penetrate} alt="logo" className='w-30 h-10' id='a-img'/>
                    </div>
                    <div className="col-md-3">
                    <img src={itsol} alt="logo" className='w-30 h-10' id='b-img'/>
                    </div>
                </div>
            </div>
        </div>
        </div>


        <div className='services'>
        <div className="container mt-5">
            <h3>Services we provide</h3>
            <div className="row">
            <div className="col-md-3 mt-5 mx-auto d-grid justify-content-around cardsol" >
                    <img src={itservices} alt="logo" id='myimg' className='d-flex justify-content-center'/>
                    <h4 className='mt-3 text-center'>IT Services</h4>
                    <button className='btn btn-warning mt-3'>know more</button>
                </div>
                <div className="col-md-3 mt-5 d-grid mx-auto justify-content-around cardsol" >
                <img src={sercyber} alt="logo" id='myimg' className='d-flex justify-content-center'/>
                <h4 className='mt-3 text-center'>Cyber Security</h4>
                <button className='btn btn-warning mt-3'>know more</button>
                </div>
                <div className="col-md-3 mt-5 mx-auto d-grid justify-content-around cardsol" >
                <img src={secfirewall} alt="logo" id='myimg' className='d-flex justify-content-center'/>
                <h4 className='mt-3 text-center'>Firewall Services</h4>
                <button className='btn btn-warning mt-3'>know more</button>
                </div>
                <div className="col-md-3 mx-auto mt-5 d-grid justify-content-around cardsol" >
                <img src={swd} alt="logo" id='myimg' className='d-flex justify-content-center'/>
                <h4 className='mt-3 text-center'>Software Development</h4>
                <button className='btn btn-warning mt-3'>know more</button>
                </div>
                <div className="col-md-3 mt-5 mx-auto d-grid justify-content-around  cardsol" >
                <img src={webdev} alt="logo" id='myimg' className='d-flex justify-content-center'/>
                <h4 className='mt-3 text-center'>Web Development</h4>
                <button className='btn btn-warning mt-3'>know more</button>
                </div>
                <div className="col-md-3 mt-5 mx-auto d-grid justify-content-around cardsol" >
                <img src={thunt} alt="logo" id='myimg' className='d-flex justify-content-center'/>
                <h4 className='mt-3 text-center'>Threat hunting</h4>
                <button className='btn btn-warning mt-3'>know more</button>
                </div>
                <div className="col-md-3 mt-5 mx-auto d-grid justify-content-around cardsol" >
                <img src={incays} alt="logo" id='myimg' className='d-flex justify-content-center'/>
                <h4 className='mt-3 text-center'>Incident Analysis</h4>
                <button className='btn btn-warning mt-3'>know more</button>
                </div>
                <div className="col-md-3 mt-5 mx-auto d-grid justify-content-around cardsol" >
                <img src={serpenetrate} alt="logo" id='myimg' className='d-flex justify-content-center'/>
                <h4 className='mt-3 text-center'>Peneration Testing</h4>
                <button className='btn btn-warning mt-3'>know more</button>
                </div>
                
            </div>
        </div>
        </div>

        <div className='solutions'>
        <h3 className='mt-5'>Solutions</h3>
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
        <Card style={{ width: '18rem', height: '22rem' }}>
      <Card.Img variant="top" width={127} height={286} src= {cybersol} />
      <Card.Body>
        <Card.Title>Cyber Security</Card.Title>
        <Card.Text>
        Protecting your digital world. Ensuring the safety and security of your data, 
        networks, and systems from cyber threats and vulnerabilities.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-3">
        <Card style={{ width: '18rem', height: '22rem' }}>
      <Card.Img variant="top" width={127} height={286} src= {crm} />
      <Card.Body>
        <Card.Title>CRM Management</Card.Title>
        <Card.Text>
        Building stronger customer relationships. 
        Expert in managing and optimizing CRM systems to enhance customer engagement and satisfaction
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-3">
        <Card style={{ width: '18rem', height: '22rem' }}>
      <Card.Img variant="top" width={127} height={286} src= {digital} />
      <Card.Body>
        <Card.Title>Digital Trasnformation</Card.Title>
        <Card.Text>
        Transforming potential into reality. 
        Helping businesses leverage digital technologies to improve processes, 
        enhance customer experiences, and drive growth.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-3">
        <Card style={{ width: '18rem', height: '22rem' }}>
      <Card.Img variant="top" width={127} height={286} src= {itsolution} />
      <Card.Body>
        <Card.Title>IT Solution</Card.Title>
        <Card.Text>
        Innovative technology for your business. Providing end-to-end IT solutions 
        tailored to your unique needs and goals.
        Transforming your IT infrastructure. 
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
        </div>

        <div className='testimonials'>
<div id="carouselMultiItemExample" data-mdb-carousel-init class="carousel slide carousel-dark text-center mt-5" data-mdb-ride="carousel">
 
  <div class="d-flex justify-content-center mb-4">
    <button data-mdb-button-init class="carousel-control-prev position-relative" type="button"
      data-mdb-target="#carouselMultiItemExample" data-mdb-slide="prev">
      <span class="carousel-control-prev-icon text-body" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button data-mdb-button-init class="carousel-control-next position-relative" type="button"
      data-mdb-target="#carouselMultiItemExample" data-mdb-slide="next">
      <span class="carousel-control-next-icon text-body" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
 
  <div class="carousel-inner py-4">
   
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar"
              style={{width: 150}} />
            <h5 class="mb-3">Anna Deynah</h5>
            <p>Startup-Founder</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              played a crucial role in our growth. Their tailored IT solutions and prompt support allowed us to focus on our core business, 
              knowing our technology needs were in good hands. We're grateful for their commitment to our success.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><FaStar /></li>
              <li><FaStar /></li>
              <li><FaStar /></li>
              <li><FaStar /></li>
              <li><FaStar /></li>
            </ul>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
              style={{width: 150}} />
            <h5 class="mb-3">John Doe</h5>
            <p>E-Commerce Business</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              Switching to sectec360 for our IT needs was the best decision we made. 
              Their comprehensive solutions and exceptional customer service have transformed our digital operations, 
              enhancing our customer experience and boosting our sales.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><FaStar /></li>
              <li><FaStar /></li>
              <li><FaStar /></li>
              <li><FaStar /></li>
              <li>
                <i class="fas fa-star-half-alt fa-sm"></i>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
              style={{width: 150}} />
            <h5 class="mb-3">Maria Kate</h5>
            <p>Photographer</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              The team at sectec360 understands the unique challenges of our industry. 
              Their IT solutions have improved our data management and security, 
              allowing us to provide better care for our patients. 
              Their professionalism and expertise are unmatched.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><FaStar /></li>
              <li><FaStar /></li>
              <li><FaStar /></li>
              <li><FaStar /></li>
              <li><FaStar /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

   
    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 ">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp" alt="avatar"
              style={{width: 150}} />
            <h5 class="mb-3">John Doe</h5>
            <p>UX Designer</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
              officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
            </ul>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="avatar"
              style={{width: 150}}/>
            <h5 class="mb-3">Alex Rey</h5>
            <p>Web Developer</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li>
                <i class="fas fa-star-half-alt fa-sm"></i>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp" alt="avatar"
              style={{width: 150}} />
            <h5 class="mb-3">Maria Kate</h5>
            <p>Photographer</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="far fa-star fa-sm"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

   
    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp" alt="avatar"
              style={{width: 150}} />
            <h5 class="mb-3">Anna Deynah</h5>
            <p>UX Designer</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
              officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
            </ul>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp" alt="avatar"
              style={{width: 150}} />
            <h5 class="mb-3">John Doe</h5>
            <p>Web Developer</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li>
                <i class="fas fa-star-half-alt fa-sm"></i>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp" alt="avatar"
              style={{width: 150}} />
            <h5 class="mb-3">Maria Kate</h5>
            <p>Photographer</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="far fa-star fa-sm"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    </>
    
  )
}

export default Home