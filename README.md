# 페이스북 스타일의 댓글/답글

## 배포 주소

- https://hayoungj.github.io/facebook-comment/

## 사용 스택

- React, Javascript, Sass/CSS-Module, Context API,

## 동작 설명

### 기본 형태
![image](https://user-images.githubusercontent.com/59152882/228211356-020e8021-4615-4d05-96ff-aa293cc3ecfc.png)
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/59152882/228212167-98fd2e34-8526-452d-b930-7be42b2e89d2.png">

- 게시글 아래에 댓글과 답글이 표시됩니다.
- 각 댓글/답글은 (새로고침 시점 기준으로) 얼마 전에 등록되었는지 확인할 수 있습니다. 마우스 오버 시 정확한 등록 시각도 확인 가능합니다.
- 각 댓글/답글은 localStorage에 보관되어, 동일한 브라우저에서라면 새로고침, 브라우저 종료 시에도 유지됩니다.

### 좋아요

- 좋아요 클릭 시 좋아요 버튼이 파란색으로 변하고, 댓글 우측에 좋아요 아이콘이 표시됩니다.
- 각 댓글/답글에 좋아요를 눌렀는지 여부는 localStorage에 보관되어, 동일한 브라우저에서라면 새로고침, 브라우저 종료 시에도 유지됩니다.

### 댓글 남기기
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/59152882/228212501-3a7a1379-5777-46f0-ad05-c99279d8e761.png">

- 댓글 입력창을 이용해 댓글을 남길 수 있습니다.
- 댓글 등록은 버튼 클릭/엔터키 입력을 통해 할 수 있습니다.
- 만약 줄을 바꾸고 싶다면, shift/crtl/alt/meta키와 엔터키를 조합해 사용하면 됩니다.

### 답글 남기기
![image](https://user-images.githubusercontent.com/59152882/228211558-b1c9bffd-7be4-4d66-9352-52c40f921725.png)

- 댓글 하위에는 답글을 남길 수 있습니다.
- '답글'의 답글 달기를 선택할 경우, 해당 답글의 부모되는 댓글 하위에 답글이 남겨지게 됩니다.
- 어느 댓글 하위에 답글이 달리는지 파란색으로 강조됩니다.

### 댓글/답글 삭제
![image](https://user-images.githubusercontent.com/59152882/228213208-fbb624f3-225c-421f-946f-784723071cfa.png)
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/59152882/228212845-9abe5c8e-a56f-4512-91e3-aaf024ae602b.png">

- 모든 댓글과 답글은 삭제 가능합니다.
- 만약 댓글 삭제 시, 댓글 하위의 답글들도 모두 함께 삭제가 됩니다.
