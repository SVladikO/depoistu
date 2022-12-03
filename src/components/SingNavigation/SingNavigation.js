import {Label, TextContent} from "./SingNavigation.style";

const SingNavigation = ({label}) => {
    return (
        <TextContent>
            <Label primary={false}>Already have an account?</Label>
            <Label primary={true}>{label}</Label>
        </TextContent>
    );
};

export default SingNavigation;