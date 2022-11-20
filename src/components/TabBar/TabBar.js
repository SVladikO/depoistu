import {Tab, Wrapper} from "./TabBar.style";

const TabBar = ({tabs, handleClick, selectedTab}) => {
    return (
        <Wrapper>
            {tabs.map((el,index) => <Tab
                                    key={index}
                                    onClick={()=> handleClick(index) }
                                    active={selectedTab === tabs[index]}>{el}</Tab>)}
        </Wrapper>
    );
};

export default TabBar;