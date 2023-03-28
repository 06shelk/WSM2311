# style 적용 3가지 방법
1. <... style="...">  in HTML
1. ```<style>..</style>``` in HTML ```<head>```
1. __.css 파일을 만들어서 link__

# 형식
```css
selector {
    attribute: value; /* comment */
}
```

## selector
<pre>
*       전체 적용
id      고유의 것  #
class   분류할 수 있음 . 
TAG     특정 태그 선택

selector1 selector2         selector1 요소의 자손 selector2를 선택 
selector1 > selector2       selector1 요소의 자식 중 모든 selector2를 선택
selector1, selector2        우리가 알고있는 , : 선택자 그룹을   생성하는 방법으로 모든 일치하는 노드를 선택
selector1 + selector2       selector1의 첫째 자매 selector2 하나 선택
selector1 ~ selector2       selector1의 자매 중 모든 selector2 선택
selector:first-child()      selector 요소 중 첫번째 선택
selector:nth-child(n)       형제 요소 중에서 특정 순서(n)에 있는 요소를 선택
selector:hover              요소에 마우스가 올라가는 동안 selector를 선택

[속성="값"]   <... 속성="값">인 모든 요소 선택
</pre>



우선순위 (시험 각)
1. !important
2. #id
3. .class 
4. TAG 
5.  \*
- 구체
- 같은 우선순위일 때, 나중에 쓴게 적용






