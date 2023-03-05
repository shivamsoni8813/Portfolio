import './GetInTouch.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const GetInTouch = () => {
    const form = useRef();
    let [success, setSuccess] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bho6326', 'template_1untldh', form.current, 'bB9ftNyWALiZHjZfz')
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
                setTimeout(() => {
                    window.location.reload()
                }, 2000)
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div>
            <div className="touchContainer d-flex" id='GetInTouch' data-aos="fade-down">

                <div className="left">
                    <div className="leftContainer">

                        <h2 className='upperHeading'>Get In Touch</h2>
                        <h1 className='nameHeading'>Contact Me</h1>
                    </div>
                </div>
                <div className="right">

                    <h1 className='text-center fw-bold'>Fill The Details</h1>
                    {
                        success && <div class="alert alert-warning" role="alert">
                            Thank You ! Your Message Has Been Sent.
                        </div>
                    }
                    <form ref={form} onSubmit={sendEmail}>

                        <label htmlFor="floatingInput">Name</label>
                        <div className="form-floating mb-3 my-3">
                            <input type="text" className="form-control" name="user_name" id="floatingInput" placeholder="Enter The Name" />
                        </div>
                        <label htmlFor="floatingInput">Email address</label>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" name="user_email" id="floatingInput" placeholder="name@example.com" />
                        </div>
                        <label htmlFor="floatingPassword">Write Some Message</label>
                        <div className="form-floating">
                            <input type="text" className="form-control" name="message" id="floatingPassword" placeholder="Message" />
                        </div>
                        <button className='btn btn-warning sendBtn mt-4 text-center'>{success ? <img src="https://i.pinimg.com/originals/00/3d/1b/003d1b70e30e7be2c8d3eb3e92fac2bf.gif" className='sendImg' alt="" /> : "Send"}</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default GetInTouch
