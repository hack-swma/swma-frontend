import { useEffect, useState } from 'react'

import axios from 'axios'

import AOS from 'aos';
import 'aos/dist/aos.css'

import Image from '../../images/Main/basicProfileImage.png'
import locationIcon from '../../images/Lobby/locationIcon.png'
import nationIcon from '../../images/Lobby/nationIcon.png'

import * as style from './index.style';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardIdState } from '../../stores/atom';


const Render = () => {
    const countryList = ['국가 선택', '대한민국', '미국', '일본', '중국', '러시아', '프랑스', '독일', '캐나다']
    const [dataList, setDataList] = useState([])
    const [postList, setPostList] = useState([])
    const [category, setCategory] = useState(0)
    const [boardId, setBoardId] = useRecoilState(boardIdState)
    const dummyData = {
        name: '사람이름',
        location: 'Japan',
        from: 'South Korea',
        profileImage: Image,
    }
    
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    useEffect(() => {
        const getProfileList = () => {
            axios.get('user/main', {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }).then((response) => {
                console.log(response)
                setDataList(response.data.userResponses)
            }).catch((error) => {
                console.log(error)
            })
        }
        getProfileList()
    }, [])

    useEffect(() => {
        const getPostList = () => {
            axios.get('post/main', {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }).then((response) => {
                console.log(response)
                setPostList(response.data.postResponses)
            }).catch((error) => {
                console.log(error)
            })
        }
        getPostList()
    }, [])
    return (
        <style.background>
            <Link to='/write'>
                <style.writeButton>글 쓰기</style.writeButton>
            </Link>
            <style.mainWrapper>
                <style.textContainer data-aos='fade-up' data-aos-delay='250'>
                    <div>
                        <style.titleText color='#14C2F9'>원하는 지역</style.titleText>
                        <style.titleText>에서, </style.titleText>
                        <style.titleText>당신과 </style.titleText>
                        <style.titleText color='#FF8383'>여정</style.titleText>
                        <style.titleText>을 함께 할 </style.titleText>
                    </div>
                    <div>
                        <style.titleText color='#1564FF'>원하는 사람</style.titleText>
                        <style.titleText>을 찾아보세요</style.titleText>
                    </div>
                </style.textContainer>
                <style.regionButtonContainer data-aos='fade-up' data-aos-delay='750'>
                    <style.regionSelectButton name='region'>
                        { countryList.map((element, idx) => {
                            return (
                                <option value={element} key={idx}>{element}</option>
                            )
                        }) }
                    </style.regionSelectButton>
                    <style.selectContainer>
                        <style.selectButton onClick={() => {setCategory(0)}}>프로필</style.selectButton>
                        <style.selectButton onClick={() => {setCategory(1)}}>게시글</style.selectButton>
                    </style.selectContainer>
                </style.regionButtonContainer>
                <style.postWrapper data-aos='fade-up' data-aos-delay='1500'>
                    { category == 0 ? dataList.map((element, idx) => {
                        return (
                            <style.postContainer data-aos='fade-up'>
                                <style.postProfileImageContainer>
                                    <style.postProfileImage src={Image}/>
                                </style.postProfileImageContainer>
                                <style.postProfileInfoContainer>
                                    <style.postProfileInfoName>{element.name}</style.postProfileInfoName>
                                    <style.postProfileInfoLocationContainer>
                                        <style.postProfileInfoLocationIcon src={locationIcon}/>
                                        <style.postProfileInfoLocation>{element.live}</style.postProfileInfoLocation>
                                    </style.postProfileInfoLocationContainer>
                                    <style.postProfileInfoLocationContainer>
                                        <style.postProfileInfoLocationIcon src={nationIcon}/>
                                        <style.postProfileInfoLocation>{element.live}</style.postProfileInfoLocation>
                                    </style.postProfileInfoLocationContainer>
                                </style.postProfileInfoContainer>
                                <style.postProfileViewProfileMessage>프로필 보기</style.postProfileViewProfileMessage>
                            </style.postContainer>
                        )
                    }) : postList.map((element, idx) => {
                        return (
                            <style.postContainer data-aos='fade-up'>
                                <style.postProfileImageContainer>
                                    <style.postProfileImage src={Image}/>
                                </style.postProfileImageContainer>
                                <style.postProfileInfoContainer>
                                    <style.postProfileInfoName>{element.title}</style.postProfileInfoName>
                                    <style.postProfileInfoLocationContainer>
                                        <style.postProfileInfoLocationIcon src={locationIcon}/>
                                        <style.postProfileInfoLocation>{element.live}</style.postProfileInfoLocation>
                                    </style.postProfileInfoLocationContainer>
                                    <style.postProfileInfoLocationContainer>
                                        <style.postProfileInfoLocationIcon src={nationIcon}/>
                                        <style.postProfileInfoLocation>{element.date}</style.postProfileInfoLocation>
                                    </style.postProfileInfoLocationContainer>
                                </style.postProfileInfoContainer>
                                <Link to='/look' onClick={() => {localStorage.setItem('boardId', element.postId)}}>
                                    <style.postProfileViewProfileMessage>작성글 보기</style.postProfileViewProfileMessage>
                                </Link>
                            </style.postContainer>
                        )
                    })}
                </style.postWrapper>
            </style.mainWrapper>
        </style.background>
    )
}
export default Render