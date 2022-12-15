import css from './InfoView.module.css'
import contactPhoto from "../../img/postcontact.avif";

const InfoView = () => {

    return (
        < >
            <header className={css.heroInfo}/>
            <div className={css.content}>

                <h1 className={css.headInfo}>Here you have information about Miss MANGA!! </h1>

                <div className={css.container}>
                    <div className={css.contactForm}>
                       <h1 className={css.headInfo}>We create this space for you!</h1>
                        <p >We believe that is important to have a space where you can find friends with same interests! </p>
                        <p>That's why Miss Manga only accept female members with same interest in MANGA culture!</p>
                        <p>A space where you feel safe and can enjoy with friends without annoying contacts!</p>
                        <br/>
                        <h3 >Enjoy!</h3>
                    </div>
                </div>
            </div>


        </>

    )
}

export default InfoView