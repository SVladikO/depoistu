import {Tab, Wrapper} from "./TabBar.style";

const TabBar = ({tabs, handleClick, selectedTab}) => {
    return (
        <Wrapper>
            {tabs.map((tab,index) => <Tab
                                    key={index}
                                    onClick={()=> handleClick(index) }
                                    active={selectedTab === tabs[index]}>{tab}</Tab>)}
        </Wrapper>
    );
};

export default TabBar;