export default function ClipEditPage() {
  return (
    <section className="section-center">
      <div className="w-full ml-32 my-4 flex items-center">
        <span className="material-symbols-outlined">arrow_back_ios</span>
        <a href="/cliprecode" className="text-3xl">
          돌아가기
        </a>
      </div>
      <div className="w-11/12 h-4/5 bg-gray-100 px-12 py-4 flex flex-col justify-between">
        {/* 좌측부분 */}
        <div>
          <div className="w-full h-12 flex justify-center items-center">
            <input
              className="w-10/12 h-full bg-white p-2 flex items-center"
              placeholder="제목을 입력해주세요"
            />
            <p className="w-1/12 h-full bg-gray-300 p-2 flex items-center justify-center ml-2">
              저장
            </p>
            <p className="w-1/12 h-full bg-gray-300 p-2 flex items-center justify-center ml-2">
              초기화
            </p>
          </div>
          <div className="w-full my-6 flex justify-between">
            <div
              className="bg-white border"
              style={{ width: "1000px", height: "600px" }}
            >
              실행창
            </div>
            <div className="w-1/4 px-4 bg-white">
              <h5 className="text-2xl">텍스트 작성</h5>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="w-full h-18 mx-2 py-3 bg-gray-200 flex items-center justify-center">
              음질부분
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
