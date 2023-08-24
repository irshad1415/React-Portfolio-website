import React from 'react';
import{ BsTwitter, BsInstagram , BsLinkedin, BsGithub} from 'react-icons/bs'; 



const SocialMedio = () => {
  return (
    <div className='app__social'>
         <a href="https://www.instagram.com/irshad_abkr/">
         <div>
            <BsInstagram/>
         </div>
         </a>
         <a href="https://twitter.com/irshad_abkr">
         <div>
            <BsTwitter/>
         </div>
         </a>
         <a href="https://www.linkedin.com/in/aboobakkar-irshad-i-81245b217/">
         <div>
            <BsLinkedin/>
         </div>
         </a>
         <a href="https://github.com/irshad1415">
         <div>
            <BsGithub/>
         </div>
         </a>
    </div>
  )
}

export default SocialMedio