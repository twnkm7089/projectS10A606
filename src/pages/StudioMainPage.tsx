export default function StudioMainPage() {
    return (
        <section className="w-full h-fit flex flex-col justify-center items-center">
            <div className="w-full ml-32 my-4 flex items-center">
                <h5 className="text-3xl">studio 5</h5>
                <span className="material-symbols-outlined mx-2">edit</span>
                <span className="material-symbols-outlined">group_add</span>
            </div>
            {/* 중앙 섹션 */}
            <div className="w-11/12 h-4/5 bg-gray-200 px-12 py-4 flex justify-between">
                {/* 좌측부분 */}
                <div>
                    <p className="text-3xl">은쮸</p>
                    <div
                        className="bg-white border my-6"
                        style={{ width: '800px', height: '500px' }}
                    >
                        실행창
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <span className="material-symbols-outlined me-1">
                            play_circle
                        </span>
                        <span className="material-symbols-outlined me-1">
                            stop_circle
                        </span>
                        <div className="w-full h-2 bg-black"></div>
                    </div>
                </div>

                {/* 우측부분 (영상 리스트, 참가자 관리) */}
                <div className="w-96 bg-white">
                    <div className="w-full flex">
                        <p className="w-1/2 h-12 mx-4 my-2 bg-gray-300 flex justify-center items-center border rounded-md">
                            영상 리스트
                        </p>
                        <p className="w-1/2 h-12 mx-4 my-2 bg-gray-300 flex justify-center items-center border rounded-md">
                            참가자 관리
                        </p>
                    </div>
                    {/* 할당된 영상 리스트 */}
                    <div className="px-4">
                        <h5 className="text-2xl">할당된 영상 리스트</h5>
                        <div className="flex my-4">
                            <div className="relative flex flex-col justify-around items-center mx-2">
                                <img
                                    className="image-select-size"
                                    src="/src/assets/images/nothumb.png"
                                />
                                <div className="flex justify-around w-full px-4">
                                    <div className="flex items-center justify-center">
                                        은쮸
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col justify-around items-center mx-2">
                                <img
                                    className="image-select-size"
                                    src="/src/assets/images/nothumb.png"
                                />
                                <div className="flex justify-around w-full px-4">
                                    <div className="flex items-center justify-center">
                                        연쮸
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 할당안된 영상 리스트 */}
                    <div className="px-4">
                        <h5 className="text-2xl">할당안된 영상 리스트</h5>
                        <div className="flex my-4">
                            <div className="relative flex flex-col justify-around items-center mx-2">
                                <img
                                    className="image-select-size"
                                    src="/src/assets/images/nothumb.png"
                                />
                                <div className="flex justify-around w-full px-4">
                                    <div className="flex items-center justify-center">
                                        유꼉
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col justify-around items-center mx-2">
                                <img
                                    className="image-select-size"
                                    src="/src/assets/images/nothumb.png"
                                />
                                <div className="flex justify-around w-full px-4">
                                    <div className="flex items-center justify-center">
                                        뗜제
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex">
                        <a
                            href="/cliprecode"
                            className="w-1/2 h-12 mx-4 my-2 bg-gray-300 flex justify-center items-center border rounded-md cursor-pointer"
                        >
                            촬영 / 편집
                        </a>
                        <a
                            href="/lettermake"
                            className="w-1/2 h-12 mx-4 my-2 bg-gray-300 flex justify-center items-center border rounded-md cursor-pointer"
                        >
                            전체 편집
                        </a>
                    </div>
                </div>
            </div>
            {/* 하단 섹션 */}
            <div className="w-full me-52 my-8 flex items-center justify-end">
                <a
                    href="/letterfinish"
                    className="p-2 bg-sky-200 w-40 text-center border rounded-lg text-2xl cursor-pointer"
                >
                    완성
                </a>
            </div>
        </section>
    );
}
