import * as style from './index.style'

import Image from './profileImage.png'

import certified1 from '../../images/Profile/certified1.png'
import certified2 from '../../images/Profile/certified2.png'

import locationIcon from '../../images/Profile/locationIcon.png'
import { useState } from 'react'

const Render = () => {
    const starList = [0, 0, 0, 0, 0]
    const [givingRate, setGivingRate] = useState(1);
    const [certified, setCertified] = useState(false);
    const rating = 4.4;
    return (
        <>
            <style.background>
                <style.mainWrapper>
                    <style.profileContainer>
                        <style.profileImageContainer>
                            <style.profileImage src={Image}/>
                        </style.profileImageContainer>
                        <style.profileInfoContainer>
                            <style.profileNameContainer>
                                <style.profileNameText>정승제</style.profileNameText>
                                <style.profileLocationCertifiedIcon src={certified ? certified2 : certified1}/>
                                {certified ? <style.profileRecentCertifiedDateText>최근 인증 : 2022-10-06</style.profileRecentCertifiedDateText> : <style.profileCertifyButton>IP 인증 →</style.profileCertifyButton>}
                            </style.profileNameContainer>
                            <style.profileLocationContainer>
                                <style.profileLocationIcon src={locationIcon}/>
                                <style.profileLocationText>South Korea</style.profileLocationText>
                            </style.profileLocationContainer>
                            <style.profileGenderAgeContainer>
                                <style.profileGenderAgeText>나이 | 30</style.profileGenderAgeText>
                                <style.profileGenderAgeText>성별 | 남</style.profileGenderAgeText>
                            </style.profileGenderAgeContainer>
                            <style.profileIntroduceContainer>
                                <style.profileIntroduceTitleText>자기소개</style.profileIntroduceTitleText>
                                <style.profileIntroduceBox>
                                    <style.profileIntroduceText>자기 소개 텍스트 자기 소개 텍스트 자기 소개 텍스트 자기 소개 텍스트 자기 소개 텍스트 자기 소개 텍스트 </style.profileIntroduceText>
                                </style.profileIntroduceBox>
                            </style.profileIntroduceContainer>
                            <style.profileRatingContainer>
                                <style.profileRatingText>평점</style.profileRatingText>
                                <style.profileRatingStarContainer>
                                    { starList.map((element) => {
                                        return (
                                            <style.profileRatingStar>★</style.profileRatingStar>
                                        )
                                    }) }
                                </style.profileRatingStarContainer>
                            </style.profileRatingContainer>
                        </style.profileInfoContainer>
                    </style.profileContainer>
                </style.mainWrapper>
            </style.background>
            <style.reviewContainer>
                <style.reviewStarWrapper>
                    <style.reviewOptionText>평점</style.reviewOptionText>
                    <style.reviewStarContainer>
                        { starList.map((element, idx) => {
                            return (
                                <style.reviewStar nowRate={givingRate} level={idx} onClick={() => {setGivingRate(idx)}}>★</style.reviewStar>
                                )
                            }) }
                    </style.reviewStarContainer>
                </style.reviewStarWrapper>
                <style.reviewCommentWrapper>
                    <style.reviewOptionText>댓글</style.reviewOptionText>
                    <style.reviewCommentArea/>
                </style.reviewCommentWrapper>
                <style.reviewButton>리뷰 작성</style.reviewButton>
            </style.reviewContainer>
        </>
    )
}
export default Render