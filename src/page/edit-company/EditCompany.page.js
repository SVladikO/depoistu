import {Wrapper,EditBar,CompanyEditSection,EditButton} from "./EditCompany.page.style";
import {Institution} from "../../components";
import {PrimaryWideButton} from "../../components";
import {ReactComponent as ShowEyeIcon} from "../../icons/show-eye.svg";
import {ReactComponent as DeleteIcon} from "../../icons/white_busket.svg";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";

const EditCompanyPage = ({company}) => {
    company= {PHOTOS: "https://topclub.ua/uploads/images/places/371-200/_0H8l4_aCp-LNAn-Z-0IzeGKpoRn2Qd-.jpg, https://afisha.bigmir.net/i/49/23/90/7/4923907/gallery/a9f2cb111d1abe2b2b8fe5b46db2ac54-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg, https://afisha.bigmir.net/i/23/51/30/9/2351309/gallery/15b8175dc297f8a58d9de22e77b7b256-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg", NAME: 'Domono', CITY: 'Kyiv', STREET: 'Davidusk 15.',}
    return (
        <Wrapper>
            {company ? <CompanyEditSection>
                <Institution company={company}/>
                <EditBar>
                    <EditButton><DeleteIcon/></EditButton>
                    <EditButton><ShowEyeIcon/></EditButton>
                    <EditButton><EditIcon/></EditButton>
                    <EditButton><EditIcon/><span>Menu</span></EditButton>
                </EditBar>
            </CompanyEditSection> : null}
            <PrimaryWideButton>+ Add new company</PrimaryWideButton>
        </Wrapper>
    );
};

export default EditCompanyPage;