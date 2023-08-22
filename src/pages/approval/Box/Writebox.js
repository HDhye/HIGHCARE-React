import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApvMenu from '../AprovalNav';
import './ApprovalBox.css';
import '../Approval.css';
import { callApvWriteBoxAPI } from '../../../apis/ApprovalAPICalls';

function WriteBox() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    const dispatch = useDispatch();
    const results = useSelector(state => state.approvalReducer); // 상태값에 대한 리듀서를 등록
    const [selectedStatus, setSelectedStatus] = useState('결재진행중');

    console.log(results);
    useEffect(() => {
        dispatch(callApvWriteBoxAPI({ empNo: 999999, apvStatus: '결재진행중'}));
    }, []);

    const handleMenuItemClick = (apvStatus) => {
        dispatch(callApvWriteBoxAPI({ empNo: 999999, apvStatus }));
        setSelectedStatus(apvStatus);
    };

    return (

        
        <section>
            <ApvMenu />
            <div>
                <div className="apvApvtitle">결재함</div>
                <div className="apvTopMenu">
                    <ul className="apvTopMenuUl">
                        <li onClick={() => handleMenuItemClick('결재예정')}
                            className={selectedStatus === '결재예정' ? 'clicked' : ''}
                        >결재 예정</li>
                        <li onClick={() => handleMenuItemClick('결재진행중')}
                            className={selectedStatus === '결재진행중' ? 'clicked' : ''}
                        >결재 진행중</li>
                        <li onClick={() => handleMenuItemClick('결재완료')}
                            className={selectedStatus === '결재완료' ? 'clicked' : ''}
                        >결재 완료</li>
                        <li onClick={() => handleMenuItemClick('결재반려')}
                            className={selectedStatus === '결재반려' ? 'clicked' : ''}
                        >결재 반려</li>
                        <li onClick={() => handleMenuItemClick('결재참조')}
                            className={selectedStatus === '결재참조' ? 'clicked' : ''}
                        >결재 참조</li>
                    </ul>
                </div>
                <div>
                    <table className="apvBoxresultTable">
                        <tbody>
                            <tr>
                                <th className='column1'>문서번호</th>
                                <th className='column2'>문서제목</th>
                                <th className='column3'>분류</th>
                                <th className='column4'>작성일자</th>
                            </tr>
                            {results && results
                                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                                .map((result) => (
                                    <tr key={result.apvNo}>
                                        <td>{result.apvNo}</td>
                                        <td>{result.title}</td>
                                        <td>{result.category}</td>
                                        <td>{result.writeDate}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="paging">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WriteBox;
