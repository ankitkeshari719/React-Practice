import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    {console.log("isLoggedIn:: ", isLoggedIn)}
    if(isLoggedIn){
        return <UserGreeting/>
    }
    return <GuestGreeting />;

}

export default Greeting;