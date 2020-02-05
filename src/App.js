import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.Fragment>
   <header id="home">

      <nav id="nav-wrap">

         <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

         <ul id="nav" class="nav">
            <li class="current"><a class="smoothscroll" href="#home">Home</a></li>
            <li><a class="smoothscroll" href="#about">About</a></li>
	         <li><a class="smoothscroll" href="#resume">Resume</a></li>
            <li><a class="smoothscroll" href="#portfolio">Works</a></li>
         </ul> 

      </nav> 

      <div class="row banner">
         <div class="banner-text">
            <h1 class="responsive-headline">I'm Adesina Taofeek Adebayo</h1>
            <h3>I based in Abu-Dhabi <span>graphic designer</span>, <span>Illustrator</span> and <span>Web Developer, Software Developer </span>writing a
            viable and smooth code, creating web applications and solving problems arising from Internet Technology world. Let's <a class="smoothscroll" href="#about">start scrolling</a>&nbsp; 
            and learn more <a class="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul class="social">
               <li><a href="https://www.facebook.com/taofeekdboy"><i class="fa fa-facebook"></i></a></li>
               <li><a href="https://www.twitter.com/adebayotaofeek0"><i class="fa fa-twitter"></i></a></li>
               <li><a href="https://www.linkedin.com/in/taofeek-adesina-6b163a148/"><i class="fa fa-linkedin"></i></a></li>
               <li><a href="https://www.instagram.com/adebayotaofeek0"><i class="fa fa-instagram"></i></a></li>
               
            </ul>
         </div>
      </div>

      <p class="scrolldown">
         <a class="smoothscroll" href="#about"><i class="icon-down-circle"></i></a>
      </p>

   </header> 


 
   <section id="about">

      <div class="row">

         <div class="three columns">

            <img class="profile-pic"  src="images/IMG_3792.JPG" alt="" />

         </div>

         <div class="nine columns main-col">

            <h2>About Me</h2>

            <p>
              I am a graduate of Agricultural Economics with background in marketing, which I later follow 
              my passion to become a developer and designer thereby using my skills to solve problems arising from 
              Internet Technology world. I design and create apps on my free time. I design good designs to appeal 
              to the visual world and as well write programmatic code to suit my potential client needs. Currently I am 
              a freelancer and looking forward to secure a full-time employment soon. I have more than a year experience 
              in developing web apps and designing business cards, fliers, cover-art and so many more. My 
              ability to work under-pressure have put ahead in my years of freelancing and also to found worthy of completing 
              client needs before deadline. More to say when my services is needed.
            </p>

            <div class="row">

               <div class="columns contact-details">

                  <h2>Contact Details</h2>
                  <p class="address">
						   <span>Adesina Taofeek</span><br></br>
						   <span>Old Shahama Road<br></br>
						         Abu-Dhabi, UAE
                     </span><br></br>
						   <span>+971586310350</span><br></br>
                     <span><a href='http://mypersonalresume.netlify.com'>myresume.netlify.com</a></span>
					   </p>

               </div>

               <div class="columns download">
                  <p>
                     <a download='Resume' href="/images/portfolio/Taofeek Developer.docx" class="button"><i class="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>

            </div> 

         </div> 

      </div>

   </section> 

   
   <section id="resume">

     
      <div class="row education">

         <div class="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div class="nine columns main-col">

            <div class="row item">

               <div class="twelve columns">

                  <h3>University of Ilorin</h3>
                  <p class="info">Bachelors Of Science <span>&bull;</span> <em class="date">September 2016</em></p>

                  <p>
                  It was great time tobe in school, the reading and burning night candles.I thank God and my
                  parents for letting my dream comes true.
                  </p>

               </div>

            </div> 

            <div class="row item">

               <div class="twelve columns">

                  <h3>Ataoja School of Science</h3>
                  <p class="info">High School Diploma <span>&bull;</span> <em class="date">May 2008</em></p>

                  <p>
                  A science School with good and large equipments and instruments for teaching
                  and learning.
                  </p>

               </div>

            </div> 

         </div> 

      </div> 


      
      <div class="row work">

         <div class="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div class="nine columns main-col">

            <div class="row item">

               <div class="twelve columns">

                  <h3>Freelance</h3>
                  <p class="info">Junior Web Developer <span>&bull;</span> <em class="date">March 2018 - Present</em></p>

                  <p>
                  I create web apps to meet client needs, with more than a year of my experience 
                  as a developer, i have developed so many apps that can be of help to organizations
                  and personal use. Such apps include: Weather app, Movies database, Sport App,
                  Entertainment App. I work with few libraries such as React for front-end Application, 
                  Django for backend application. I do code apps as well, if there is need for it and I work with Python
                  and Javascript. I am capable of working as a team, can work with little or no 
                  supervision.
                  </p>

               </div>

            </div> 
            <div class="row item">

               <div class="twelve columns">

                  <h3>As-Salam Graphical and Computer Services</h3>
                  <p class="info">Graphic Designer <span>&bull;</span> <em class="date">January 2018 - Present</em></p>

                  <p>
                  As a graphic designer, I communicate to clients about their needs and designs,
                  I plan on it and study the material and induce proper planning of making it a
                  big success, I work with time and I make sure all my projects are completed before
                  the deadline. I review final layouts and entertain complaints and improvements to be done.
                  I work with Illustrator, Photoshop, CorelDraw, Adobe After Effect and many more to design 
                  creative art.
                  </p>

               </div>

            </div> 
         </div> 

      </div> 


      
      <div class="row skill">

         <div class="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div class="nine columns main-col">

            <p>
              
            </p>

				<div class="bars">

				   <ul class="skills">
					   
                  <li><span class="bar-expand css"></span><em>Illustrator</em></li>
						<li><span class="bar-expand css"></span><em>Python</em></li>
            <li><span class="bar-expand photoshop"></span><em>Photoshop</em></li>
						<li><span class="bar-expand css"></span><em>CSS</em></li>
						<li><span class="bar-expand html5"></span><em>HTML5</em></li>
                  <li><span class="bar-expand jquery"></span><em>jQuery</em></li>
                  <li><span class="bar-expand illustrator"></span><em>React</em></li>
                  <li><span class="bar-expand wordpress"></span><em>Javascript</em></li>
					</ul>

				</div>

			</div> 

      </div> 

   </section> 

  
   <section id="portfolio">

      <div class="row">

         <div class="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            
            <div id="portfolio-wrapper" class="bgrid-quarters s-bgrid-thirds cf">

          	   <div class="columns portfolio-item">
                  <div class="item-wrap">

                     <a href="#modal-01" title="">
                        <img alt="" src="images/portfolio/ASEMAMA WEARS 2.jpg"></img>
                        <div class="overlay">
                           <div class="portfolio-item-meta">
          					      <h5>Coffee</h5>
                              <p>Logo Design</p>
          					   </div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
                     </a>

                  </div>
          		</div> 

               <div class="columns portfolio-item">
                  <div class="item-wrap">

                     <a href="#modal-02" title="">
                        <img alt="" src="images/portfolio/coffee-3.jpg"></img>
                        <div class="overlay">
                           <div class="portfolio-item-meta">
          					      <h5>Console</h5>
                              <p>Logo design</p>
          					   </div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
                     </a>

                  </div>
          		</div> 
               <div class="columns portfolio-item">
                  <div class="item-wrap">

                     <a href="#modal-03" title="">
                        <img alt="" src="images/portfolio/cut 0-01.jpg"></img>
                        <div class="overlay">
                           <div class="portfolio-item-meta">
          					      <h5>Judah</h5>
                              <p>Webdesign</p>
          					   </div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
                     </a>

                  </div>
          		</div> 

               <div class="columns portfolio-item">
                  <div class="item-wrap">

                     <a href="#modal-04" title="">
                        <img alt="" src="images/portfolio/gspice card.jpg"></img>
                        <div class="overlay">
                           <div class="portfolio-item-meta">
          					      <h5>Into The Light</h5>
                              <p>Photography</p>
          					   </div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
                     </a>

                  </div>
          		</div> 

               <div class="columns portfolio-item">
                  <div class="item-wrap">

                     <a href="#modal-05" title="">
                        <img alt="" src="images/portfolio/legacy four mock.jpg"></img>
                        <div class="overlay">
                           <div class="portfolio-item-meta">
          					      <h5>Farmer Boy</h5>
                              <p>Branding</p>
          					   </div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
                     </a>

                  </div>
          		</div> 

               <div class="columns portfolio-item">
                  <div class="item-wrap">

                     <a href="#modal-06" title="">
                        <img alt="" src="images/portfolio/O55GUV1.png"></img>
                        <div class="overlay">
                           <div class="portfolio-item-meta">
          					      <h5>Girl</h5>
                              <p>Photography</p>
          					   </div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
                     </a>

                  </div>
          		</div> 

               <div class="columns portfolio-item">
                  <div class="item-wrap">

                     <a href="#modal-07" title="">
                        <img alt="" src="images/portfolio/tapagos-01.jpg"></img>
                        <div class="overlay">
                           <div class="portfolio-item-meta">
          					      <h5>Origami</h5>
                              <p>Illustrration</p>
          					   </div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
                     </a>

                  </div>
          		</div> 

               <div class="columns portfolio-item">
                  <div class="item-wrap">

                     <a href="#modal-08" title="">
                        <img alt="" src="images/portfolio/al rukn meat 4-01.jpg"></img>
                        <div class="overlay">
                           <div class="portfolio-item-meta">
          					      <h5>Retrocam</h5>
                              <p>Web Development</p>
          					   </div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
                     </a>

                  </div>
          		</div>  

            </div> 

         </div> 


        

         <div id="modal-01" class="popup-modal mfp-hide">

		      <img class="scale-with-grid" src="images/portfolio/modals/ASEMAMA WEARS 2.jpg" alt="" />

		      <div class="description-box">
			      <h4>Logo Design</h4>
			      <p>Logo design for Asemama wears and it was a big success</p>
               <span class="categories"><i class="fa fa-tag"></i>Branding</span>
		      </div>

            <div class="link-box">
		         <a class="popup-modal-dismiss">Close</a>
            </div>

	      </div>

         <div id="modal-02" class="popup-modal mfp-hide">

		      <img class="scale-with-grid" src="images/portfolio/modals/coffee-3.jpg" alt="" />

		      <div class="description-box">
			      <h4>Logo design</h4>
            <p>Logo design for yeti and it was a success as well.</p>
               <span class="categories"><i class="fa fa-tag"></i>Branding</span>
		      </div>

            <div class="link-box">
		         <a class="popup-modal-dismiss">Close</a>
            </div>

	      </div>
         <div id="modal-03" class="popup-modal mfp-hide">

		      <img class="scale-with-grid" src="images/portfolio/modals/cut 0-01.jpg" alt="" />

		      <div class="description-box">
			      <h4>Business card</h4>
            <p>So adorable</p>
               <span class="categories"><i class="fa fa-tag"></i>Business card</span>
		      </div>

            <div class="link-box">
            <a class="popup-modal-dismiss">Close</a>
            </div>

	      </div>

         <div id="modal-04" class="popup-modal mfp-hide">

		      <img class="scale-with-grid" src="images/portfolio/modals/gspice card.jpg" alt="" />

		      <div class="description-box">
			      <h4>Business card</h4>
            <p>It was my pleasure working with Gspice Entertainment</p>
               <span class="categories"><i class="fa fa-tag"></i>Business card</span>
		      </div>

            <div class="link-box">
               		         <a class="popup-modal-dismiss">Close</a>
            </div>

	      </div>
         <div id="modal-05" class="popup-modal mfp-hide">

		      <img class="scale-with-grid" src="images/portfolio/modals/legacy four mock.jpg" alt="" />

		      <div class="description-box">
			      <h4>Logo Design</h4>
			      <p>It was a tough time illustrating and sketching</p>
               <span class="categories"><i class="fa fa-tag"></i>Branding</span>
		      </div>

            <div class="link-box">
		         <a class="popup-modal-dismiss">Close</a>
            </div>

	      </div>

         <div id="modal-06" class="popup-modal mfp-hide">

		      <img class="scale-with-grid" src="images/portfolio/modals/O55GUV1.png" alt="" />

		      <div class="description-box">
			      <h4>Logo</h4>
			      <p>Another logo design</p>
               <span class="categories"><i class="fa fa-tag"></i>Graphic design</span>
		      </div>

            <div class="link-box">
		         <a class="popup-modal-dismiss">Close</a>
            </div>

	      </div>

         <div id="modal-07" class="popup-modal mfp-hide">

		      <img class="scale-with-grid" src="images/portfolio/modals/tapagos-01.jpg" alt="" />

		      <div class="description-box">
			      <h4>Logo Design</h4>
			      <p>Cool logo design for tapagos estate management</p>
               <span class="categories"><i class="fa fa-tag"></i>Branding, Illustration</span>
		      </div>

            <div class="link-box">
		         <a class="popup-modal-dismiss">Close</a>
            </div>

	      </div>

         <div id="modal-08" class="popup-modal mfp-hide">

		      <img class="scale-with-grid" src="images/portfolio/modals/al rukn meat 4-01.jpg" alt="" />

		      <div class="description-box">
			      <h4>Flyer</h4>
			      <p>Al rukn Flyer was a success as well as it ttook lot of time</p>
               <span class="categories"><i class="fa fa-tag"></i>Graphic Design</span>
		      </div>

            <div class="link-box">
		         <a class="popup-modal-dismiss">Close</a>
            </div>

	      </div>


      </div>

   </section> 
   <footer>

      <div class="row">

         <div class="twelve columns">

            <ul class="social-links">
               <li><a href="#"><i class="fa fa-facebook"></i></a></li>
               <li><a href="#"><i class="fa fa-twitter"></i></a></li>
               <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
               <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
               <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            </ul>

         </div>

         <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a></div>

      </div>
      </footer>

      </React.Fragment>
  );
}

export default App;
