
# Ancor
## AnchorSyntax
LowerLetter
- ⭕(a)
  - ⭕(a)▶️# A
  - ⭕(a)▶️# a
  - ⭕(aㅁ)▶️# Aㅁ
  - ⭕(aㅁ)▶️# aㅁ
- ❌(A)
  - ❌(Aa)
  - ❌(aA)
  - ❌(Aㅁ)
  - ❌(ㅁA)

Space
- ⭕\- 
  - ⭕(# a-a )▶️# a a
- ❌" "
  - ❌(# a a )▶️# a a

## InnerAnchor
- InnerAnchor
- InnerHeader
- Header

InnerHeader
```md
[InnerAncor](#innerheader)
# InnerHeader
```
```md
[InnerAncor](#innerheader)
## InnerHeader
```
```md
[InnerAncor](#innerheader)
### InnerHeader
```

## OuterAnchor
OuterFile
```md
[OuterAnchor](OuterFile.md)
```
```md
[OuterAnchor](../OuterFile.md)
```
OuterHeader
```md
[OuterAnchor](OuterFile.md#outerheader)
```
- OuterHeader
- OuterFile + OuterHeader



## HeaderAnchor
- [](# 📌header)▶️# 📌Header 
- [](# 📌header)▶️## 📌Header 
- [](# 📌header)▶️### 📌Header 
- [](# 📌header)▶️#### 📌Header 
- [](# 📌header)▶️##### 📌Header 
- [](# 📌header)▶️###### 📌Header 

Header
```md
[01HeaderAnchor](#📌header)
# 📌Header
```
```md
[02HeaderAnchor](#📌header)
## 📌Header
```
```md
[HeaderAnchor](#📌header)
### 📌Header
```
```md
[HeaderAnchor](#📌header)
#### 📌Header
```
```md
[HeaderAnchor](#📌header)
##### 📌Header
```
```md
[HeaderAnchor](#📌header)
###### 📌Header
```


FirstHeader
```md
[HeaderAnchor](#📌header)
# 📌Header
## 📌Header
### 📌Header
#### 📌Header
##### 📌Header
###### 📌Header
```
- ⭕#▶️\#
- ❌#▶️\##
- ❌#▶️\###
- ❌#▶️\####
- ❌#▶️\#####
- ❌#▶️\######





