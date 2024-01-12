export default function Header() {
    return (
        <div className=" bg-slate-400 flex h-28 items-center justify-between px-16">
            <div>
                <a href="/" className="w-full p-4 text-5xl text-white">
                    REC:LETTER
                </a>
            </div>
            <div>
                <select
                    className="header-menu p-4 outline-none mx-4 border rounded-md"
                    id=""
                >
                    <option className="p-4" value="">
                        정은수님 환영합니다
                    </option>
                    <option className="p-4" value="mypage">
                        마이페이지
                    </option>
                    <option className="p-4" value="logout">
                        로그아웃
                    </option>
                </select>
            </div>
        </div>
    );
}
