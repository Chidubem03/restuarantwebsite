import RitasContact from './Images/ritarestuarant.jpg';

const Contact = () => {
    return ( 
        <div className="contact">
            <div className="leftside" 
            style={{ backgroundImage: `url(${RitasContact})`}} > </div>
            <div className="rightside">
                <h1>Contact Us</h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" 
                    name='name'
                    placeholder='Enter Full Name...' 
                    required/>
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                    name='email' 
                    placeholder='Enter Email Address...' 
                    required/>
                    <label htmlFor="message">Message</label>
                    <textarea row="6" 
                    name='message' 
                    placeholder='Enter Message...' 
                    required></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </div>

        </div>
     );
}
 
export default Contact;