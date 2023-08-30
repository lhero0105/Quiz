import React from 'react'
import { useNavigate } from 'react-router-dom';


function Main({userName, ChangeName, QuizLength, quizList={quizList}}) {
  
  let Navigate = useNavigate();

  // const TypeSelect = quizList.filter()

  const LengthSelctCnt = quizList.filter(data =>{
    return console.log(data.type);
  })

  const nameChk = () =>{
    (userName === ""
    ? function(){
      alert("이름을 입력해주세요");
      document.querySelector("input").focus();
    }()
    : 
    Navigate ("/quiz")
    )
  }

  const ChangeEvent = (e) => {
    console.log(e)
    // console.log(e.target)
    // ChangeName(e.target.value)
  }
  return (
    <>
    {/* {userName} */}
      <div className='w-full flex items-center h-full'>
        <div className='mx-auto basis-11/12 lg:basis-10/12'>
          <div className='bg-white rounded-lg p-5 pb-0'>
            <div className='text-center flex flex-wrap justify-between'>
              <input defaultValue={userName} onChange={ChangeEvent} className='border pl-4 py-2 rounded-md outline-none basis-full shadow-md sm:basis-8/12' type='text' placeholder='이름을 입력해주세요' />
              <button className='text-sm sm:text-base bg-blue-500 btn-primary hover:bg-blue-700 focus:ring-blue-400 sm:py-0 basis-full sm:basis-3/12 mt-5 sm:mt-0' onClick={()=> {nameChk()}}>시작하기</button>
              <h3 className='my-5 basis-full text-center'>{userName !== "" && <><span className='text-indigo-500 font-bold'>{userName}님</span><span>문제 유형은 기본값으로 설정되어 있으며, 총 {QuizLength}문제 중 1분제를 선택하셨습니다.</span></>}</h3>
              {/* 공백이 아니면 출력 */}
              <div className="a"></div>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg p-5 mt-5 flex justify-between flex-wrap items-center">
            <div className="flex justify-around items-center xl:basis-4/12 basis-full">
              <button className='btn-primary text-sm sm:text-base bg-green-800 hover:bg-green-700 focus:ring-green-400 basis-5/12'>랜덤설정</button>
              <select className='border rounded basis-6/12 text-center py-1.5'>
                <option value='0'>기본</option>
                <option value='1'>랜덤</option>
              </select>
            </div>
            <div className="flex justify-around items-center xl:basis-4/12 basis-full">
            <button className='btn-primary text-sm sm:text-base bg-green-800 hover:bg-green-700 focus:ring-green-400 basis-5/12 my-5'>갯수설정</button>
            <select className='border rounded basis-6/12 text-center py-1.5'>
                <option value='0'>1문제</option>
                <option value='1'>2문제</option>
              </select>
            </div>
            <div className="flex justify-around items-center xl:basis-4/12 basis-full">
              <button className='btn-primary text-sm sm:text-base bg-green-800 hover:bg-green-700 focus:ring-green-400 basis-5/12'>문제유형</button>
              <select className='border rounded basis-6/12 text-center py-1.5'>
                <option value='0'>전체 ({QuizLength}문제)</option>
                <option value='1'>옵션 (0문제)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main