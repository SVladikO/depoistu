import {useEffect, useState} from "react";
import {BE_API, BE_DOMAIN} from "../../utils/config";

import {Wrapper, Header, SubHeader, Table, LedError, LedSuccess, A, SpinnerWrapper} from './Admin.style';

import {ReactComponent as LoadingIcon} from "../../icons/spinner.svg";
import {fetchData} from "../../utils/fetch";
import {RowSplitter} from "../../components";

const isObject = yourVariable => typeof yourVariable === 'object' && !Array.isArray(yourVariable) && yourVariable !== null;

function checkArrayOfObjects(objectFieldsToCheck = []) {
    return (data) => {
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
            const firstObjectKeys = Object.keys(firstObjectInArray)

            for (let i = 0; i < objectFieldsToCheck.length; i++) {
                if (!firstObjectKeys.includes(objectFieldsToCheck[i])) {
                    return {type: false, message: `First object in array doesn't contain: ${objectFieldsToCheck[i]}`};
                }
            }

        }

        return {type: true, message: "it is array of objects"};
    }
}

const COMPANY_FIELDS_TO_CHECK = ['ID', 'CUSTOMER_ID', 'NAME', 'PHONES', 'CITY', 'STREET', 'PHOTOS', 'SCHEDULE'];
const MENU_ITEM_FIELDS_TO_CHECK = ['ID', 'CATEGORY_ID', 'COMPANY_ID', 'COOKING_TIME', 'DESCRIPTION', 'IMAGE_URL', 'NAME', 'PRICE', 'SIZE'];

function ResponseRow({
                         url, validateSuccessResponse = () => {
    }, validateErrorResponse = () => {
    }
                     }) {

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
        <tr>
            <td>
                {isLoading ? <SpinnerWrapper><LoadingIcon
                    className="animated_svg"/></SpinnerWrapper> : validation && validation.type ? <LedSuccess/> :
                    <LedError/>}
            </td>
            <td>{status}</td>
            <td>
                <A href={url} target="_blank" rel="noreferrer">_link</A>
            </td>
        </tr>
    )
}

function CheckRequest({
                          urlForSuccess, urlForError, title, type, validateSuccessResponse = () => {
    }, validateErrorResponse = () => {
    }
                      }) {

    return (<tr>
            <td>{type}</td>
            <td>{title}</td>
            <td>
                <ResponseRow
                    key={urlForSuccess}
                    validateSuccessResponse={validateSuccessResponse}
                    url={urlForSuccess}
                />
            </td>
            <td>
                <ResponseRow
                    key={urlForError}
                    url={urlForError}
                    validateErrorResponse={validateErrorResponse}
                />
            </td>
        </tr>)
}


function AdminPage() {
    const [beRoutesAmount, setBeRoutesAmount] = useState('');

    const checkSuccessRequest = [<CheckRequest
        key={1}
        type={'GET'}
        title={'companies by customer id'}
        validateSuccessResponse={checkArrayOfObjects(COMPANY_FIELDS_TO_CHECK)}
        urlForSuccess={BE_API.GET_COMPANIES_BY_CUSTOMER_ID(1)}
        urlForError={BE_API.GET_COMPANIES_BY_CUSTOMER_ID()}
    />, <CheckRequest
        key={2}
        type={'GET'}
        title={'companies by company id'}
        validateSuccessResponse={checkArrayOfObjects(COMPANY_FIELDS_TO_CHECK)}
        urlForSuccess={BE_API.GET_COMPANY_BY_COMPANY_ID(1)}
        urlForError={BE_API.GET_COMPANY_BY_COMPANY_ID()}
    />, <CheckRequest
        key={3}
        type={'GET'}
        title={'companies by city'}
        validateSuccessResponse={checkArrayOfObjects(COMPANY_FIELDS_TO_CHECK)}
        urlForSuccess={BE_API.GET_COMPANIES_BY_CITY('Вінниця')}
        urlForError={BE_API.GET_COMPANIES_BY_CITY(1)}
    />, <CheckRequest
        key={4}
        type={'GET'}
        title={'menu by company id'}
        validateSuccessResponse={checkArrayOfObjects(MENU_ITEM_FIELDS_TO_CHECK)}
        urlForSuccess={BE_API.GET_MENU_ITEMS_BY_COMPANY_ID(1)}
        urlForError={BE_API.GET_MENU_ITEMS_BY_COMPANY_ID()}
    />,

    ];


    useEffect(() => {
        fetchData(BE_DOMAIN + '/api')
            .then(res => {
                let routesAmount = 0;
                res.forEach(i => routesAmount += i.routes.length)

                setBeRoutesAmount(routesAmount)
            })
    })


    const getCoverage = () => `BE has ${beRoutesAmount}/FE use ${Object.keys(BE_API).length}/Tested ${checkSuccessRequest.length}`;

    return (<Wrapper>
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