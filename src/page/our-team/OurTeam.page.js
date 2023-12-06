import {Wrapper, Employee, Photo, FullName, Position, EmployeeView, EmployeeInfo, Socials} from "./OurTeam.page.style";

import David_imgSrc from 'assets/images/team/David.webp';
import Irina_imgSrc from 'assets/images/team/Irina.webp';
import Alex_imgSrc from 'assets/images/team/Alex.webp';
import Pavlo_imgSrc from 'assets/images/team/Pavlo.webp';

import {ReactComponent as Instagram} from "assets/icons/instagram.svg";
import {ReactComponent as Facebook} from "assets/icons/facebook2.svg";
import {ReactComponent as Twitter} from "assets/icons/twitter.svg";
import {ReactComponent as LinkedIn} from "assets/icons/linkedin.svg";

import {useScrollUp} from "utils/hook";

const contributors = [
    {
        name: "David Yarmolenko",
        linkedInLink: "https://www.linkedin.com/in/david-yarmolenko-778a7a279",
        position: ["Junior UI desiner"],
        twitter: "",
        facebook: "",
        instagram: "",
        src: David_imgSrc,
    }
    ,
    {
        name: "Olexandr Chernukha",
        linkedInLink: "https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D1%87%D0%B5%D1%80%D0%BD%D1%83%D1%85%D0%B0/",
        position: ["Junior FE developer"],
        twitter: "",
        facebook: "",
        instagram: "",
        src: Alex_imgSrc,
    },
    {
        name: "Pavlo Serhiychuk",
        linkedInLink: "https://www.linkedin.com/in/pavlo-serhiichuk-160816204/",
        position: ["FE developer"],
        twitter: "",
        facebook: "",
        instagram: "",
        src: Pavlo_imgSrc
    }
    ,
    {
        name: "Irina Serhiichuk",
        linkedInLink: "https://www.linkedin.com/in/irina-serhiichuk-556886279",
        position: ["Junior QA"],
        twitter: "",
        facebook: "",
        instagram: "",
        src: Irina_imgSrc
    }
    ,
    {
        name: "Mr cat",
        linkedInLink: "",
        position: ["Owner", "Manager", "Team Leader", "Full-stack developer"],
        twitter: "",
        facebook: "",
        instagram: "",
        src: "https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-front-view-cat-on-white-background-png-image_7094909.png"
    }
]

const OurTeamPage = () => {
    useScrollUp()

    return (
        <Wrapper>
            {contributors.map(employee => {
                return (
                        <Employee key={employee.name}>
                            <EmployeeView>
                                <Photo src={employee.src}/>
                            </EmployeeView>
                            <EmployeeInfo>
                                {employee.position.map(post  => <Position key={post}>{post}</Position>)}
                                <FullName>
                                    {employee.name}
                                </FullName>
                                <Socials>
                                    {employee.instagram && <a href=""><Instagram/></a>}
                                    {employee.facebook && <a href=""><Facebook/></a>}
                                    {employee.twitter && <a href=""><Twitter/></a>}
                                    {employee.linkedInLink && <a href={employee.linkedInLink} target="_blank"><LinkedIn/></a>}
                                </Socials>
                            </EmployeeInfo>
                        </Employee>
                    )
            })}


        </Wrapper>
    );
};

export default OurTeamPage;