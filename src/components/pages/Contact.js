function Contact() {
    return (
        <div className="contact-page">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">We would love to hear from you! Feel free to reach out with any questions or comments.</p>
            <form className="contact-form">
                <label htmlFor="name" className="contact-label">Name:</label>
                <input type="text" id="name" className="contact-input" placeholder="Your Name" />

                <label htmlFor="email" className="contact-label">Email:</label>
                <input type="email" id="email" className="contact-input" placeholder="Your Email" />

                <label htmlFor="message" className="contact-label">Message:</label>
                <textarea id="message" className="contact-textarea" placeholder="Your Message"></textarea>

                <button type="submit" className="contact-button">Submit</button>
            </form>
        </div>
    );
}

export default Contact;