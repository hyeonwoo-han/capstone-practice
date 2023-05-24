import React from "react";
import InvestItem from "./InvestItem";
import { InvestDB } from "./utils/InvestementDB";
import BenefitModal from "../benefitmodal/BenefitModal";
import { useState } from "react";
import { HiOutlineBell } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Chart from "./../dashRight/Chart";
import RecordModal from "./RecordModal";
function DashLeft() {
  const [open, setOpen] = useState(false);
  const [Rcopen, setRcOpen] = useState(false);

  return (
    <div className="col-span-2 min-h-[90vh] max-h-[90vh] border-r border-feay-200 items-start justify-start flex flex-col  w-full ">
      {/*top section*/}
      <h1 className="text-xl font-bold xl:text-3xl px-12 py-6">
        Unknown
        <span className="text-2xl font-normal text-gray-500">
          님의 공부기록
        </span>
      </h1>
      <div className="w-full flex items-start justify-start flex-col px-12 pt-6 pb-6">
        <h1 className="font-bold text-xl xl:text-2xl pb-2 font-kr">
          열정도 : <span className="text-teal-600">Lv.3</span>
        </h1>

        {/*열정도 게이지*/}
        <div className="h-32 w-full pt-3">
          <div className="w-full h-4 bg-gray-100 rounded">
            <div className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded w-12 animate-fill duration-[2s]"></div>
          </div>
          <div className="flex justify-end">
            <div className="pr-1 pt-2 text-gray-400 font-kr">100%달성</div>
          </div>
          <div className="font-kr pt-2">
            <div className="font-bold">당신의 열정을 보여주세요!</div>
            <div className="flex justify-between">
              <div className="text-gray-400">
                다음 레벨까지 남은 경험치: 2850
              </div>
              <button
                className="px-2 py-1 rounded text-white bg-blue-500 hover:bg-blue-400 cursor-pointer "
                onClick={() => setOpen(true)}
              >
                혜택
              </button>
            </div>

            <BenefitModal open={open} onClose={() => setOpen(false)}>
              <div className="text-center h-76 w-64">
                <HiOutlineBell size={56} className="mx-auto text-blue-400" />

                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-800">
                    혜택
                  </h3>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde velit nisi magnam similique aperiam numquam ipsam. Magni quidem illum voluptate alias! Consequuntur iusto id debitis deserunt iste reiciendis autem odio.
                  </p>
                </div>
                <div className="flex gap-4 ">
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </BenefitModal>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-gray-200 pt-1"></div>
      <div className="md:flex gap-2  items-center justify-center w-full lg:space-y-0 space-y-4  lg:space-x-4  px-12 mt-8">
        <div className="space-y-6 w-full border-2 border-gray-300 items-center justify-center flex flex-col ">
          {/* <span className="py-4 px-4 rounded-full shadow-lg shadow-gray-300 items-center justify-center flex">
            <CashIcon className="w-8 h-8 stroke-1 " />
          </span> */}
          <div className="flex ">
            <span className="flex justify-center font-kr font-medium text-gray-500 text-base pt-4">
              오늘 공부 시간
              <button className=" ml-2" onClick={() => setRcOpen(true)}>
                <AiOutlineInfoCircle size={24} />
              </button>
            </span>

          </div>
          <RecordModal Rcopen={Rcopen} RconClose={() => setRcOpen(false)}>
              <div className="text-start" style={{ width: "400px", height: "177px" }}>
                {/* <AiOutlineInfoCircle size={56} className="mx-auto text-blue-400" /> */}

                <div className="mx-auto">
                  <h3 className="text-sm text-gray-500 mb-4">
                    공부 기록 안내
                  </h3>
                  <p className="text-lg font-black text-gray-800">
                    공부 기록 집계 시간
                  </p>
                  <p className="mt-2">
                  스터디 방에서 출석체크 후 스탑워치로 측정한 시간을 표시합니다.출석체크를 누락하고 스탑워치를 사용할 경우 마지막으로 출석을 체크한 날의 공부기록으로 합산될 수 있습니다.
                  </p>
                </div>
                {/* <div className="flex gap-4 ">
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setRcOpen(false)}
                  >
                    Cancel
                  </button>
                </div> */}
              </div>
            </RecordModal>

          <span className="items-center justify-center">
            <div className="font-light font-kr text-5xl text-gray-700 mb-4">
              00:00:00
            </div>
          </span>
          {/* <span className="items-center justify-center flex flex-col">
            <h2> On Time </h2>
            <h2 className="font-bold text-xl">temp </h2>
          </span> */}
        </div>
        {/* duplicate above ☝ */}
        <div className="space-y-6 w-full border-2 border-gray-300 items-center justify-center flex flex-col font-kr ">
          {/* <span className="py-4 px-4 rounded-full shadow-lg shadow-gray-300 items-center justify-center flex">
            <CreditCardIcon className="w-8 h-8 stroke-1" />
          </span> */}
          <span className="font-medium text-gray-500 text-base pt-4">
            일 평균 공부 시간(30일)
          </span>
          <span className="items-center justify-center">
            <div className="font-light text-5xl text-gray-700 mb-4">
              00:00:00
            </div>
          </span>
          {/* <span className="items-center justify-center flex flex-col">
            <h2> Round-Ups </h2>
            <h2 className="font-bold text-xl">temp </h2>
          </span> */}
        </div>
        <div className="space-y-6 w-full border-2 border-gray-300 items-center justify-center flex flex-col font-kr">
          {/*bg-[#BFFA00] pt-6 items-center justify-between flex flex-col w-full  */}
          {/* <span className="items-center justify-center flex flex-col w-full py-6">
            <h3> temp </h3>
            <h1 className="text-black font-bold text-xl 2xl:text-3xl">
              temp
            </h1>
          </span> */}
          <span className="font-medium text-gray-500 text-base pt-4">
            전체 공부 시간
          </span>
          {/* <div className="bg-black items-center justify-center flex text-white w-full py-3 ">
            <h1> temp </h1>
          </div> */}
          <span className="items-center justify-center">
            <div className="font-light text-5xl text-gray-700 mb-4">
              00:00:00
            </div>
          </span>
          {/* <span className="items-center justify-center flex flex-col">
            <h2> Round-Ups </h2>
            <h2 className="font-bold text-xl">temp </h2>
          </span> */}
        </div>
      </div>
      
      {/* chart */}
      <div className="w-full items-start justify-start flex flex-col px-12 py-2 ">
        <Chart />
      </div>
      

      
      
    </div>
  );
}

export default DashLeft;
