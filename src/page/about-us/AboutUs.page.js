import React from 'react';
import {Wrapper,Employee, Photo, FullName, Position} from "./AboutUs.page.style";
import Boss from '../../images/Vlad.jfif';
import David from '../../images/David.png';
import Irina from '../../images/Irina.jpg';
import Alex from '../../images/Alex.JPG';


const AboutUsPage = () => {
    return (
        <Wrapper>
            <Employee>
                <Photo src={Boss}/>
                <Position>Team Leader</Position>
                <Position>Full-stack developer</Position>
                <FullName>
                    <a href="https://www.linkedin.com/in/vlad-serhiychuk-b753b7188/" target="_blank">
                        Vlad Serhiychuk
                    </a>
                </FullName>
            </Employee>
            <Employee>
                <Photo src={David}/>
                <Position>Junior UI desiner</Position>
                <FullName>
                    <a href="https://www.linkedin.com/in/david-yarmolenko-778a7a279/" target="_blank">
                        David Yarmolenko
                    </a>
                </FullName>
            </Employee>
            <Employee>
                <Photo src={Irina}/>
                <Position>Junior QA</Position>
                <FullName>
                    <a href="https://www.linkedin.com/in/irina-serhiichuk-556886279" target="_blank">
                        Irina Serhiichuk
                    </a>
                </FullName>
            </Employee>
            <Employee>
                <Photo src={Alex}/>
                <Position>Junior FE developer</Position>
                <FullName>
                    <a href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D1%87%D0%B5%D1%80%D0%BD%D1%83%D1%85%D0%B0/" target="_blank">
                        Alexandr Chernukha
                    </a>
                </FullName>
            </Employee>
        </Wrapper>
    );
};

export default AboutUsPage;