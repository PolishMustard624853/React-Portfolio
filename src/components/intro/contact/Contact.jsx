import './contact.css'
import Phone from '../../../assets/phone.png'
import Email from '../../../assets/email.png'
import Address from '../../../assets/address.png'
import Twitter from '../../../assets/twitter.png'
import Github from '../../../assets/github.png'





const Contact = () => {
  return (
    <div className='c'>
        <div className='c-bg'></div>
        <div className='c-wrapper'>
            <div className='c-left'>
                <h1 className='c-title'>Let's join forces</h1>
                <div className='c-info'>
                    <div className='c-info-item'>
                        <a href='tel: 3368251582' target='blank'>
                            <img src={Phone} alt='' className='c-icon'/>
                        </a>
                    </div>
                    <div className='c-info-item'>
                        <a href='https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2131027,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967' target='blank'>
                            <img src={Address} alt='' className='c-icon'/>
                        </a>
                    </div>
                    <div className='c-info-item'>
                        <a href='mailto: polishmustard710@gmail.com' target='blank'>
                            <img src={Email} alt='' className='c-icon'/>
                        </a>
                    </div>
                    <div className='c-info-item'>
                        <a href='https://twitter.com/PolishMustard' target='blank'>
                            <img src={Twitter} alt='' className='c-icon'/>
                        </a>
                    </div>
                    <div className='c-info-item'>
                        <a href='https://github.com/PolishMustard624853' target='blank'>
                            <img src={Github} alt='' className='c-icon'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='c-right'>
                <p className='c-desc'>
                    <b>Feel free to get in touch with me to collaborate on some projects!</b>
                    <br></br>
                    <br></br>
                    <br></br>
                    <b>*This form does not yet work*</b>
                </p>
                <form>
                    <input type="text" placeholder='Name' name='user_name'/>
                    <input type="text" placeholder='Subject' name='subject'/>
                    <input type="text" placeholder='Email' name='email'/>
                    <textarea rows="5" placeholder='Message' name='message'></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact