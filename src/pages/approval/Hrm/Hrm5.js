import React from 'react';
import ApvMenu from '../AprovalNav';
import ApvSummitBar from '../ApvSmmitbar';
import ApvSummitLine from '../ApvSummitLine'; 
import './ApprovalHrm.css';
import '../Approval.css';

function Hrm5() {
    return (

		<section>
			<ApvMenu />
			<div>
				<ApvSummitBar />
				<div className="container">
					<div className="apv-apvtitle">휴일/연장근무신청서</div>
					<ApvSummitLine />
					<div className="apv-content">
						<div className="apv-content-hrm3">
							<div className="column1">근무시간</div>
							<div className="column2"><input className="input1" type="date"/></div>
							<div className="column2"><input className="input1" type="time"/></div>
							<div className="column3">~</div>
							<div className="column2"><input className="input1" type="date"/></div>
							<div className="column2"><input className="input1" type="time"/></div>
							<div className="column2">(1일)</div>
						</div>
						<div className="apv-content-hrm1">
							<div className="column1">업무내용</div>
							<div className="column2"></div>
						</div>
						<div className="apv-content-detail">-사유-</div>


						<div className="apv-content-detail-coment">연차사용</div>

					</div>
				</div>
			</div>									
		</section>
    );
}

export default Hrm5;
