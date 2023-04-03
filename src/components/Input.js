import Img from '../assets/images/img.png';
import Atract from '../assets/images/attach.png'
function Input() {
    return ( 
        <div className="input">
            <input type='text' placeholder="Type something..."/>
            <div className="send">
                <img src={Atract} alt=""/>
                <input type='file' style={{display:"none"}} id='file' />
                <label htmlFor="file">
                    <img src={Img} alt="" />
                </label>
                <button>Send</button>
            </div>
        </div>
     );
}

export default Input;