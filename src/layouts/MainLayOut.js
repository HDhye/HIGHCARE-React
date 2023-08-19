import MainLayOutCss from "./MainLayOut.module.css"
function MainLayOut() {

    return (
        <>
            <div className={MainLayOutCss.container}>
                <div className={MainLayOutCss.box}>
                    <h2>업무일정</h2>
                    <p>달력?</p>
                    <a href="#">더 보기</a>
                </div>
                <div className={MainLayOutCss.box}>
                    <h2>결재문서</h2>
                    <p>결재진행상황 </p>
                    <a href="#">더 보기</a>
                </div>
                <div className={MainLayOutCss.box} style={{width:400}}>
                    <h2>공지사항</h2>
                    <p></p>
                    <a href="#">더 보기</a>
                </div>

                <div className={MainLayOutCss.box}>
                    <h2>test4</h2>
                    <p>모든 사람은 의견의 자유와 표현의 자유에 대한 권리를 가진다. 이러한 권리는 간섭없이 의견을 가질 자유와 국경에 관계없이 어떠한 매체를 통해서도 정보와 사상을 추구하고, 얻으며, 전달하는 자유를 포함한다. 모든 사람은 사회의 일원으로서 사회보장을 받을 권리를 가지며, 국가적 노력과 국제적 협력을 통하여, 그리고 각 국가의 조직과 자원에 따라서 자신의 존엄과 인격의 자유로운 발전에 불가결한 경제적, 사회적 및 문화적 권리들을 실현할 권리를 가진다. 모든 사람은 노동시간의 합리적 제한과 정기적인 유급휴가를 포함하여 휴식과 여가의 권리를 가진다. 모든 사람은 이 선언에 규정된 권리와 자유가 완전히 실현될 수 있도록 사회적, 국제적 질서에 대한 권리를 가진다.</p>
                    <a href="#">더 보기</a>
                </div>
                <div className={MainLayOutCss.box}>
                    <h2>test5</h2>
                    <p>ㄷㄱㄷㅁㄹㅇㄴ.</p>
                    <a href="#">더 보기</a>
                </div>
                <div className={MainLayOutCss.box} style={{width:400}}>
                    <h2>시설예약</h2>
                    <p>테스트</p>
                    <a href="#">더 보기</a>
                </div>
            </div>
        </>   

    );
}

export default MainLayOut