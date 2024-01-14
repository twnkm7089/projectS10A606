type IsMine = {
    isMine: boolean
}

export default function VideoCard({isMine} : IsMine) {
    //isMine이 true면 지우기 버튼 활성화
    //isMine은 true면 본인 영상(지우기 가능), false면 불가능
    return (
        <li className="relative flex items-center border p-2 my-2">
            <img
                className="w-32 h-24"
                src="/src/assets/images/nothumb.png"
            />
            <p className="mx-10 text-3xl">제목</p>
            <span className="material-symbols-outlined text-green-500 absolute -top-4 -right-4 text-3xl">
                add_circle
            </span>
            {isMine ?
            <span className="material-symbols-outlined text-red-500 absolute bottom-1 right-1 text-3xl">
                delete
            </span> : <></>
            }
        </li>
    )
}