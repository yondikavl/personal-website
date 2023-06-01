import './App.css';
import NavigationBar from './components/NavigationBar';
import Jumbotron from './components/Jumbotron';
import SkillsCard from './components/SkillsCard';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

import HtmlLogo from './assets/images/html-5-logo.svg';
import JSLogo from './assets/images/javascript-logo.svg';
import Bootstrap from './assets/images/bootstrap-logo.svg';
import TailwindCSS from './assets/images/tailwindcss-logo.svg';
import Figma from './assets/images/figma-logo.svg';
import ReactLogo from './assets/images/react-logo.svg';

import portfolio1 from './assets/images/port-1.png';
import portfolio2 from './assets/images/port-2.png';
import portfolio3 from './assets/images/port-3.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    Aos.init();

    return (
        <div id='root'>
            <NavigationBar />
            <Jumbotron />
            <div className='Skills'>
                <div className='w-screen my-24 md:mt-0 px-6 lg:px-40 text-white'>
                    <div data-aos='zoom-in' data-aos-duration='2500' className='p-[0.025rem] bg-gray-600'></div>
                    <h2 className='text-xl lg:text-2xl mt-12 font-bold lg:mt-24 text-center text-white'>My Advantage</h2>
                    <div className='flex flex-row justify-around mt-12 lg:my-24 flex-wrap text-center'>
                        <SkillsCard text='HTML5/CSS' children={HtmlLogo} />
                        <SkillsCard text='BootstrapCSS' children={Bootstrap} />
                        <SkillsCard text='TailwindCSS' children={TailwindCSS} />
                        <SkillsCard text='JavaScript' children={JSLogo} />
                        <SkillsCard text='ReactJS' children={ReactLogo} />
                        <SkillsCard text='Figma' children={Figma} />
                    </div>
                </div>
            </div>
            <div className='Experience'>
                <div className='w-screen my-24 px-6 lg:px-40 text-white'>
                    <div data-aos='zoom-in' data-aos-duration='2500' className='p-[0.025rem] bg-gray-600'></div>
                    <h2 className='text-xl lg:text-2xl mt-12 font-bold lg:mt-24 text-center text-white'>Experience</h2>
                    <div className='flex flex-row justify-between mt-12 lg:mt-24 text-left flex-wrap'>
                        <Experience>
                            <Experience.Years children='2018' />
                            <Experience.Desc position='Vocational High Scholl Computer and Network Engineering' organization='SMK Swadhipa 2 Natar' />
                        </Experience>
                        <Experience>
                            <Experience.Years children='2021' />
                            <Experience.Desc position='Bachelor Degree of Informatics Engineering' organization='Institut Teknologi Sumatera' />
                        </Experience>
                        <Experience>
                            <Experience.Years children='2022' />
                            <Experience.Desc position='Front-End Developer Staff' organization='PPLK Itera 2022' />
                            <Experience.Desc position='Voting Staff' organization='PEMIRA KM Itera 2022' />
                        </Experience>
                        <Experience>
                            <Experience.Years children='2023' />
                            <Experience.Desc position='Staff at Ministry of Information Technology' organization='Kabinet KM Itera 2023/2024' />
                            <Experience.Desc position='Staff at Technopreneur' organization='HMIF Itera 2023/2024' />
                        </Experience>
                    </div>
                </div>
            </div>
            <div className='Porfolio'>
                <div className='w-screen my-24 px-6 lg:px-40 text-white'>
                    <div data-aos='zoom-in' data-aos-duration='2500' className='p-[0.025rem] bg-gray-600'></div>
                    <h2 className='text-xl lg:text-2xl mt-12 font-bold lg:mt-24 text-center text-white'>My Latest Projects</h2>
                    <div className='flex flex-row lg:justify-between mt-12 lg:mt-24 flex-wrap text-left justify-center'>
                        <Portfolio image={portfolio1} title='Web Design' desc='Lorem ipsum dummy project' />
                        <Portfolio image={portfolio2} title='Web Design' desc='Lorem ipsum dummy project' />
                        <Portfolio image={portfolio3} title='Web Design' desc='Lorem ipsum dummy project' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
