import { useState } from "react";

import MemberReqStyle from "./MemberRequest.module.css"

// 가입요청 페이지 
function MemberRequest() {

  // 매니저 권한만 접근 가능

  // 가입요청 - 사번, 이름, 이메일(비밀번호 부여) 
  // 사번조회해서 자동으로 정보 불러오고, 아이디(사번), 비번, 계정상태 등은 따로 지정하여 회원등록함
  // 지정된 메일로 임시비밀번호를 발송하고, 최초로그인시 비밀번호 변경창 띄움 
  // 

  // 사번조회 api 요청 후  받아온 직원 정보 뿌리고 지정이메일 작성하면 임시비밀번호 발송하기 

  // 임시회원으로 등록됨 
  const [memberNo, setMemberNo] = useState();


  return (
    <div>
      <div className={MemberReqStyle.container}>

        <div>
          <div className="label" htmlFor="name">사번</div>
          <input type="text" name="empNo" required
          placeholder="사원번호 입력"
            value={memberNo}
          />
          <button>사번 조회</button>
        </div>
        <div>
          <div className="label" htmlFor="">이름</div>
          <input type="text" name="name" required disabled />
        </div>
        <div>
          <div className="label" htmlFor="">직급</div>
          <input type="text" name="jobName" required disabled />
        </div>
        <div>
          <div className="label" htmlFor="">부서</div>
          <input type="text" name="deptName" required disabled />
        </div>
        <div>
          <div className="label" htmlFor="">연락처</div>
          <input type="text" name="phone" required disabled />
        </div>

          <p><br/>
            가입할 사원의 이메일주소를 정확히 입력하세요.<br/> (해당 이메일로 아이디와 임시비밀번호가 부여됩니다.)</p>
        <div>
          <div className="label" htmlFor="">이메일</div>
          <input type="mail" name="mail" required
            placeholder="이메일주소 입력"
          />
        </div>
  
        <div>
          <button>신청완료</button>
          {/* alert창 */}
        </div>

      </div>







    </div >
  );
}

export default MemberRequest;