export default function FindPwPage() {
    return (
        <section className="section-center">
            <div className="flex my-4">
                <p className="mx-4">아이디</p>
                <input type="text" className="border" />
            </div>
            <div className="flex my-4">
                <p className="mx-4">이메일</p>
                <input type="text" className="border" />
            </div>
            <button className="bg-slate-100 p-2">비밀번호 초기화</button>
        </section>
    );
}
