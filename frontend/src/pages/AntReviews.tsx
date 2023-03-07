import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import Headers from '@/components/headers/header';
import Footer from '@/components/footers/footer';
import 'swiper/css';
import reviews1 from '../assets/images/reviews1.png';
import reviews2 from '../assets/images/reviews2.png';
import reviews3 from '../assets/images/reviews3.png';
import reviews4 from '../assets/images/reviews4.png';
import reviews5 from '../assets/images/reviews5.png';
import SubTtitle from '@/components/titles/SubTtitle';
import reviews6 from '../assets/images/reviews6.png';


// import required modules
import { Pagination } from 'swiper';

const AntReviews = () => {
  const review = [reviews1, reviews3, reviews6, reviews4, reviews5, reviews2];
  return (
    <>
      <div className="flex flex-col h-screen ">
        <Headers />
        <div className="flex-1 mt-28 pb-28 ">
          <div className="pt-10">
            <SubTtitle
              title1={`Reviews`}
              title2={`TeamAnt`}
              title3={`Reviews`}
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="blog-slider">
              <Swiper
                spaceBetween={100}
                effect={'fade'}
                loop={true}
                mousewheel={{
                  invert: false,
                }}
                pagination={{
                  clickable: true,
                  el: '.blog-slider__pagination',
                }}
                modules={[Pagination]}
                className="blog-slider__wrp swiper-wrapper"
              >
                <SwiperSlide className="blog-slider__item swiper-slide">
                  <div className="blog-slider__img">
                    <img src={review[0]} alt="" />
                  </div>
                  <div className="blog-slider__content">
                    <span className="blog-slider__code">온라인 + 오프라인</span>
                    <div className="blog-slider__title">운동에 대한 흥미와 열정을 일깨워준 수업</div>
                    <div className="blog-slider__text">
                      안녕하세요 저는 1월 3일부터 정지훈 코치님께 오프라인
                      수업을 받고 있습니다. 수업은 너무너무 만족스럽고,
                      조금이라도 더 빨리 하지 않은것에 대해 너무 후회스럽습니다.
                      <br />
                      <br />
                      우선 제가 다니고 있는 일반 헬스장에서는 PT를 진행하면
                      일반적으로 스미스머신이나 저중량을 일반적으로 진행하지만,
                      코치님께 PT를 받으면서 저에게 맞는 중량을 다룰 수 있다는
                      점과 점진적으로 증량을 할 수 있다는 점이 좋았습니다.
                      그렇기 때문에 주마다 제가 성장하는 느낌을 받았습니다.
                      <br />
                      <br />
                      그리고 항상 진행하기 전 당일의 컨디션 체크와 피드백 및
                      세트를 진행하고 나서 이상이나 통증이 있는지에 대해
                      여쭤보십니다. 궁금한 사항이 있으면 단순하게
                      알려주시기보단, 근거가 있는 논문 및 실제 사례들 혹은
                      신체의 움직임을 바탕으로 자세하게 알려주십니다. 개인에게
                      맞춰진 프로그램을 제공해주시고, 약점부위에 대한
                      기능강화운동과 필요한 이유의 설명과 함께 직접 영상을
                      촬영해 제공해주십니다. <br />
                      <br />
                      현재 배우기 전 PR무게를 큰 문제없이 여유롭게 소화하고
                      있고, 오히려 수행능력이 증가하였습니다! 영상 피드백을
                      보내드리면 성의껏 봐주시고, 부족한 부분이 있다면 어떤
                      식으로 해야하는지 피드백과 이유를 자세하게 알려주십니다.
                      지금까지 코칭을 받지 않았던 것이 후회가 되기도 하지만,
                      지금이라도 받은 것이 다행이라고 생각합니다. 물론 코칭을
                      받는다고 곧바로 완벽하게 수행할 수 있게 된다면 좋겠지만
                      저는 그러기 어렵다는 것을 알고 있습니다.
                      <br />
                      <br /> 하지만 조금씩 성장해나가는 제가 너무 좋고, 현재
                      운동하는 것이 너무 즐겁습니다. 마지막으로 저에게 운동에
                      대한 흥미와 열정을 다시한번 느낄 수 있게 해주셔서
                      감사드리고, 계속 성장하고 싶은 저이기에, 어려운 여건이
                      아니라면 코칭을 계속 받을 것 같습니다!
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="blog-slider__item swiper-slide">
                  <div className="blog-slider__img">
                    <img src={review[1]} alt="" />
                  </div>
                  <div className="blog-slider__content">
                    <span className="blog-slider__code">온라인 + 오프라인</span>
                    <div className="blog-slider__title">TeamAnt를 선택한 3가지 이유</div>
                    <div className="blog-slider__text">
                      일단 처음 온라인 코칭을 받게 된 계기는, 오프라인
                      원포인트로 정지훈 코치님께 스,벤,데 3세션을 모두 티칭
                      받았는데, 그 때 온라인코칭 런칭을 계획하고 계시다고 하셔서
                      오프라인 원포인트 코칭에 너무 만족하였었기 때문에 고민
                      없이 온라인 코칭을 신청하게 되었습니다! <br />
                      <br />
                      제가 두달가량 온라인코칭을 진행하면서 느낀 팀앤트
                      온라인코칭의 장점은, 첫째로 가성비가 미친 수준이라는
                      겁니다! 오프라인도 아닌 온라인으로 월 14만원 이라는 금액이
                      많게 느껴지실수도 있는데, 지금 코칭을 두 달 받은 결과로는
                      이 가격은 정말정말정말, 혜자라는 겁니다! <br />
                      <br />
                      그리고 둘째로 효율적으로 설계되는 개인화 프로그램 입니다.
                      운동이 업이 아닌 일반인들은 각각 생활패턴도 다르고
                      사람마다 약점부위도 다르기 마련인데, 개인의 특성을 고려한
                      프로그램이 정말 좋다고 느꼈습니다! <br />
                      <br />
                      그리고 마지막으로 코치와 클라이언트간의 지속적인
                      소통입니다. 제가 느끼기에 정지훈 코치님은 클라이언트의
                      질문에 항상 성심성의껏 답변해주시고, 사소한 내용도
                      하나하나 자세히 피드백 주십니다! 또 추가적으로 벤치프레스
                      언랙시에 삼두에 엄청난 통증이 있었는데 코칭을 통해 차츰
                      개선되어서 지금은 통증없이 수행이 가능합니다! <br />
                      <br />
                      저는 파워리프팅 시합을 준비하는 입장이고, 3대운동 기록을
                      늘리기 위한 운동을 코칭받고 있지만, 3대운동을 베이스로
                      파워빌딩, 대회 준비가 아닌 그냥 스트렝스 훈련도 잘 코칭 해
                      주시리라 생각됩니다.
                      <br />
                      <br />
                      단순히 수치상으로 어느정도 중상급자 레벨에 올라있던 저도
                      코칭을 통해 두 달 만에 3대 중량이 60킬로 이상 증량됐고,
                      앞으로도 더욱 발전 할 가능성을 보고 있습니다!
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  style={{ height: 'auto' }}
                  className=" blog-slider__item swiper-slide"
                >
                  <div className="blog-slider__img">
                    <img src={review[2]} alt="" />
                  </div>
                  <div className="blog-slider__content">
                    <span className="blog-slider__code">온라인 + 오프라인</span>
                    <div className="blog-slider__title">이제는 대회 입상을 목표로</div>
                    <div className="blog-slider__text">
                      삼대500을 목전에 두고 처음 앤트맨님께 원포인트 레슨을
                      받았습니다. 한달만에 4달간 못뚫었던 데드200을 뚫고 210을
                      찍었습니다. <br /> <br /> 바로 피티를 등록했고 처음으로
                      프로그램을 돌려가며 5달만에 삼대가 510에서 590으로 80키로
                      늘었습니다. 지금은 삼대630을 찍고 3달간 온라인코칭을
                      받으며 대회 입상을 노리고있습니다.처음에는 두려웠지만
                      데이터가 나의 성장을 보여주니 자신감도 붙고 스스로의
                      퍼포먼스에 놀라고 있습니다. <br /> <br /> 온라인코칭은
                      단순 자세교정을 받는것이 아닙니다. <br />
                      <br /> 1.개인에 맞춘 주단위 프로그램 설계 <br />
                      2.매일매일 받는 피드백 <br />
                      3.데이터로 보여지는 나의 성장 이 모든것을 만족시키는
                      그야말로 가성비 최강의 설계입니다. <br />
                      <br />
                      늦게시작하면 손해입니다. 정체되어있다면, 목표가 있다면
                      망설이지말고 바로 문의부터 하는걸 강력히 추천합니다.
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  style={{ height: 'auto' }}
                  className=" blog-slider__item swiper-slide"
                >
                  <div className="blog-slider__img">
                    <img src={review[3]} alt="" />
                  </div>
                  <div className="blog-slider__content">
                    <span className="blog-slider__code">온라인</span>
                    <div className="blog-slider__title">★온라인 코칭 추천 포인트★</div>
                    <div className="blog-slider__text">
                      파워리프팅을 진지하게 하는사람으로서 정체기를 어떻게
                      뚫어야 하나 고민하던 중 마침 지훈코치님과 온라인코칭을
                      시작하게 되었습니다. <br />
                      <br />
                      ★온라인 코칭 추천 포인트★ <br />
                      <br />
                      1.영상을 계속 돌려보며 섬세하게 문제점 하나하나 찾아
                      피드백 <br />
                      2.영상으로 잘 보이지 않는 부분은 대화로 체크&피드백
                      <br />
                      3.그래도 잘 안된다면 영상통화로 실시간 피드백 <br />
                      4.내 몸상태에 필요한 운동들 배치& 매일매일 피드백 (매일
                      피드백 해주시는 정성..👍인정) <br />
                      5.몇년간 스트레스 받아왔던 운동시 찾아오는 통증&부상을
                      오프라인도 아니고 무려! 온라인으로 해결 <br />저 또한
                      8년이상 트레이너를 하며 현재 PT샵을 운영중이지만
                      오프라인으로도 하기 힘든 것 들을 온라인으로 해내고
                      계시다는 것에 대단한 존경을 느낍니다. <br />
                      <br />
                      나만 알고싶은 맛집 공유합니다! <br />
                      적극추천 두번추천 세번추천 챔피언은 역시 다릅니다👍
                      <br /> 덕분에 목표하던 Total 600도 가까워지고 있습니다!
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="blog-slider__item swiper-slide">
                  <div className="blog-slider__img">
                    <img src={review[4]} alt="" />
                  </div>
                  <div className="blog-slider__content">
                    <span className="blog-slider__code">온라인</span>
                    <div className="blog-slider__title">2년간 정체기 극복</div>
                    <div className="blog-slider__text">
                      안녕하세요, 저는 총 8년째 리프팅을 하고 있는 20대
                      직장인입니다.
                      <br /> 대학을 다니며 운동을 시작했고 주로 방학 때 운동하고
                      개학 때는 운동을 쉬며 진행한 게 졸업하고 취직하며 벌써 8년
                      차가 됐습니다. <br />
                      <br />
                      혼자서 운동할 때도 막힘없이 성장하여 앞으로도 계속
                      그러리라 믿었는데, 최근 2년간은 그 성장이 너무 느려지고
                      취직한 후에는 오히려 퍼포먼스가 내려가 부끄럽지만 그때의
                      PR과 비슷한 중량을 들지도 못하게 됐습니다.
                      <br />
                      <br /> 환경이 바뀌어서, 운동에만 집중할 수 없어서 그런
                      거라 생각하며 원인을 운동 밖에서 찾을 때 팀앤트에 대한
                      글을 보게 되었습니다.
                      <br />
                      <br /> 아시아 1등과 소통하며 혼자서만 해오던 제 운동을
                      확실하게 발전시킬 수 있다는 생각에 설레는 마음으로 온라인
                      코칭을 시작하게 됐습니다. 결론적으로 120% 만족합니다!
                      <br />
                      <br />
                      8주가 안 되는 시간 동안 잃어버린 중량보다 더 높은 1eRM
                      값을 얻었으며, 유전이라 여겼던 왼쪽 무릎 통증에 대한
                      원인과 해결책을 제시받고 더 나은 운동을 할 수 있게
                      됐습니다.
                      <br />
                      <br /> 저는 최소 620kg이상을 들고 싶습니다. 대회에 대한
                      욕심도 있습니다. 위 목표를 위해 앞으로도 팀앤트와 함께할
                      것이며, 그 이후에도 계속 함께하고 싶다는 생각뿐입니다.
                      <br />
                      <br />
                      마지막으로 매번 불규칙적으로 연락을 남김에도 불구하고 항상
                      친절하고 전문적으로 답해주시는 코치님께 감사 인사드립니다
                      :)
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="blog-slider__item swiper-slide">
                  <div className="blog-slider__img">
                    <img src={review[5]} alt="" />
                  </div>
                  <div className="blog-slider__content">
                    <span className="blog-slider__code">오프라인</span>
                    <div className="blog-slider__title">부상을 극복한 성장</div>
                    <div className="blog-slider__text">
                      슬개건 부상으로 2년간 정말 여러가지 방법으로 시도해봤지만
                      제대로 된 효과를 보지 못했었고, 스쿼트는 어느정도 포기하고
                      병원치료를 하던 중 문득 가장 잘하는 사람에게 가보자 하는
                      생각에, 수년 전 아직 유명해지기 전에 우연히 알게되고
                      응원중이었던 앤트맨님께 찾아가게 되었습니다.
                      <br />
                      <br /> 정말 진심을 둘러담아 후기를 나누고 싶다는 생각에
                      느낀점을 적어보자면, 우선 올바른 고관절의 기능과
                      움직임으로 하루만에 통증없이 스쿼트를 할 수 있게 되었고
                      그것으로 충분히 만족스러운 상황이었습니다.
                      <br />
                      <br /> 재활이후 새로 배운것은 코칭은 단순히 운동의
                      가르침으로만 끝나는 것이 아니라는 것입니다. 첫 레슨때만
                      해도 저는 80kg가 무서웠습니다. 올바른 자세를 잡고,
                      2회차부터는 할 수 있다는 자신감을 심어주시면서, 부상으로
                      쫄아있던 몸을 선생님과 함께 부술 수 있었던 것 같습니다.
                      <br />
                      <br />
                      이는 아직도 진행중이며, 항상 제가 생각하는 저의 베스트보다
                      저를 더 높게 평가해주시는 선생님 덕분에 이제는 그 기대에
                      부흥하고자 최선을 다 할 수 있게됨에 감사합니다. <br />
                      <br />
                      통증이 무서워 100kg는 시도조차 못하던게 정말 얼마 전인데,
                      이제는 매주 PR이 깨지고 할 수 있다는 생각에 행복 리프팅을
                      하고 있습니다!.
                      <br />
                      <br /> 리프팅에 진심이신 분들, 내 자세나 과정에 확신이
                      없으신 분들은 저처럼 무리하다 다치고 먼길 돌아가지 마시고,
                      최고의 선생님께 지금 저점일때! 수업이 꽉 차서 배우지
                      못하기 전에 오시길 추천드립니다. <br />
                      <br />
                      끝으로 배민 후기도 잘 쓰지않는 저를 이렇게 긴 글을 쓰게 할
                      만큼 잘 가르쳐주시는 앤트맨 선생님께 진심으로 너무 감사를
                      드립니다.
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="blog-slider__pagination"></div>
            </div>
          </div>
        </div>
        <Footer />

        <style>
          {`
          #a{
            height:500px;
          }
* {
  box-sizing: border-box;
}
body {
  min-height: 100vh;

}
.blog-slider {
  width: 95%;
  position: relative;
  max-width: 1200px;
  margin-top:7rem;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  transition: all 0.3s;
}
@media screen and (max-width: 992px) {
  .blog-slider {

  }
}
@media screen and (max-width: 768px) {
  .blog-slider {
    min-height: 500px;
    height: auto;
  
  }
}
@media screen and (max-height: 500px) and (min-width: 992px) {
  .blog-slider {
    height: 350px;
  }
}
.blog-slider__item {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 768px) {
  .blog-slider__item {
    flex-direction: column;
  }
}
.blog-slider__item.swiper-slide-active .blog-slider__img img {
  opacity: 1;
  transition-delay: 0.3s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > * {
  opacity: 1;
  transform: none;
  
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(1) {
  transition-delay: 0.3s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(2) {
  transition-delay: 0.4s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(3) {
  transition-delay: 0.5s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(4) {
  transition-delay: 0.6s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(5) {
  transition-delay: 0.7s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(6) {
  transition-delay: 0.8s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(7) {
  transition-delay: 0.9s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(8) {
  transition-delay: 1s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(9) {
  transition-delay: 1.1s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(10) {
  transition-delay: 1.2s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(11) {
  transition-delay: 1.3s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(12) {
  transition-delay: 1.4s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(13) {
  transition-delay: 1.5s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(14) {
  transition-delay: 1.6s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(15) {
  transition-delay: 1.7s;
}
.blog-slider__img {
  width: 300px;
  flex-shrink: 0;
  height: 300px;
  border-radius: 20px;

  overflow: hidden;
}
.blog-slider__img:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  opacity: 0.8;
}
.blog-slider__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0;
  border-radius: 20px;
  transition: all 0.3s;
}
@media screen and (max-width: 768px) {
  .blog-slider__img {
    width: 100%;
  }
}
@media screen and (max-width: 576px) {
  .blog-slider__img {
    width: 100%;
  }
}
@media screen and (max-height: 500px) and (min-width: 992px) {
  .blog-slider__img {
    height: 270px;
  }
}
.blog-slider__content {
    margin-top:50px;
  padding-right: 25px;
  padding-left: 30px;
}
@media screen and (max-width: 768px) {
  .blog-slider__content {
    
    text-align: center;
    padding: 0 30px;
  }
}
@media screen and (max-width: 576px) {
  .blog-slider__content {
    padding: 0;
  }
}
.blog-slider__content > * {
  opacity: 0;
  transform: translateY(25px);
  transition: all 0.4s;
}
.blog-slider__code {
  color: #7b7992;
  margin-bottom: 15px;
  display: block;
  font-weight: 500;
}
.blog-slider__title {
  font-size: 24px;
  font-weight: 700;
  color: #0d0925;
  margin-bottom: 20px;
}
.blog-slider__text {
  color: #4e4a67;
  margin-bottom: 30px;
  line-height: 1.5em;
}
.blog-slider__button {
  display: inline-flex;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  padding: 15px 35px;
  border-radius: 50px;
  color: #fff;
  box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
  text-decoration: none;
  font-weight: 500;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
}
@media screen and (max-width: 576px) {
  .blog-slider__button {
    width: 100%;
  }
}
.blog-slider .swiper-container-horizontal > .swiper-pagination-bullets,
.blog-slider .swiper-pagination-custom,
.blog-slider .swiper-pagination-fraction {
  bottom: 10px;
  left: 0;
  width: 100%;
}
.blog-slider__pagination {
  position: absolute;
  z-index: 21;
  right: 20px;
  width: 11px !important;
  text-align: center;
  left: auto !important;
  top: 55%;
  bottom: auto !important;
  transform: translateY(-50px);
}
@media screen and (max-width: 768px) {
  .blog-slider__pagination {
    transform: translateX(-50%);
    left: 50% !important;
    top: 350px;
    width: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.blog-slider__pagination.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 8px 0;
}
@media screen and (max-width: 768px) {
  .blog-slider__pagination.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 5px;
  }
}
.blog-slider__pagination .swiper-pagination-bullet {
  width: 11px;
  height: 11px;
  display: block;
  border-radius: 10px;
  background: #062744;
  opacity: 0.2;
  transition: all 0.3s;
}
.blog-slider__pagination .swiper-pagination-bullet-active {
  opacity: 1;
  background: #fd3838;
  height: 30px;
  box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);
}
@media screen and (max-width: 768px) {
  .blog-slider__pagination .swiper-pagination-bullet-active {
    height: 11px;
    width: 30px;
    
  }
}
`}
        </style>
      </div>
    </>
  );
};

export default AntReviews;
