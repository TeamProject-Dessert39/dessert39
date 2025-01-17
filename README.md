# Dessert39 Project

node.js와 React를 사용한 Dessert39 웹페이지를 구현해 보았습니다.

## 프로젝트 소개


dessert39 웹페이지를 보고 최대한 심플하고 간단한 로직을 통해 서비스를 구현해 보았습니다.



## 개발 기간


- 2024-10-17 ~ 2024-11-20 (25Day)

##  개발자 소개

- 황인준 팀장 : Main page 및 Chart 라이브러리 컴포넌트, Swiper 컴포넌트 구현
- 서유진 팀원 : Franchise page 구현
- 전규리 팀원 : Intro page , Menu , Store 페이지 구현
- 허윤정 팀원 : Community 페이지 구현

## 🛠 개발 환경
- react v18.3.1
- react-redux v9.1.2
- sass v1.80.4
- vite v5.4.9

##  기능 소개
<details><summary>Main
</summary>
  - 브랜드 연관 판매 상위 제품 정보 제공, 친환경 브랜드 소개

![image](https://github.com/user-attachments/assets/64f1a5c1-7c4f-4586-ab22-6c8c7b5ac08f)


  - Header, Footer 프론트 구현

![image](https://github.com/user-attachments/assets/fcc7a25f-17ef-48d7-92d0-9f2762376920)

  
  -- 공용으로 사용되는 Header와 Footer를 Main 및 다른 화면들과 자연스럽게 처리될 수 있게 구현했습니다.

![image](https://github.com/user-attachments/assets/94605e7a-69b3-43a9-9736-1b05969515ba)

    
  - Header API 생성

![image](https://github.com/user-attachments/assets/763d2d21-d762-446a-b438-d97ec1285a5c)

  
  -- subMenu에 반복되는 내용들이 많아 스크립트가 길어질 것으로 예상하여 DATA API 생성 후 map으로 간단히 처리했습니다.

</details>


<details><summary>brand
</summary>
- 브랜드 가치 설명

*Write here!*
</details>


<details><summary>Menu
</summary>
  
-- Menu의 하위 메뉴들은 모두 동일한 구조를 가지고 있어 하나의 jsx에 path주소에 따라 다른 데이터를 가져오도록 설정 해 두었습니다.

![image](https://github.com/user-attachments/assets/767f186c-3fbd-4389-ac8c-973e21feb326)

    //jsx부분
    const scrollRefs = useRef([]);
    const getData = location.pathname.replace(/\/menu\//g, '');
    useEffect(() => {
        dispatch(onLoadingData(getData));
    }, [getData, dispatch]);

    // redux부분
    // getData (action.payload)값은 위에서 받아온 path 값임. 받아온 값에 따라 useEffect를 사용하여 데이터를 뿌려줌
    onLoadingData: (state, action) => {
        state.productItem = [];
        state.newMenuItem = [];
        state.clickMenuItem = [];
        switch (action.payload) {
            case 'dessert':
                state.productItem.push(...state.dessertData)
                state.newMenuItem = state.newMenu.filter(item => item.category === action.payload)
                state.clickMenuItem = state.clickMenu.filter(item => item.category === action.payload)
                break;
            case 'beverage':
                state.productItem.push(...state.coffeeData)
                state.newMenuItem = state.newMenu.filter(item => item.category === 'coffee')
                state.clickMenuItem = state.clickMenu.filter(item => item.category === 'coffee')
                break;
            case 'mdproduct':
                state.productItem.push(...state.mdData)
                state.newMenuItem = state.newMenu.filter(item => item.category === 'MD')
                state.clickMenuItem = state.clickMenu.filter(item => item.category === 'MD')
                    
                break;
            
            default:
                break;
        }
    }


</details>


<details><summary>Store
</summary>
  
-- kakao api를 가져와 map을 구현하였습니다

![image](https://github.com/user-attachments/assets/42de0c75-e8d3-4dde-9c8c-fbe8c3f2b63a)
</details>


<details><summary>Community
</summary>
*Write here!*
</details>


<details><summary>Franchise
</summary>

- **Competitive page**

디저트 39 프랜차이즈 창업에 대한 소개, 정보 제공

![competitiveImg](https://teamproject-dessert39.github.io/dataCenter/images/ReadMe/Franchise/competitivePageImg.png)

- **Interior page**

디저트 39 매장 크기별 인테리어 소개

![interiorImg](https://teamproject-dessert39.github.io/dataCenter/images/ReadMe/Franchise/interiorPageImg.png)

- **Procedure page**

디저트 39 가맹 절차 소개

![processImg](https://teamproject-dessert39.github.io/dataCenter/images/ReadMe/Franchise/processPageImg.png)

- **Contact page**

디저트 39 가맹점 상담신청 문의 폼

![contactImg](https://teamproject-dessert39.github.io/dataCenter/images/ReadMe/Franchise/contactPageImg.png)

- **Alliance - Purchasing page**

디저트 39 기업 및 단체 구매신청 문의 폼

![purchasingImg](https://teamproject-dessert39.github.io/dataCenter/images/ReadMe/Franchise/purchasingPageImg.png)

- **Alliance - Entry page**

디저트 39 입점 제의 상담신청 문의 폼

![entryImg](https://teamproject-dessert39.github.io/dataCenter/images/ReadMe/Franchise/entryPageImg.png)

- **Alliance - Supplier page**

디저트 39 협력사 신청 및 조회 폼

![supplierImg](https://teamproject-dessert39.github.io/dataCenter/images/ReadMe/Franchise/supplierPageImg.png)
</details>






