import './Bullentin.css';

function Reserve(){
    return (
        <div class="content-bullentin-main">
            <h1 class="content-title">신청하기</h1>
            <h2>aaa</h2>
           <div className="applay-main">
               <div className="apply-content">
                <img src="../../img/dog.jpg" alt="" width="400px" height="200px"/>
                        <div>
                            <div>자원명 : <span>제 3회의실</span></div>
                            <div>위치 : <span>서울</span></div>
                            <div>위치 : <span>3층</span></div>
                            <div>사용시간 : <span>09:00 ~ 14:00</span></div>
                        </div>
                  </div>
                    <div style={{display: 'flex'}}>
                        <div id='calendar' style={{width: '60%'}}></div>
                        <div id="reservation-status">
                            <h3>예약현황</h3>
                            <div>09:00~12:00</div>
                            <button>예약하기</button>
                        </div>
                    </div>
                          <div className="content-main-main"></div>
        </div>
    </div>
   
    )
}

export default Reserve;