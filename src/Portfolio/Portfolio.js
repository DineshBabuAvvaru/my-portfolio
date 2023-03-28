import React, {useState} from 'react'
import './Portfolio.css';
import axios from 'axios'; 

const Portfolio = () => {
    const [data, setData] = useState({
        fullname:"",
        email:"",
        phone:""
    })
    
    const {fullname, email, phone} = data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const submitHandler = e => {
        e.preventDefault();
        axios.post('https://portfolio-2d9b3-default-rtdb.firebaseio.com/portfolio.json',
        data).then(()=> alert("Submitted Successfully"))  
    }

  return (
        <>
      <div className="hero pb-3"> 
        <nav className="navbar navbar-expand-lg navbar-dark   pt-3">
            <a className="navbar-brand pl-5" href="#foodWithLove">
                <h2 className="logo">Portfo<span>lio</span></h2>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item ">
                        <a className="nav-link" id="navItem1" href="##">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="navItem2" href="#About-section">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="navItem4" href="#skill">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="navItem5" href="#contact-me">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div className="container main-hypen ">
            <div className="row">
                <div className="col-12">
                    <div className="content">
                        <h4>Hello, my name is</h4>
                        <h1> <span> Dinesh Babu 
                            </span></h1>
                        <h3>I'am a Web Developer.</h3>
                        <div className="newslatter">
                            <form> 
                                <input type="email" name="email" id="mail" placeholder="Enter Your Email"  />
                                <input type="submit" name="submit" id="onClick" value="Lets Start" href="footer" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr />
     {/* About Us  */}
    <div>
    <div className="pt-5 about text-center" id="About-section">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img src="1661776979349.jpg" alt = "" className="image-style w-75" />
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="about-text pt-3">
                        <h2>About Me</h2>
                        <h5>Developer <span>& Designer</span></h5>
                        <p>I am a web developer. I can provide clean code and pixel perfect design. 
                            I also make the website more interactive with web animations.
                            A responsive design makes your website accessible to all users, 
                            regardless of their device.</p>
                        <button className="my-button">Let's Talk</button>
                    </div>
                </div>
            </div>
            </div> 
        </div>
        <hr/>
      {/* my skills   */}

    <div className="pt-2 contact-me pb-5 shadow-lg" id="skill">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center pb-5">
                    <h1 className="title">My Skills </h1>
                </div>
                <div className="col-12">
                    <div className=" text-center">
                        <marquee className="scrol">
                            <img className="sizing" src="https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw" alt="" />

                            <img className="sizing ezlsd" src="http://x7d4c5z5.stackpathcdn.com/wp-content/uploads/2014/10/css3.jpg" alt="" />

                            <img className="sizing" src="https://pbs.twimg.com/profile_images/1273081551354396672/-Tzadxix_400x400.jpg" alt="" />

                            <img className="sizing" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrC1wJORhjBI7hHmCBJWBwinpnjfVwxlyvlwIhIWKTpdn1X62aOD6U6VUUoCn1k7YhZM&usqp=CAU" alt="" />
                        </marquee>
                    </div>
                </div>
            </div>
        </div>
    </div>
     {/* hire me */}

    <div className="pt-5 contact-me pb-5 shadow-lg">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className=" text-center">
                        <p>Let Me Get You A Beautiful Website.</p>
                        <a className="button-two" href="##">Ping Me</a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr/>

    {/* footer */}
        <div className="container-foot-section" id="contact-me">
        <h1 className="display-2"> CONTACT </h1>
        <p className="paragraph-2"> chirala, Andhrapradesh, India </p>
        <form action="#nowhere">
            <div className="form-group">
                <label htmlFor="Name"></label>
                <input type="text" className="form-control" id="Name" name="fullname" placeholder="Name" onChange={changeHandler} value={fullname} />
            </div>
            <div className="form-group">
                <label htmlFor="Phone"></label>
                <input type="number" className="form-control" id="Phone" name="phone" placeholder="Phone" onChange={changeHandler} value={phone} />
            </div>
            <div className="form-group">
                <label htmlFor="Email"></label>
                <input type="email" className="form-control" id="Email" name="email" placeholder="Email" onChange={changeHandler} value={email} />
            </div>
            <button className="btn btn-dark" onClick={submitHandler}> Contact Me </button> 
        </form>
    
    <h1 className="footerheading text-center pt-3 pb-2">
        Created by <span className="specialname">Dinesh Babu</span> | all rights reserved...!
    </h1>
</div>
</div>
    </>
    )
} 


export default Portfolio; 
