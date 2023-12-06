import React, {useEffect, useState} from "react";

import {
    Wrapper,
    Table,
    LedError,
    LedSuccess,
    StyledLink,
    SpinnerWrapper,
    TD,
    GroupTitle,
} from './Admin.style';

import {ReactComponent as LoadingIcon} from "assets/icons/spinner.svg";
import {NavigationHeader, RowSplitter, SecondaryButton} from "components";
import {fetchData} from "utils/fetch";

import {BE_API} from 'utils/fetch'
import {BE_DOMAIN} from "utils/config";
import {checkAccess} from "utils/security";
import {LOCAL_STORAGE_KEY} from "../../utils/localStorage";
import ApiPage from "./Api.page";
import ComponentsPage from "./Components.page";

function AdminPage() {
    const [dbMode, setDBMode] = useState('')

    checkAccess(LOCAL_STORAGE_KEY.IS_ADMIN)

    useEffect(() => {
        fetchData(`${BE_DOMAIN}/db-mode`)
            .then(res => setDBMode(res.body.mode.toUpperCase()))
    })

    return (
        <Wrapper>
            <NavigationHeader title={"ADMIN PAGE"} backUrl={''}/>
            <h3 className={'text_center'}>DB: {dbMode}</h3>
            <StyledLink href={BE_DOMAIN} target="_blank" rel="noreferrer">{BE_DOMAIN}</StyledLink>
            <RowSplitter height={'10px'}/>
            <SecondaryButton
                isWide
                withPadding
                clickHandler={
                    () => {
                        localStorage.clear()
                        window.location.href = window.location.origin
                    }
                }>
                Clear localStorage
            </SecondaryButton>
            <RowSplitter height={'10px'}/>
            <GroupTitle>Test be request</GroupTitle>
            <Table>
                <tbody>{checkSuccessRequest}</tbody>
            </Table>
            <RowSplitter height='40px'/>

            <RowSplitter height='40px'/>
            <GroupTitle>BE API</GroupTitle>
            <ApiPage/>
            <GroupTitle>COMPONENTS</GroupTitle>
            <ComponentsPage/>
            <RowSplitter height='20px'/>
        </Wrapper>
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