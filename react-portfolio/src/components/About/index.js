import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import {Loader} from 'react-loaders';
const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
},[])
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'> 
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']}
                idx={15}
                />
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Praesent elementum facilisis leo vel fringilla est. Consectetur libero id faucibus nisl tincidunt. Aliquam faucibus purus in massa tempor nec feugiat. Urna porttitor rhoncus dolor purus non enim praesent. Quam lacus suspendisse faucibus interdum. Risus pretium quam vulputate dignissim suspendisse. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Sapien pellentesque habitant morbi tristique senectus et. Sed blandit libero volutpat sed cras. Sed adipiscing diam donec adipiscing tristique risus. Ullamcorper malesuada proin libero nunc consequat interdum. Condimentum id venenatis a condimentum. Lectus urna duis convallis convallis tellus. Aliquam ut porttitor leo a diam. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Imperdiet massa tincidunt nunc pulvinar.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Praesent elementum facilisis leo vel fringilla est. Consectetur libero id faucibus nisl tincidunt. Aliquam faucibus purus in massa tempor nec feugiat. Urna porttitor rhoncus dolor purus non enim praesent. Quam lacus suspendisse faucibus interdum. Risus pretium quam vulputate dignissim suspendisse. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Sapien pellentesque habitant morbi tristique senectus et. Sed blandit libero volutpat sed cras. Sed adipiscing diam donec adipiscing tristique risus. Ullamcorper malesuada proin libero nunc consequat interdum. Condimentum id venenatis a condimentum. Lectus urna duis convallis convallis tellus. Aliquam ut porttitor leo a diam. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Imperdiet massa tincidunt nunc pulvinar.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Praesent elementum facilisis leo vel fringilla est. Consectetur libero id faucibus nisl tincidunt. Aliquam faucibus purus in massa tempor nec feugiat. Urna porttitor rhoncus dolor purus non enim praesent. Quam lacus suspendisse faucibus interdum. Risus pretium quam vulputate dignissim suspendisse. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Sapien pellentesque habitant morbi tristique senectus et. Sed blandit libero volutpat sed cras. Sed adipiscing diam donec adipiscing tristique risus. Ullamcorper malesuada proin libero nunc consequat interdum. Condimentum id venenatis a condimentum. Lectus urna duis convallis convallis tellus. Aliquam ut porttitor leo a diam. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Imperdiet massa tincidunt nunc pulvinar.</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06259'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faPython} color='#28A4D9'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
    
}

export default About
