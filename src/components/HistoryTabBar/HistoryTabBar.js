import {Tab, Wrapper} from "./HistoryTabBar.style";
import {useState} from "react";

const HistoryTabBar = () => {
    const tabs = ['Completed', 'Upcoming', 'Cancelled'];
    const changeTab = (i) => {setSelectedTab(tabs[i])};
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    return (
        <Wrapper>
            {tabs.map((tab, index) => <Tab
                key={index}
                onClick={() => changeTab(index)}
                active={selectedTab === tabs[index]}>{tab}</Tab>)}
        </Wrapper>
    );
};

export default HistoryTabBar;