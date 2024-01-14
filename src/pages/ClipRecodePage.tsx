export default function ClipRecodePage() {
  return (
    <section className="section-center">
      <div className="w-full ml-32 my-4 flex items-center">
        <span className="material-symbols-outlined">arrow_back_ios</span>
        <a href="/studiomain" className="text-3xl">
          돌아가기
        </a>
      </div>
      <div className="w-11/12 h-4/5 bg-gray-100 px-12 py-4 flex justify-between">
        {/* 좌측부분 */}
        <div>
          <div className="w-full h-14 bg-white flex justify-center items-center border border-2 border-black rounded-3xl">
            스크립트부분입니다. 하하하하
          </div>
          <div
            className="bg-white border my-6"
            style={{ width: "1000px", height: "600px" }}
          >
            실행창
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-3/4 mx-2 py-3 bg-gray-200 text-center">
              녹화 시작
            </div>
            <div className="w-1/4 mx-2 py-3 bg-gray-200 text-center">
              타이머 재생 중지
            </div>
          </div>
        </div>

        {/* 우측부분 (녹화본, 스크립트, 설정) */}
        <div className="w-1/3 bg-white">
          <div className="w-full flex">
            <p className="w-1/3 h-12 mx-1 my-2 bg-gray-300 flex justify-center items-center border rounded">
              녹화본
            </p>
            <p className="w-1/3 h-12 mx-1 my-2 bg-gray-300 flex justify-center items-center border rounded">
              스크립트
            </p>
            <p className="w-1/3 h-12 mx-1 my-2 bg-gray-300 flex justify-center items-center border rounded">
              설정
            </p>
          </div>
          {/* 하단 리스트 */}
          <div className="px-4">
            <h5 className="text-2xl">녹화본 확인</h5>
            <div className="flex flex-wrap justify-center my-4">
              <div className="relative flex flex-col justify-around items-center mx-2">
                <img
                  className="image-select-size"
                  src="/src/assets/images/nothumb.png"
                />
              </div>
              <div className="relative flex flex-col justify-around items-center mx-2">
                <img
                  className="image-select-size"
                  src="/src/assets/images/nothumb.png"
                />
              </div>
              <div className="relative flex flex-col justify-around items-center mx-2">
                <img
                  className="image-select-size"
                  src="/src/assets/images/nothumb.png"
                />
              </div>
              <div className="relative flex flex-col justify-around items-center mx-2">
                <img
                  className="image-select-size"
                  src="/src/assets/images/nothumb.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 하단 섹션 */}
      <div className="w-full me-52 my-8 flex items-center justify-end">
        <a
          href="/clipedit"
          className="p-2 bg-sky-200 w-40 text-center border rounded-lg text-2xl cursor-pointer"
        >
          편집하기
        </a>
      </div>
    </section>
  );
}
