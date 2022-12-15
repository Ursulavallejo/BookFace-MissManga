import css from './ContactView.module.css'
import contactPhoto from '../../img/postcontact.avif'
const ContactView = () => {

    return (
        <>
            <header className={css.heroContact}/>
            <div className={css.content}>

                <h1>We are happy to hear from you!</h1>


            <div className={css.container}>
                <div className={css.contactForm}>
                    <div className={css.left}>
                        <img src={contactPhoto} alt="post image"/>
                    </div>

                    <div className={css.right}>
                        <h2>Contact us below:</h2>

                        <input id="name-field" type="text" className={css.field} placeholder=" Your Name"/>
                        <input id="email-field" type="email" className={css.field} placeholder="Your E-mail"/>
                        <textarea id="message-field" className={css.field}  placeholder="Write Message"></textarea>
                                    <button className={css.btnContact}   type="submit">Send</button>
                    </div>
                </div>
            </div>
            </div>

        </>
)
}

export default ContactView