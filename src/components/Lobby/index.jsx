import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

import Image from './profileImage.png'

import * as style from './index.style';


const Render = () => {
    const countryList = ['국가 선택', '대한민국', '미국', '일본', '중국', '러시아', '프랑스', '독일', '캐나다']
    const dummyData = {
        name: '사람이름',
        location: 'Japan',
        from: 'South Korea',
        profileImage: Image,
    }
    const postList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    return (
        <style.background>
            <style.mainWrapper>
                <style.textContainer data-aos='fade-up' data-aos-delay='250'>
                    <div>
                        <style.titleText color='#14C2F9'>원하는 지역</style.titleText>
                        <style.titleText>에서, </style.titleText>
                        <style.titleText color='#1564FF'>원하는 사람</style.titleText>
                        <style.titleText>들과</style.titleText>
                    </div>
                    <div>
                        <style.titleText>당신과 </style.titleText>
                        <style.titleText color='#FF8383'>여정</style.titleText>
                        <style.titleText>을 함께 할 </style.titleText>
                        <style.titleText color='#1564FF'>사람</style.titleText>
                        <style.titleText>을 찾아보세요</style.titleText>
                    </div>
                </style.textContainer>
                <style.regionButtonContainer data-aos='fade-up' data-aos-delay='500'>
                    <style.regionSelectButton name='region'>
                        { countryList.map((element, idx) => {
                            return (
                                <option value={element} key={idx}>{element}</option>
                            )
                        }) }
                    </style.regionSelectButton>
                </style.regionButtonContainer>
                <style.postWrapper data-aos='fade-up' data-aos-delay='1000'>
                    { postList.map((element, idx) => {
                        return (
                            <style.postContainer data-aos='fade-up'>
                                <style.postProfileImageContainer>
                                    <style.postProfileImage src={dummyData.profileImage}/>
                                </style.postProfileImageContainer>
                                <style.postProfileInfoContainer>
                                    <style.postProfileInfoName>{dummyData.name}</style.postProfileInfoName>
                                    <style.postProfileInfoLocation>{dummyData.location}</style.postProfileInfoLocation>
                                    <style.postProfileInfoLocation>{dummyData.from}</style.postProfileInfoLocation>
                                </style.postProfileInfoContainer>
                                <style.postProfileViewProfileMessage>프로필 보기</style.postProfileViewProfileMessage>
                            </style.postContainer>
                        )
                    }) }
                </style.postWrapper>
            </style.mainWrapper>
        </style.background>
    )
}
export default Render