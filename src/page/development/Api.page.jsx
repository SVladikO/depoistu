import {useEffect, useState} from "react";
import {BE_API, fetchData} from "utils/fetch";

import {
    URL,
    Row,
    Method,
    RouteWrapper,
    ContentWrapper,
    Button,
    Description, Details, BorderOnly, DetailsTitle, DetailsBody,
} from './Api.style';

import {Flex} from 'components/index'

import {ReactComponent as ProtectedIcon} from "assets/icons/secure.svg";
import {BE_DOMAIN} from "utils/config";

const ApiPage = () => {
    const [api, setApi] = useState([])

    useEffect(() => {
        fetchData(BE_API.DEVELOPMENT.API())
            .then(res => {
                setApi(res.body)
            })
    }, [])

    return (
        <ContentWrapper>
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

                    <ButtonWrapper onClick={() => setIsDetailsVisible(!isDetailsVisible)}>
                        {isDetailsVisible ? 'HIDE' : 'SHOW'}
                    </ButtonWrapper>
                </RowInnerWrapper>
                {isDetailsVisible &&
                    <Details>
                        <div>
                            <a href={BE_DOMAIN + url_example} target="_blank" style={{color: 'blue'}}>
                                {BE_DOMAIN}{url_example}
                            </a>

                        </div>
                        {details.permission && (
                            <div>
                                <DetailsTitle>PERMISSON:</DetailsTitle>
                                <DetailsBody>{details.permission.map(row => <div>{row}</div>)}</DetailsBody>
                            </div>
                        )
                        }
                        {details.bodyValidation &&
                            <DetailsTitle>BODY_VALIDATION: {' ' + details.bodyValidation}</DetailsTitle>}
                        {details.requestBody && (
                            <>
                                <DetailsTitle>REQYEST BODY:</DetailsTitle>
                                <DetailsBody>
                                    <Flex alignItems={"flex-start"} flexDirection={'column'}>
                                        <div>{'{'}</div>
                                        <table style={{padding: '0 0 0 20px'}}>
                                            {Object.keys(details.requestBody).map(key => (
                                                <tr key={key}>
                                                    <td>{key}:</td>
                                                    <td>{details.requestBody[key]}</td>
                                                </tr>
                                            ))}
                                        </table>
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

export default ApiPage;
