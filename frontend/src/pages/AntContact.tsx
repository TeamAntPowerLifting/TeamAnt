import React, { useEffect } from 'react';
import Headers from '@/components/headers/header';
import Footer from '@/components/footers/footer';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useLocation } from 'react-router-dom';
<link
  rel="stylesheet"
  href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
/>;

const AntContact = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dtafjou',
        'template_cukpf0d',
        e.currentTarget,
        'ylQ3THXuqiWqMF9nU',
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          alert('메일 전송이 완료되었습니다.');
        },
        (error: EmailJSResponseStatus) => {
          console.log(error.text);
        },
      );
    e.currentTarget.reset();
  };

  return (
    <div className="flex flex-col h-screen">
      <Headers />
      <div className="flex-1 pb-28 px-10 pt-28">
        <section className="bg-white pt-16 ">
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative flex flex-col items-center">
              <div className="absolute hidden md:block -top-14  text-[120px] text-gray-400 font-bold opacity-10">
                Contact
              </div>
              <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
                {' '}
                Contact <span className="text-red"> Us</span>
              </h2>
            </div>
          </div>

          <form
            onSubmit={sendEmail}
            className=" w-full md:w-2/3 mx-auto mt-16 my-7"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className=" text-lg block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  v-for="grid-first-name"
                >
                  이름
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="이름"
                  name="user_name"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="text-lg block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  v-for="grid-password"
                >
                  이메일
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="email"
                  placeholder="이메일"
                  name="user_email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="text-lg block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-lg"
                  v-for="grid-password"
                >
                  질문 유형
                </label>
                <select
                  defaultValue="DEFAULT"
                  name="category"
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full leading-tight py-3 px-4 mb-3"
                >
                  <option value="DEFAULT">카테고리</option>
                  <option value="온라인코칭 신청">온라인코칭 신청</option>
                  <option value="오프라인 레슨 신청">오프라인 레슨 신청</option>
                  <option value="온라인코칭 문의">온라인코칭 문의</option>
                  <option value="오프라인 레슨 문의">오프라인 레슨 문의</option>
                  <option value="기타">기타</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="text-lg block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  v-for="grid-password"
                >
                  질문 내용
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  name="message" required
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center justify-end">
              <div className="">
                <button
                  className="shadow bg-gray-300 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
                  type="submit"
                  value="Send"
                >
                  전송하기
                </button>
              </div>
            </div>
          </form>
        </section>

        <h1 className="mt-20 text-3xl font-semibold text-gray-800 capitalize lg:text-4xl text-center">
          ANSWERS TO FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="border-b-4 rounded-md border-red w-1/4 mx-auto mt-3"></div>

        <div className="shadow-md w-full md:w-2/3 mx-auto mt-10">
          {/* Table */}
          <div id="FAQ_1" className="overflow-hidden border-t">
            <label>
              <input className="absolute opacity-0 peer" type="checkbox" />
              <p className="cursor-pointer p-5 inline-block w-11/12">
                온라인 코칭을 진행하고 싶은데, 어떻게 신청하고 어떻게 시작할 수
                있나요?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 cursor-pointer inline-block float-right mt-5 mr-2  peer-checked:rotate-45 peer-checked:bg-indigo"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <div className="bg-gray-200 max-h-0 peer-checked:max-h-screen">
                <p className="p-5  xs:p-10">
                  Contact 란에서 온라인코칭 신청 카테고리를 선택 후 신청을
                  해주시면 이메일을 통해 설문지를 제공해 드립니다. 설문지 작성
                  후 제출을 해주시면, 코치님과 일자를 조율해 화상 미팅을
                  실시합니다. 화상 미팅에서는 작성해주신 설문지를 바탕으로
                  본인이 희망하는 목표나 방향성에 대한 이야기를 하고, 운동이
                  가능한 요일과 시간 및 기타 세부 사항들을 조정하게 되며, 그
                  이후 희망하시는 시작일자를 기준으로 프로그램 시트가 제공되며
                  코칭이 진행됩니다.
                </p>
              </div>
            </label>
          </div>
          <div id="FAQ_2" className="overflow-hidden border-t">
            <label>
              <input className="absolute opacity-0 peer" type="checkbox" />
              <p className="cursor-pointer p-5 inline-block w-11/12">
                오프라인으로 레슨을 진행하고 싶은데, 어떻게 신청해야 하나요?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 cursor-pointer inline-block float-right mt-5 mr-2  peer-checked:rotate-45 peer-checked:bg-indigo"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <div className="bg-gray-200 max-h-0 peer-checked:max-h-screen">
                <p className="p-5  xs:p-10">
                  오프라인의 경우 코치님들마다 활동하는 지역과 체육관이 모두
                  다르기 때문에, 오프라인 레슨의 경우 체육관의 방침에 따라
                  가격과 레슨이 가능한 요일 및 시간이 상이할 수 있습니다.
                  (코치님이 활동하는 체육관은 Coach란에 게시된 개인 프로필에서
                  확인하실 수 있습니다.) 오프라인 레슨을 희망하신다면
                  Contact탭의 오프라인 레슨 신청 카테고리를 선택하시고 내용 작성
                  후 제출해주시면 됩니다.
                </p>
              </div>
            </label>
          </div>
          <div id="FAQ_3" className="overflow-hidden border-t">
            <label>
              <input className="absolute opacity-0 peer" type="checkbox" />
              <p className="cursor-pointer p-5 inline-block w-11/12">
                코치님을 선택할 수 있나요?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 cursor-pointer inline-block float-right mt-5 mr-2 peer-checked:rotate-45 peer-checked:bg-indigo"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <div className="bg-gray-200 max-h-0 peer-checked:max-h-screen">
                <p className="p-5 xs:p-10">
                  물론이죠. 설문지에서 희망하시는 코치님을 선택하실 수 있습니다.
                </p>
              </div>
            </label>
          </div>
          <div id="FAQ_4" className="overflow-hidden border-t">
            <label>
              <input className="absolute opacity-0 peer" type="checkbox" />
              <p className="cursor-pointer p-5 inline-block w-11/12">
                어떤 코치님께 레슨을 받아야 할 지 모르겠어요...
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 cursor-pointer inline-block float-right mt-5 mr-2 peer-checked:rotate-45 peer-checked:bg-indigo"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <div className="bg-gray-200 max-h-0 peer-checked:max-h-screen">
                <p className="p-5 xs:p-10">
                  희망하시는 코치님이 있으시다면 해당 코치님께 연결해 드리지만,
                  그렇지 않은 경우, 작성해주신 설문지를 바탕으로 하여 최적의
                  코치님을 배정해 드립니다. 팀앤트는 4명의 코치가 하나의 팀으로
                  활동하고 있는만큼, 모든 정보와 자료를 함께 공유하고 있으며,
                  어떠한 코치님과 진행을 하게 된다고 해도 코칭의 퀄리티를
                  보장해드릴 수 있습니다.
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AntContact;
