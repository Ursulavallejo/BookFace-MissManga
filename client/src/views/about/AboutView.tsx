import css from './AboutView.module.css'
import chris from '../../img/crisProfile.png'
import carin from '../../img/carinProfile.png'
import samantha from '../../img/samanthaProfile.png'
import ursula from '../../img/ursulaProfile.png'
import React, { Component } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";



const AboutView = () => {

    return (
        <>
            <header className={css.heroAbout}/>
            <div className={css.content}>

            <h1>Here you have information about us!! </h1>

            <div className={css.container}>
                <div className={css.aboutCard}>
                    <h3> Christoffer K.</h3>
                    <img src={chris} alt="christProfile" className={css.photo}/>
                    <div className={css.contactIcon}>
                        <a className={css.mail} href="mailto:knavinglogistic@hotmail.se"><FaEnvelopeSquare/></a>
                        <a className={css.gitHub} href="https://github.com/StillUnknown"><FaGithub/></a>
                        <a className={css.linkedIn} href="https://linkedin.com/in/christoffer-knaving-77366a21a/"><FaLinkedin/></a>
                    </div>
                </div>

                <div className={css.aboutCard}>
                    <h3> Carin W.</h3>
                    <img src={carin} alt="carinProfile" className={css.photo}/>
                    <div className={css.contactIcon}>
                        <a className={css.mail} href="mailto:carin.wood.85@gmail.com"><FaEnvelopeSquare/></a>
                        <a className={css.gitHub} href="https://github.com/CarinWood"><FaGithub/></a>
                        <a className={css.linkedIn} href="https://www.linkedin.com/in/carin-wood/"><FaLinkedin/></a>
                    </div>

                </div>

                <div className={css.aboutCard}>
                    <h3> Samantha TH.</h3>
                    <img src={samantha} alt="samanthaProfile" className={css.photo}/>
                    <div className={css.contactIcon}>
                        <a className={css.mail} href="mailto:samanthathee0908@gmail.com"><FaEnvelopeSquare/></a>
                        <a className={css.gitHub} href="https://github.com/samthe0908"><FaGithub/></a>
                        <a className={css.linkedIn} href="https://www.linkedin.com/in/samantha-theerawat-b59438100/"><FaLinkedin/></a>
                    </div>

                </div>

                <div className={css.aboutCard}>
                    <h3> Ursula V.</h3>
                    <img src={ursula} alt="ursulaProfile" className={css.photo}/>
                    <div className={css.contactIcon}>
                        <a className={css.mail} href="mailto:ursulavallejo@gmail.com"><FaEnvelopeSquare/></a>
                        <a className={css.gitHub} href="https://github.com/Ursulavallejo"><FaGithub/></a>
                        <a className={css.linkedIn} href="https://www.linkedin.com/in/ursula-vallejo-janne-56027977/"><FaLinkedin/></a>
                    </div>

                </div>

            </div>
        </div>




        </>

    )
}

export default AboutView