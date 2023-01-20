import React from "react";

import {MobileWrapper} from './Catalog.style'
import MobileDevice from '../../components/MobileDevice';
import {ROUTERS} from "../../utils/config";
import {useDocumentTitle} from "../../utils/utils";
import translations from "../../utils/translations";

function CatalogPage() {
    useDocumentTitle(translations.company_name);
    return (
        <MobileWrapper>
            {ROUTERS.map((p, index) =>
                <MobileDevice key={p.URL+index} index={index} {...p}><p.page /></MobileDevice>
            )}
        </MobileWrapper>
    )
}

export default CatalogPage;