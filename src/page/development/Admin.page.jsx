import {useEffect, useState} from "react";

import {Wrapper, Header, SubHeader, Table, LedError, LedSuccess, A, SpinnerWrapper} from './Admin.style';

import {ReactComponent as LoadingIcon} from "assets/icons/spinner.svg";
import {RowSplitter} from "components";
import {fetchData} from "utils/fetch";

import {BE_API} from 'utils/fetch'
import {BE_DOMAIN} from "utils/config";

const COMPANY_FIELDS_TO_CHECK = ['ID', 'CUSTOMER_ID', 'NAME', 'PHONE', 'CITY_ID', 'STREET', 'PHOTOS', 'SCHEDULE'];
const MENU_ITEM_FIELDS_TO_CHECK = ['ID', 'CATEGORY_ID', 'COMPANY_ID', 'COOKING_TIME', 'DESCRIPTION', 'IMAGE_URL', 'NAME', 'PRICE', 'SIZE'];

const isObject = yourVariable => typeof yourVariable === 'object' && !Array.isArray(yourVariable) && yourVariable !== null;

const checkArrayOfObjects = (objectFieldsToCheck = []) => data => {
    if (!Array.isArray(data)) {
        return {type: false, message: "it isn't an array"};
    }

    if (!data.length) {
        return {type: false, message: "it is empty an array"};
    }

    const firstObjectInArray = data[0];

    if (!isObject(firstObjectInArray)) {
        return {type: false, message: "it isn't first object in array"};
    }

    if (objectFieldsToCheck.length) {
        const firstObjectKeys = Object.keys(firstObjectInArray);

        for (let i = 0; i < objectFieldsToCheck.length; i++) {
            if (!firstObjectKeys.includes(objectFieldsToCheck[i])) {
                return {type: false, message: `First object in array doesn't contain: ${objectFieldsToCheck[i]}`};
            }
        }
    }

    return {type: true, message: "it is array of objects"};
}

function Row({url, validateSuccessResponse, validateErrorResponse}) {

    const [isLoading, setIsLoading] = useState(true);
    const [status, setStatus] = useState('')
    const [response, setResponse] = useState('')
    const [errorResponse, setErrorResponse] = useState('');
    const [validation, setValidation] = useState({});

    useEffect(() => {
        fetch(decodeURIComponent(url))
            .then(res => {
                setStatus(res.status);
                return res.json();
            })
            .then(res => {
                setIsLoading(false);
                setValidation(validateSuccessResponse(res));
                setResponse(res);
            })
            .catch(res => {
                setIsLoading(false);
                setValidation(validateErrorResponse(res));
                setErrorResponse(res);
            });
    }, [url])

    return (
        <table>
            <tbody>
            <tr>
                <td>
                    {isLoading
                        ? <SpinnerWrapper>
                            <LoadingIcon className="animated_svg"/>
                        </SpinnerWrapper>
                        : validation && validation.type
                            ? <LedSuccess/>
                            : <LedError/>
                    }
                    <span>{!validation.type && validation.message}</span>
                </td>
                <td>{status}</td>
                <td>
                    <A href={url} target="_blank" rel="noreferrer">_link</A>
                </td>
            </tr>
            </tbody>
        </table>
    )
}

const CheckRequest = ({
                          type,
                          title,
                          urlForError,
                          urlForSuccess,
                          validateErrorResponse,
                          validateSuccessResponse,
                      }) => (
    <tr>
        <td>{type}</td>
        <td>{title}</td>
        <td>
            <Row
                key={urlForSuccess}
                validateSuccessResponse={validateSuccessResponse}
                url={urlForSuccess}
            />
        </td>
        <td>
            <Row
                key={urlForError}
                url={urlForError}
                validateErrorResponse={validateErrorResponse}
            />
        </td>
    </tr>
)

const checkSuccessRequest = [
    <CheckRequest
        key={1}
        type='GET'
        title='companies by customer id'
        validateSuccessResponse={checkArrayOfObjects(COMPANY_FIELDS_TO_CHECK)}
        urlForSuccess={BE_API.COMPANY.GET_BY_CUSTOMER_ID(1)}
        urlForError={BE_API.COMPANY.GET_BY_CUSTOMER_ID()}
    />,
    <CheckRequest
        key={2}
        type='GET'
        title='companies by company id'
        validateSuccessResponse={checkArrayOfObjects(COMPANY_FIELDS_TO_CHECK)}
        urlForSuccess={BE_API.COMPANY.GET_BY_COMPANY_ID(2)}
        urlForError={BE_API.COMPANY.GET_BY_COMPANY_ID()}
    />,
    <CheckRequest
        key={3}
        type='GET'
        title='companies by city'
        validateSuccessResponse={checkArrayOfObjects(COMPANY_FIELDS_TO_CHECK)}
        urlForSuccess={BE_API.COMPANY.GET_BY_CITY_ID('204')}
        urlForError={BE_API.COMPANY.GET_BY_CITY_ID(1)}
    />,
    <CheckRequest
        key={4}
        type='GET'
        title='menu by company id'
        validateSuccessResponse={checkArrayOfObjects(MENU_ITEM_FIELDS_TO_CHECK)}
        urlForSuccess={BE_API.MENU_ITEM.GET_BY_COMPANY_ID(1)}
        urlForError={BE_API.MENU_ITEM.GET_BY_COMPANY_ID()}
    />
];

function AdminPage() {
    const [beRoutesAmount, setBeRoutesAmount] = useState('');

    useEffect(() => {
        fetchData(BE_DOMAIN + '/api')
            .then(res => {
                let routesAmount = 0;
                res.body.forEach(i => routesAmount += i.routes.length)
                setBeRoutesAmount(routesAmount)
            })
    })

    const getCoverage = () => `BE has ${beRoutesAmount}/FE use ${Object.keys(BE_API).length}/Tested ${checkSuccessRequest.length}`;

    return (
        <Wrapper>
            <Header>TEST BE DOMAIN</Header>
            <SubHeader>
                <A href={BE_DOMAIN} target="_blank" rel="noreferrer">{BE_DOMAIN}</A>
            </SubHeader>
            <SubHeader>{getCoverage()}</SubHeader>
            <RowSplitter height='20px'/>
            <Table>
                <thead>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Expect success <RowSplitter height='10px'/></td>
                    <td>Expect error <RowSplitter height='10px'/></td>
                </tr>
                </thead>
                <tbody>{checkSuccessRequest}</tbody>
            </Table>
            <RowSplitter height='20px'/>
        </Wrapper>)
}

export default AdminPage;