import {useEffect, useState} from "react";
import {BE_API, BE_DOMAIN} from "../../utils/config";

import {LedError, Status, LedSuccess, RequestRow} from './Admin.style';
import {ReactComponent as LoadingIcon} from "../../icons/spinner.svg";

function CheckRequest({
                          url,
                          title,
                          isType,
                          validateSuccessResponse = () => {
                          },
                          validateErrorResponse = () => {
                          }
                      }) {
    //isType - true mean check success response, false mean check error response

    const [isLoading, setIsLoading] = useState(true);
    const [status, setStatus] = useState('')
    const [response, setResponse] = useState('')
    const [errorResponse, setErrorResponse] = useState('');
    const [validation, setValidation] = useState({});

    useEffect(() => {
        console.log(url);
        fetch(url)
            .then(res => {
                setStatus(res.status);
                return res.json();
            })
            .then(res => {
                setIsLoading(false);
                setValidation(validateSuccessResponse(res));
                console.log('S res: ', res);
                setResponse(res);
            })
            .catch(res => {
                setIsLoading(false);
                setValidation(validateErrorResponse(res));
                setErrorResponse(res);
            });
    }, [url])

    return (
        <div>
            <RequestRow>
                {isLoading
                    ? <LoadingIcon className="animated_svg"/>
                    : isType && validation && validation.type
                        ? <LedSuccess/>
                        : <LedError/>
                }
                <Status>{status}</Status>
                <span>{title}</span>
                <a href={url} target="_blank" rel="noreferrer">_link</a>
            </RequestRow>
            <div>

            </div>
        </div>
    )
}

const isObject = yourVariable =>
    typeof yourVariable === 'object' &&
    !Array.isArray(yourVariable) &&
    yourVariable !== null;

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

function AdminPage() {
    const checkSuccessRequest = [
        <CheckRequest
            key={1}
            isType title={'GET companies by customer id'}
            validateSuccessResponse={checkArrayOfObjects(COMPANY_FIELDS_TO_CHECK)}
            url={BE_API.GET_COMPANIES_BY_CUSTOMER_ID(1)}
        />,
        <CheckRequest
            key={2}
            isType
            title={'GET company by company id'}
            validateSuccessResponse={checkArrayOfObjects(COMPANY_FIELDS_TO_CHECK)}
            url={BE_API.GET_COMPANY_BY_COMPANY_ID(1)}
        />,
        <CheckRequest
            key={3}
            isType
            title={'GET menu by company id'}
            validateSuccessResponse={checkArrayOfObjects(MENU_ITEM_FIELDS_TO_CHECK)}
            url={BE_API.GET_MENU_ITEMS_BY_COMPANY_ID(1)}
        />,
    ];

    /**
     * We multiply on 2 because we should handle minimum two call one with normal data and one with broken
     * to better know how do we handle error responses too.
     */
    const getCoverage = () => `${Object.keys(BE_API).length * 2}/${checkSuccessRequest.length}`;

    return (
        <div>
            <div>{BE_DOMAIN}</div>
            <div>API call coverage {getCoverage()}</div>
            <div>Check success requests:</div>
            {checkSuccessRequest}

            <div>Users login/password companiesAmount</div>
            <div>Check BE request (SEEMS BE PROVIDE EXAMPLE URL) and response example</div>
            <div>Check BE request from FE</div>
        </div>
    )
}

export default AdminPage;