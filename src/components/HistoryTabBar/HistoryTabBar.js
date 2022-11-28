import {Tab, Wrapper} from "./HistoryTabBar.style";

const HistoryTabBar = ({tabs, handleClick, selectedTab}) => {
    return (
        <Wrapper>
            {tabs.map((tab, index) => <Tab
                key={index}
                onClick={() => handleClick(index)}
                active={selectedTab === tabs[index]}>{tab}</Tab>)}
        </Wrapper>
    );
};

export default HistoryTabBar;