import {Tab, Wrapper} from "./HistoryTabBar.style";
import {useState} from "react";

const HistoryTabBar = () => {
    const tabTitles = ['Completed', 'Upcoming', 'Cancelled'];
    const [selectedTabTitle, setSelectedTabTitle] = useState(tabTitles[0]);

    return (
        <Wrapper className="pm-HistoryTabBar">
            {tabTitles.map(title => <Tab
                key={title}
                onClick={() => setSelectedTabTitle(title)}
                active={selectedTabTitle === title}>{title}</Tab>)}
        </Wrapper>
    );
};

export default HistoryTabBar;
