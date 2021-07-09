import React, {useState} from 'react';
//importing everything styled-components related
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';
//import everything react router related
import { Link } from 'react-router-dom';

const NavStyle = styled.nav`
    min-height: 10vh;
    width: 100%;
    padding: 0rem 10rem;
    background: var(--sec-color);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    /*Placing responsive nav relative to the navbar */
    position: relative;
    #logo{
        color: var(--sec-color);
        flex: 2 1 20rem;
        color: var(--main-color);
    }
    .nav-links{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex: 1 1 40rem;
        li a{
            color: var(--main-color);
        }
    }
    .nav-toggle{
        padding: 0.5rem;
        border: none;
        outline: none;
        background: transparent;
        display: none;
        svg{
            width: 30px;
            height: auto;
            color: var(--main-color);
        }
    }
    @media only screen and (max-width: 820px){
        .nav-links{
            position: absolute;
            top: 10vh;
            left: 0;
            height: 90vh;
            width: 100%;
            background: red;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            transform: translateX(100%);
            transition: all 0.5s ease-in;
        }
        .nav-links.active{
            transform: translateX(0%);
        }
        .nav-toggle{
            display: inline-block;
            padding: 0.5rem;
            border: none;
            outline: none;
            background: transparent;
            transition: 0.3s all ease-in;
            svg{
                width: 30px;
                height: auto;
                color: var(--main-color);
            }
            &:hover{
                cursor: pointer;
                svg{
                    opacity: 0.75;
                }
            }
        }
    }
`;

const Navbar = () => {

    //setting our State
    const [navbarToggle, setNavbarToggle] = useState(false);

    //setting our handlers
    const toggleHandler = () => {
        !navbarToggle ? setNavbarToggle(true) : setNavbarToggle(false)
    }
    return(
        <NavStyle>
            <h2 id="logo">Surfico.Co</h2>
            <ul className={`nav-links ${navbarToggle ? 'active' : ''}`}>
                <li>
                    <Link 
                        to='/'
                        onClick={() => setNavbarToggle(!navbarToggle)}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/locations'
                        onClick={() => setNavbarToggle(!navbarToggle)}
                    >
                        Location
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/about'
                        onClick={() => setNavbarToggle(!navbarToggle)}
                    >
                        About Us
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/contact'
                        onClick={() => setNavbarToggle(!navbarToggle)}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <button 
                className="nav-toggle"
                onClick={toggleHandler}
                onKeyDown={toggleHandler}
                tabIndex={0}
            >
                    <MdMenu />
            </button>
        </NavStyle>
    );
}

export default Navbar;