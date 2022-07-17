/* W2_JWT/API 

<JWT> 

1. JWT란?
JWT(JSON Web Token) : 사용자 인증을 위해 사용하는 open standard.
토큰 자체를 정보로 사용하는 elf-Contained 방식으로 사용자에 대한 정보를 저장.(토큰 안에 정보가 있음)
서버에 해당 토큰 정보를 저장할 필요가 없는 Token based stateless authentication 매커니즘
주로 회원 인증이나 정보 전달에 사용되는데, 어플리케이션이 실행될 때, JWT를 static 변수와 로컬 스토리지에 저장함.

- 로컬 스토리지 : 브라우저를 종료해도 유지되는 데이터. 도메인(www.~)별로 생성이 되며, 다른 도메인의 로컬 스토리지는 접근 불가.
- static 변수 : 웹이 살아있는 내내 변하지 않고 유효하게 살아있는 변수.

2.JWT 구조
JWT는 Header, Payload, Signature의 3부분으로 이루어진다. 
Json 형태인 각 부분은 Base64Url로 인코딩되어 표현된다.

   header.payload.signiture
    aaaaaa.bbbbbb.cccccc 

- incoding : 정보의 형태나 형식을 다른 형태나 형식으로 변환하여 처리하는 것.
- Base64 : 이진 데이터를 Text로 바꾸는 Encoding(binary-to-text encoding schemes)의 하나로써 
이진 데이터를 Character set(utf-8 같은것)에 영향을 받지 않는 공통 ASCII 영역의 문자로만 이루어진 문자열로 바꾸는 Encoding.
암호화된 문자열이 아니고 같은 문자열에 대해 항상 같은 인코딩 문자열을 반환한다.

1) Header
토큰의 헤더는 typ와 alg 두가지 정보로 구성
- typ : 토큰의 타입을 지정 ex)JWT
- alg : 알고리즘 방식을 지정, 서명 및 토큰 검증에 사용
{
    "alf": "HS256",
    "typ": JWT
}

2) Payload
토큰에서 사용할 정보의 조각들인 Claim이 담겨있다.
Claim은 총 3가지로 나누어지며, Json(Key/Value) 형태로 다수의 정보를 넣을 수 있다.

- Ragistered Claim(등록된 클레임) : 토큰 정보를 표현하기 위해 이미 정해진 종류의 데이터
선택적으로 작성이 가능하며 사용할 것을 권장하고 JWT를 간결하게 하기 위해 key는 모두 길이 3의 String이다. 
여기서 subject로는 unique한 값을 사용하는데, 사용자 이메일을 주로 사용한다.

iss: 토큰 발급자(issuer)
sub: 토큰 제목(subject)
aud: 토큰 대상자(audience)
exp: 토큰 만료 시간(expiration), NumericDate 형식으로 되어 있어야 함 ex) 1480849147370
nbf: 토큰 활성 날짜(not before), 이 날이 지나기 전의 토큰은 활성화되지 않음
iat: 토큰 발급 시간(issued at), 토큰 발급 이후의 경과 시간을 알 수 있음
jti: JWT 토큰 식별자(JWT ID), 중복 방지를 위해 사용하며, 일회용 토큰(Access Token) 등에 사용

- Public Claim(공개 클레임) : 사용자 정의 클레임으로 공개용 정보를 위해 사용되고 충돌 방지를 위해 URI 포맷을 이용한다.
{ 
    "https://mangkyu.tistory.com": true
}

- Private Claim(비공개 클레임)
사용자 정의 클레임으로 서버와 클라이언트 사이에 임의로 지정한 정보를 저장
{ 
    "token_type": access 
}

3) Signature(서명)
서명(Signature)은 토큰을 인코딩하거나 유효성 검증을 할 때 사용하는 고유한 암호화 코드. 
헤더(Header)와 페이로드(Payload)의 값을 각각 BASE64Url로 인코딩
인코딩한 값을 *비밀 키*를 이용해 헤더(Header)에서 정의한 알고리즘으로 해싱
이 값을 다시 BASE64Url로 인코딩하여 생성합니다.

3. JWT의 장단점
1) 장점
- 토큰 자체에 정보가 담겨있어 별도의 인증 저장소가 필요 없다.
- URL 파라미터와 헤더로 사용해서 간편하다
- 트래픽 대한 부담이 낮다. 프론트 코드에서 static 변수에 토큰을 저장하면, 인증을 위해서 더더욱 자주 보낼 필요가 없다.
- 만료 설정이 쉽다
- 독립적인 토큰들로 여려 종류와 다양한 의도로 사용할 수 있다.
- 쿠키를 전달하지 않아도 되므로 쿠키를 사용함으로써 발생하는 취약점을 극복할 수 있다.

2) 단점
- 토큰 자체에 정보를 담고 있으므로 해킹될 경우 위험하다.
- 토큰 길이가 길어 네트워크에 부하를 줄 수 있다.
- Payload 인코딩 : 서명을 제외한 헤더(Header)와 페이로드(Payload) 자체는 암호화 된 것이 아니라, BASE64로 인코딩 된 것이기 때문에
 중간에 Payload를 탈취하여 디코딩하면 데이터를 볼 수 있으므로, Payload에 중요 데이터를 넣지 않아야 한다.
- JWT는 한번 만들어지면 제어가 불가능하기 때문에 토큰을 임의로 삭제하는 것이 불가능하므로 토큰이 만료될 때까지 기다려야 한다.

4. 실제 사용
1)백엔드
*/
// config.js
export const config = {
	jwt: {
		secretKey: required('JWT_SECRET'),
		expiresInSec: parseInt(required('JWT_EXPIRES_SEC',86400)), //secretKey와 만료되는 초를 설정
	}                                                              //JWT 토큰을 어떤 key를 가지고 얼마동안 유효하게 만들지에 대한 configuration
};
//auth.controller.js
import jwt from 'jsonwebtoken'; //jsonwebtoken이라는 패키지에서 jwt라는 모듈을 가져와 사용

