const url = 'https://likelion.netlify.app/';

function setStare(){
    var resultImg = document.querySelector('#resultImg'); 
    var resultAlt = resultImg.firstElementChild.alt; 
    const shareTitle = '개발자 유형 테스트 결과'
    const shareDes=infoList[resultAlt].name;
    const shareImage= url + 'img/image-' + resultAlt + '.png';
    const shareURL = url + 'result-' + resultAlt + '.html';
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
        title: shareTitle,
        description: shareDes,
        imageUrl: shareImage,
        link: {
            mobileWebUrl: shareURL,
            webUrl : shareURL,
        },
        },
        buttons: [
        {
            title: '결과 확인하기',
            link: {
            mobileWebUrl: shareURL,
            webUrl : shareURL
            },
        },
        ]
    });

}

// function kakaoShare(){
//     Kakao.Link.sendDefault({
//         objectType: 'feed',
//         content: {
//         title: shareTitle,
//         description: shareDes,
//         imageUrl: shareImage,
//         link: {
//             mobileWebUrl: shareURL,
//             webUrl : shareURL,
//         },
//         },
//         buttons: [
//         {
//             title: '결과 확인하기',
//             link: {
//             mobileWebUrl: shareURL,
//             webUrl : shareURL
//             },
//         },
//         ]
//     });
// }
// function kakaoShare(){
//     Kakao.Link.sendDefault({
//         objectType: 'feed',
//         content: {
//         title: '오늘의 디저트',
//         description: '아메리카노, 빵, 케익',
//         imageUrl:
//             'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
//         link: {
//             mobileWebUrl: shareURL,
//             WebUrl : shareURL,

//         },
//         },
//         itemContent: {
//         profileText: 'Kakao',
//         profileImageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
//         titleImageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
//         titleImageText: 'Cheese cake',
//         titleImageCategory: 'Cake',
//         items: [
//             {
//             item: 'Cake1',
//             itemOp: '1000원',
//             },
//             {
//             item: 'Cake2',
//             itemOp: '2000원',
//             },
//             {
//             item: 'Cake3',
//             itemOp: '3000원',
//             },
//             {
//             item: 'Cake4',
//             itemOp: '4000원',
//             },
//             {
//             item: 'Cake5',
//             itemOp: '5000원',
//             },
//         ],
//         sum: '총 결제금액',
//         sumOp: '15000원',
//         },
//         social: {
//         likeCount: 10,
//         commentCount: 20,
//         sharedCount: 30,
//         },
//         buttons: [
//         {
//             title: '웹으로 이동',
//             link: {
//             mobileWebUrl: 'https://developers.kakao.com',
//             },
//         },
//         {
//             title: '앱으로 이동',
//             link: {
//             mobileWebUrl: 'https://developers.kakao.com',
//             },
//         },
//         ]
//     });
// }
