import frontendLogo from '../assets/front-end.png';
export default function Header(){
    return(
        <header>
           <img src={frontendLogo} alt="Frontend" />
           <h1>Let's explore some popular front-end library and framework</h1>
        </header>
    )
}