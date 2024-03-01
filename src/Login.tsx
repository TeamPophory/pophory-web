import React from "react";
import {useNavigate} from "react-router-dom"


const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // 카카오 로그인 로직을 여기에 구현합니다.
      // 로그인 성공 후 '/expire' 경로로 리다이렉트합니다.
      navigate('/expire');
    } catch (error) {
      console.error('Login failed:', error);
      // 로그인 실패 처리
    }
  };

  return (
    <div className="login-container"
         style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <button onClick={handleLogin} style={{padding: '10px 20px', fontSize: '16px'}}>
        카카오로 로그인
      </button>
    </div>
  );
};

export default Login;
