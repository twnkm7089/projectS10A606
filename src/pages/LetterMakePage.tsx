export default function LetterMakePage() {
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
          <div className="w-full my-4 flex items-center">
            <h5 className="text-3xl">studio 5</h5>
            <span className="material-symbols-outlined mx-2">edit</span>
            <span className="material-symbols-outlined">group_add</span>
          </div>
          <div
            className="bg-white border my-6"
            style={{ width: "1000px", height: "600px" }}
          >
            실행창
          </div>
          <div className="w-full flex justify-center items-center">
            <span className="material-symbols-outlined me-1">play_circle</span>
            <span className="material-symbols-outlined me-1">stop_circle</span>
            <div className="w-full h-2 bg-black"></div>
          </div>
          <div className="w-full flex items-center">
            <p className="w-1/6 flex items-center justify-center text-3xl">
              영상 리스트
            </p>
            <div className="w-5/6 h-14 bg-gray-300"></div>
          </div>
        </div>

        {/* 우측부분 (녹화본, 스크립트, 설정) */}
        <div className="w-1/3 bg-white">
          <div className="w-full flex">
            <p className="w-1/3 h-12 mx-1 my-2 bg-gray-300 flex justify-center items-center border rounded">
              영상
            </p>
            <p className="w-1/3 h-12 mx-1 my-2 bg-gray-300 flex justify-center items-center border rounded">
              꾸미기
            </p>
            <p className="w-1/3 h-12 mx-1 my-2 bg-gray-300 flex justify-center items-center border rounded">
              설정
            </p>
          </div>
          {/* 하단 리스트 */}
          <div className="px-4">
            <h5 className="text-2xl">선택하지 않은 영상</h5>
            <ul>
              <li className="relative flex items-center border p-2 my-2">
                <img
                  className="w-32 h-24"
                  src="/src/assets/images/nothumb.png"
                />
                <p className="mx-10 text-3xl">제목</p>
                <span className="material-symbols-outlined text-green-500 absolute -top-4 -right-4 text-3xl">
                  add_circle
                </span>
              </li>
              <li className="relative flex items-center border p-2 my-2">
                <img
                  className="w-32 h-24"
                  src="/src/assets/images/nothumb.png"
                />
                <p className="mx-10 text-3xl">제목</p>
                <span className="material-symbols-outlined text-green-500 absolute -top-4 -right-4 text-3xl">
                  add_circle
                </span>
                <span className="material-symbols-outlined text-red-500 absolute bottom-1 right-1 text-3xl">
                  delete
                </span>
              </li>
              <li className="relative flex items-center border p-2 my-2">
                <img
                  className="w-32 h-24"
                  src="/src/assets/images/nothumb.png"
                />
                <p className="mx-10 text-3xl">제목</p>
                <span className="material-symbols-outlined text-green-500 absolute -top-4 -right-4 text-3xl">
                  add_circle
                </span>
                <span className="material-symbols-outlined text-red-500 absolute bottom-1 right-1 text-3xl">
                  delete
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 하단 섹션 */}
      <div className="w-full me-52 my-8 flex items-center justify-end">
        <a
          href="/studiomain"
          className="p-2 bg-sky-200 w-40 text-center border rounded-lg text-2xl cursor-pointer"
        >
          저장하기
        </a>
      </div>
    </section>
  );
}
