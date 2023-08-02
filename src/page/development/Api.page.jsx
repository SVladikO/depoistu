import {useEffect, useState} from "react";
import {BE_API, fetchData} from "../../utils/fetch";

import {
    URL,
    Row,
    Method,
    RouteWrapper,
    ContentWrapper,
    Button,
    Description, Details, BorderOnly, DetailsTitle, DetailsBody,
} from './Api.style';

import {Flex} from '../../components/index'

import {ReactComponent as ProtectedIcon} from "../../icons/secure.svg";
import {BE_DOMAIN} from "../../utils/config";

const ApiPage = () => {
    const [modeDB, setModeDB] = useState('')
    const [api, setApi] = useState([])

    // fetch(window.location.origin + '/db-mode')
    //     .then(res => res.json())


    useEffect(() => {
        fetch(BE_API.DEVELOPMENT.DB_MODE())
            .then(res => res.json())
            .then(res => {
                setModeDB(res)
            })
    }, [])

    useEffect(() => {
        fetch(BE_API.DEVELOPMENT.API())
            .then(res => res.json())
            .then(res => {
                console.log('api res: ', res);
                setApi(res)
            })
    }, [])


    console.log({api})

    return (
        <ContentWrapper>
            {/*<div>{modeDB}</div>*/}
            {
                api.length && api.map(entity => (
                    <div key={entity.name}>
                        <h2 style={{padding: '30px 0 6px 30px'}}>{entity.name}</h2>
                        {entity.routes.map((route, i) => <Route key={i} route={route}/>)}
                    </div>
                ))
            }
        </ContentWrapper>
    )
}

const Route = ({route}) => {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
    const {method, url, url_example, description, details = {}} = route;
    const isDetailsEmpty = !route.details;

    const RowInnerWrapper = Row[route.method.toLowerCase()];
    const MethodWrapper = Method[route.method.toLowerCase()];
    const ButtonWrapper = Button[route.method.toLowerCase()];

    return (
        <RouteWrapper>
            {details.permission && <ProtectedIcon/>}
            <BorderOnly>
                <RowInnerWrapper key={method + url}>
                    <Flex alignItems={'center'}>
                        <MethodWrapper>{method}</MethodWrapper>
                        <URL>{url}</URL>
                    </Flex>
                    <Description>{description}</Description>

                    <ButtonWrapper
                        onClick={isDetailsEmpty ? () => {
                        } : () => setIsDetailsVisible(!isDetailsVisible)}
                    >
                        {isDetailsVisible ? 'HIDE' : 'SHOW'}
                    </ButtonWrapper>

                </RowInnerWrapper>
                {isDetailsVisible &&
                    <Details>
                        <div>URL EXAMPLE:
                        <span style={{color: '#246fb7'}}>                            {BE_DOMAIN}</span>
                        <span style={{color: '#023162'}}>{url_example}</span>


                        </div>
                        {details.permission && (
                            <div>
                                <DetailsTitle>PERMISSON:</DetailsTitle>
                                <DetailsBody>{details.permission}</DetailsBody>
                            </div>
                        )
                        }
                        {details.validation && <DetailsTitle>VALIDATION: {details.validation}</DetailsTitle>}
                        {details.requestBody && (
                            <>
                                <DetailsTitle>REQYEST BODY:</DetailsTitle>
                                <DetailsBody>
                                <Flex alignItems={"flex-start"} flexDirection={'column'}>
                                    <div>{'{'}</div>
                                    {Object.keys(details.requestBody).map(key => (
                                        <div key={key} style={{padding: '0 0 0 20px'}}>
                                            <span>{key}: {' '}</span>
                                            <span>{' '}{details.requestBody[key]}</span>
                                        </div>
                                    ))}
                                    <div>{'}'}</div>
                                </Flex>
                                </DetailsBody>
                            </>
                        )}
                    </Details>
                }
            </BorderOnly>
        </RouteWrapper>
    )
}

function getPermission(r) {
    const {permission} = r.details;
    if (permission) {
        return ``;
    }

    return '';

}

function getValidation(r) {
    const {validation} = r.details;
    if (validation) {
        return `<div class="validation">VALIDATION: ${validation}</div>`;
    }

    return '';
}

function getRequestBody(r) {
    const {requestBody} = r.details;
    if (requestBody) {
        return `<div class="requestBody">REQYEST BODY: ${requestBody}</div>`;
    }

    return '';
}


export default ApiPage;

// <div class="space"></div>
// <h1>Example of possible routes</h1>
// <div class="route">
//     <div class="entity">Company</div>
//     <div class="description">Everything about Company</div>
// </div>
// <div class="row row_get">
//     <div>get</div>
//     <div>/comapany</div>
//     <div class="description">Everything about Company</div>
// </div>
// <div class="row row_post">
//     <div>post</div>
//     <div>/comapany</div>
//     <div class="description">Everything about Company</div>
// </div>
// <div class="row row_delete">
//     <div>DELETE</div>
//     <div>/comapany</div>
//     <div class="description">Everything about Company</div>
// </div>
// <div class="row row_update">
//     <div>update</div>
//     <div>/comapany</div>
//     <div class="description">Everything about Company</div>
// </div>
