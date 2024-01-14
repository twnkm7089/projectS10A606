export default function StudioCreatePage() {
  return (
    <section className="relative flex p-24 justify-around">
      <div>
        <h5 className="text-4xl">스튜디오 제목</h5>
        <input className=" w-96 h-10 mt-2 mb-10 bg-gray-100" type="text" />
        <h5 className="text-4xl">마감 일자</h5>
        <input className=" w-96 h-10 mt-2 mb-10 bg-gray-100" type="text" />
        <h5 className="text-4xl">영상 프레임</h5>
        <div className="flex">
          <img
            className="image-select-size"
            src="/src/assets/images/nothumb.png"
          />
          <img
            className="image-select-size"
            src="/src/assets/images/nothumb.png"
          />
          <img
            className="image-select-size"
            src="/src/assets/images/nothumb.png"
          />
          <img
            className="image-select-size"
            src="/src/assets/images/nothumb.png"
          />
        </div>
      </div>
      <div className="border w-96 flex flex-col items-center p-4">
        <p className="w-full h-12 bg-gray-200 flex justify-center items-center">
          멤버 추가
        </p>
        <div className="w-full h-6 my-2 bg-gray-200 flex justify-center items-center">
          +
        </div>
        <ul className="w-full">
          <li className="flex justify-between px-8 py-2 border my-2">
            <p>은쮸</p>
            <span>x</span>
          </li>
          <li className="flex justify-between px-8 py-2 border my-2">
            <p>연쮸</p>
            <span>x</span>
          </li>
          <li className="flex justify-between px-8 py-2 border my-2">
            <p>유꼉</p>
            <span>x</span>
          </li>
          <li className="flex justify-between px-8 py-2 border my-2">
            <p>뗜재</p>
            <span>x</span>
          </li>
          <li className="flex justify-between px-8 py-2 border my-2">
            <p>하영</p>
            <span>x</span>
          </li>
          <li className="flex justify-between px-8 py-2 border my-2">
            <p>때웅</p>
            <span>x</span>
          </li>
        </ul>
      </div>
      <a
        href="/studiomain"
        className="absolute border p-3 bg-gray-200 -bottom-20 right-40 cursor-pointer"
      >
        스튜디오 생성
      </a>
    </section>
  );
}
