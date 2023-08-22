import { Link } from "react-router-dom";
import NaviCss from "./leftnavibar.module.css"
import { useState } from "react";

function LeftNavibar(){

    const [isMenuActive, setMenuActive] = useState(false);

    const menuOnClickHandler = () => {
        setMenuActive(!isMenuActive);
    };

    return (

        <>
        
            <div className={isMenuActive? NaviCss.NaviboxActive : NaviCss.Navibox}>

                    <div className={isMenuActive? NaviCss.MenuExpander : NaviCss.MenuReducer} onClick={menuOnClickHandler}/>
                <Link to="/">
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.Main}>{isMenuActive && 'Home'}</div>
                </Link>
                <Link to="/chatting">
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.Note}>{isMenuActive && '채팅'}</div>
                </Link>
                <Link to="/pm">
                    <div className={isMenuActive? NaviCss.MenuActive :NaviCss.Pm}>{isMenuActive && '인사관리'}</div>
                </Link>    
                <Link to={"approval"}>
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.Approval}>{isMenuActive && '전자결재'}</div>
                </Link>
                <Link to= "/mypage">
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.Mypage}>{isMenuActive && '마이페이지'}</div>
                </Link>   
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.Schedule}>{isMenuActive && '일정관리'}</div>
                <Link to= "/bulletin">
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.bulletin}>{isMenuActive && '게시판'}</div>
               </Link> 
               <Link to="/reservation">
                    <div className={isMenuActive? NaviCss.MenuActive : NaviCss.Reservation}>{isMenuActive && '시설예약'}</div>
                </Link>
                    <div className={isMenuActive? NaviCss.MenuActive : ''}>{isMenuActive && '시스템관리'}</div>

            </div>


        </>
    )
}

export default LeftNavibar;