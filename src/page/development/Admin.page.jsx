import React, {useEffect, useState} from "react";

import {
    Wrapper,
    LinksWrapper,
    Table,
    LedError,
    LedSuccess,
    StyledLink,
    SpinnerWrapper,
    TD,
    GroupTitle,
    GroupTitle2
} from './Admin.style';

import {ReactComponent as LoadingIcon} from "assets/icons/spinner.svg";
import {NavigationHeader, PrimaryButton, RowSplitter, SecondaryButton} from "components";
import {fetchData} from "utils/fetch";

import {BE_API} from 'utils/fetch'
import {AVAILABLE_DOMAINS, BE_DOMAIN} from "utils/config";
import {checkAccess} from "utils/security";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import ApiPage from "./Api.page";
import ComponentsPage from "./Components.page";
import {CATEGORY_BAR, CATEGORY_DESSERTS, CATEGORY_HOT_DRINKS, CATEGORY_KITCHEN} from "../../utils/category";

function AdminPage() {
    const [dbMode, setDBMode] = useState('')


    checkAccess(LOCAL_STORAGE_KEY.IS_ADMIN)


    useEffect(() => {
        fetchData(`${BE_DOMAIN}/db-mode`)
            .then(res => setDBMode(res.body.mode.toUpperCase()))
    })

    const singOutAdmin = () => {
        LocalStorage.remove(LOCAL_STORAGE_KEY.IS_ADMIN);
    }

    return (
        <Wrapper>
            <NavigationHeader title={"ADMIN PAGE"} backUrl={''}/>
            <h3 className={'text_center'}>DB: {dbMode}</h3>
            <StyledLink href={BE_DOMAIN} target="_blank" rel="noreferrer">{BE_DOMAIN}</StyledLink>
            <RowSplitter height={'10px'} />
            <SecondaryButton isWide withPadding clickHandler={() => localStorage.clear()}>Clear localStorage</SecondaryButton>
            <RowSplitter height={'10px'} />
            <PrimaryButton isWide withPadding clickHandler={singOutAdmin}>Sing out admin</PrimaryButton>
            <GroupTitle>Test be request</GroupTitle>
            <Table>
                <tbody>{checkSuccessRequest}</tbody>
            </Table>
            <RowSplitter height='40px'/>
            <GroupTitle>Domains mapping</GroupTitle>
            <AllLinks/>
            <RowSplitter height='40px'/>
            <GroupTitle>BE API</GroupTitle>
            <ApiPage/>
            <GroupTitle>COMPONENTS</GroupTitle>
            <ComponentsPage/>
            <RowSplitter height='20px'/>
            <GroupTitle>All food categories</GroupTitle>
            <AllCategories/>
        </Wrapper>
    )
}


const AllCategories = () => {
    const render = from =>
        <table style={{margin: 'auto'}}>
            <tbody>
            {from.map(
                category => (
                    <tr>
                        <td style={{padding: '4px'}}>{category.id}</td>
                        <td style={{padding: '4px'}}>{category.title.en}</td>
                        <td style={{padding: '4px'}}>{category.title.ua}</td>
                        <td style={{padding: '4px'}}>{category.measurement.en}</td>
                        <td style={{padding: '4px'}}>{category.measurement.ua}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    return (
        <>
            <GroupTitle2>CATEGORY_KITCHEN</GroupTitle2>
            {render(CATEGORY_KITCHEN)}
            <GroupTitle2>CATEGORY_DESSERTS</GroupTitle2>
                {render(CATEGORY_DESSERTS)}
            <GroupTitle2>CATEGORY_HOT_DRINKS</GroupTitle2>
                {render(CATEGORY_HOT_DRINKS)}
            <GroupTitle2>CATEGORY_BAR</GroupTitle2>
                {render(CATEGORY_BAR)}
        </>
    )
}
const AllLinks = () => {


    return (
        <LinksWrapper>

            <table>
                <thead>
                <tr>
                    <td className={'text_center'}>FE</td>
                    <td className={'text_center'}>BE</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><StyledLink href="https://depoistu.com">PRODUCTION</StyledLink></td>
                    <td><StyledLink
                        href={AVAILABLE_DOMAINS[3].url}>{AVAILABLE_DOMAINS[3].name.toUpperCase()}</StyledLink></td>
                </tr>
                <tr>
                    <td><StyledLink href="https://depoistu-stage.onrender.com">STAGE</StyledLink></td>
                    <td><StyledLink
                        href={AVAILABLE_DOMAINS[2].url}>{AVAILABLE_DOMAINS[2].name.toUpperCase()}</StyledLink></td>
                </tr>
                <tr>
                    <td>
                        <StyledLink href="https://depoistu-develop.onrender.com">DEVELOP</StyledLink>
                    </td>
                    <td>
                        <StyledLink
                            href={AVAILABLE_DOMAINS[1].url}>{AVAILABLE_DOMAINS[1].name.toUpperCase()}</StyledLink>
                    </td>
                </tr>
                </tbody>
            </table>
        </LinksWrapper>
    )
}

const CheckRequest = ({type, title, url,}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [status, setStatus] = useState('')
    const [response, setResponse] = useState('')
    const [errorResponse, setErrorResponse] = useState('');
    const [validateResponse, setValidation] = useState({});

    useEffect(() => {
        fetch(decodeURIComponent(url))
            .then(res => {
                setStatus(res.status)
                return res.json()
            })
            .then(res => {
                setResponse(res)
                setValidation(true);
            })
            .catch(res => {
                setStatus(res.status)
                setValidation(false);
                setErrorResponse(res);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [url])

    return (
        <>
            <tr>
                <td>
                    {isLoading
                        ? <SpinnerWrapper>
                            <LoadingIcon className="animated_svg"/>
                        </SpinnerWrapper>
                        : validateResponse
                            ? <LedSuccess/>
                            : <LedError/>
                    }
                </td>
                <td>{status}</td>
                <td>
                    <StyledLink href={url} target="_blank" rel="noreferrer">{type}: {title}</StyledLink>
                </td>

            </tr>
            <tr>
                <TD colSpan={3} style={{color: 'green'}}>
                    {response && response.toString()}
                </TD>
            </tr>
            <tr>
                <TD colSpan={3} style={{color: 'red'}}>
                    {errorResponse && errorResponse.toString()}
                </TD>
            </tr>
        </>
    )
}

const checkSuccessRequest = [
    <CheckRequest
        key={1}
        type='GET'
        title='Avaliable cities'
        url={BE_API.COMPANY.GET_AVAILABLE_CITIES()}
    />,
    <CheckRequest
        key={2}
        type='GET'
        title='company by companyId'
        url={BE_API.COMPANY.GET_BY_COMPANY_ID(1)}
    />,
];

export default AdminPage;