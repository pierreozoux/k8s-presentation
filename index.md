# k8s presentation

13 June 2017



# Objectives of the session

 - kubectl
 - helm
 - k8zation process



# kubectl


# config

Switch k8s cluster:
```
kubectl config use-context
```


# Resources

![resources](/images/resources.png)

Note:
                                        elb
                                         +
                                         |
                                         |
     +----------------------------------------+
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


# Type of resources

 - po (pods)
 - rs (replica set)
 - deploy (deployment)
 - ns (namespace)
 - svc (service)
 - secrets


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



# k8zation


# 12factorization

 - log to stodout/stderr
 - conf from env
 - remove secrets (!)
 - identify services/secrets
 - s/passenger/(puma || unicorn)/g


# Docker

 - Good Docker
 - Good doceker-compose for devs
 - small / start&stop fast / minimal


# Helm package

 - deploy
 - svc
 - default values


# Jenkinsfile

 - docker build
 - docker push ECR
 - helm upgrade
