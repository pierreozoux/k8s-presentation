# docker/k8s presentation

18 Oct 2017



# Objectives of the 2 sessions

 - kubernetes overview
 - docker
 - helm
 - jenkins
 - kubectl
 - k8zation process



# kubernetes overview


![k8s-overview](/images/k8s-overview.png)


![k8s-node](/images/k8s-node.png)


![k8s-master](/images/k8s-master.png)


images from [the new stack](https://thenewstack.io/kubernetes-an-overview/)


# benefits

 - Self healing/autoscaling
 - HA
 - API to schedule load
 - Industrialisation


# our mission as Infra team

 - Improve the DX
 - Bring solutions that scale the compagny
 - Build a service offer that match your needs
 - Standardize 



# k8zation process


## 12factorization

 - Log to stdout/stderr
 - Read config from env
 - remove secrets (!)
 - identify services/secrets
 - s/passenger/puma/g
 - Separate build time /run time


## Docker


![separation](/images/separation.png)


 - Dockerfile
 - supported ruby version
 - Good Docker
 - Good doceker-compose for devs
 - small / start&stop fast / minimal
 - graceful shutdown


## kubernetes

 - Helm package
 - Jenkinsfile
 - Expose readiness/healthiness http endpoints
 - *Expose metrics from /metrics endpoint


## folder structure

 - Dockerfile
 - Jenkinsfile
 - helm
   - app
     - values.yaml
     - Charts.yaml
     - templates
       - svc.yaml
       - ing.yaml
       - deploy.yaml
   - env
     - production.yaml
     - selfoss.yaml
   - secrets
     - production.yaml.vault
     - selofoss.yaml.vault


# Jenkinsfile

 - unit/integration tests
 - docker build
 - docker push ECR
 - helm upgrade # deploy to staging
 - compliance tests
 - helm upgrade # deploy to production
 - smoke tests



# Docker Quizz


# Alpine linux

 - size does matter
 - apk
  - --no-cache
  - virtual



# kubectl


# config

Switch k8s cluster:
```
kubectl config use-context
```


# Type of resources

 - pods (po)
 - replica set (rs)
 - deployment (deploy)
 - namespace (ns)
 - service (svc)
 - ingress (ing)
 - secrets


# Resources

![resources](/images/resources.png)

Note:
                                        elb
                                         +
                                         |
     +-----------------------------------|----+
     |                                  ing   |
     |ns                                 |    |
     |                                   v    |
     |                                  svc   |
     |                     +----------------+ |
     |                     |   po           | |
     |                     |                | |
     |                     |             po | |
     |                     |                | |
     | deploy +--> rs +--> |                | |
     |                     |     po         | |
     |                     |                | |
     |                     +----------------+ |
     |                                        |
     |                           secrets      |
     |                                        |
     +----------------------------------------+


# action on resources

 - get
 - describe
 - edit
 - delete

options

 - `-n` (--namespace)
 - `--all-namespaces`


# pods

 - exec -it
 - logs
 - `-c`



# Helm

 - templating
 - package manager
 - upgrade/rollback


# Vocabulary

 - chart
 - release


# commands

 - upgrade
 - list
 - history
 - rollback





# Future challenges

 - logs dashboard
 - metrics collection
 - monitoring
 - istio - service mesh
