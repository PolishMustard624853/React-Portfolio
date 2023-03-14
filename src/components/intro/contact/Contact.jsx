import './contact.css'
import Phone from '../../../assets/phone.png'
import Email from '../../../assets/email.png'
// import Address from '../../../assets/planet.png'
import Twitter from '../../../assets/twitter.png'
import Github from '../../../assets/github.png'
import DeathStar from '../../../assets/death-star.png'
// import Me from '../../../img/me.jpg'


const Contact = () => {
  return (
<section id='contact'>
    <div className='c'>
        <div className='c-wrapper'>
            <div className='c-left'>
                <h1 className='c-title'>Let's join forces</h1>
                <div className='c-info'>
                    <div className='c-info-item-1'>
                        <a href='tel: 3368251582' target='blank'>
                            <img src={Phone} alt='' className='c-icon'/>
                            <h1>Phone</h1>
                        </a>
                    </div>
                    <div className='c-info-item-2'>
                        <a href='https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2131027,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967' target='blank'>
                            <img src={DeathStar} alt='' className='c-icon'/>
                            <h1>Home</h1>
                        </a>
                    </div>
                    <div className='c-info-item-3'>
                        <a href='mailto: konaasenbu710@gmail.com' target='blank'>
                            <img src={Email} alt='' className='c-icon'/>
                            <h1>Email</h1>
                        </a>
                        </div>
                    <div className='c-info-item-4'>
                        <a href='https://twitter.com/PolishMustard' target='blank'>
                            <img src={Twitter} alt='' className='c-icon'/>
                            <h1>Twitter</h1>
                        </a>
                    </div>
                    <div className='c-info-item-5'>
                        <a href='https://github.com/PolishMustard624853' target='blank'>
                            <img src={Github} alt='' className='c-icon'/>
                        <h1>Github</h1>
                        </a>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
</section>
)
}

export default Contact