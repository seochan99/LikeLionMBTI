
function setShare(){
    var resultImg = document.querySelector('#resultImg'); 
    var resultAlt = resultImg.firstElementChild.alt; 
    const shareTitle = '개발자 유형 테스트 결과'
    const shareDes=infoList[resultAlt].name;
    const shareImage= 'https://likelion.netlify.app/' + 'img/image-' + resultAlt + '.png';
    const shareURL = 'https://likelion.netlify.app/' + 'result-' + resultAlt + '.html';
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