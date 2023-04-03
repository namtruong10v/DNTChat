import Cam from '../assets/images/cam.png'
import Add from '../assets/images/add.png'
import More from '../assets/images/more.png'
import Messages from './Messages';
import Input from './Input'

function Chat() {
    return ( 
        <div className="chat">
            <div className="chatInfo">
                <span>Truong2</span>
                <div className="chatIcons">
                    <img src={Cam}/>
                    <img src={Add}/>
                    <img src={More}/>
                </div>

            </div>
            <Messages/>
            <Input />
        </div>
     );
}

export default Chat;