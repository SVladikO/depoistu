import {useEffect, useState} from "react";
import {BE_API} from "../../utils/fetch";

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

import {ReactComponent as ProtectedIcon} from "../../assets/icons/secure.svg";
import {BE_DOMAIN, SELECTED_BE_DOMAIN} from "../../utils/config";

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

    return (
        <ContentWrapper>
            <h2>{modeDB?.mode?.toUpperCase()} DB - {SELECTED_BE_DOMAIN.name.toUpperCase()} API</h2>
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
                        <div>EXAMPLE:{' '}
                            <a href={BE_DOMAIN + url_example} target="_blank">
                                <span style={{color: 'red'}}>{BE_DOMAIN}</span>
                                <span style={{color: 'blue'}}>{url_example}</span> ->>>
                            </a>

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

export default ApiPage;
