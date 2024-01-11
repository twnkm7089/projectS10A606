export default function LoginPage() {
    return (
        <section className="section-center">
            <div className="w-1/5">
                <h5 className="m-4 border text-center p-4 rounded-md">Login</h5>
                <div className="flex flex-col">
                    <input
                        className="p-2 bg-slate-100 my-2"
                        type="text"
                        placeholder="아이디"
                    />
                    <input
                        className="p-2 bg-slate-100 my-2"
                        type="text"
                        placeholder="비밀번호"
                    />
                </div>

                <a
                    href="./studiolist"
                    className="block w-full bg-black text-white border text-center p-4 rounded-md"
                >
                    Login
                </a>
                <p>---------------</p>
                <a
                    href="./studiolist"
                    className="block w-full bg-blue-400 text-white border text-center p-4 rounded-md"
                >
                    구글로 로그인하기
                </a>
                <div className="flex justify-center items-center my-2">
                    <a className="mx-2" href="./findid">
                        아이디 찾기
                    </a>
                    <a className="mx-2" href="./findpw">
                        비밀번호 찾기
                    </a>
                    <a className="mx-2" href="./regist">
                        회원가입
                    </a>
                </div>
            </div>
        </section>
    );
}
