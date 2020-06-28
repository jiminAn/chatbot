# chatbot

## Assignment goal : Implement a simple chatbot

example:)    
Input: What is your name?  
Output: Jimin  
Input: Where are you located?  
Output: Ichon  

### submission
1. Fully working REST API
2. Github Repo URL

### Extra point
Using docker/ kubernetes.  
Dockerfile & kubernetes yami file must be include in your github repository  

### Reference site
1. docker <https://www.docker.com/>
2. kurbernetes <https://cloud.google.com/kubernetes-engine/docs/tutorials>

# REST API 생성

도커 이미지화

``` % docker build -t gcr.io/{project id}/chatbot-api:v1 . ```

쿠버네티스 클러스터 인증 정보 얻기 

``` %gcloud container clusters get-credentials {CLUSTER_NAME} ```

GCR 인증정보 얻기

``` %gcloud auth configure-docker ```

GCR에 이미지 푸쉬

``` %docker push gcr.io/{project id}/chatbot-api:v1  ```

Replication Controller 등록

``` %kubectl create -f chatbot-api-rc.yaml ```

Service 등록

``` %kubectl create -f chatbot-api-svc.yaml ```

### 예제:)

"http://{service external ip}:80/chat?sentence=가장 좋아하는 라면은?"

  


