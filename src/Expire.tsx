import React from "react";
import {useNavigate} from "react-router-dom";


const Expire: React.FC = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용합니다.

  const handleExpire = async () => {
    try {
      // 여기에 계정 탈퇴 로직을 구현합니다.
      // 탈퇴가 성공적으로 이루어지면, '/login'으로 이동하여 로그인 페이지로 돌아갑니다.
      navigate('/login');
    } catch (error) {
      console.error('Account deletion failed:', error);
      // 계정 탈퇴 실패 처리
    }
  };

  return (
    <div className="expire-container"
         style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <button onClick={handleExpire}
              style={{padding: '10px 20px', fontSize: '16px', backgroundColor: 'red', color: 'white'}}>
        계정 탈퇴하기
      </button>
    </div>
  );
};

export default Expire;