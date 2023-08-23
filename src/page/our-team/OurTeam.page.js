import {Wrapper, Employee, Photo, FullName, Position} from "./OurTeam.page.style";
import Vlad_imgSrc from '../../assets/images/team/Vlad.png';
import David_imgSrc from '../../assets/images/team/David.png';
import Irina_imgSrc from '../../assets/images/team/Irina.png';
import Alex_imgSrc from '../../assets/images/team/Alex.png';
import {useScrollUp} from "../../utils/hook";
import {ReactComponent as LinkIcon} from '../../assets/icons/link.svg';

const team = [
    {
        name: "David Yarmolenko",
        linkedInLink: "https://www.linkedin.com/in/david-yarmolenko-778a7a279"
    }
    ,
    {
        name: "Alexandr Chernukha",
        linkedInLink: "https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D1%87%D0%B5%D1%80%D0%BD%D1%83%D1%85%D0%B0/"
    }
    ,
    {
        name: "Irina Serhiichuk",
        linkedInLink: "https://www.linkedin.com/in/irina-serhiichuk-556886279"
    }
    ,
    {
        name: "Vlad Serhiychuk",
        linkedInLink: "https://www.linkedin.com/in/vlad-serhiychuk-b753b7188"
    }
]

const OurTeamPage = () => {
    useScrollUp()

    const getLink = ({name, linkedInLink}) => (
        <FullName>
            <a href={linkedInLink} target="_blank" rel="noopener">
                {name}
            </a>
            <LinkIcon/>
        </FullName>
    )

    return (
        <Wrapper>
            <Employee>
                <Photo src={David_imgSrc}/>
                <Position>Junior UI desiner</Position>
                {getLink(team[0])}
            </Employee>
            <Employee>
                <Photo src={Alex_imgSrc}/>
                <Position>Junior FE developer</Position>
                {getLink(team[1])}
            </Employee>
            <Employee>
                <Photo src={Irina_imgSrc}/>
                <Position>Junior QA</Position>
                {getLink(team[2])}
            </Employee>
            <Employee>
                <Photo src={Vlad_imgSrc}/>
                <Position>Team Leader</Position>
                <Position>Full-stack developer</Position>
                {getLink(team[3])}
            </Employee>
        </Wrapper>
    );
};

export default OurTeamPage;