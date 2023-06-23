import '../components/App.css'
// import Log from '../components/icons/log.svg';
import Navbar from '../components/Navbar'
import loginimg from '../components/icons/undraw_login_re_4vu2.svg'
import { styled } from 'styled-components';

export default function Login(){
    const WrapStyle = styled.div`
        @media (max-width : 700px) {
            display : flex;
            flex-wrap : wrap;
            flex-direction : column;
            align-items : center;
            justify-content : center;
            width : 100%;
        }
        @media (min-width: 700px ){
            display : flex;
            align-items : center;
            justify-content : center;
            width : 100%;
        }
    `;
    return(
        <div>
            <Navbar />
            <div className='flex items-center justify-center mt-[100px]'>
                <div className='flex'>
                    <div className='flex flex-col items-center'>
                        <h1 style={{
                            color:"#081E40",
                            fontFamily : 'Sanchez',
                            fontSize : '32px',
                            lineHeight : '41px'
                            }}>
                            Sign In
                        </h1>
                        <input
                            style={{
                                background : '#fffff',
                                borderRadius : '20px',
                                width : '250px',
                                height : '50px'
                            }}
                            type="text"
                            placeholder='Username or Email'
                        />
                        <input
                            style={{
                                background : '#fffff',
                                borderRadius : '20px',
                                width : '250px',
                                height : '50px'
                            }}
                            type="password"
                            placeholder='Password'
                        />
                        <button
                            style={{
                                display : 'flex',
                                width : '106px',
                                height : '36px',
                                borderRadius : '5px',
                                background :'#1352B0',
                                color : 'white',
                                alignItems : 'center',
                                textAlign : 'center',
                                fontFamily : 'Forum'
                            }}
                        >Sign In</button>
                        <div className='flex w-auto items-center'>
                            <div className='w-[70px] h-[1px] bg-zinc-700'></div>
                            <h5>or</h5>
                            <div className='w-[70px] h-[1px] bg-zinc-700'></div>
                        </div>
                        <button
                            style={{
                                width: '352px',
                                height: '62px',
                                borderRadius: '32px',
                                background: '#000',
                            }}  
                        >Sign in with Google</button>
                    </div>
                    <div className='w-[1px] h-[580px] bg-zinc-700'></div>
                    <img
                    style={{
                        width:'500px',
                        height: "250px"
                    }}
                    src={loginimg} alt='log in' />
                </div>
            </div>
        </div>
    )
}