function createJwtToken(id) {
	return jwt.sign({id}, config.jwt.secretKey, {expiresIn: config.jwt.expiresInSec});
}

export async function login(req, res) {
	const { intraId } = req.body; //intraId를 클라이언트에서 받아온 후
	const user = await userRepository.findByintraId(intraId); //userRepository라는 user정보들이 담겨있는 것을 찾아내
	const token = createJwtToken(user.intraId); //토큰으로 만들어
	res.status(200).json({token}); //클라이언트로 보내준다.
}

/*
2)프론트*/

//login.js : 로그인을 할 때에는 서버에서 클라이언트로 토큰을 보내주고 클라이언트는 이 토큰을 받아서 인증정보를 유지
axios
  .post(`/api/auth/login`, { //서버에서 intraId에 맞는 토큰을 보내주었기 때문에
    intraId: id,
  })
  .then((res) => {
      saveToken(res.data.token); //saveToken을 통해서 localStorage에 저장할 것이다.
      alert('로그인 되셨습니다');
  })

//token.js : localStorage에 토큰을 저장하고 가져오고 삭제하는 코드

const TOKEN = 'token';

export function saveToken(token: string) { //받아온 token을 localStorage에 저장
  localStorage.setItem(TOKEN, token);
}

export function getToken() { //localStorage에 저장한 토큰을 가져오는 것
  return localStorage.getItem(TOKEN);
}

export function clearToken() { //localStorage에 존재하는 토큰을 저눕 지우는 것
  localStorage.clear();
}

//post.js : 인증된 사용자만 post 요청을 성공할 수 있게 클라이언트에서 서버로 token을 보냄

axios
  .post(
    `/api/register`,
    {
      eventId: id,
    },
    {
      headers: {
        Authorization: 'Bearer ' + getToken(), //생성된 토큰은 HTTP 통신을 할 때 Authorization이라는 ket의 value로 사용됨
      }, 
    },
  )

/* 
<API>
Application Programming Interface
애플리케이션을 서로 연결하여 통신할 수 있게 한다.

API 역할
- 서버와 데이터베이스에 대한 출입구 역할
- 애플리케이션과 기기가 원활하게 통신할 수 있게 한다.
-모든 접속을 표준화 한다.