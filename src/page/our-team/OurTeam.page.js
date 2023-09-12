import {Wrapper, Employee, Photo, FullName, Position, EmployeeView, EmployeeInfo, Border, Socials} from "./OurTeam.page.style";
import Vlad_imgSrc from 'assets/images/team/Vlad.png';
import David_imgSrc from 'assets/images/team/David.png';
import Irina_imgSrc from 'assets/images/team/Irina.png';
import Alex_imgSrc from 'assets/images/team/Alex.png';
import {useScrollUp} from "utils/hook";
import {ReactComponent as Instagram} from "../../assets/icons/instagram.svg";
import {ReactComponent as Facebook} from "../../assets/icons/facebook2.svg";
import {ReactComponent as Twitter} from "../../assets/icons/twitter.svg";

const team = [
    {
        name: "David Yarmolenko",
        linkedInLink: "https://www.linkedin.com/in/david-yarmolenko-778a7a279",
        twitter: "",
        facebook: "",
        instagram: ""
    }
    ,
    {
        name: "Olexandr Chernukha",
        linkedInLink: "https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D1%87%D0%B5%D1%80%D0%BD%D1%83%D1%85%D0%B0/",
        twitter: "",
        facebook: "",
        instagram: ""
    }
    ,
    {
        name: "Irina Serhiichuk",
        linkedInLink: "https://www.linkedin.com/in/irina-serhiichuk-556886279",
        twitter: "",
        facebook: "",
        instagram: ""
    }
    ,
    {
        name: "Vlad Serhiychuk",
        linkedInLink: "https://www.linkedin.com/in/vlad-serhiychuk-b753b7188",
        twitter: "",
        facebook: "",
        instagram: ""
    }
]

const OurTeamPage = () => {
    useScrollUp()

    return (
        <Wrapper>
            <Employee>
                <EmployeeView>
                    <Photo src={David_imgSrc}/>
                </EmployeeView>
                <EmployeeInfo>
                    <Position>Junior UI desiner</Position>
                    <FullName>
                        <a href={team[0].linkedInLink} target="_blank" rel="noopener">
                            David Yarmolenko
                        </a>
                    </FullName>
                    <Socials>
                        <a href="">
                            <Instagram/>
                        </a>
                        <a href="">
                            <Facebook/>
                        </a>
                        <a href="">
                            <Twitter/>
                        </a>
                    </Socials>
                </EmployeeInfo>
            </Employee>
            <Border/>
            <Employee>
                <EmployeeView>
                    <Photo src={Alex_imgSrc}/>
                </EmployeeView>
               <EmployeeInfo>
                   <Position>Junior FE developer</Position>
                   <FullName>
                       <a href={team[1].linkedInLink} target="_blank" rel="noopener">
                           Olexandr Chernukha
                       </a>
                   </FullName>
                   <Socials>
                       <a href="">
                           <Instagram/>
                       </a>
                       <a href="">
                           <Facebook/>
                       </a>
                       <a href="">
                           <Twitter/>
                       </a>
                   </Socials>
               </EmployeeInfo>
            </Employee>
            <Border/>
            <Employee>
                <EmployeeView>
                    <Photo src={Irina_imgSrc}/>
                </EmployeeView>
                <EmployeeInfo>
                    <Position>Junior QA</Position>
                    <FullName>
                        <a href={team[2].linkedInLink} target="_blank" rel="noopener">
                            Irina Serhiichuk
                        </a>
                    </FullName>
                    <Socials>
                        <a href="">
                            <Instagram/>
                        </a>
                        <a href="">
                            <Facebook/>
                        </a>
                        <a href="">
                            <Twitter/>
                        </a>
                    </Socials>
                </EmployeeInfo>
            </Employee>
            <Border/>
            <Employee>
                <EmployeeView>
                    <Photo src={Vlad_imgSrc}/>
                </EmployeeView>
                <EmployeeInfo>
                    <Position>Team Leader</Position>
                    <Position>Full-stack developer</Position>
                    <FullName>
                        <a href={team[3].linkedInLink} target="_blank" rel="noopener">
                            Vlad Serhiychuk
                        </a>
                    </FullName>
                    <Socials>
                        <a href="">
                            <Instagram/>
                        </a>
                        <a href="">
                            <Facebook/>
                        </a>
                        <a href="">
                            <Twitter/>
                        </a>
                    </Socials>
                </EmployeeInfo>
            </Employee>
            <Border/>
        </Wrapper>
    );
};

export default OurTeamPage;