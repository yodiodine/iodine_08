$(function(){
    
    const workList=[
        {
            "workFile":"work4",
            "workText":"가상의 엔터테인먼트 사이트를 제작.반응형으로 제작되어 크기에 따라 레이아웃이 자연스럽게 변화함.<br>ajax를 통해 뉴스내용이 담긴 텍스트파일을 불러오는 기능을 추가하였다.<br>직접 js 코드를 짠 것과 swiper.js 플러그인을 메인화면에 적용",
            "workURL":"https://yodiodine.github.io/iodine_07/"
        },
        {
            "workFile":"work3",
            "workText":"기존의 shakeshack 버거 사이트의 분위기를 바탕으로사이트 구성은 단순하지만,<br>재미있는 시각적 효과들을 배치하는 것 위주로 설계한 리디자인 사이트.<br>(사용된 이미지는 모두 일러스트레이터로 직접 그린 이미지)",
            "workURL":"https://yodiodine.github.io/iodine_05/"
        },
        {
            "workFile":"work2",
            "workText":"기존의 제일제면소 사이트의 메뉴들을 바탕으로 최근 홈페이지들의 동향을 따라 리디자인 한 사이트.<br>다양한 서브 페이지를 넣어 마치 실제 사이트처럼 탐방할 수 있음.<br>(PC형 사이트로 전체화면을 권장함)",
            "workURL":"https://yodiodine.github.io/iodine_06/"
        },
        {
            "workFile":"work1",
            "workText":"취미활동(TRPG, 게임)을 통해 만든 캐릭터의 리스트를 만든 사이트.<br>직접 그린 캐릭터의 모습과 정보를 담은 리스트가 나열되어 있는 사이트로 이름, 나이, 성별, 국적 순으로 리스트를 나열할 수 있다.<br>자바스크립트만 사용한 대신 객체배열, 배열 함수 등을 활용.<br>(*크롬, 엣지 외 사이트에서는 확인 어려움)",
            "workURL":"https://yodiodine.github.io/iodine_04/"
        }
    ];
    
    //모달 창 열기
    $("#work .article-wrap ul li").on("click",function(){
        $(".modal").show();
        let idx = $(this).index();
        
        $(".modal-wrap .img-box img").attr("src","img/"+workList[idx].workFile+".gif");
        $(".explain-box").html(workList[idx].workText);
        $(".modal-wrap ul li").eq(0).find("a").attr("href",workList[idx].workURL);
        
    })
    
    //모달 창 닫기
    $(".close").on("click",function(){
        $(".modal").hide();
    })
})